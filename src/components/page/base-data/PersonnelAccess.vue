<template>
    <!-- 人员权限收回 -->
    <div class="table">
        <div class="container">
            <div class="handle-box">
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="人员所属公司:">
                        <el-select v-model="select_companies" placeholder="请选择" class="handle-select mr10">
                            <el-option v-for="(item, index) in companiesList" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="岗位:">
                        <el-select v-model="select_post" placeholder="请选择" class="handle-select mr10">
                            <el-option v-for="(item, index) in postList" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="权限分类:">
                        <el-select v-model="select_permission_style" placeholder="请选择" class="handle-select mr10">
                            <el-option v-for="(item, index) in permissionStyleList" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="权限:">
                        <el-select v-model="select_permission" placeholder="请选择" class="handle-select mr10">
                            <el-option v-for="(item, index) in permissionList" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="姓名:">
                        <el-input v-model="username" placeholder="请输入" class="mr10"></el-input>
                    </el-form-item>
                    <el-form-item label="收回形式:">
                        <el-checkbox-group v-model="state" class="mr10">
                            <el-checkbox label="指定权限" name="state"></el-checkbox>
                            <el-checkbox label="员工所有权限" name="state"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">搜索</el-button>
                        <el-button type="info" @click="colseRouter">关闭</el-button>
                        <el-button type="warning">收回</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-table :data="data" border style="width: 100%" ref="multipleTable">
                <el-table-column type="selection" width="40" align="center"></el-table-column>
                <el-table-column prop="chineseName" label="中文姓名" width="100" align="center">
                </el-table-column>
                <el-table-column prop="englishName" label="英文名" width="120" align="center">
                </el-table-column>
                <el-table-column prop="empNo" label="员工编号" width="100" align="center">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="100" align="center">
                </el-table-column>
                <el-table-column prop="identity" label="人员所属" align="center">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
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
        <el-dialog title="人员权限收回" class="dialog-big" :visible.sync="lookVisible" :close-on-click-modal="false">
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data01.png" />基础信息</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th>员工：</th>
                            <td>赵杰科</td>
                            <th>员工编号：</th>
                            <td>18070021</td>
                        </tr>
                        <tr>
                            <th>人员所属：</th>
                            <td>
                                <p>许氏兄弟金融公司 [招商局大夏1店] [店长]</p>
                                <p>立桥证券有限公司 [大客户部] [资深经理]</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data05.png" />权限</div>
                <div class="body">
                    <dl class="checkbox-dl">
                        <dt>
                            <el-checkbox>基础资料</el-checkbox>
                        </dt>
                        <dd>
                            <el-checkbox>人员入职申请</el-checkbox>
                            <el-checkbox>人员离职申请</el-checkbox>
                            <el-checkbox>人员权限回收</el-checkbox>
                            <el-checkbox>岗位授权申请</el-checkbox>
                            <el-checkbox>人员维护</el-checkbox>
                        </dd>
                    </dl>
                    <dl class="checkbox-dl">
                        <dt>
                            <el-checkbox>债券基金</el-checkbox>
                        </dt>
                        <dd>
                            <el-checkbox>债券基金产品维护</el-checkbox>
                            <el-checkbox>债券基金申购</el-checkbox>
                        </dd>
                    </dl>
                    <dl class="checkbox-dl">
                        <dt>
                            <el-checkbox>系统设置</el-checkbox>
                        </dt>
                        <dd>
                            <el-checkbox>组织架构维护</el-checkbox>
                            <el-checkbox>岗位维护</el-checkbox>
                        </dd>
                    </dl>
                    <dl class="checkbox-dl">
                        <dt>
                            <el-checkbox>流程设置</el-checkbox>
                        </dt>
                        <dd>
                            <el-checkbox>流程配置</el-checkbox>
                            <el-checkbox>流程角色维护</el-checkbox>
                            <el-checkbox>流程角色人员维护</el-checkbox>
                        </dd>
                    </dl>
                </div>
            </div>
            <div slot="footer">
                <el-button size="medium" type="info" @click="lookVisible = false">关闭</el-button>
                <el-button size="medium" type="success">提交</el-button>
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
                companiesList: [
                    {
                        label: '许氏兄弟金融公司',
                        value: '许氏兄弟金融公司'
                    },
                    {
                        label: '立桥证券有限公司',
                        value: '立桥证券有限公司'
                    },
                    {
                        label: '立桥银行股份有限公司',
                        value: '立桥银行股份有限公司'
                    },
                    {
                        label: '立桥金融股份有限公司',
                        value: '立桥金融股份有限公司'
                    }
                ],
                select_post: '',
                postList: [
                    {
                        label: '业务经理',
                        value: '业务经理'
                    },
                    {
                        label: '店长',
                        value: '店长'
                    },
                    {
                        label: '业务总监',
                        value: '业务总监'
                    }
                ],
                select_permission_style: '',
                permissionStyleList: [
                    {
                        label: '基础资料',
                        value: '基础资料'
                    },
                    {
                        label: '系统设置',
                        value: '系统设置'
                    }
                ],
                select_permission: '',
                permissionList: [
                    {
                        label: '组织架构维护',
                        value: '组织架构维护'
                    },
                    {
                        label: '岗位维护',
                        value: '岗位维护'
                    }
                ],
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
