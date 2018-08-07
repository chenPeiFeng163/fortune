<template>
    <!-- 提前赎回行政费率维护 -->
    <div class="container">
        <table class="table-redeem" style="width:auto;">
            <thead>
                <tr>
                    <td width="160">罚息约定：</td>
                    <td align="center">不足1年</td>
                    <td align="center">不足2年</td>
                    <td align="center">不足3年</td>
                    <td align="center">不足4年</td>
                    <td align="center">不足5年</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td width="160" align="right">1年及以下：</td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                </tr>
                <tr>
                    <td align="right">2年：</td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                </tr>
                <tr>
                    <td align="right">3年：</td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                </tr>
                <tr>
                    <td align="right">4年：</td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                </tr>
                <tr>
                    <td align="right">5年：</td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                    <td>
                        <el-input class="text"></el-input>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="table-redeem">
            <tr>
                <td width="60"><i class="asterisk">*</i>备注：</td>
                <td>
                    <el-input class="textarea" type="textarea" rows="5" resize="none"></el-input>
                </td>
            </tr>
        </table>
        <div class="foot">
            <el-button type="info" @click="colseRouter">关闭</el-button>
            <el-button type="success">提交</el-button>
        </div>
    </div> 
</template>

<script>
    export default {
        name: 'advanceredeem',
        data() {
            return {
                
            }
        },
        created() {
            
        },
        computed: {
            
        },
        methods: {
            //页面中关闭按钮，关闭当前tag
            colseRouter() {
                this.comm.commColseRouter();
            }
        }
    }

</script>

<style scoped>
    .table-redeem {
        width: 100%;
        font-size: 14px;
    }
    .table-redeem td {
        padding: 10px 0;
    }
    .table-redeem .tag {
        margin-right: 30px;
    }
    .table-redeem .text {
        float: left;
        margin-right: 10px;
        width: 80px;
    }
    .table-redeem .textarea {
        padding: 10px;
        width: 50%;
    }
    .foot {
        padding-top: 20px;
        text-align: center;
        border-top: 1px solid #DFDFDF;
    }
</style>
