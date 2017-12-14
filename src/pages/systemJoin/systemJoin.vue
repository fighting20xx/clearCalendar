<%--  Created by IntelliJ IDEA.
  User: seven.li
  Date: 2017/8/31
  Time: 14:45 
  Emali: fighting20xx@126.com   --%>    

<template>

<span>

    <div class="grid-content bg-purple" id="button_group">
        <el-button-group>
            <el-button :plain="true" icon="plus" @click="dialogFormVisible=true">添加</el-button>
            <el-button :plain="true" type="warning" icon="edit">修改</el-button>
            <el-button :plain="true" type="danger" icon="delete">删除</el-button>
        </el-button-group>
    </div>
    <el-table  :data="tableData1" @row-click="rowClick"  border  style="width: 100%">
            <el-table-column    prop="vCurselectxm"  label="项目编码"    ></el-table-column>
            <el-table-column     prop="vGldwmc"    label="项目名称"    ></el-table-column>
            <el-table-column     prop="vPtdzxmbm"   label="业主单位名称"></el-table-column>
            <el-table-column     prop="vRgfqbm"   label="管理单位名称"></el-table-column>
            <el-table-column     prop="vTyyf"   label="投用年月"></el-table-column>
            <el-table-column     prop="vXmbm"   label="接入年月"></el-table-column>
            <el-table-column     prop="vXmjrsj"   label="类别编码"></el-table-column>
            <el-table-column     prop="vXmlbbm"   label="热工分区编码"></el-table-column>
            <el-table-column     prop="vXmmc"   label="行政区域编码"></el-table-column>
            <el-table-column     prop="vXmyzdwmc"   label="云平台对照编码"></el-table-column>
            <el-table-column     prop="vXzqybm"   label="是否当前选中"></el-table-column>
    </el-table>

    <el-tabs v-model="activeName" >
        <el-tab-pane label="项目信息" name="first">项目信息11111111111111
        </el-tab-pane>
        <el-tab-pane label="建筑列表" name="second">建筑列表222</el-tab-pane>
        <el-tab-pane label="能源信息" name="third">能源信息333</el-tab-pane>
        <el-tab-pane label="指标体系" name="fourth">指标体系444</el-tab-pane>
    </el-tabs>

</span>
</template>
<script>
    import addProDialog from './selfComponents/addProDialog.vue'
    export default {
        data() {
            return {
                tableData1:[],
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                dialogFormVisible: false,
                form: {
                    name: '',
                    code:'',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            }
        },
        methods:{
            getMenuList:function(){
                var data = "page=1&limit=20&order=asc";
                this.$http.get('elink/tprojectdyD/list?'+data).then(response => {
                    this.tableData1 = response.body.page.list ;
                },reponse => {

                })
            },
            rowClick:function (row, event, column) {
                console.log(row.vCurselectxm);
            },

        },
        created:function () {
            this.getMenuList();
        },
        compontent:{
            addProDialog:addProDialog
        }
    }

</script>
<style>
    #button_group {
        float: right;
    }
    #button_group:after {
        content: '';
        clear: both;
        display: none;
    }

</style>