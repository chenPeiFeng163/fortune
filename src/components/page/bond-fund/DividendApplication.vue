<template>
    <!-- 派息申请 -->
    <div class="table">
        <div class="container">
            <div class="handle-box">
                <el-form>
                    <table class="table-condition">
                        <tr>
                            <th width="90">派息频率：</th>
                            <td>
                                <el-radio-group>
                                    <el-radio label="0">每月</el-radio>
                                    <el-radio label="1">每季</el-radio>
                                    <el-radio label="2">每年</el-radio>
                                </el-radio-group>
                            </td>
                            <th width="100">证书编号：</th>
                            <td>
                                <el-input class="text"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>可申请：</th>
                            <td>
                                <el-radio-group>
                                    <el-radio label="0">可申请</el-radio>
                                    <el-radio label="1">暂时剔除</el-radio>
                                </el-radio-group>
                            </td>
                            <th>持有人：</th>
                            <td>
                                <el-input class="text"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>币种：</th>
                            <td>
                                <el-radio-group>
                                    <el-radio label="0">HKD</el-radio>
                                    <el-radio label="1">CNY</el-radio>
                                    <el-radio label="2">USD</el-radio>
                                    <el-radio label="3">MOP</el-radio>
                                </el-radio-group>
                            </td>
                            <th>派息总合约数：</th>
                            <td>
                                <strong>1,200</strong>
                            </td>
                        </tr>
                        <tr>
                            <th>派息总金额：</th>
                            <td>
                                <strong>HKD2,005,456</strong>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" align="center">
                                <el-button type="primary" @click="search">搜索</el-button>
                                <el-button type="success">计息</el-button>
                                <el-button type="info">导出Excel</el-button>
                                <el-button type="primary">提交申请</el-button>
                                <el-button type="danger">剔除</el-button>
                                <el-button type="info" @click="colseRouter">关闭</el-button>
                            </td>
                        </tr>
                    </table>
                </el-form>
            </div>
            <el-table :data="data" border style="width:100%">
                <el-table-column prop="certificateNo" label="证书编号" align="center">
                </el-table-column>
                <el-table-column prop="possessor" label="持有人" align="center">
                </el-table-column>
                <el-table-column prop="couponFrequency" label="派息频率" align="center">
                </el-table-column>
                <el-table-column prop="couponMoney" label="派息金额" align="center">
                </el-table-column>
                <el-table-column prop="bearingTime" label="计息时段" align="center">
                </el-table-column>
                <el-table-column prop="principal" label="本金" align="center">
                </el-table-column>
                <el-table-column prop="reject" label="是否暂时剔除" align="center">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger">剔除</el-button>
                        <el-button size="mini" type="primary" @click="handleLook(scope.$index, scope.row)">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>

        <!-- 查看弹出框 -->
        <el-dialog title="派息申请" class="dialog-big" :visible.sync="lookVisible" :close-on-click-modal="false">
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data01.png" />基础信息</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th width="100">认购证号：</th>
                            <td>
                                <strong>201509213213AGDF</strong>
                            </td>
                            <th width="70">持有人：</th>
                            <td>
                                <strong>王大亮</strong>
                            </td>
                        </tr>
                        <tr>
                            <th>申购日期：</th>
                            <td>16/09/2015</td>
                            <th>本金：</th>
                            <td>HK200,000</td>
                        </tr>
                        <tr>
                            <th>起息日：</th>
                            <td>21/09/2015</td>
                            <th>利率：</th>
                            <td>7.8%</td>
                        </tr>
                        <tr>
                            <th>到期日：</th>
                            <td>21/07/2018</td>
                            <th>派息方式：</th>
                            <td>按月付</td>
                        </tr>
                        <tr>
                            <th>合约类型：</th>
                            <td>单名合约</td>
                            <th>本次利息：</th>
                            <td>HHK1,200.23</td>
                        </tr>
                        <tr>
                            <th>本次计息时段：</th>
                            <td>01/06/2018 - 30/06/2018</td>
                            <th>店铺：</th>
                            <td>西环许氏</td>
                        </tr>
                        <tr>
                            <th>介绍人：</th>
                            <td>张三</td>
                            <th>店长：</th>
                            <td>李四</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data11.png" />收款信息</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th width="70">银行名称：</th>
                            <td>花旗银行</td>
                            <td rowspan="4">
                                <img src="static/img/img.jpg" />
                            </td>
                        </tr>
                        <tr>
                            <th>银行分行：</th>
                            <td>中环分行</td>
                        </tr>
                        <tr>
                            <th>账户编号：</th>
                            <td>5689 5544 4856 6611</td>
                        </tr>
                        <tr>
                            <th>账号名称：</th>
                            <td>Zhang Xian Sheng</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data01.png" />联络信息</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th width="90">居住地址：</th>
                            <td></td>
                            <th width="120">通讯地址：</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>邮政编码：</th>
                            <td></td>
                            <th>邮政编码：</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>手提电话：</th>
                            <td></td>
                            <th>Email：</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>紧急联络人：</th>
                            <td></td>
                            <th>紧急联络人电话：</th>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data08.png" />附件</div>
                <div class="body">
                    <ul class="img-list">
                        <li>
                            <img src="static/img/img.jpg" />
                            <p>证书</p>
                        </li>
                        <li>
                            <img src="static/img/img.jpg" />
                            <p>保本函</p>
                        </li>
                        <li>
                            <img src="static/img/img.jpg" />
                            <p>个人证件</p>
                        </li>
                        <li>
                            <img src="static/img/img.jpg" />
                            <p>申购申请签字</p>
                        </li>
                        <li>
                            <img src="static/img/img.jpg" />
                            <p>客户地址</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data02.png" />派息记录</div>
                <div class="body">
                    <table class="table-record">
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>日期</th>
                                <th>金额</th>
                                <th>备注</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>21/12/2015</td>
                                <td>港币2010.00</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>21/03/2016</td>
                                <td>港币2010.00</td>
                                <td></td>
                            </tr>
                        </tbody>
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
                                <th>操作时间</th>
                                <th>处理说明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="cur">
                                <td>提交申请</td>
                                <td></td>
                                <td>赵杰科</td>
                                <td>2018-06-28 10:23</td>
                                <td></td>
                            </tr>
                            <tr class="not">
                                <td>账务部复核</td>
                                <td>待审批</td>
                                <td>张三</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr class="not">
                                <td>资金部复核</td>
                                <td>待审批</td>
                                <td>李四</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Suki</td>
                                <td></td>
                                <td>Suki</td>
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
                cur_page: 1,
                tableData: [],
                lookVisible: false,
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
                this.$axios.get('./static/data/bond-fund/dividendapplication.json', {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data.list;
                })
            },
            search() {
                
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
    .table-condition {
        width: 100%;
        font-size: 14px;
        color: #606266;
    }
    .table-condition th,
    .table-condition td {
        padding-bottom: 10px;
    }
    .table-condition th {
        font-weight: normal;
        text-align: right;
    }
    .table-condition td .text {
        width: 220px;
    }
    .img-list {
        margin: 30px;
        overflow: hidden;
    }
    .img-list li {
        float: left;
        padding: 0 10px;
        text-align: center;
    }
</style>
