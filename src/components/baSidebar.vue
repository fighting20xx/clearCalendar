<style>
    .main-sidebar {
        transition: 0.1s;
        background-color:#1c2b36;
        overflow: hidden;
    }

    /*@media only screen and (min-width: 480px) and (max-width: 767px){*/
        /*.main-sidebar {*/
            /*width: 0;*/
        /*}*/
    /*}*/
    /*@media screen and (min-width: 768px) and (max-width: 959px) {*/
        /*.main-sidebar {*/
            /*width: 100px;*/
        /*}*/
    /*}*/

    /*aside {*/
        /*background: #dcdcdc;*/
    /*}*/

    /*.sidebar-menu > li {*/
        /*background: #4fbd88;*/
        /*margin-bottom: 8px;*/

    /*}*/

    /*.sidebar-menu > li a {*/
        /*color: #fff*/
    /*}*/

    /*.sidebar-menu > li ul {*/
        /*background: #dcdcdc;*/
        /*color: #333;*/
        /*text-align: 30px;*/
    /*}*/

    /*.sidebar-menu > li ul a {*/
        /*color: #000;*/
    /*}*/

    /*.sidebar-menu > li a span {*/
        /*margin-left: 30px;*/
        /*font-weight: 700;*/
    /*}            theme="dark"*/

</style>

<template>

        <el-menu default-active="2" class="main-sidebar" theme="dark">
            <!--<el-menu-item-group title="菜单选项"></el-menu-item-group>-->
            <menu-item :item="item" :numIndex="index+''" v-for="(item , index) in menuList"></menu-item>


            <!--手动添加一些列表-->
            <el-submenu index="1000">
                <template slot="title"><i class="el-icon-message" ></i>项目接入</template>
                <el-menu-item  index="1000-1">
                    <router-link to="/systemjoin">项目接入</router-link>
                </el-menu-item>
                <el-menu-item  index="1000-2">
                    <router-link to="/testPage">测试页</router-link>
                </el-menu-item>
                <el-menu-item  index="1000-3">
                    <router-link to="/testPage2">测试图片提交</router-link>
                </el-menu-item>
            </el-submenu>

        </el-menu>
        <!--<section class="sidebar">-->
            <!--<ul class="sidebar-menu">-->
                <!--<li class="header">导航菜单</li>-->
                <!--&lt;!&ndash; vue生成的菜单 &ndash;&gt;-->
                <!--<menu-item :item="item" v-for="item in menuList"></menu-item>-->
            <!--</ul>-->
        <!--</section>-->

</template>


<script>
    export default {
        name: 'baSidebar',
        data: function () {
            return {
                menuList: [],
                password: '',
                newPassword: '',
                navTitle: "欢迎页"
            }
        },
        methods: {
            getMenuList: function () {
                this.$http.get('sys/menu/user').then(response => {
//                    console.log(response.body.menuList);
                    this.menuList = response.body.menuList;
                    window.permissions = response.body.permissions;
                }, response => {

                });
            },
            getUser: function () {
                $.getJSON("sys/user/info", function (r) {
                    vm.user = r.user;
                });
            },
            updatePassword: function () {
                layer.open({
                    type: 1,
                    skin: 'layui-layer-molv',
                    title: "修改密码",
                    area: ['550px', '270px'],
                    shadeClose: false,
                    content: jQuery("#passwordLayer"),
                    btn: ['修改', '取消'],
                    btn1: function (index) {
                        var data = "password=" + vm.password + "&newPassword=" + vm.newPassword;
                        $.ajax({
                            type: "POST",
                            url: "sys/user/password",
                            data: data,
                            dataType: "json",
                            token: localStorage.getItem('token'),
                            success: function (result) {
                                if (result.code == 0) {
                                    layer.close(index);
                                    layer.alert('修改成功', function (index) {
                                        location.reload();
                                    });
                                } else {
                                    layer.alert(result.msg);
                                }
                            }
                        });
                    }
                });
            },
            logout: function () {
                //删除本地token
                localStorage.removeItem("token");
                //跳转到登录页面
                location.href = baseURL + 'login.html';
            }
        },
        created: function () {
            this.getMenuList();
            this.getUser();
        },
        updated: function () {
            var router = vm.$router;
            console.log("11111111111111111111111");
            console.log(router);
            routerList(router, vm.menuList);
            console.log(router);
        }
    }


    function routerList(router, menuList){
        for(var key in menuList){
            var menu = menuList[key];
            if(menu.type == 0){
                routerList(router, menu.list);
            }else if(menu.type == 1){

//
                var route = {
                    path: ''+menu.url,
//                    component: Login,
                };
                router.addRoutes(route);

//                router.add('#'+menu.url, function() {
//                    var url = window.location.hash;
//
//                    //替换iframe的url
//                    vm.main = url.replace('#', '');
//
//                    //导航菜单展开
//                    $(".treeview-menu li").removeClass("active");
//                    $("a[href='"+url+"']").parents("li").addClass("active");
//
//                    vm.navTitle = $("a[href='"+url+"']").text();
//                });
            }
        }
    }
</script>