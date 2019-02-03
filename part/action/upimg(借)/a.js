$("#upImg").change(function(){
    upImg(this);
})
//上传图片 form-data
function upImg(e){
    var a = e.files[0];//获取上传文件a
    if(a.type !== 'image/jpeg' && a.type !== "image/png") {
        $("#error").text("仅支持jpg和png格式的图片");
        return false;
    }
    if(window.FileReader) {
        var f = new FileReader();
        f.onloadend = function (g) {
            $("#showImg").attr("src",g.target.result);
        }
        f.readAsDataURL(a);
    }
}

{/* <form action="url" method="post" enctype="multipart/form-data">
     <input type="file" name="file" value="选择jar包"/>
     <input id="submit_form" type="submit" class="btn btn-success save" value="保存"/>
</form> */}



function upFile(){
    var files = document.getElementById('pic').files; //files是文件选择框选择的文件对象数组
    if(files.length == 0) return; 
    var form = new FormData(), 
        url = 'http://.......', //服务器上传地址
        file = files[0];
    form.append('file', file);
    var xhr = new XMLHttpRequest();
    xhr.open("post", url, true);
    //上传进度事件
    xhr.upload.addEventListener("progress", function(result) {
        if (result.lengthComputable) {
            //上传进度
            var percent = (result.loaded / result.total * 100).toFixed(2); 
        }
    }, false);
    xhr.addEventListener("readystatechange", function() {
        var result = xhr;
        if (result.status != 200) { //error
            console.log('上传失败', result.status, result.statusText, result.response);
        } 
        else if (result.readyState == 4) { //finished
            console.log('上传成功', result);
        }
    });
    xhr.send(form); //开始上传
}

function upFile2 (){
//    <div id = "result"></div>
//    <input id="pic" type="file" name = 'pic' accept = "image/*" onchange = "selectFile()"/>
//    <button onclick = "handIn()">提交</button>

        var form = new FormData();//通过HTML表单创建FormData对象
        var url = '127.0.0.1:8080/'
        function selectFile(){
            var files = document.getElementById('pic').files;
            console.log(files[0]);
            if(files.length == 0){
                return;
            }
            var file = files[0];
            //把上传的图片显示出来
            var reader = new FileReader();
            // 将文件以Data URL形式进行读入页面
            console.log(reader);
            reader.readAsBinaryString(file);
            reader.onload = function(f){
                var result = document.getElementById("result");
                var src = "data:" + file.type + ";base64," + window.btoa(this.result);
                result.innerHTML = '<img src ="'+src+'"/>';
            }
            console.log('file',file);
            ///////////////////
            form.append('file',file);
            console.log(form.get('file'));
        }
        var xhr = new XMLHttpRequest();
        function handIn(){
         console.log(form.get('file'));
         xhr.open("post", url, true);
         xhr.addEventListener("readystatechange", function() {  
             var result = xhr;  
             if (result.status != 200) { //error  
                 console.log('上传失败', result.status, result.statusText, result.response);  
             }   
             else if (result.readyState == 4) { //finished  
                 console.log('上传成功', result);  
             }  
         });   
        }
}



var xhr = new XMLHttpRequest();
var loginDate = new FormData();
loginDate.append("name",user);
loginDate.append("pwd",password);
xhr.open("POST","/carrots-admin-ajax/a/login",true);
xhr.onload = function() {
if(xhr.readyState === 4 && xhr.status === 200) {
    //拆分服务器传回来的数据 json字符串分解为对象
    var loginInfo = JSON.parse(xhr.responseText);
    if (loginInfo.message != "success") {
    $(".error").text(loginInfo.message);
    } else {
    location.href = "http://dev.admin.carrots.ptteng.com/";
    }
}
}
xhr.send(loginDate);



$.ajax({
    type:'post',
    url:'{url(user/index)}',
    async:false,//是否异步
    dataType:'json',
    data:{
        "page_index":page,
        "page_size":limit,
    },
    function(res){
        
    }
})


//跨域请求解决方案
//  https://segmentfault.com/a/1190000012469713