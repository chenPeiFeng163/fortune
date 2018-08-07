<template>
    <!-- 客户管理 -->
    <div class="table">
        <div class="container">
            <div class="handle-box">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="地区">
                        <el-select v-model="select_region" placeholder="请选择" class="handle-select mr10">
                            <el-option v-for="(item, index) in regionList" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="名称" class="mr20">
                        <el-input v-model="name" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-checkbox-group v-model="stateCheckbox" class="mr10">
                            <el-checkbox label="注册" name="state"></el-checkbox>
                            <el-checkbox label="待校验" name="state"></el-checkbox>
                            <el-checkbox label="已校验" name="state"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">搜索</el-button>
                        <el-button type="info">导入</el-button>
                    </el-form-item>
                </el-form>
                <div class="clear" align="right">
                    <el-button type="success" size="mini" @click="handleAdd()">新增</el-button>
                </div>
            </div>
            <el-table :data="data" border style="width:100%" ref="multipleTable">
                <el-table-column type="selection" width="40" align="center"></el-table-column>
                <el-table-column prop="name" label="名称" align="center">
                </el-table-column>
                <el-table-column prop="region" label="地区" align="center">
                </el-table-column>
                <el-table-column prop="mobile" label="联络电话" align="center">
                </el-table-column>
                <el-table-column prop="site" label="联络地址" align="center">
                </el-table-column>
                <el-table-column prop="source" label="来源" align="center">
                </el-table-column>
                <el-table-column prop="state" label="状态" width="120" align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.state == 3">注册</span>
                        <span v-else-if="scope.row.state == 2">已审核</span>
                        <span v-else-if="scope.row.state == 1">待审核</span>
                        <span v-else>编辑中</span>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'customermanagement',
        data() {
            return {
                select_region: '',
                regionList: [
                    {
                        label: '中西区',
                        value: '中西区'
                    },
                    {
                        label: '东区',
                        value: '东区'
                    },
                    {
                        label: '南区',
                        value: '南区'
                    }
                ],
                name: '',
                stateCheckbox: [],
                tableData: [],
                cur_page: 1,
                form: {
                    chineseName: '',
                    englishName : '',
                    empNo: '',
                    sex: '',
                    identity: ''
                },
                idx: -1
            }
        },
        created() {
            this.getData();
        },
        computed: {
            data() {
                return this.tableData;
            }
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            getData() {
                this.$axios.get('./static/data/bond-fund/customermanagement.json', {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data.list;
                })
            },
            search() {
                
            },
            handleAdd() {
                this.$router.push('/customermanagementdetails');
            }
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .checkbox-dl {
        margin: 30px 40px;
    }

    .checkbox-dl dt {
        margin-bottom: 10px;
    }

    .checkbox-dl dt .el-checkbox {
        color: #198cff;
    }
</style>
