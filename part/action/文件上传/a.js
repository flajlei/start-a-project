file = `{
    "阿联酋": [
        "blank(1504)"
    ], 
    "阿联酋迪拜": [
        "阿联酋迪拜旅游签证表格下载汇总.rar(1505)", 
        "阿联酋迪拜不可撤销担保.rar(1506)"
    ], 
    "黎巴嫩": [
        "黎巴嫩商务签证表格下载汇总.rar(1507)"
    ], 
    "也门": ["blank(1508)"], 
    "土耳其": ["土耳其旅游电子签证表格下载汇总.rar(1509)"], 
    "约旦": ["blank(1510)"], 
    "阿富汗": ["blank(1511)"], 
    "叙利亚": ["叙利亚商务签证表格下载汇总.rar(1512)"], 
    "巴林": ["blank(1513)"], 
    "卡塔尔": ["blank(1514)"], 
    "以色列": ["以色列旅游签证表格下载汇总.rar(1515)", "以色列商务签证表格下载汇总.rar(1516)", "以色列旅游十年多次签证表格....rar(1517)", "以色列商务十年多次签证表格....rar(1518)", "18岁以下申请人申请材料以及流程.pdf(1519)", "以色列广州领馆地址.rar(1520)", "以色列十年签证声明书（上海）.pdf(1521)", "以色列父母同意函（内附填写模板）.rar(1522)"], 
    "巴基斯坦": ["巴基斯坦商务签证表格下载总汇.rar(1523)"], 
    "沙特": ["沙特商务签证表格下载汇总.rar(1524)", "沙特商务(包签）证表格下载汇总.rar(1525)"]
}`

fileWrite(file);
function fileWrite(e){
    file = JSON.parse(e);
    var countrylist = 0,
    citylist = 0;
    for(var prop in file){
        $(".file-tbody").append("<tr class='file-td-country'><td colspan='3'><span>"+prop+"</span><span class='upfile-box'><form action=''><input type='file'><input type='submit'></form></span></td></tr>")
        file[prop].map(function(){
            var id = /\([0-9]+\)$/g;
            var idnum = file[prop][citylist].match(id)[0];
            idnum = idnum.replace("(","");
            idnum = idnum.replace(")","");
            var idname = file[prop][citylist].replace(id,'');
            $(".file-td-country").eq(countrylist).after("<tr><td style='width:30px'></td><td class='file-td-name'>"+idname+"</td><td><button class='file-btn-load' value='"+idnum+"'>下载</button></td>")
            citylist++;
        })
        countrylist++;
        citylist=0;
    }
}
