<template>
    <!-- 人员离职申请 -->
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
                    <el-form-item label="流程状态:">
                        <el-checkbox-group v-model="flow_state">
                            <el-checkbox label="审批中" name="state"></el-checkbox>
                            <el-checkbox label="审批完成" name="state"></el-checkbox>
                            <el-checkbox label="否决" name="state"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search">搜索</el-button>
                        <el-button type="info" @click="colseRouter">关闭</el-button>
                    </el-form-item>
                </el-form>
                <div class="clear" align="right">
                    <el-button type="success" size="mini" @click="handleAdd()">新增</el-button>
                </div>
            </div>
            <el-table :data="data" border style="width: 100%" ref="multipleTable">
                <el-table-column prop="chineseName" label="中文姓名" width="100" align="center">
                </el-table-column>
                <el-table-column prop="englishName" label="英文名" width="120" align="center">
                </el-table-column>
                <el-table-column prop="empNo" label="员工编号" width="100" align="center">
                </el-table-column>
                <el-table-column prop="personnelBelongs" label="人员所属" align="center">
                </el-table-column>
                <el-table-column prop="applicationCon" label="申请时间/申请人" align="center">
                </el-table-column>
                <el-table-column prop="currentNodes" label="当前节点" width="120" align="center">
                </el-table-column>
                <el-table-column prop="currentOperator" label="当前操作人" width="100" align="center">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <input type="hidden" :value="scope.row.flowState" />
                        <el-button size="mini" type="primary" @click="handleLook(scope.$index, scope.row)">查看</el-button>
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>

        <!-- 新增弹出框 -->
        <el-dialog title="人员离职申请 - 新增" class="dialog-big" :visible.sync="addVisible" :close-on-click-modal="false">
            <div>
                <el-form :inline="true" class="demo-form-inline">
                    <el-form-item label="姓名：">
                        <el-input placeholder="输入姓名搜索"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">搜索</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data01.png" />基础信息</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th width="120">员工编号：</th>
                            <td>18070021</td>
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
                            <td width="80">
                                 <el-checkbox>离职</el-checkbox>
                            </td>
                        </tr>
                        <tr>
                            <th width="80">所在公司：</th>
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
                            <td width="80">
                                 <el-checkbox>离职</el-checkbox>
                            </td>
                        </tr>
                        <tr>
                            <th width="80">所在公司：</th>
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
                    <table class="table-data">
                        <tr>
                            <th width="80">申请说明：</th>
                            <td>
                                <textarea class="textarea"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>最後工作日期，由審批人在審批流程中填寫，他線下與離職員工溝通</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div slot="footer">
                <el-button type="info" @click="addVisible = false">关闭</el-button>
                <el-button type="success" @click="saveAdd">提交</el-button>
            </div>
        </el-dialog>

        <!-- 查看弹出框 -->
        <el-dialog title="人员离职申请 - 查看" class="dialog-big" :visible.sync="lookVisible" :close-on-click-modal="false">
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data01.png" />基础信息</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th width="120">员工编号：</th>
                            <td>18070021</td>
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
                            <th width="80">所在公司：</th>
                            <td width="45%">许氏兄弟金融集团</td>
                            <th width="100">所在部门：</th>
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
                            <th colspan="4" class="fl">
                                 <el-tag type="danger">离职</el-tag>
                            </th>
                        </tr>
                        <tr>
                            <th width="80">所在公司：</th>
                            <td width="45%">立桥证券有限公司</td>
                            <th width="100">所在部门：</th>
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
                    <table class="table-data">
                        <tr>
                            <th width="80">申请说明：</th>
                            <td>人原因辞职。只是辞去立桥证券职位，许氏兄弟金融集团身份不变。</td>
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
            <!--<div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data02.png" />处理操作</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th width="70">申请说明：</th>
                            <td>
                                <textarea class="textarea"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>-->
            <div slot="footer">
                <el-button size="medium" type="info" @click="lookVisible = false">关闭</el-button>
            </div>
        </el-dialog>

        <!-- 编辑弹出框 -->
        <el-dialog title="人员离职申请 - 编辑" class="dialog-big" :visible.sync="editVisible" :close-on-click-modal="false">
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data01.png" />基础信息</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th>中文名：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                            <th>英文名显示格式：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>性别：</th>
                            <td>
                                <el-radio v-model="sex" label="男">男</el-radio>
                                <el-radio v-model="sex" label="女">女</el-radio>
                                <el-radio v-model="sex" label="未知">未知</el-radio>
                            </td>
                            <th>英文名：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>出生日期：</th>
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
                            <th>称谓：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>婚姻状态：</th>
                            <td>
                                <el-radio v-model="marital" label="已婚">已婚</el-radio>
                                <el-radio v-model="marital" label="未婚">未婚</el-radio>
                            </td>
                            <th>别名：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>强积金生效：</th>
                            <td>
                                <el-radio label="是">是</el-radio>
                                <el-radio label="否">否</el-radio>
                            </td>
                            <th>证件发出国家/地区：</th>
                            <td>
                                <el-select placeholder="请选择">
                                    <el-option></el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <th>假期类型：</th>
                            <td>
                                <el-radio label="劳工假">劳工假</el-radio>
                                <el-radio label="银行假">银行假</el-radio>
                            </td>
                            <th>身份证明文件类型：</th>
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
                            <th>身份证明文件号码：</th>
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
                <div class="head"><img class="icon" src="static/img/comm/icon_data03.png" />联系方式</div>
                <div class="body">
                    <table class="table-data">
                        <tr>
                            <th>个人手机号码：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                            <th>E-Mail：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>紧急联系人：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                            <th>紧急联系电话：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>紧急联系人关系：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                            <th>香港地区：</th>
                            <td>
                                <el-select placeholder="请选择">
                                    <el-option></el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <th>地址类别：</th>
                            <td>
                                <el-radio label="地址">地址</el-radio>
                                <el-radio label="联系地址">联系地址</el-radio>
                            </td>
                            <th>地址：</th>
                            <td>
                                <el-input placeholder="请输入"></el-input>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="look-module">
                <div class="head"><img class="icon" src="static/img/comm/icon_data01.png" />人员所属<el-button class="ml10" size="mini" type="success">新增</el-button></div>
                <div class="body">
                    <div class="item-add">
                        <el-button class="btn-del" size="mini" type="danger">删除</el-button>
                        <table class="table-data">
                            <tr>
                                <th>所在公司：</th>
                                <td>
                                    <el-select placeholder="请选择">
                                        <el-option></el-option>
                                    </el-select>
                                </td>
                                <th>所在部门：</th>
                                <td>
                                    <el-select class="mr10" placeholder="请选择">
                                        <el-option></el-option>
                                    </el-select>
                                    <el-select placeholder="请选择">
                                        <el-option></el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <th>岗位：</th>
                                <td>
                                    <el-select placeholder="请选择">
                                        <el-option></el-option>
                                    </el-select>
                                </td>
                                <th>是部门负责人：</th>
                                <td>
                                    <el-checkbox></el-checkbox>
                                </td>
                            </tr>
                            <tr>
                                <th>离职日期：</th>
                                <td>
                                    <el-date-picker type="date" placeholder="选择日期">
                                    </el-date-picker>
                                </td>
                                <th>试用期长度：</th>
                                <td>
                                    <el-select placeholder="请选择">
                                        <el-option></el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <th>工作类别：</th>
                                <td>
                                    <el-radio label="全职">全职</el-radio>
                                    <el-radio label="兼职">兼职</el-radio>
                                </td>
                                <th>通知期长度：</th>
                                <td>
                                    <el-select placeholder="请选择">
                                        <el-option></el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <th>是否签劳务合同：</th>
                                <td>
                                    <el-radio label="签">签</el-radio>
                                    <el-radio label="不签">不签</el-radio>
                                </td>
                                <th>是否发薪：</th>
                                <td>
                                    <el-radio label="发">发</el-radio>
                                    <el-radio label="不发">不发</el-radio>
                                </td>
                            </tr>
                            <tr>
                                <th>发薪周期：</th>
                                <td>
                                    <el-radio label="月">月</el-radio>
                                    <el-radio label="季度">季度</el-radio>
                                </td>
                                <th>工资类型：</th>
                                <td>
                                    <el-radio label="薪金">薪金</el-radio>
                                    <el-radio label="顾问费">顾问费</el-radio>
                                    <el-radio label="佣金">佣金</el-radio>
                                </td>
                            </tr>
                            <tr>
                                <th>薪金：</th>
                                <td>
                                    <div class="demo-input-suffix">
                                        <el-input class="w-auto mr10" placeholder="请输入"></el-input>
                                        <el-select placeholder="请选择">
                                            <el-option></el-option>
                                        </el-select>
                                    </div>
                                </td>
                                <th>计算方法：</th>
                                <td>
                                    <el-input placeholder="请输入"></el-input>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="item-add">
                        <el-button class="btn-del" size="mini" type="danger">删除</el-button>
                        <table class="table-data">
                            <tr>
                                <th>所在公司：</th>
                                <td>
                                    <el-select placeholder="请选择">
                                        <el-option></el-option>
                                    </el-select>
                                </td>
                                <th>所在部门：</th>
                                <td>
                                    <el-select class="mr10" placeholder="请选择">
                                        <el-option></el-option>
                                    </el-select>
                                    <el-select placeholder="请选择">
                                        <el-option></el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <th>岗位：</th>
                                <td>
                                    <el-select placeholder="请选择">
                                        <el-option></el-option>
                                    </el-select>
                                </td>
                                <th>是部门负责人：</th>
                                <td>
                                    <el-checkbox></el-checkbox>
                                </td>
                            </tr>
                            <tr>
                                <th>离职日期：</th>
                                <td>
                                    <el-date-picker type="date" placeholder="选择日期">
                                    </el-date-picker>
                                </td>
                                <th>试用期长度：</th>
                                <td>
                                    <el-select placeholder="请选择">
                                        <el-option></el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <th>工作类别：</th>
                                <td>
                                    <el-radio label="全职">全职</el-radio>
                                    <el-radio label="兼职">兼职</el-radio>
                                </td>
                                <th>通知期长度：</th>
                                <td>
                                    <el-select placeholder="请选择">
                                        <el-option></el-option>
                                    </el-select>
                                </td>
                            </tr>
                            <tr>
                                <th>是否签劳务合同：</th>
                                <td>
                                    <el-radio label="签">签</el-radio>
                                    <el-radio label="不签">不签</el-radio>
                                </td>
                                <th>是否发薪：</th>
                                <td>
                                    <el-radio label="发">发</el-radio>
                                    <el-radio label="不发">不发</el-radio>
                                </td>
                            </tr>
                            <tr>
                                <th>发薪周期：</th>
                                <td>
                                    <el-radio label="月">月</el-radio>
                                    <el-radio label="季度">季度</el-radio>
                                </td>
                                <th>工资类型：</th>
                                <td>
                                    <el-radio label="薪金">薪金</el-radio>
                                    <el-radio label="顾问费">顾问费</el-radio>
                                    <el-radio label="佣金">佣金</el-radio>
                                </td>
                            </tr>
                            <tr>
                                <th>薪金：</th>
                                <td>
                                    <div class="demo-input-suffix">
                                        <el-input class="w-auto mr10" placeholder="请输入"></el-input>
                                        <el-select placeholder="请选择">
                                            <el-option></el-option>
                                        </el-select>
                                    </div>
                                </td>
                                <th>计算方法：</th>
                                <td>
                                    <el-input placeholder="请输入"></el-input>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <el-button type="info" @click="editVisible = false">关闭</el-button>
                <el-button type="success" @click="saveEdit">提交</el-button>
            </div>
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'outapplication',
        data() {
            return {
                tableData: [],
                cur_page: 1,
                select_companies: '',
                select_post: '',
                username: '',
                is_search: false,
                addVisible: false,
                lookVisible: false,
                editVisible: false,
                delVisible: false,
                flow_state: [],
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
                    personnelBelongs: '',
                    applicationCon: '',
                    currentNodes: '',
                    currentOperator: '',
                    flowState: ''
                },
                idx: -1
            }
        },
        created() {
            this.getData();
        },
        computed: {
            data() {
                return this.tableData.filter((d) => {
                    //console.log(this.flow_state.includes(d.flowState));
                    if (d.personnelBelongs.indexOf(this.select_companies) > -1 && 
                        d.personnelBelongs.indexOf(this.select_post) > -1 && 
                        d.chineseName.indexOf(this.username) > -1 
                    ) { 
                        return d;
                    }
                })
            }
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            getData() {
                this.$axios.get('./static/data.json', {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data.list;
                })
            },
            search() {
                this.is_search = true;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleAdd() {
                this.addVisible = true;
            },
            handleLook(index, row) {
                this.idx = index;
                this.lookVisible = true;
            },
            handleEdit(index, row) {
                this.idx = index;
                const item = this.tableData[index];
                this.form = {
                    chineseName: item.chineseName,
                    englishName: item.englishName,
                    empNo: item.empNo,
                    personnelBelongs: item.personnelBelongs,
                    applicationCon: item.applicationCon,
                    currentNodes: item.currentNodes,
                    currentOperator: item.currentOperator
                }
                this.editVisible = true;
            },
            handleDelete(index, row) {
                this.idx = index;
                this.delVisible = true;
            },
            saveAdd() {

            },
            saveEdit() {
                this.$set(this.tableData, this.idx, this.form);
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx+1} 行成功`);
            },
            deleteRow(){
                this.tableData.splice(this.idx, 1);
                this.$message.success('删除成功');
                this.delVisible = false;
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
