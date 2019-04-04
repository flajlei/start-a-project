var oUl = document.getElementById('test');
    oUl.addEventListener('click',function(ev){
        var ev = ev || window.event;
        var target = ev.target;
        while(target !== oUl ){
            if(target.tagName.toLowerCase() == 'li'){
                console.log('li click~');
                break;
            }
            target = target.parentNode;
        }
    })
    //原理:事件冒泡
    //dom结构 ul > li > div/p
    //将事件绑定到父元素上，子元素触发事件时冒泡，从而触发父元素事件，此时ev即为当前触发事件的子元素
    //while循环是为了确保触发时如果为div/p，target会向父级寻找，确保执行为li