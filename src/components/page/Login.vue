<template>
    <!-- 登录 -->
    <div class="login-wrap">
        <div class="ms-title">
            <img src="static/img/logo_01.png" />
        </div>
        <div class="ms-login">
            <h3 class="title">欢迎使用Fortune Club</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
                <el-form-item prop="username">
                    <input class="text" type="text" v-model="ruleForm.username" placeholder="账号" />
                </el-form-item>
                <el-form-item prop="password">
                    <input class="text" type="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')" placeholder="密码" />
                </el-form-item>
                <div class="slider-box">
                    <!--<div class="isnone">
                        <el-slider v-model="sliderValue" :show-tooltip="false" :disabled="sliderDisabled"></el-slider>
                        <p class="slider-txt">向右滑动验证</p>
                    </div>-->
                </div>
                <input class="login-btn" type="button" value="登录" @click="submitForm('ruleForm')" />
		<router-link class="forgetpassword" :to="{path:'/test/456',params:{paramId:1},query:{paramId:2}}">进入</router-link>
		<h3 @click="getTest()">进入</h3>

            </el-form>
            <div align="center">
                <router-link class="forgetpassword" to="forgetpassword">忘记账号或密码？</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                sliderValue: 0,
                sliderDisabled: false,
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        created() {
            
        },
        methods: {
	    getTest(){
	      console.log(this.$el);
	      this.$router.push({ path: '/test/123',params:{paramId:100},query:{paramId:2,paramName:'chenpeifeng'}});
	      //this.$router.push('/test/404');
	    },
            submitForm(formName) {
                const params = {
                    LoginID: this.ruleForm.username,
                    Pwd: this.ruleForm.password
                }
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/webapi/api/LoginApi/Login', params).then((res) => {
                            if(res.data.IsSuccess) {
                                localStorage.setItem('fc_userid', res.data.ID);
                                localStorage.setItem('fc_username', this.ruleForm.username);
                                localStorage.setItem('fc_token', res.data.Token);
                                this.$router.push('/');

                                const p = new URLSearchParams();
                                p.append('paras', res.data.SessionStr);
                                this.$axios({
                                    method: 'post',
                                    url: '/FileStation/session/Import.ashx',
                                    data: p,
                                    headers:  { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
                                }).then((res) => {
                                    //console.log(res);
                                });

                            } else {
                                this.$message({
                                    message: res.data.Message,
                                    type: 'error',
                                    duration: 2000,
                                    showClose: true
                                });
                            }
                        })
                    }/* else {
                        this.sliderValue = 0;
                        this.sliderDisabled = false;
                        $('.slider-txt').text('向右滑动验证').css({color:'#919191'});
                        return false;
                    }*/
                });
            }
        },
        watch: {
            /*sliderValue: function(){
                if(this.sliderValue != 100) {
                    this.sliderValue = 0;
                    this.sliderDisabled = false;
                    $('.slider-txt').text('向右滑动验证').css({color:'#919191'});
                } else {
                    this.sliderDisabled = true;
                    $('.slider-txt').text('验证成功').css({color:'red'});
                }
            }*/
        }
    }
</script>

<style scoped>
    .login-wrap{
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
    .ms-login{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 580px;
        height: 500px;
        margin: -250px 0 0 -290px;
        padding: 50px 90px;
        background: #fff;
        box-sizing: border-box;
    }
    .ms-login .title {
        margin-bottom: 50px;
        font-size: 24px;
        font-weight: 500;
        color: #616161;
        text-align: center;
    }
    .ms-login .el-form-item {
        margin-bottom: 20px;
    }
    .ms-login .text {
        padding: 0 10px;
        width: 378px;
        height: 46px;
        font-size: 14px;
        border: 1px solid #616161;
    }
    .ms-login .slider-box {
        height: 80px;
    }
    .ms-login .slider-box .isnone {
        display: none;
    }
    .ms-login .slider-box .slider-txt {
        font-size: 14px;
        color: #919191;
        text-align: center;
    }
    .ms-login .login-btn{
        margin-bottom: 20px;
        width: 100%;
        height: 48px;
        font-size: 16px;
        color: #fff;
        border: 0;
        background: #198CFF;
    }
    .ms-login .forgetpassword {
        font-size: 14px;
        color: #616161;   
    }
</style>