<template>
    <!-- 债券基金产品维护 -->
    <div class="table">
        <div class="container">
            <div class="handle-box">
                <el-form :inline="true">
                    <el-form-item label="期数:" class="mr20">
                        <el-input v-model="periods" placeholder="第几期"></el-input>
                    </el-form-item>
                    <el-form-item label="状态:" class="mr20">
                        <el-checkbox-group v-model="stateCheckbox">
                            <el-checkbox label="正常" name="state"></el-checkbox>
                            <el-checkbox label="停止申购" name="state"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">搜索</el-button>
                        <el-button type="info">导出Excel</el-button>
                        <el-button type="info" @click="colseRouter">关闭</el-button>
                    </el-form-item>
                </el-form>
                <div class="clear" align="right">
                    <el-button type="success" size="mini" @click="handleAdd()">新增</el-button>
                </div>
            </div>
            <el-table :data="data" border style="width:100%">
                <el-table-column prop="productID" label="产品编号" align="center" width="160">
                </el-table-column>
                <el-table-column prop="cardinalNumber" label="期数" align="center">
                </el-table-column>
                <el-table-column prop="launchDate" label="上线日期" align="center" width="160">
                </el-table-column>
                <el-table-column prop="updateTimeOperator" label="更新时间/操作人" align="center">
                </el-table-column>
                <el-table-column prop="state" label="状态" width="120" align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.state == 1">正常</span>
                        <span v-else>停止申购</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" v-if="scope.row.state == 1">停止申购</el-button>
                        <el-button size="mini" type="warning" v-else>恢复正常</el-button>
                        <el-button size="mini" type="primary" @click="handleLook(scope.$index, scope.row)">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>

        <!-- 新增弹出框 -->
        <el-dialog title="债券基金产品维护" class="dialog-big" :visible.sync="addVisible" :close-on-click-modal="false" width="50%">
            <div>
                <el-form :inline="true">
                    <el-form-item label="期数：">
                        <el-input placeholder="许氏兄弟金融债券第201709期"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="look-module no-border">
                <div class="head">香港单</div>
                <div class="body">
                    <table class="table-deadline">
                        <thead>
                            <tr>
                                <th>期限</th>
                                <th>3个月</th>
                                <th>6个月</th>
                                <th>1年</th>
                                <th>2年</th>
                                <th>3年</th>
                                <th>4年</th>
                                <th>5年</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>按月派息</th>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>按季派息</th>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>按年派息</th>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="look-module no-border">
                <div class="head">内地单</div>
                <div class="body">
                    <table class="table-deadline">
                        <thead>
                            <tr>
                                <th>期限</th>
                                <th>3个月</th>
                                <th>6个月</th>
                                <th>1年</th>
                                <th>2年</th>
                                <th>3年</th>
                                <th>4年</th>
                                <th>5年</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>按月派息</th>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>按季派息</th>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>按年派息</th>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-add">
                                        <el-input maxlength="3"></el-input><span class="unit">%</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="hint">本数据如果需要审批，则审批通过后，将不可再修改；如果不需要审批，则提交后即不可修改</div>
            <div slot="footer">
                <el-button type="info" @click="addVisible = false">关闭</el-button>
                <el-button type="success" @click="saveAdd">提交</el-button>
            </div>
        </el-dialog>

        <!-- 查看弹出框 -->
        <el-dialog title="债券基金产品维护" class="dialog-big" :visible.sync="lookVisible" :close-on-click-modal="false">
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data01.png" />基础信息</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th></th>
                            <td></td>
                            <th>流程记录编号：</th>
                            <td>3943654365</td>
                        </tr>
                        <tr>
                            <th>中文姓名：</th>
                            <td>张三</td>
                            <th>英文姓名：</th>
                            <td>Mike</td>
                        </tr>
                        <tr>
                            <th>性别：</th>
                            <td>男</td>
                            <th>出生日期：</th>
                            <td>1991-09-24</td>
                        </tr>
                        <tr>
                            <th>手机：</th>
                            <td>00852-61237878</td>
                            <th>E-Mail：</th>
                            <td>abcde@google.com</td>
                        </tr>
                        <tr>
                            <th>紧急联系人：</th>
                            <td>王麻子</td>
                            <th>紧急联系电话：</th>
                            <td>0086-13789326544</td>
                        </tr>
                        <tr>
                            <th>国家/地区：</th>
                            <td>中国香港</td>
                            <th>宗教信仰：</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>婚姻状况：</th>
                            <td>已婚</td>
                            <th>证件类型：</th>
                            <td>香港身份证</td>
                        </tr>
                        <tr>
                            <th>获得学历的学校：</th>
                            <td>香港中文大学</td>
                            <th>证件号码：</th>
                            <td>2334232445</td>
                        </tr>
                        <tr>
                            <th>最高学历：</th>
                            <td>硕士</td>
                            <th>专业：</th>
                            <td>法律，建筑设计</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data01.png" />人员所属</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th>所在公司：</th>
                            <td>许氏兄弟金融集团</td>
                            <th>所在部门：</th>
                            <td>招商局大夏1店</td>
                        </tr>
                        <tr>
                            <th>岗位：</th>
                            <td>店长</td>
                            <th>是部门负责人：</th>
                            <td>是</td>
                        </tr>
                        <tr>
                            <th>入职日期：</th>
                            <td>2016-09-11</td>
                        </tr>
                    </table>
                    <table class="table-data">
                        <tr>
                            <th>所在公司：</th>
                            <td>立桥证券有限公司</td>
                            <th>所在部门：</th>
                            <td>大客户部</td>
                        </tr>
                        <tr>
                            <th>岗位：</th>
                            <td>资深经理</td>
                            <th>是部门负责人：</th>
                            <td>否</td>
                        </tr>
                        <tr>
                            <th>入职日期：</th>
                            <td>2016-09-11</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data02.png" />流程处理记录</div>
                <div class="body">
                    <table class="table-flow">
                        <thead>
                            <tr>
                                <th>节点名称</th>
                                <th>动作</th>
                                <th>节点操作人</th>
                                <th>操作人身份</th>
                                <th>操作时间</th>
                                <th>处理说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>提交申请</td>
                                <td></td>
                                <td>张青坤</td>
                                <td>集团人事部 人事助理</td>
                                <td>2018-06-28 10:23</td>
                                <td></td>
                            </tr>
                            <tr class="cur">
                                <td>人事部审批</td>
                                <td></td>
                                <td>张青坤</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>流程结束</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div slot="footer">
                <el-button size="medium" type="info" @click="lookVisible = false">关闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'productmaintenance',
        data() {
            return {
                periods: '',
                stateCheckbox: [],
                cur_page: 1,
                tableData: [],
                addVisible: false,
                lookVisible: false,
                editVisible: false,
                delVisible: false,
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
                this.$axios.get('./static/data/productmaintenance.json', {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data.list;
                })
            },
            search() {
                
            },
            handleAdd() {
                this.addVisible = true;
            },
            handleLook(index, row) {
                this.idx = index;
                const item = this.tableData[index];
                this.form = {
                    productID: item.productID,
                    cardinalNumber: item.cardinalNumber,
                    launchDate: item.launchDate,
                    updateTimeOperator: item.updateTimeOperator,
                    state: item.state
                }
                this.lookVisible = true;
            },
            saveAdd() {

            },
            //页面中关闭按钮，关闭当前tag
            colseRouter() {
                this.comm.commColseRouter();
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

    .table-deadline {
        margin-top: 10px;
        width: 100%;
        text-align: center;
        border-collapse: collapse;
    }
    
    .table-deadline th,
    .table-deadline td {
        padding: 10px;
        border: 1px solid #DFDFDF;
    }
    
    .table-deadline .input-add {
        display: inline-block;
        margin: 0 auto;   
    }
    .table-deadline .input-add .unit {
        float: left;
        line-height: 32px;
    }

    .table-deadline .input-add .el-input {
        float: left;
        margin-right: 5px;
        width: 55px;
    }

    .hint {
        color: red;
    }
</style>
