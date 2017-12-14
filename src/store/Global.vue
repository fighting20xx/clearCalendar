<%--  Created by IntelliJ IDEA.
  User: seven.li
  Date: 2017/8/28
  Time: 16:54 
  Emali: fighting20xx@126.com   --%>    

<template>


</template>
<script>
//    function token() {
//        var token = localStorage.getItem("token");
//        //jquery全局配置
//        $.ajaxSetup({
//            dataType: "json",
//            cache: false,
//            headers: {
//                "token": token
//            }
//
//        });
//    }
    function baseURL() {
//        //当前路径
//        var pathName = window.document.location.pathname;
//        //当前工程名
//        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
//        //请求前缀
//        //var baseURL = "http://demo.open.renren.io/hscar-app/";
//        var baseURL = projectName + "/";
        return 'http://localhost:8082/elink-admin/';
    }
    const colorListLength = 20;

    export default
    {
        baseURL:baseURL(),
        colorListLength

    }
</script>
<style>


</style>