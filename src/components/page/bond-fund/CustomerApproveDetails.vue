<template>
    <!-- 审批客户资料 -->
    <div class="inside-page">
        <div class="page-head">审批客户资料</div>
        <div class="page-body">
            <div class="data-module">
                <div class="module-head">
                    <img class="icon" src="static/img/comm/icon_data01.png" />
                    <span class="title">基础信息</span>    
                </div>
                <div class="module-body">
                    <table class="table-module">
                        <tr>
                            <th width="60">中文名</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                            <th width="70">出生日期</th>
                            <td>
                                <el-date-picker class="w220" type="date" placeholder="选择日期"></el-date-picker>
                            </td>
                            <th width="60">证件类型</th>
                            <td>
                                <el-select class="w220">
                                    <el-option key="0" label="香港永久居民身份证" value="香港永久居民身份证"></el-option>
                                    <el-option key="1" label="回乡证" value="回乡证"></el-option>
                                    <el-option key="2" label="回港证" value="回港证"></el-option>
                                    <el-option key="3" label="香港特区护照" value="香港特区护照"></el-option>
                                    <el-option key="4" label="大陆居民身份证" value="大陆居民身份证"></el-option>
                                    <el-option key="5" label="大陆护照" value="大陆护照"></el-option>
                                    <el-option key="6" label="港澳通行证" value="港澳通行证"></el-option>
                                    <el-option key="7" label="其它" value="其它"></el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <th>英文名</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                            <th>性别</th>
                            <td>
                                <el-radio-group>
                                    <el-radio-button label="男"></el-radio-button>
                                    <el-radio-button label="女"></el-radio-button>
                                </el-radio-group>
                            </td>
                            <th>证件号码</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>签发日期</th>
                            <td>
                                <el-date-picker class="w220" type="date" placeholder="选择日期"></el-date-picker>
                            </td>
                            <th>证件有效期</th>
                            <td>
                                <el-date-picker class="w220" type="date" placeholder="选择日期"></el-date-picker>
                            </td>
                            <td colspan="2">
                                <el-checkbox>常期有效</el-checkbox>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="6">
                                <ul class="img-list">
                                    <li>
                                        <a href="static/img/temp/t_01.jpg" target="_blank">
                                            <img src="static/img/temp/t_01.jpg" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="static/img/temp/t_0.jpg" target="_blank">
                                            <img src="static/img/temp/t_02.jpg" />
                                        </a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="data-module">
                <div class="module-head">
                    <img class="icon" src="static/img/comm/icon_data01.png" />
                    <span class="title">联络信息</span>    
                </div>
                <div class="module-body">
                    <table class="table-module">
                        <tr>
                            <th width="70">居住地址</th>
                            <td>
                                <el-select class="w120 mr5">
                                    <el-option key="0" label="中国" value="中国"></el-option>
                                </el-select>
                                <el-select class="w120 mr5">
                                    <el-option key="0" label="香港" value="香港"></el-option>
                                </el-select>
                                <el-select class="w120">
                                    <el-option key="0" label="葵青区" value="葵青区"></el-option>
                                </el-select>
                            </td>
                            <th width="70">通讯地址</th>
                            <td>
                                <el-select class="w120 mr5">
                                    <el-option key="0" label="中国" value="中国"></el-option>
                                </el-select>
                                <el-select class="w120 mr5">
                                    <el-option key="0" label="香港" value="香港"></el-option>
                                </el-select>
                                <el-select class="w120">
                                    <el-option key="0" label="葵青区" value="葵青区"></el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <el-input class="textarea" type="textarea" rows="2" resize="none" value="青衣枫树窝路10号青衣邨"></el-input>
                            </td>
                            <td colspan="2">
                                <el-input class="textarea" type="textarea" rows="2" resize="none" value="青衣枫树窝路10号青衣邨"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>邮政编码</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                            <th>邮政编码</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>手提电话</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                            <th>E-Mail</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>紧急联络人</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                            <th>联络电话</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">所有账号书信，将会被送至上述第一客户的联系地址：<el-radio v-model="radio" label="1">电邮E-Mail</el-radio></td>
                        </tr>
                        <tr>
                            <td colspan="6">
                                <ul class="img-list">
                                    <li>
                                        <a href="static/img/temp/t_03.jpg" target="_blank">
                                            <img src="static/img/temp/t_03.jpg" />
                                        </a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="data-module">
                <div class="module-head">
                    <img class="icon" src="static/img/comm/icon_data11.png" />
                    <span class="title">银行账户</span>    
                </div>
                <div class="module-body">
                    <table class="table-module">
                        <tr>
                            <th width="60">银行名称</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                            <th width="60">银行分行</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                        </tr>
                        <tr>
                        <th>账户编号</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                            <th>账户名称</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td></td>
                            <td colspan="2">
                                <p class="red">*收息银行账户证明（必须为公司账户）</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <ul class="img-list">
                                    <li>
                                        <a href="static/img/temp/t_04.jpg" target="_blank">
                                            <img src="static/img/temp/t_04.jpg" />
                                        </a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="data-module">
                <div class="module-head">
                    <img class="icon" src="static/img/comm/icon_data09.png" />
                    <span class="title">财务资料</span>    
                </div>
                <div class="module-body">
                    <table class="table-module">
                        <tr>
                            <th width="115">收入来源</th>
                            <td>
                                <el-select class="w220">
                                    <el-option label="薪金" value="薪金"></el-option>
                                </el-select>
                            </td>
                            <th width="60">银行分行</th>
                            <td>
                                <el-select class="w220">
                                    <el-option label="租用物业" value="租用物业"></el-option>
                                </el-select>
                            </td>
                            <th width="60">客户来源</th>
                            <td>
                                <el-select class="w220">
                                    <el-option label="渠道" value="渠道"></el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <th>估计个人资料产值</th>
                            <td>
                                <el-select class="w220">
                                    <el-option label="HK$1,000,000以下" value="HK$1,000,000以下"></el-option>
                                </el-select>
                            </td>
                            <th>年收入</th>
                            <td>
                                <el-select class="w220">
                                    <el-option label="HK$1,000,000以下" value="HK$200,000以下"></el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <el-checkbox label="本人不是美国公民及需缴纳美国的所有税之人士"></el-checkbox>
                            </td>
                            <td colspan="2">
                                <el-checkbox label="本人不是英国公民及需缴纳英国的所有税之人士"></el-checkbox>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="data-module">
                <div class="module-head">
                    <img class="icon" src="static/img/comm/icon_data08.png" />
                    <span class="title">委托机构</span>    
                </div>
                <div class="module-body">
                    <table class="table-module">
                        <tr>
                            <th width="60">机构名称</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                            <th width="60">机构证号</th>
                            <td>
                                <el-input class="w220"></el-input>
                            </td>
                        </tr>
                        <tr>
                            <th>机构类型</th>
                            <td>
                                <el-select class="w220">
                                    <el-option label="大陆商业公司" value="大陆商业公司"></el-option>
                                </el-select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <ul class="img-list">
                                    <li>
                                        <a href="" target="_blank">
                                            <img src="" alt="机构证件图" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" target="_blank">
                                            <img src="" alt="代持委托书图" />
                                        </a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="data-module">
                <div class="module-head">
                    <img class="icon" src="static/img/comm/icon_data12.png" />
                    <span class="title">审批意见</span>    
                </div>
                <div class="module-body">
                    <table class="table-module">
                        <tr>
                            <td>
                                <el-input class="textarea" type="textarea" rows="4" resize="none" value=""></el-input>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div align="center">
                <el-button type="info">查看合约资料</el-button>
                <el-button type="warning">否决</el-button>
                <el-button type="primary">同意</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'productmaintenance',
        data() {
            return {
               
            }
        },
        created() {
            
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    .img-list {
        overflow: hidden;
    }
    .img-list li {
        float: left;
        margin-right: 20px;
    }
    .img-list img {
        width: 240px;
    }
</style>
