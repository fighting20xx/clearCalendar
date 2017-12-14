

<template >
    <div>
        <div>
            树结构
        </div>

         <el-tree
            :data="data2"
            :props="defaultProps"
            node-key="id"

            :render-content="renderContent">
        </el-tree>

        <div>
            <el-dialog title="添加子选项" :visible.sync="dialogTableVisible">
                <el-table
                        ref="multipleTable"
                        :data="gridData"
                        border
                        tooltip-effect="dark"
                        style="width: 100%"

                >
                    <el-table-column  type="selection"    width="55">    </el-table-column>
                    <el-table-column property="code" label="编号" width="150"></el-table-column>
                    <el-table-column property="name" label="名称" width="200"></el-table-column>
                    <el-table-column property="level" label="级别"></el-table-column>
                </el-table>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="append()">确 定</el-button>
                </div>
            </el-dialog>
        </div>

    </div>

    <!--default-expand-all    show-checkbox    :expand-on-click-node="false" -->
</template>



<script>
    let id = 1000;

    export default {
        data() {
            return {
                data2: [{
                    id: 1,
                    name:'坤源',
                    code:'01-00-00-00-00',
                    label: 'level1',
                    children: [{
                        id: 4,
                        name:'水',
                        code:'01-01-00-00-00',
                        label: 'level2',
                        children: [{
                            id: 9,
                            name:'分户',
                            code:'01-01-01-00-00',
                            label: 'level3'
                        }, {
                            id: 10,
                            name:'分项',
                            code:'01-01-02-00-00',
                            label: 'level3'
                        }]
                    }]
                }, {
                    id: 2,
                    name:'康恩贝',
                    code:'02-00-00-00-00',
                    label: 'level1',
                    children: [{
                        id: 5,
                        name:'气',
                        code:'02-01-00-00-00',
                        label: 'level2'
                    }, {
                        id: 6,
                        name:'电',
                        code:'02-02-00-00-00',
                        label: 'level2'
                    }]
                }, {
                    id: 3,
                    name:'大华',
                    code:'03-00-00-00-00',
                    label: 'level1',
                    children: [{
                        id: 7,
                        name:'电',
                        code:'03-01-00-00-00',
                        label: 'level2'
                    }, {
                        id: 8,
                        name:'气',
                        code:'03-02-00-00-00',
                        label: 'level2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'name'
                    },
                dialogTableVisible: false,
                gridData: [{
                    code: '01',
                    name: '水',
                    level: 'level2'
                }, {
                    code: '02',
                    name: '气',
                    level: 'level2'
                }],
                appendData:[],
                appendStore:[]
            }
        },

        methods: {
            openAppend(store, data) {
                this.appendData = data;
                this.appendStore = store;
                if(data.label=='level1'){
                    this.gridData=[{
                        code: '01',
                        name: '水',
                        level: 'level2'
                    }, {
                        code: '02',
                        name: '气',
                        level: 'level2'
                    }
                    ];
                }else if (data.label=='level2') {
                    this.gridData=[
                        {
                            code: '01',
                            name: '分项',
                            level: 'level3'
                        }, {
                            code: '02',
                            name: '分户',
                            level: 'level3'
                        }
                    ]
                }else {
                    this.gridData = [];
                }
                this.dialogTableVisible = true;
            },
            append(){
                this.dialogTableVisible = false;
                this.appendStore.append({ id: id++, label: 'testtest',code:'00-00-00-00-00', name:'临时', children: [] }, this.appendData);
            },
            renderContent(h, { node, data, store }) {
                return (
                    <span>
                        <span>
                            <span>{node.label}</span>
                        </span>
                        <span style="float: right; margin-right: 20px">
                            <el-button size="mini" on-click={ () => this.openAppend(store, data) }>添加</el-button>
                            <el-button size="mini" on-click={ () => this.openRemove(store, data) }>删除</el-button>
                        </span>
                    </span>);
            },
            openRemove(store, data) {
                this.$confirm('确认要删除 '+data.label+' 内容吗？', '提示信息', {
                    confirmButtonText: '确定',
                    type: 'warning'
                }).then(() => {
                    store.remove(data);
                })
            },
            handleSelectionChange(val) {
                console.log(val);
                this.multipleSelection = val;
            }
        }
    };
</script>