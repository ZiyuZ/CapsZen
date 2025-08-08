;=====================================================================o
;                                CapsZen                              |
;o----------------------o---------------------------------------------o
;|CapsLock + `          | {CapsLock}CapsLock Switcher as a Substituent|
;|CapsLock + hjklwb     | Vim-Style Cursor Mover                      |
;|CapsLock + uiop       | Convient Home/End PageUp/PageDn             |
;|CapsLock + nm,.       | Convient Delete Controller                  |
;|CapsLock + zxcvay     | Windows-Style Editor                        |
;|CapsLock + ;'[]       | Convient Key Mapping                        |
;=====================================================================o
#Requires AutoHotkey v2.0
#SingleInstance Force

TrayTip "Running", 'CapsEnhance', 1 ; 托盘通知

;=====================================================================o
;                         Disable CapsLock                           ;|
;---------------------------------------------------------------------o
SetCapsLockState("AlwaysOff")


;=====================================================================o
;                       CapsLock Switcher:                           ;|
;---------------------------------o-----------------------------------o
;                    CapsLock + ` | {CapsLock}                       ;|
;---------------------------------o-----------------------------------o
CapsLock & `:: {
    SetCapsLockState(GetKeyState("CapsLock", "T") ? "AlwaysOff" : "AlwaysOn")
    KeyWait("``")
}

; Reload Script
CapsLock & R:: Reload

;=====================================================================o
;                         Modifiers Helper                           ;|
;---------------------------------o-----------------------------------o
SendWithMod(key) {
    modifiers := (GetKeyState("control") ? "^" : "") . (GetKeyState("alt") ? "+" : "")
    Send(modifiers key)
}


;=====================================================================o
;                          CapsLock Navigator                        ;|
;-----------------------------------o---------------------------------o
;                      CapsLock + h |  Left                          ;|
;                      CapsLock + j |  Down                          ;|
;                      CapsLock + k |  Up                            ;|
;                      CapsLock + l |  Right                         ;|
;                      CapsLock + i |  Home                          ;|
;                      CapsLock + o |  End                           ;|
;                      CapsLock + u |  PageUp                        ;|
;                      CapsLock + p |  PageDown                      ;|
;                      CapsLock + q |  Esc                           ;|
;          Ctrl, Alt Compatible, Alt key works as shift key          ;|
;                                                                    ;|
;                             Move Line Arrow                        ;|
;                      CapsLock + s | Alt + Left                     ;|
;                      CapsLock + d | Alt + Down                     ;|
;                      CapsLock + e | Alt + Up                       ;|
;                      CapsLock + f | Alt + Right                    ;|
;                                                                    ;|
;                             Move Mouse                             ;|
;                CapsLock + Alt + s | Mouse Left                     ;|
;                CapsLock + Alt + d | Mouse Down                     ;|
;                CapsLock + Alt + e | Mouse Up                       ;|
;                CapsLock + Alt + f | Mouse Right                    ;|
;-----------------------------------o---------------------------------o
CapsLock & h:: SendWithMod("{Left}")
CapsLock & j:: SendWithMod("{Down}")
CapsLock & k:: SendWithMod("{Up}")
CapsLock & l:: SendWithMod("{Right}")
CapsLock & i:: SendWithMod("{Home}")
CapsLock & o:: SendWithMod("{End}")
CapsLock & u:: SendWithMod("{PgUp}")
CapsLock & p:: SendWithMod("{PgDn}")
CapsLock & q:: Send("{Esc}")

; CapsLock & Space:: SendForMouse("{Space}", 0, 0)


;=====================================================================o
;                           CapsLock Deletor                         ;|
;-----------------------------------o---------------------------------o
;                     CapsLock + ,  |  Delete                        ;|
;                     CapsLock + .  |  Ctrl + Delete (Delete a Word) ;|
;                     CapsLock + /  |  Ctrl + Delete (Delete a Line) ;|
;                     CapsLock + n  |  BackSpace                     ;|
;                     CapsLock + m  |  Ctrl + BackSpace              ;|
;-----------------------------------o---------------------------------o
CapsLock & ,:: Send("{Del}")
CapsLock & .:: Send("^{Del}")
CapsLock & /:: Send("+{Del}")
CapsLock & n:: Send("{BS}")
CapsLock & m:: Send("^{BS}")


;=====================================================================o
;                            CapsLock Editor                         ;|
;-----------------------------------o---------------------------------o
;                     CapsLock + z  |  Ctrl + z (Undo)               ;|
;                     CapsLock + y  |  Ctrl + y (Redo)               ;|
;                     CapsLock + x  |  Ctrl + x (Cut)                ;|
;                     CapsLock + c  |  Ctrl + Insert (Copy)          ;|
;                     CapsLock + v  |  Shift + Insert (Paste)        ;|
;                     CapsLock + a  |  Ctrl + a (Select All)         ;|
;                     CapsLock + w  |  Ctrl + Right(Move as [vim: w]);|
;                     CapsLock + b  |  Ctrl + Left (Move as [vim: b]);|
;                     CapsLock + g  |  AppsKey    (Menu Key)         ;|
;-----------------------------------o---------------------------------o
CapsLock & z:: Send("^z")
CapsLock & y:: Send("^y")
CapsLock & x:: Send("^x")
CapsLock & c:: Send("^{Insert}")
CapsLock & v:: { ; Paste without formatting
    A_Clipboard := A_Clipboard . ""
    Send("+{Insert}")
}
CapsLock & a:: Send("^a")
CapsLock & w:: SendWithMod("^{Right}")
CapsLock & b:: SendWithMod("^{Left}")
CapsLock & g:: Send("{AppsKey}")
CapsLock & Enter:: Send("{End}{Enter}")


;=====================================================================o
;                     CapsLock Symbols and Numbers                   ;|
;-----------------------------------o---------------------------------o
;                     CapsLock + ;  |  -                             ;|
;                     CapsLock + '  |  =                             ;|
;                     CapsLock + [  |  _                             ;|
;                     CapsLock + ]  |  +                             ;|
;                     CapsLock + /  |  !                             ;|
;                     CapsLock + \  |  |                             ;|
;                 CapsLock + <1~0>  |  Shift + <1~0>                 ;|
;-----------------------------------o---------------------------------o
CapsLock & `;:: Send("{-}")
CapsLock & ':: Send("{=}")
CapsLock & [:: Send("{_}")
CapsLock & ]:: Send("{+}")
CapsLock & \:: Send("{|}")

