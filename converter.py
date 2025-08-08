# /// script
# dependencies = [
#   "typer",
#   "pyyaml",
# ]
# ///

# Run Command:
# uv run converter.py CapsEnhance.yml -o assets/complex_modifications/CapsEnhance.json

import typer  # type: ignore
import yaml  # type: ignore
import json
from pathlib import Path
from typing_extensions import Annotated  # 用于 Typer 的 Annotated 类型提示
from typing import Any

# 初始化 Typer 应用
app = typer.Typer(
    name="yml2json",
    help="一个简单的命令行工具，用于将 Karabiner 的 YAML 文件转换为 JSON 文件。",
    pretty_exceptions_show_locals=False,  # 在生产环境中通常关闭，调试时可以打开
    add_completion=False,
)


def process_key_from(g: str) -> dict:
    keys = [k.strip() for k in g.strip().split()]
    data: dict[str, Any] = {"key_code": keys[0]}
    if len(keys) == 1:
        return data
    data["modifiers"] = {}
    mandatory: list[str] = []
    for k in keys[1:]:
        if k == "*":
            data["modifiers"]["optional"] = ["any"]
        else:
            mandatory.append(k)
    if mandatory:
        data["modifiers"]["mandatory"] = mandatory
    return data


def process_key_group_to(g: str) -> dict:
    keys = [k.strip() for k in g.strip().split()]
    if len(keys) == 1:
        return {"key_code": keys[0]}
    if len(keys) >= 2:
        return {"key_code": keys[0], "modifiers": keys[1:]}
    else:
        raise ValueError(f"No keys found: {keys=}")


def process(data: dict, definitions: dict):
    """根据自定义语法处理规则"""

    for item in data["manipulators"]:
        # 1. 补上按下大写锁定按钮条件 (默认条件)
        if "conditions" not in item:
            item["conditions"] = [definitions["default"]]
        # 如果存在条件但是为 None 需要移除 (主要是大写锁定键动作)
        # 不移除的话 Karabiner 会报错
        elif item["conditions"] is None:
            item.pop("conditions")

        # 2. 处理 from, 如果是 str 的话转换为字典
        # from: h option * ->
        # from:
        #   key_code: h
        #   modifiers:
        #     mandatory:
        #       - option
        #     optional:
        #       - any
        if isinstance(item["from"], str):
            item["from"] = process_key_from(item["from"])

        # 3. 处理 to, 如果是 str 的话转换为字典
        # to: right_arrow + left_command ->
        # to:
        #   - key_code: right_arrow
        #     modifiers:
        #       - left_command
        # to: right_arrow + left_command, k ->
        # to:
        #   - key_code: right_arrow
        #     modifiers:
        #       - left_command
        #   - key_code: k
        if isinstance(item["to"], str):
            raw_groups = item["to"].split(",")
            new_groups: list[dict] = []
            for group in raw_groups:
                new_groups.append(process_key_group_to(group))
            item["to"] = new_groups

        # 4. 补上 type = basic
        if item.get("type") is None:
            item["type"] = "basic"

    return data


@app.command(context_settings={"help_option_names": ["-h", "--help", "-u", "--usage"]})
def convert(
    input_file: Annotated[
        Path,
        typer.Argument(
            exists=True,
            file_okay=True,
            dir_okay=False,
            readable=True,
            resolve_path=True,
            help="要转换的 YAML 输入文件路径。",
        ),
    ],
    output_file: Annotated[
        Path | None,
        typer.Option(
            "--output", "-o", help="JSON 输出文件路径。如果未指定，则打印到标准输出。"
        ),
    ] = None,  # 默认为 None，表示打印到 stdout
    indent: Annotated[
        int,
        typer.Option(
            "--indent",
            "-i",
            min=0,
            max=8,
            help="JSON 输出的缩进空格数 (0-8)。设置为 0 表示不缩进 (紧凑模式)。",
        ),
    ] = 2,  # 默认缩进 2 个空格
    ensure_ascii: Annotated[
        bool,
        typer.Option(
            "--ensure-ascii",
            help="是否转义非 ASCII 字符。默认为 False (不转义)。允许输出中文等字符。",
        ),
    ] = False,
    dry: Annotated[bool, typer.Option("--dry", help="不写入文件")] = False,
):
    """
    将 Karabiner YAML 文件转换为 JSON 文件。
    如果未指定输出文件，结果将打印到标准输出。
    """
    try:
        title = input_file.stem
        # 读取 YAML 文件内容
        with open(input_file, "r", encoding="utf-8") as yml_file:
            yaml_data = yaml.safe_load(yml_file)
        # 移除 definitions 字段
        definitions = yaml_data.pop("definitions")
        yaml_data = process(yaml_data, definitions)
        # 修改规则到标准格式
        data = {"title": title, "rules": [yaml_data]}

        # 将 Python 数据结构转换为 JSON 字符串
        json_output = json.dumps(
            data,
            indent=indent if indent > 0 else None,  # 如果 indent 为 0，则不缩进 (None)
            ensure_ascii=ensure_ascii,
        )

        # 根据 output_file 是否存在决定是写入文件还是打印到 stdout
        if dry:
            typer.echo("跳过写入文件")
            return
        if output_file:
            with open(output_file, "w", encoding="utf-8") as json_file:
                json_file.write(json_output)
            typer.echo(f"成功将 '{input_file.name}' 转换为 '{output_file.name}'")
        else:
            typer.echo(json_output)  # 打印到标准输出

    except FileNotFoundError:
        typer.echo(f"错误: 输入文件 '{input_file.name}' 未找到。", err=True)
        raise typer.Exit(code=1)
    except yaml.YAMLError as e:
        typer.echo(
            f"错误: 解析 YAML 文件 '{input_file.name}' 时发生错误:\n{e}", err=True
        )
        raise typer.Exit(code=1)
    # except Exception as e:
    #     typer.echo(f"发生未知错误: {e}", err=True)
    #     raise typer.Exit(code=1)


# Typer 应用程序的入口点
if __name__ == "__main__":
    app()
