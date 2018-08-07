<template>
    <!-- 人员维护 -->
    <div class="table">
        <div class="container">
            <div class="handle-box">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="人员所属公司:">
                        <el-select v-model="select_companies" placeholder="请选择" class="handle-select mr10">
                            <el-option key="1" label="王" value="王"></el-option>
                            <el-option key="2" label="张" value="张"></el-option>
                            <el-option key="3" label="李" value="李"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="岗位:">
                        <el-select v-model="select_post" placeholder="请选择" class="handle-select mr10">
                            <el-option key="1" label="上环线" value="上环线"></el-option>
                            <el-option key="2" label="业务经理" value="业务经理"></el-option>
                            <el-option key="3" label="账务经理" value="账务经理"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="姓名:">
                        <el-input v-model="username" placeholder="请输入" class="mr10"></el-input>
                    </el-form-item>
                    <el-form-item label="状态:">
                        <el-checkbox-group v-model="state">
                            <el-checkbox label="在职" name="state"></el-checkbox>
                            <el-checkbox label="离职" name="state"></el-checkbox>
                            <el-checkbox label="离职中" name="state"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">搜索</el-button>
                        <el-button type="info" @click="colseRouter">关闭</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-table :data="data" border style="width: 100%" ref="multipleTable">
                <el-table-column prop="chineseName" label="中文姓名" width="100" align="center">
                </el-table-column>
                <el-table-column prop="englishName" label="英文名" width="120" align="center">
                </el-table-column>
                <el-table-column prop="empNo" label="员工编号" width="100" align="center">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="100" align="center">
                </el-table-column>
                <el-table-column prop="identity" label="身份" align="center">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="handleLook(scope.$index, scope.row)">查看</el-button>
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>

        <!-- 查看弹出框 -->
        <el-dialog title="人员维护" class="dialog-big" :visible.sync="lookVisible" :close-on-click-modal="false">
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data01.png" />基础信息</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th>员工编号：</th>
                            <td>18070021</td>
                        </tr>
                        <tr>
                            <th>中文姓名：</th>
                            <td>张自松</td>
                            <th>英文姓名：</th>
                            <td>Mike</td>
                        </tr>
                        <tr>
                            <th>性别：</th>
                            <td>男</td>
                            <th>出生日期：</th>
                            <td>24/09/1991</td>
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
            <div slot="footer">
                <el-button size="medium" type="info" @click="lookVisible = false">关闭</el-button>
            </div>
        </el-dialog>

        <!-- 编辑弹出框 -->
        <el-dialog title="人员维护" class="dialog-big" :visible.sync="editVisible" :close-on-click-modal="false">
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data01.png" />基础信息</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th>员工编号：</th>
                            <td v-text="form.empNo"></td>
                        </tr>
                        <tr>
                            <th><i class="asterisk">*</i>中文名：</th>
                            <td>
                                <el-input placeholder="请输入" :value="form.chineseName"></el-input>
                            </td>
                            <th>英文姓名：</th>
                            <td>
                                <el-input placeholder="请输入" :value="form.englishName"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th><i class="asterisk">*</i>性别：</th>
                            <td>
                                <el-radio v-model="form.sex" label="男">男</el-radio>
                                <el-radio v-model="form.sex" label="女">女</el-radio>
                                <el-radio v-model="form.sex" label="未知">未知</el-radio>
                            </td>
                            <th><i class="asterisk">*</i>出生日期：</th>
                            <td>
                                <el-select v-model="birthdate" placeholder="请选择">
                                    <el-option
                                    v-for="item in birthdateList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <th><i class="asterisk">*</i>手机：</th>
                            <td>
                                <el-input placeholder="请输入" value="00852-62537482"></el-input>
                            </td>
                            <th>EMail：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th><i class="asterisk">*</i>紧急联系人：</th>
                            <td>
                                <el-input placeholder="请输入" value="张三"></el-input>
                            </td>
                            <th>紧急联系电话：</th>
                            <td>
                                <el-input placeholder="请输入" value="0086-13594837262"></el-input>
                            </td>
                        </tr>
                         <tr>
                            <th>国家/地区：</th>
                            <td>
                                <el-select placeholder="请选择">
                                    <el-option></el-option>
                                </el-select>
                            </td>
                            <th>宗教信仰：</th>
                            <td>
                                <el-select placeholder="请选择">
                                    <el-option></el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <th><i class="asterisk">*</i>婚姻状态：</th>
                            <td>
                                <el-radio v-model="marital" label="已婚">已婚</el-radio>
                                <el-radio v-model="marital" label="未婚">未婚</el-radio>
                            </td>
                            <th><i class="asterisk">*</i>证件类型：</th>
                            <td>
                                <el-select placeholder="请选择">
                                    <el-option></el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <th>获得学历的学校：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                            <th><i class="asterisk">*</i>证件号码：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>最高学历：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                            <th>专业：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
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
                            <td>招商局大厦1店</td>
                        </tr>
                        <tr>
                            <th>岗位：</th>
                            <td>店长</td>
                            <th>是部门负责人：</th>
                            <td>
                                <el-checkbox></el-checkbox>
                            </td>
                        </tr>
                        <tr>
                            <th>入职日期：</th>
                            <td>09/11/2016</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div slot="footer">
                <el-button type="info" @click="editVisible = false">关闭</el-button>
                <el-button type="success" @click="saveEdit">提交</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'inapplication',
        data() {
            return {
                tableData: [],
                cur_page: 1,
                select_companies: '',
                select_post: '',
                username: '',
                lookVisible: false,
                editVisible: false,
                state: [],
                sex: '',
                birthdate: '',
                birthdateList: [
                    {
                        label: '2018-7-12',
                        value: '2018-7-12'
                    },
                    {
                        label: '2017-9-24',
                        value: '2017-9-24'
                    },
                    {
                        label: '2016-4-8',
                        value: '2016-4-8'
                    }
                ],
                marital: '',
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
                this.$axios.get('./static/data/base-data/staffmaintenance.json', {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data.list;
                })
            },
            search() {
                
            },
            handleLook(index, row) {
                this.idx = index;
                this.lookVisible = true;
            },
            handleEdit(index, row) {
                this.idx = index;
                const item = this.tableData[index];
                this.form = {
                    chineseName: '张小伟',
                    englishName: 'kevin',
                    empNo: 18070021,
                    sex: '男'
                }
                this.editVisible = true;
            },
            saveEdit() {
                this.$set(this.tableData, this.idx, this.form);
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx+1} 行成功`);
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
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
</style>
