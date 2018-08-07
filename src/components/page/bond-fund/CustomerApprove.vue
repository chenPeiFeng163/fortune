<template>
    <!-- 客户资料审批 -->
    <div class="table">
        <div class="container">
            <el-table :data="data" border style="width:100%" row-class-name="bbbb" @row-click="rowClick">
                <el-table-column prop="name" label="姓名" align="center" width="160">
                </el-table-column>
                <el-table-column prop="style" label="类型" align="center">
                </el-table-column>
                <el-table-column prop="source" label="来源" align="center" width="160">
                </el-table-column>
                <el-table-column prop="product" label="产品" align="center">
                </el-table-column>
                <el-table-column prop="deadline" label="期限" align="center">
                </el-table-column>
                <el-table-column prop="payInterest" label="付息" align="center">
                </el-table-column>
                <el-table-column prop="money" label="金额(万)" align="center">
                </el-table-column>
                <el-table-column prop="signDate" label="签约日" align="center">
                </el-table-column>
                <el-table-column prop="valueDate" label="起息日" align="center">
                </el-table-column>
                <el-table-column prop="dueDate" label="到期日" align="center">
                </el-table-column>
                <el-table-column prop="state" label="状态" width="120" align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.state == 2">正常</span>
                        <span v-else-if="scope.row.state == 1">待审批</span>
                        <span v-else>待提交</span>
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
        name: 'productmaintenance',
        data() {
            return {
                cur_page: 1,
                tableData: [],
                form: {
                    productID: '',
                    cardinalNumber : '',
                    launchDate: '',
                    updateTimeOperator: '',
                    state: ''
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
                this.$axios.get('./static/data/bond-fund/customerapprove.json', {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data.list;
                })
            },
            search() {
                
            },
            rowClick(row, event, column) {
                //点击当前行
                this.$router.push('/customerapprovedetails');
            }
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }
    .handle-select {
        width: 140px;
    }
    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .analyze-a {
        display: inline-block;
        margin-bottom: 30px;
        padding: 15px 20px 15px 55px;
        font-size: 18px;
        color: #fff;
        border-radius: 8px;
        background: url("/static/img/comm/icon_data06.png") no-repeat 20px center #198CFF;
    }
</style>
