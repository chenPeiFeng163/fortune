<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="item-module">
                    <div class="head">
                        <div class="title">
                            <img src="static/img/comm/icon_file.png" />
                            <span class="txt">文件台</span>
                        </div>
                        <a class="more" href="##">
                            <i class="el-icon-arrow-right"></i>
                        </a>
                    </div>
                    <div class="body">
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>人員入職申請</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>人员离职申请</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>债券基金申请</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>债券基金提前赎回申请</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>人員入職申請</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>人员离职申请</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>债券基金申请</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>债券基金提前赎回申请</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="item-module">
                    <div class="head">
                        <div class="title">
                            <img src="static/img/comm/icon_remind.png" />
                            <span class="txt">提醒事項</span>
                        </div>
                    </div>
                    <div class="body">
                        <div class="calendar-box">
                            <div class="calendar-head">
                                <el-select v-model="year" placeholder="年份">
                                    <el-option
                                    v-for="item in yearList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-select v-model="month" placeholder="月份">
                                    <el-option
                                    v-for="item in monthList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="calendar-body">
                                <table class="calendar-table">
                                    <thead>
                                        <tr>
                                            <th>日</th>
                                            <th>一</th>
                                            <th>二</th>
                                            <th>三</th>
                                            <th>四</th>
                                            <th>五</th>
                                            <th>六</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="ago">26</td>
                                            <td class="ago">27</td>
                                            <td class="ago">28</td>
                                            <td class="ago">29</td>
                                            <td class="ago">30</td>
                                            <td class="ago">31</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td class="cur">21</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td class="record-one">23</td>
                                            <td class="record-two">24</td>
                                            <td class="record-three">25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="item-module">
                    <div class="head">
                        <div class="title">
                            <img src="static/img/comm/icon_notice.png" />
                            <span class="txt">公司公告</span>
                        </div>
                        <a class="more" href="##">
                            <i class="el-icon-arrow-right"></i>
                        </a>
                    </div>
                    <div class="body">
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>首次购买债券基金客户资料审批流程</router-link>
                            </li>
                            <li>基金管理部</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>提前购回债券基金操作步骤</router-link>
                            </li>
                            <li>财务部</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>购买办公用品后报销流程</router-link>
                            </li>
                            <li>基金管理部</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>首次购买债券基金客户资料审批流程</router-link>
                            </li>
                            <li>财务部</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>提前购回债券基金操作步骤</router-link>
                            </li>
                            <li>财务部</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="item-module">
                    <div class="head">
                        <div class="title">
                            <img src="static/img/comm/icon_backlog.png" />
                            <span class="txt">系统提醒</span>
                        </div>
                        <img class="icon-refresh" src="static/img/comm/icon_refresh.png" />
                    </div>
                    <div class="body">
                        <ul class="list">
                            <li>
                                <router-link to="inapplication"><i class="el-icon-arrow-right"></i>人員入職申請</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>人员离职申请</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>债券基金申请</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>债券基金提前赎回申请</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                        <ul class="list">
                            <li>
                                <router-link to=""><i class="el-icon-arrow-right"></i>人員入職申請</router-link>
                            </li>
                            <li>張青坤</li>
                            <li>2018/06/21  9:21</li>
                        </ul>
                    </div>
                </div>
            </el-col>
        </el-row>
        <dl class="item-action">
            <dt>常用功能</dt>
            <dd>
                <ul class="list">
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action01.png" />
                            <span class="txt">人员入职申请</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action02.png" />
                            <span class="txt">人员离职申请</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action03.png" />
                            <span class="txt">待办流程</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action04.png" />
                            <span class="txt">人员授权申请</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action05.png" />
                            <span class="txt">岗位授权申请</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action06.png" />
                            <span class="txt">岗位维护</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action07.png" />
                            <span class="txt">客户资料</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action08.png" />
                            <span class="txt">认购资料</span>
                        </router-link>
                    </li>
                </ul>
            </dd>
        </dl>
        <dl class="item-action">
            <dt>收藏功能</dt>
            <dd>
                <ul class="list">
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action03.png" />
                            <span class="txt">待办流程</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action04.png" />
                            <span class="txt">人员授权申请</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action05.png" />
                            <span class="txt">岗位授权申请</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action07.png" />
                            <span class="txt">客户资料</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <img src="static/img/nav/icon_action08.png" />
                            <span class="txt">认购资料</span>
                        </router-link>
                    </li>
                </ul>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                year: 2018,
                yearList: [
                    {
                        label: '2018',
                        value: '2018'
                    },
                    {
                        label: '2017',
                        value: '2017'
                    },
                    {
                        label: '2016',
                        value: '2016'
                    },
                    {
                        label: '2015',
                        value: '2015'
                    },
                    {
                        label: '2014',
                        value: '2014'
                    },
                    {
                        label: '2013',
                        value: '2013'
                    },
                    {
                        label: '2012',
                        value: '2012'
                    },
                    {
                        label: '2011',
                        value: '2011'
                    },
                    {
                        label: '2010',
                        value: '2010'
                    }
                ],
                month: 7,
                monthList: [
                    {
                        label: '1',
                        value: '1'
                    },
                    {
                        label: '2',
                        value: '2'
                    },
                    {
                        label: '3',
                        value: '3'
                    },
                    {
                        label: '4',
                        value: '4'
                    },
                    {
                        label: '5',
                        value: '5'
                    },
                    {
                        label: '6',
                        value: '6'
                    },
                    {
                        label: '7',
                        value: '7'
                    },
                    {
                        label: '8',
                        value: '8'
                    },
                    {
                        label: '9',
                        value: '9'
                    },
                    {
                        label: '10',
                        value: '10'
                    },
                    {
                        label: '11',
                        value: '11'
                    },
                    {
                        label: '12',
                        value: '12'
                    }
                ]
            }
        }
    }
