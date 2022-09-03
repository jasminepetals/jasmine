//1.获取对象元素
var modal = document.querySelector('.modal');
var close = document.querySelector('.close');
var login = document.querySelector('.login-header');
var bg = document.querySelector('.login-bg');
//2.单击遮罩层注册click事件
login.addEventListener('click',function(){
    modal.style.display = 'block';
    bg.style.display = 'block';
    modal.style.backgroundColor = 'white';
});
//3.关闭模态对话框,给close注册click事件
close.addEventListener('click',function(){
    modal.style.display = 'none';
    bg.style.display = 'none';
});
//4.给modal注册mousedown事件
modal.addEventListener('mousedown',function(e){
    //4.1获取鼠标按下 时，鼠标指针在模态框中的坐标
    var x = e.pageX - modal.offsetLeft;
    var y = e.pageY - modal.offsetTop;
    //4.2 定义移动的函数
    var move = function(){
        modal.style.left = e.pageX - x + 'px';
        modal.style.top = e.pageY - y + 'px';
    }
    //4.3给文档对象注册鼠标移动事件（mousemove）
    document.addEventListener('mousemove',move);
    //4.4给文档对象注册鼠标弹起事件（mouseup）
    document.addEventListener('mouseup',function(){
        document.addEventListener('mousemove',move)
    });
});
