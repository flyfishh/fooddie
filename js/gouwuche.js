//数据源
var foodlist = [
    {id:1,name:'糖醋鲤鱼',money:88,url:'糖醋鲤鱼.jpg',count:1,check:true},
    {id:2,name:'芙蓉鸡片',money:38,url:'芙蓉鸡片.jpg',count:1,check:true},
    {id:3,name:'葱烧海参',money:128,url:'葱烧海参.jpg',count:1,check:true},
    {id:4,name:'东坡肘子',money:68,url:'东坡肘子.jpg',count:1,check:true},
    {id:5,name:'宫保鸡丁',money:48,url:'宫保鸡丁.jpg',count:1,check:true},
    {id:6,name:'毛血旺',money:58,url:'毛血旺.jpg',count:1,check:true},
    {id:7,name:'烤乳猪',money:98,url:'烤乳猪.png',count:1,check:true},
	{id:8,name:'盐焗鸡',money:32,url:'盐焗鸡.jpg',count:1,check:true},
	{id:9,name:'白灼虾',money:42,url:'白灼虾.jpg',count:1,check:true},
    {id:10,name:'羊方藏鱼',money:40,url:'羊方藏鱼.jpg',count:1,check:true},
    {id:11,name:'霸王别姬',money:118,url:'霸王别姬.jpg',count:1,check:true},
    {id:12,name:'三套鸭',money:39,url:'三套鸭.jpg',count:1,check:true},
    {id:13,name:'东坡肉',money:78,url:'东坡肉.jpg',count:1,check:true},
    {id:14,name:'干炸响铃',money:28,url:'干炸响铃.jpg',count:1,check:true},
    {id:15,name:'油焖春笋',money:30,url:'油焖春笋.jpg',count:1,check:true},
    {id:16,name:'组庵鱼翅',money:55,url:'组庵鱼翅.jpg',count:1,check:true},
    {id:17,name:'全家福',money:138,url:'全家福.jpg',count:1,check:true},
    {id:18,name:'百鸟朝凤',money:79,url:'百鸟朝凤.jpg',count:1,check:true},
    {id:19,name:'龙身凤尾虾',money:88,url:'龙身凤尾虾.jpg',count:1,check:true},
    {id:20,name:'佛跳墙',money:158,url:'佛跳墙.jpg',count:1,check:true},
    {id:21,name:'醉排骨',money:49,url:'醉排骨.jpg',count:1,check:true},
    {id:22,name:'腌鲜鳜鱼',money:68,url:'腌鲜鳜鱼.jpg',count:1,check:true},
    {id:23,name:'徽州毛豆腐',money:28,url:'徽州毛豆腐.jpg',count:1,check:true},
    {id:24,name:'问政山笋',money:18,url:'问政山笋.jpg',count:1,check:true}
]

function showmenu() { 
        //获取需要悬浮的对象
    let show = document.getElementById("gwc_show");
    //获取被隐藏的菜单
    let menu = document.getElementById("gwc_menu");

    //给show添加鼠标悬浮事件
    show.onmouseover = function(){
    //改变菜单的内联样式display为block
    menu.style.display = "block";
    loadmenu();
    }

    //
    show.onmouseout = function(){
    //获取菜单栏的坐标值
    let menux = menu.offsetLeft;
    let menuy = menu.offsetTop;
    let menuX = menu.offsetLeft+menu.offsetWidth;
    let menuY = menu.offsetTop+menu.offsetHeight;

    //获取鼠标的坐标值
    let event = window.event;
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    if(mouseX<menux || mouseX>menuX || mouseY<menuY || mouseY>menuY){
    menu.style.display = "none";
    }
    }

    //分别给menu对象绑定鼠标悬浮和鼠标离开事件
    menu.onmouseover = function(){
    menu.style.display = "block";

    }
    menu.onmouseleave = function(){
    menu.style.display = "none";
    }
}
function loadmenu() { 
    $menu = $('#gwc_menu');
            $menu.empty();
            for(var i = 1;i<=foodlist.length;i++)
            {
                var name = '';
                var listr = '';
                if(getCookie('foodid'+i)!=null)
                {name = getCookie('foodid'+i);
                money = foodlist[i-1].money;
                
                listr = name+'    ￥'+money;
                }
                $li = $('<li></li>');
                
                
                $li.append(listr);

                $menu.append($li);
            }
            $btn = $('<input />');
            $btn.prop('type','button');
            $btn.prop('id','btn');
            $btn.prop('value','清空购物车');
            $btn.click(function () { 
                deleteCookie();
            });
            $btn2 = $('<input />');
            $btn2.prop('type','button');
            $btn2.prop('id','btn2');
            $btn2.prop('value','结算');
            $btn2.click(function(){
                window.location.href = "../html/购物车结算.html";
            })
            $li_last = $('<li></li>');
            $li_last.append($btn);
            $li_last.append($btn2);
            $menu.append($li_last);
}
//设置Cookie  
function SetCookie(name, value) {  
    var exp = new Date();  
    exp.setTime(exp.getTime() + 3 * 24 * 60 * 60 * 1000); //3天过期  
    document.cookie = name + "=" + value + ";expires=" + exp.toGMTString()+";path=/";  
    return true;  
}
//清除所有cookie函数
function deleteCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if(keys) {
        for(var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()+";path=/";
    }
    loadmenu();
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return null;
}

function addfood(foodid) {
    SetCookie("foodid"+foodid,foodlist[foodid-1].name);
}