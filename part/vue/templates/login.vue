<template class="login">
    <div>
        <all-header></all-header>
        <div class="login-box">
            <h3 class="login-theme">登录界面</h3>
            <div class="login-box-input">
                <input class="login-input" placeholder="请输入账号" v-model="user">
                <label class="login-input-hover" for="">请输入账号</label>
            </div>
            <div class="login-box-input">
                <input class="login-input" placeholder="请输入密码" v-model="password">
                <label class="login-input-hover" for="">请输入密码</label>
            </div>
            <div class="login-error" v-text='error'></div>
            <button class="login-btn" v-on:click="login">登录</button>
        </div>
    </div>
</template>
<script>
import AllHeader from 'header'
export default {
    name: 'Login',
    data() {
        return{
          user:'',
          password:'',
          error:'无此账号'
        }
    },
    components:{
        AllHeader
    },
    methods: {
        login(){
            axios({
                method:'get',
                url:'123'
            }).then(function(res){
                console.log(res);
            });
        }
    }
}
</script>
<style lang="css" scoped>
    .login-box{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 460px;
        height: 285px;
        margin: auto;
        background-color: #e5ffff;
        border-radius: 5px;
        box-shadow: 1px 1px 5px 1px #000;
    }
    .login-theme{
        width: 100%;
        padding: 20px 0;
        font-weight: bold;
    }
    .login-box-input{
        position: relative;
    }
    .login-input{
        width: 80%;
        height: 40px;
        padding-left: 10px;
        border: 1px #00ccff solid;
        border-radius: 3px;
        margin: 10px 10%;
        background-color: transparent;
        outline: none;
    }
    .login-input:placeholder-shown::placeholder{
        color:transparent;
    }
    .login-input:not(:placeholder-shown) + .login-input-hover,
    .login-input:focus + .login-input-hover{
        transform: scale(0.8) translate(-14px,-24px);
        z-index: 1;
    }
    .login-input-hover{
        position: absolute;
        top:19px;
        left:62px;
        pointer-events: none;
        transition: 0.3s all ease-out;
        background-color: #e5ffff;
    }
    .login-error{
        width: 100%;
        height: 40px;
        color: #f00;
    }
    .login-btn{
        width: 30%;
        height: 30px;
        border-radius: 3px;
        margin: 0 35%;
        background-color: #00ccff;
        color: #fff;
        cursor: pointer;
    }
</style>