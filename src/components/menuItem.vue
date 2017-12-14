<%--  Created by IntelliJ IDEA.
  User: seven.li
  Date: 2017/8/28
  Time: 15:08 
  Emali: fighting20xx@126.com   --%>    


<template>
        <el-submenu v-if="item.type === 0" :index="numIndex">
            <template slot="title"><i class="el-icon-message" :class="item.icon"></i>{{item.name}}</template>

            <el-menu-item v-if="single.type === 1" :index="numIndex+'-'+num" v-for="(single , num) in item.list">
                <router-link to=single.url :class="single.icon">{{single.name}}</router-link>
            </el-menu-item>
        </el-submenu>
</template>
<script>
    export default {
        name: 'menuItem',
        props:{
            item:{},
            numIndex:{default:0}
        },
    }
</script>
<style>


</style>

<!--<li>-->
<!--<a v-if="item.type === 0" href="javascript:;">-->
<!--<i v-if="item.icon != null" :class="item.icon"></i>-->
<!--<span>{{item.name}}</span>-->
<!--<i class="fa fa-angle-left pull-right"></i>-->
<!--</a>-->

<!--<ul v-if="item.type === 0" class="treeview-menu">-->
<!--<menu-item :item="item" v-for="item in item.list"></menu-item>-->
<!--</ul>-->

<!--<a v-if="item.type === 1" :href="'#'+item.url>-->
<!--<router-link to=item.url>退出系统</router-link>-->
<!--<i v-if="item.icon != null" :class="item.icon"></i>-->
<!--<i v-else class='fa fa-circle-o'></i>-->
<!--{{item.name}}-->
<!--</a>-->
<!--</li>-->