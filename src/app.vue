
<template>
    <div class="body-bg">
        <!--<main v-if="$pageFinishedLoading" v-class="{ 'menu-collapsed': $baSidebarService.isMenuCollapsed() }">   &lt;!&ndash;这是主模块， 只有在加载图片结束的时候 才会显示&ndash;&gt;-->

            <page-top class="pageTop"></page-top>                        <!--这是顶部模块  ，写成一个指令的样式-->
            <div class="al-main">

                <ba-sidebar class="baSidebar"></ba-sidebar>                   <!--这是侧边栏 模块-->

                <span class="al-content">
                    <span class="al-wrap">
                        <!--<div id="content-tip"><span class="el-icon-arrow-right">项目接入</span></div>-->
                        <router-view>
                        </router-view>
                        <footer class="al-footer ">
                            <div class="al-footer-right">Created by   浙江坤源节能科技有限公司<i class="ion-heart"></i></div>
                        </footer>
                    </span>
                </span>
            </div>

               <!---这是底部的 每个页面都有的分享按钮一直存在的   -->
            <!--<back-top></back-top>                        &lt;!&ndash;这是返回到顶部的按钮，  只有在滑动条出现的时候才会出现&ndash;&gt;-->
        <!--</main>-->

        <!--<div id="preloader" v-show="!$pageFinishedLoading">     &lt;!&ndash;这是加载图片，一直转圈，只有加载完成，才不显示&ndash;&gt;-->
            <!--<div></div>-->
        <!--</div>-->
    </div>
</template>
<script>

    export default {

    }
</script>
<style>
    .body-bg {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #F0F3F4;
    }
    .al-main {
        position: absolute;
        top: 50px;
        bottom: 0;
        left: 0;
        right: 0;
        display: -webkit-inline-flex;
        display: inline-flex;
        background-color: #eeeeee;
    }
    .baSidebar {
        width: 170px;
    }
    .al-content {
        position: relative;
        flex: 1 ;
        margin: 25px 10px 5px 25px;
        overflow-x: hidden;
    }
    .al-wrap {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .al-footer {
        position: fixed;
        bottom: 0;
        left: 50%;
    }

    @media only screen and (min-width: 0) and (max-width: 767px){
        .baSidebar {
            /*transition: all 1s;*/
            /*margin-right: -170px;*/
            /*opacity: 0.5;*/
            /*z-index: 100;*/
            width: 0;
        }
    }
    #content-tip {
        margin: 10px;
    }

</style>