</script>


<style scoped>
    .item-module {
        margin-bottom: 20px;
        border-top: 2px solid #198CFF;
        background: #fff;
        box-shadow: 3px 0 10px rgba(0,0,0,0.08);
    }
    .item-module .head {
        display: flex;
        padding: 0 30px;
        height: 45px;
        border-bottom: 1px solid #DFDFDF;
        align-items:center;
        justify-content: space-between;
    }
    .item-module .head .title {
        display: flex;
        align-items:center;
    }
    .item-module .head .txt {
        margin-left: 10px;
    }
    .item-module .body {
        padding: 5px 25px;
    }
    .item-module .body .list {
        display: flex;
        margin: 15px 0;
        line-height: 14px;
        font-size: 14px;
        color: #616161;
        justify-content: space-between;
    }
    .item-module .body .list li {
        padding: 0 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .item-module .body .list li:nth-child(1) {
        flex: 4;
    }
    .item-module .body .list li:nth-child(2) {
        flex: 1;
    }
    .item-module .body .list li a {
        color: #616161;
    }
    .item-module .body .list .el-icon-arrow-right {
        margin-right: 5px;
    }
    .calendar-box .calendar-head {
        margin-bottom: 10px;
        text-align: center;
    }
    .calendar-box .calendar-body {
        padding-bottom: 1px;
    }
    .calendar-box .calendar-table {
        width: 100%;
        border-collapse:collapse;
    }
    .calendar-box .calendar-table th {
        padding: 0 10px;
        height: 28px;
        font-weight: normal;
        font-size: 16px;
        text-align: center;
        border: 1px solid #DFDFDF;
    }
    .calendar-box .calendar-table td {
        position: relative;
        padding: 0 10px;
        height: 28px;
        font-size: 14px;
        text-align: center;
        border: 1px solid #DFDFDF;
    }
    .calendar-box .calendar-table .cur {
        color: #fff;
        background: #198CFF;
    }
    .calendar-box .calendar-table .ago {
        color: #b1b1b1;
    }
    .calendar-box .calendar-table .record-one {
        background: url('/static/img/comm/icon_bell01.png') no-repeat 90% center;
    }
    .calendar-box .calendar-table .record-two {
        background: url('/static/img/comm/icon_bell02.png') no-repeat 90% center;
    }
    .calendar-box .calendar-table .record-three {
        background: url('/static/img/comm/icon_bell03.png') no-repeat 90% center;
    }
    .more .el-icon-arrow-right {
        font-weight: bold;
        color: #b1b1b1;
    }
</style>

