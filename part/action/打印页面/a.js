function dayin(){
	bdhtml=window.document.body.innerHTML;//获取当前页的html代码  
	sprnstr="<!--startprintsd-->";//设置打印开始区域  
	eprnstr="<!--endprint-->";//设置打印结束区域  
	prnhtml=bdhtml.substring(bdhtml.indexOf(sprnstr)+19); //从开始代码向后取html  +18是为了跳过注释
	prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));//从结束代码向前取html 
	window.document.body.innerHTML=prnhtml;  
	window.print();  
}



function copy(){
    var text = document.getElementsByClassName("visainfo-table")[0].innerHTML;
    window.document.body.innerHTML=text;
    window.print();
}
$("#btn").on("click",function(){
    document.getElementById('printIframe').contentWindow.iframePrint();
})