<%--  Created by IntelliJ IDEA.
  User: seven.li
  Date: 2017/9/1
  Time: 15:58 
  Emali: fighting20xx@126.com   --%>    

<template>
    <el-dialog title="请输入项目信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="项目名称"  >
                <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="项目编码"  >
                <el-input v-model="form.code" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="活动区域"  >
                <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>


</script>
<style>


</style>