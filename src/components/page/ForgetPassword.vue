<template>
    <!-- 忘记密码 -->
    <div class="reset-wrap">
        <div class="ms-title">
            <img src="/static/img/logo_01.png" />
        </div>
        <div class="ms-reset">
            <h3 class="title">找回您的账号或密码</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item prop="mobile">
                    <label class="label">手机号码：</label>
                    <el-input v-model="ruleForm.mobile" placeholder="输入您的手机号"></el-input>
                    <el-button class="code-btn">传送短讯码</el-button>
                </el-form-item>
                <el-form-item prop="code">
                    <label class="label">短讯码：</label>
                    <el-input v-model="ruleForm.code" placeholder="输入您收到的短讯码"></el-input>
                </el-form-item>
                <el-button class="reset-btn" @click="resetPassword('ruleForm')">重置密码</el-button>
            </el-form>
            <div class="hit-txt">或：您可以联络系统支援组协助您重置您的密码，联络电话：0852-xxxxxxx</div>
            <router-link class="return-login" to="/login">返回登录</router-link>
        </div>

        <el-dialog title="重置密码" class="dialog-big" :visible.sync="sendVisible" :close-on-click-modal="false" width="400px">
            <div>您的账号及密码已经发送至您的手机，请登录并及时修改您的密码！</div>
            <div slot="footer">
                <router-link class="return-login" to="/login">返回登录</router-link>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                sendVisible: false,
                ruleForm: {
                    mobile: '',
                    code: ''
                },
                rules: {
                    mobile: [
                        { required: true, message: '请输入手机号码', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '请输入短讯码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            resetPassword(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.sendVisible = true;
                    } else {
                        this.sendVisible = false;
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .reset-wrap{
        position: relative;
        width: 100%;
        height: 100%;
        background: url("/static/img/login_bg.jpg") no-repeat top center;
        background-size: cover;
    }
    .ms-title{
        position: absolute;
        top: 50%;
        width: 100%;
        margin-top: -360px;
        text-align: center;

    }
    .ms-reset{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 580px;
        height: 500px;
        margin: -250px 0 0 -290px;
        padding: 50px;
        background: #fff;
        box-sizing: border-box;
    }
    .ms-reset .title {
        margin-bottom: 50px;
        font-size: 24px;
        font-weight: 500;
        color: #616161;
        text-align: center;
    }
    .ms-reset .el-form-item {
        margin-bottom: 20px;
    }
    .ms-reset .el-form-item .label {
        display: inline-block;
        width: 70px;
        text-align: right;
    }
    .ms-reset .el-form-item .el-input {
        width: 295px;
    }
    .ms-reset .el-form-item >>> .el-form-item__error {
        margin-left: 72px;
    }
    .ms-reset .el-form-item .code-btn {
        margin-left: 15px;
    }
    .ms-reset .reset-btn{
        margin: 0 0 50px 75px;;
        width: 293px;
        height: 35px;
    }
    .ms-reset .hit-txt {
        margin-bottom: 40px;
        font-size: 14px;
        color: #919191;
    }
    .return-login {
        display: block;
        margin: 0 auto;
        width: 120px;
        height: 34px;;
        line-height: 34px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        background: #198CFF;
    }
</style>