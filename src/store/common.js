/**
 * Created by Administrator on 2017/8/28.
 */

import Vue from 'vue'


export default {
    state: {},
    computed: {
        baseURL() {
            //当前路径
            var pathName = window.document.location.pathname;
            //当前工程名
            var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
            //请求前缀
            //var baseURL = "http://demo.open.renren.io/hscar-app/";
            var baseURL = projectName + "/";
            return 'http://localhost:8082/elink-admin/';
        }
    },
    mutations: {

    },
    actions: {

    }
}