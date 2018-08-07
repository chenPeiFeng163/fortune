<template>
    <!-- 客户详情 -->
    <div class="inside-page">
        <div class="page-head">客户详情</div>
        <div class="page-body">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="data-module">
                        <div class="module-head">
                            <img class="icon" src="static/img/comm/icon_data01.png" />基础信息
                        </div>
                        <div class="module-body">
                            <table class="table-module">
                                <tr>
                                    <td class="td-avatar" width="116" rowspan="9">
                                        <el-upload
                                            class="avatar-uploader"
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            :show-file-list="false"
                                            :on-success="handleAvatarSuccess"
                                            :before-upload="beforeAvatarUpload">
                                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                        </el-upload>
                                    </td>
                                    <td align="right" width="80">中文名</td>
                                    <td>
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">英文名</td>
                                    <td>
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">出生日期</td>
                                    <td>
                                        <el-date-picker class="text" type="date" placeholder="选择日期">
                                        </el-date-picker>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">性别</td>
                                    <td>
                                        <el-select class="select">
                                            <el-option key="0" label="男" value="男"></el-option>
                                            <el-option key="1" label="女" value="女"></el-option>
                                            <el-option key="2" label="未知" value="未知"></el-option>
                                        </el-select>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">证件类型</td>
                                    <td>
                                        <el-select class="select">
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
                                    <td align="right">证件号码</td>
                                    <td>
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">签发日期</td>
                                    <td>
                                        <el-date-picker class="text" type="date" placeholder="选择日期">
                                        </el-date-picker>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">证件有效期</td>
                                    <td>
                                        <el-date-picker class="text" type="date" placeholder="选择日期">
                                        </el-date-picker>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <el-checkbox-group>
                                            <el-checkbox label="常期有效" value="常期有效"></el-checkbox>
                                            <el-checkbox label="机构客户代持人" value="机构客户代持人"></el-checkbox>
                                        </el-checkbox-group>
                                    </td>
                                </tr>
                            </table>
                            <div class="banner-list">
                                <el-upload
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                    <i class="el-icon-plus"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </div>
                    </div>
                    <div class="data-module">
                        <div class="module-head">
                            <img class="icon" src="static/img/comm/icon_data08.png" />委托机构
                        </div>
                        <div class="module-body">
                            <table class="table-module">
                                <tr>
                                    <td align="right" width="60">机构名称</td>
                                    <td>
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">机构证号</td>
                                    <td>
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">机构类型</td>
                                    <td>
                                        <el-select class="select">
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
                            </table>
                            <div class="banner-list">
                                <el-upload
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                    <i class="el-icon-plus"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </div>
                    </div>
                    <div class="data-module">
                        <div class="module-head">
                            <img class="icon" src="static/img/comm/icon_data09.png" />客户账务背景
                        </div>
                        <div class="module-body">
                            <table class="table-module" style="padding-bottom:0;">
                                <tr>
                                    <td align="right">收入来源</td>
                                    <td>
                                        <el-select class="w140">
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
                                    <td align="right">住所</td>
                                    <td>
                                        <el-select class="w140">
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
                            </table>
                            <table class="table-module" style="padding-top:0;">
                                <tr>
                                    <td align="right" width="115">估计个人资料产值</td>
                                    <td>
                                        <el-select class="select">
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
                                    <td align="right">年收入</td>
                                    <td>
                                        <el-select class="select">
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
                                    <td colspan="2">
                                        <el-checkbox label="本人不是英国公民及需缴纳英国的所有税之人士"></el-checkbox>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <el-checkbox label="本人不是美国公民及需缴纳美国的所有税之人士"></el-checkbox>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="data-module">
                        <div class="module-head">
                            <img class="icon" src="static/img/comm/icon_data10.png" />变更记录
                        </div>
                        <div class="module-body">
                            <div class="change-record">
                                <dl class="item">
                                    <dt>新建</dt>
                                    <dd>店长  2018-06-25  14:24:32</dd>
                                </dl>
                                <dl class="item">
                                    <dt>客户资料校验成功</dt>
                                    <dd>职员A  2018-06-25  14:24:32</dd>
                                </dl>
                                <dl class="item">
                                    <dt>水单上传成功</dt>
                                    <dd>跟单员  2018-06-25  15:19:41</dd>
                                </dl>
                                <dl class="item">
                                    <dt>认购审批成功</dt>
                                    <dd>经理C  2018-06-26  09:21:13</dd>
                                </dl>
                                <dl class="item">
                                    <dt>续期成功</dt>
                                    <dd>客户  2018-06-30  10:15:34</dd>
                                </dl>
                                <dl class="item">
                                    <dt>到期赎回</dt>
                                    <dd>经理B  2018-06-30  11:12:43</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="data-module">
                        <div class="module-head">
                            <img class="icon" src="static/img/comm/icon_data07.png" />联络信息
                        </div>
                        <div class="module-body">
                            <table class="table-module">
                                <tr>
                                    <td align="right">居住地址</td>
                                    <td>
                                        <el-select class="w140 mr5">
                                            <el-option key="0" label="香港永久居民身份证" value="香港永久居民身份证"></el-option>
                                            <el-option key="1" label="回乡证" value="回乡证"></el-option>
                                            <el-option key="2" label="回港证" value="回港证"></el-option>
                                        </el-select>
                                        <el-select class="w140 mr5">
                                            <el-option key="0" label="香港永久居民身份证" value="香港永久居民身份证"></el-option>
                                            <el-option key="1" label="回乡证" value="回乡证"></el-option>
                                            <el-option key="2" label="回港证" value="回港证"></el-option>
                                        </el-select>
                                        <el-select class="w140">
                                            <el-option key="0" label="香港永久居民身份证" value="香港永久居民身份证"></el-option>
                                            <el-option key="1" label="回乡证" value="回乡证"></el-option>
                                            <el-option key="2" label="回港证" value="回港证"></el-option>
                                        </el-select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <el-input
                                            type="textarea"
                                            :rows="3"
                                            resize="none"
                                            placeholder="请输入详细地址"
                                            v-model="textarea">
                                        </el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">邮政编码</td>
                                    <td>
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <el-checkbox label="此地址即为通讯地址"></el-checkbox>
                                    </td>
                                </tr>
                            </table>
                            <div class="banner-list mb0">
                                <el-upload
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                    <i class="el-icon-plus"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                            <table class="table-module">
                                <tr>
                                    <td align="right">手提电话</td>
                                    <td colspan="3">
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">居住电话</td>
                                    <td colspan="3">
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">办公电话</td>
                                    <td colspan="3">
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">传真号码</td>
                                    <td colspan="3">
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">紧急联络人</td>
                                    <td>
                                        <el-input class="w140"></el-input>
                                    </td>
                                    <td align="right">联络电话</td>
                                    <td>
                                        <el-input class="w140"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">电邮E-Mail</td>
                                    <td colspan="3">
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <p>所有账户书信，将会被送至上述第一客户的联系地址：</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <el-checkbox-group>
                                            <el-checkbox label="电邮E-Mail"></el-checkbox>
                                            <el-checkbox label="现居地址"></el-checkbox>
                                            <el-checkbox label="通讯地址"></el-checkbox>
                                            <el-checkbox label="手提短信"></el-checkbox>
                                        </el-checkbox-group>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="data-module">
                        <div class="module-head">
                            <img class="icon" src="static/img/comm/icon_data11.png" />银行账户
                        </div>
                        <div class="module-body">
                            <table class="table-module">
                                <tr>
                                    <td align="right" width="60">银行名称</td>
                                    <td>
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">银行分行</td>
                                    <td>
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">账号编号</td>
                                    <td>
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">账号名称</td>
                                    <td>
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="right">SWIFT</td>
                                    <td>
                                        <el-input class="text"></el-input>
                                    </td>
                                </tr>
                            </table>
                            <div class="banner-list">
                                <el-upload
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                    <i class="el-icon-plus"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </div>
                    </div>
                    <div class="data-module">
                        <div class="module-head">
                            <img class="icon" src="static/img/comm/icon_data07.png" />相关档案
                        </div>
                        <div class="module-body">
                            <div class="banner-list mt30">
                                <el-upload
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                    <i class="el-icon-plus"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </div>
                    </div>
                    <div class="data-module">
                        <div class="module-head">
                            <img class="icon" src="static/img/comm/icon_data12.png" />备注
                        </div>
                        <div class="module-body">
                            <table class="table-module">
                                <tr>
                                    <td>
                                        <el-input
                                            type="textarea"
                                            :rows="3"
                                            resize="none"
                                            placeholder="请输入备注"
                                            v-model="textarea">
                                        </el-input>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'customermanagementdetails',
        data() {
            return {
                imageUrl: '',
                dialogImageUrl: '',
                dialogVisible: false
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }

</script>

<style scoped>
    .td-avatar {
        vertical-align: top;
    }
    .avatar-uploader >>> .el-upload {
        position: relative;
        width: 116px;
        height: 140px;
        border: 1px dashed #d9d9d9;
        border-radius: 0;
        cursor: pointer;
        overflow: hidden;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 116px;
        height: 140px;
        line-height: 140px;
        text-align: center;
    }
    .avatar {
        width: 116px;
        height: 140px;
        display: block;
    }
    .change-record {
        margin: 30px;
        padding: 20px 0;
        border-left: 2px solid #198CFF;
    }
    .change-record .item {
        display: flex;
        position: relative;
        padding: 10px;
        font-size: 14px;
        color: #616161;
    }
    .change-record .item:after {
        content: "";
        position: absolute;
        top: 50%;
        left: -7px;
        margin-top: -6px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #198CFF;
    } 
    .change-record .item dt,
    .change-record .item dd {
        flex: 1;
        padding: 0 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .change-record .item dd {
        color: #919191;
    }
    .banner-list {
        margin: 0 30px 30px;
    }
    .banner-list >>> .el-upload-list .el-upload-list__item {
        width: 190px;
        height: 130px;
    }
    .banner-list >>> .el-upload {
        width: 190px;
        height: 130px;
        line-height: 130px;
    }
</style>
