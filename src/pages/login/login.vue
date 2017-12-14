<%--  Created by IntelliJ IDEA.
  User: seven.li
  Date: 2017/8/29
  Time: 9:55 
  Emali: fighting20xx@126.com   --%>    


<template>
    <div class="contain-wrap1">
        <img id="logo_top" src="../../static/images/logo2.png">
        <div class="contain">
            <div class="login-logo">
                <b>节能云平台</b>
            </div>

            <div class="login-box-body">
                <p class="login-box-msg">管理员登录</p>
                <div v-if="error" class="alert alert-danger alert-dismissible">
                    <h4 style="margin-bottom: 0px;"><i class="fa fa-exclamation-triangle"></i> {{errorMsg}}</h4>
                </div>
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" v-model="username" placeholder="账号">
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" v-model="password" placeholder="密码">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" v-model="captcha" @keyup.enter="login" placeholder="验证码">
                    <span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <img alt="如果看不清楚，请单击图片刷新！" class="pointer" :src="src" @click="refreshCode">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="javascript:;" @click="refreshCode">点击刷新</a>
                </div>

                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox icheck"></div>
                    </div>
                    <div class="col-xs-4">
                        <button type="button" class="btn btn-primary btn-block btn-flat" @click="login">登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>


    export default {
        data: function () {
            return {
                username: '',
                password: '',
                captcha: '',
                error: false,
                errorMsg: '',
                src: 'http://localhost:8082/elink-admin/captcha.jpg'
            }
        },
        methods: {
            refreshCode: function () {
                this.src = "http://localhost:8082/elink-admin/captcha.jpg?t=" + $.now();
            },
            login (event) {
                let vm = this;
                var data = "username=" + this.username + "&password=" + this.password + "&captcha=" + this.captcha;

                this.$http.post('/elink-admin/sys/login?' + data)
                    .then((result) => {
                        console.log(result);
                        if (result.body.code == 0) { // 登录成功
                            localStorage.setItem("token", result.body.token);
//                        this.$store.state.common.token=result.body.token;
                            vm.$router.push({path: '/app'});
                        } else {
                            console.log(result.body.msg);
                            vm.error = true;
                            vm.errorMsg = result.body.msg;
                            vm.refreshCode();
                        }
                    }, (result) => {

                    });
            }

        },
        created: function () {
            console.log("登录页面，，，，，，，，，，");
        }
    };

</script>
<style>
    .contain-wrap1 {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #333;
        color: #fff;
        text-align: center;
        text-shadow: 0 1px 3px rgba(0, 0, 0, .5);
    }

    #logo_top {
        position: absolute;
        left: 20%;
        top: 10%;

    }

    .contain {
        width: 400px;
        height: 400px;
        position: absolute;
        left: calc(65% - 200px);
        top: calc(50% - 200px);
        background-color: #F0F3F4;
        border: solid 1px #e6e6e6;
        padding: 30px;
        box-sizing: border-box;
    }
</style>