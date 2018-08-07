<template>
    <!-- 合约管理 -->
    <div class="table">
        <div class="container">
            <div class="handle-box">
                <a class="analyze-a" href="##">合约分析</a>
                <el-form :inline="true">
                    <el-form-item label="区域">
                        <el-select v-model="select_area" multiple collapse-tags placeholder="请选择" class="handle-select mr10">
                            <el-option v-for="(item, index) in areaList" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="地区">
                        <el-select v-model="select_region" multiple collapse-tags placeholder="请选择" class="handle-select mr10">
                            <el-option v-for="(item, index) in regionList" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="客户名称">
                        <el-input v-model="customer_name" class="handle-select mr10"></el-input>
                    </el-form-item>
                    <el-form-item label="介绍人">
                        <el-input v-model="introducer" class="handle-select mr10"></el-input>
                    </el-form-item>
                    <el-form-item label="状态" class="mr20">
                        <el-checkbox-group v-model="stateCheckbox">
                            <el-checkbox label="客户资料待审查(4)" name="state"></el-checkbox>
                            <el-checkbox label="待审批(15)" name="state"></el-checkbox>
                            <el-checkbox label="正常(130)" name="state"></el-checkbox>
                            <el-checkbox label="过期(2)" name="state"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="产品">
                        <el-select v-model="select_product" placeholder="请选择" class="handle-select mr10">
                            <el-option v-for="(item, index) in productList" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">搜索</el-button>
                    </el-form-item>
                    <div>
                        <el-form-item label="生效日期">
                            <el-button>一周内</el-button>
                            <el-button>一月内</el-button>
                            <el-button class="mr10">三月内</el-button>
                            <el-select v-model="select_begin_value_date" placeholder="请选择" class="handle-select mr10">
                                <el-option v-for="(item, index) in beginValueDateList" :key="index" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                            至
                            <el-select v-model="select_end_value_date" placeholder="请选择" class="handle-select ml10 mr10">
                                <el-option v-for="(item, index) in endValueDateList" :key="index" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="产品年限">
                            <el-select v-model="select_term" placeholder="请选择" class="handle-select mr10">
                                <el-option v-for="(item, index) in termList" :key="index" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="付息方式">
                            <el-select v-model="select_int_payment" placeholder="请选择" class="handle-select mr10">
                                <el-option v-for="(item, index) in intPaymentList" :key="index" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item label="到期日期">
                            <el-button>一周内</el-button>
                            <el-button>一月内</el-button>
                            <el-button class="mr10">三月内</el-button>
                            <el-select v-model="select_begin_due_date" placeholder="请选择" class="handle-select mr10">
                                <el-option v-for="(item, index) in beginDueDateList" :key="index" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                            至
                            <el-select v-model="select_end_due_date" placeholder="请选择" class="handle-select ml10 mr10">
                                <el-option v-for="(item, index) in endDueDateList" :key="index" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="金额">
                            <el-input v-model="begin_money" class="handle-select mr10"></el-input>
                            至
                            <el-input v-model="end_money" class="handle-select ml10"></el-input>
                            万元
                        </el-form-item>
                    </div>
                </el-form>
            </div>
            <el-table :data="data" border style="width:100%">
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
                select_area: '',
                areaList: [
                    {
                        label: '香港线',
                        value: '香港线'
                    },
                    {
                        label: '旺角线',
                        value: '旺角线'
                    },
                    {
                        label: '上水线',
                        value: '上水线'
                    }
                ],
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
                customer_name: '',
                introducer: '',
                stateCheckbox: [],
                select_product: '',
                productList: [
                    {
                        label: '年年稳VI_HKD',
                        value: '年年稳VI_HKD'
                    },
                    {
                        label: '年年稳VI_RMB',
                        value: '年年稳VI_RMB'
                    },
                    {
                        label: '年年稳VI_USD',
                        value: '年年稳VI_USD'
                    },
                    {
                        label: '月月赢-HKD',
                        value: '月月赢-HKD'
                    }
                ],
                select_begin_value_date: '',
                beginValueDateList: [
                    {
                        label: '2018-1-1',
                        value: '2018-1-1'
                    }
                ],
                select_end_value_date: '',
                endValueDateList: [
                    {
                        label: '2018-1-1',
                        value: '2018-1-1'
                    }
                ],
                select_term: '',
                termList: [
                    {
                        label: '3个月',
                        value: '3个月'
                    },
                    {
                        label: '6个月',
                        value: '6个月'
                    },
                    {
                        label: '1年',
                        value: '1年'
                    },
                    {
                        label: '2年',
                        value: '2年'
                    },
                    {
                        label: '3年',
                        value: '3年'
                    },
                    {
                        label: '4年',
                        value: '4年'
                    },
                    {
                        label: '5年',
                        value: '5年'
                    }
                ],
                select_int_payment: '',
                intPaymentList: [
                    {
                        label: '按月',
                        value: '按月'
                    },
                    {
                        label: '按季',
                        value: '按季'
                    },
                    {
                        label: '按年',
                        value: '按年'
                    },
                    {
                        label: '一次性',
                        value: '一次性'
                    }
                ],
                select_begin_due_date: '',
                beginDueDateList: [
                    {
                        label: '2018-1-1',
                        value: '2018-1-1'
                    }
                ],
                select_end_due_date: '',
                endDueDateList: [
                    {
                        label: '2018-1-1',
                        value: '2018-1-1'
                    }
                ],
                begin_money: '',
                end_money: '',
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
                this.$axios.get('./static/data/bond-fund/contractmanagement.json', {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data.list;
                })
            },
            search() {
                
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