CapsLock & 1:: Send("+1")
CapsLock & 2:: Send("+2")
CapsLock & 3:: Send("+3")
CapsLock & 4:: Send("+4")
CapsLock & 5:: Send("+5")
CapsLock & 6:: Send("+6")
CapsLock & 7:: Send("+7")
CapsLock & 8:: Send("+8")
CapsLock & 9:: Send("+9")
CapsLock & 0:: Send("+0")


;=====================================================================o
;                                Others                              ;|
;-----------------------------------o---------------------------------o
; 按下Caps并滑动滚轮调整音量
CapsLock & WheelUp:: Send("{Volume_Up}")
CapsLock & WheelDown:: Send("{Volume_Down}")
; Caps + t: Call WezTerm
CapsLock & t:: Send('#1')


; ;=====================================================================o
; ;                              Mouse Key                             ;|
; ;-----------------------------------o---------------------------------o
; ;                         XButton1  |  (Back, 近端)                  ;|
; ;                         XButton2  |  (Foward, 远端)                ;|
; ;-----------------------------------o---------------------------------o
; ; Xbutton2 鼠标侧键, 通常是接近屏幕远离用户的按键
; ; 单击等同于鼠标中键
; XButton2::MButton
; ;XButton1:: AltTabMenu
; ; 组合滚轮切换标签页
; ; 在Chrome、OneNote、Excel中验证有效
; ; 在文本编辑软件中不会误输入Tab
; XButton2 & WheelUp::^PgUp
; XButton2 & WheelDown::^PgDn
; ; 组合右键作为“浏览器前进”
; XButton2 & RButton::Browser_Forward
; ; 组合左键在资源管理器中返回上级目录
; XButton2 & LButton::!Up

; ; Xbutton1 鼠标侧键, 通常是接近用户远离屏幕的按键
; ; 单击等同于Ctrl键
; ;XButton1 & c:: ^c
; ;XButton1 & a:: ^a
; ;XButton1 & v:: ^v
; ; ~~单击调出Alt+Tab菜单~~
; XButton1::MButton
; ; 组合滚轮在各个窗口中轮选
; XButton1 & WheelDown::AltTab
; XButton1 & WheelUp::ShiftAltTab
; ; 组合中键取消轮选
; XButton1 & MButton::Escape
; ; 组合左右键在虚拟桌面之间切换
; XButton1 & LButton::#^Left
; XButton1 & RButton::#^Right
