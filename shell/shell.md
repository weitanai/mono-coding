
// grep query text 
// ps -a all process 
// ps -ef | grep 'query condition'

// which get

// get pid by port
// losf -i tcp:port

绝对路径：“一定由根目录 / 写起”；相对路径：“不由 / 写起，而是由相对当前目录写起”
特殊目录有：., .., -, ~, ~account需要注意；
与目录相关的指令有：cd, mkdir, rmdir, pwd 等重要指令；
rmdir 仅能删除空目录，要删除非空目录需使用“ rm -r ”指令；
使用者能使用的指令是依据 PATH 变量所规定的目录去搜寻的；
ls 可以检视文件的属性，尤其 -d, -a, -l 等选项特别重要！
文件的复制、删除、移动可以分别使用：cp, rm , mv等指令来操作；
检查文件的内容（读档）可使用的指令包括有：cat, tac, nl, more, less, head, tail, od 等
cat -n 与 nl 均可显示行号，但默认的情况下，空白行会不会编号并不相同；
touch 的目的在修改文件的时间参数，但亦可用来创建空文件；
一个文件记录的时间参数有三种，分别是 access time（atime）, status time （ctime）, modification time（mtime），ls 默认显示的是 mtime。
除了传统的rwx权限之外，在Ext2/Ext3/Ext4/xfs文件系统中，还可以使用chattr与lsattr设置及观察隐藏属性。 常见的包括只能新增数据的 +a 与完全不能更动文件的 +i 属性。
新建文件/目录时，新文件的默认权限使用 umask 来规范。默认目录完全权限为drwxrwxrwx， 文件则为-rw-rw-rw-。
文件具有SUID的特殊权限时，代表当使用者执行此一binary程序时，在执行过程中使用者会暂时具有程序拥有者的权限
目录具有SGID的特殊权限时，代表使用者在这个目录下面新建的文件之群组都会与该目录的群组名称相同。
目录具有SBIT的特殊权限时，代表在该目录下使用者创建的文件只有自己与root能够删除！
观察文件的类型可以使用 file 指令来观察；
搜寻指令的完整文件名可用 which 或 type ，这两个指令都是通过 PATH 变量来搜寻文件名；
搜寻文件的完整文件名可以使用 whereis 找特定目录或 locate 到数据库去搜寻，而不实际搜寻文件系统；
利用 find 可以加入许多选项来直接查询文件系统，以获得自己想要知道的文件名。