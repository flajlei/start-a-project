<template>
    <div class="nav-all">
        <div class="nav row">
            <div class="nav-left">
                <div class="nav1-logo AC">
                    <img src="../assets/logo.png" alt="">
                </div>
            </div>
            <div class="nav-right">
                <table class="nav1-list" cellspacing="0">
                    <tbody>
                        <tr>
                            <td class="">
                                <span>选项1</span>
                                <div class="nav1-cir"></div>
                                <div class="nav1-box1 TC">
                                    <div class="nav1-box1-list">1</div>
                                    <div class="nav1-box1-list">2</div>
                                    <div class="nav1-box1-list">3</div>
                                    <div class="nav1-box1-list">4</div>
                                    <div class="nav1-box1-list">5</div>
                                    <div class="nav1-box1-list">6</div>
                                    <div class="nav1-box1-list">7</div>
                                </div>
                            </td>
                            <td>选项2</td>
                            <td>选项2</td>
                            <td>选项2</td>
                            <td>选项2</td>
                            <td>选项2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
    .nav-all{
        position: relative;
        z-index: 1;
        background-color: aqua;
    }
    .nav::after{
        content: "";
        clear: both;
        display: block;
    }
    .nav-left{
        float: left;
        height: 80px;
        position: relative;
    }
    .nav-right{
        float: right;
        position: relative;
    }
    .nav1-logo{
        width: 50px;
        height: 50px;
        margin-left: 20px;
    }
    .nav1-logo > img{
        width: 50px;
        height: 50px;
    }
    .nav1-list td{
        position: relative;
        float: left;
        line-height: 80px;
        padding: 0 20px;
        font-size: 14px;
    }
    .nav1-cir{
        border-top: 5px #000 solid;
        border-left: 5px transparent solid;
        border-right: 5px transparent solid;
        width: 0;
        height: 0;
        float: right;
        margin-top: 37px;
    }
    .nav1-box1{
        position: absolute;
        left: 0;
        width: 100%;
        height: 0;
        background-color: aqua;
        overflow: hidden;
        transition: 0.6s all;
    }
    .nav1-box1-list{
        line-height: 50px;
    }
    .nav1-box1-list:hover{
        background-color: aquamarine
    }
    .nav1-list td:hover,.nav1-list td.active{
        background-color: aquamarine;
    }
    .nav1-list td:hover > .nav1-cir,.nav1-list td.active > .nav1-cir{
        transform: rotateZ(180deg);
    }
    .nav1-list td:hover > .nav1-box1,.nav1-list td.active > .nav1-box1{
        height: 350px;
    }
</style>
