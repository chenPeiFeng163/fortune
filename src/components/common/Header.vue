<template>
    <div class="header">
        <div class="header-right">
            <div class="header-user-con">
                <!-- 用户头像 -->
                <div class="user-avator"><img src="static/img/img.jpg"></div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}} <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <!--<a href="##">
                            <el-dropdown-item>个人资料</el-dropdown-item>
                        </a>-->
                        <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                userName: '',
                message: 2
            }
        },
        computed:{
            username(){
                const params = {
                    Stf_ID: localStorage.getItem('fc_userid')
                }
                this.$axios({
                    method: 'post',
                    url: '/webapi/api/UserInfoOperation/SelectUserInfo_One',
                    data: params,
                    headers:  { 'Authorization': localStorage.getItem('fc_token') + "_" + localStorage.getItem('fc_userid') }
                }).then((res) => {
                    //console.log(res);
                    this.userName = res.data.data[0].Stf_Name
                });
                return this.userName;
            }
        },
        methods:{
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('fc_username')
                    this.$router.push('/login');
                }
            }
        },
        mounted(){
            
        }
    }
</script>
<style scoped>
    .header {
        position: absolute;
        top: 0;
        right: 0;
        left: 200px;
        z-index: 2;
        height: 60px;
        font-size: 22px;
        color: #fff;
        background: #fff;
        box-shadow: 3px 0 10px rgba(0,0,0,0.08);
    }
    .header-right{
        float: right;
        padding-right: 30px;
    }
    .header-user-con{
        display: flex;
        height: 60px;
        align-items: center;
    }
    .user-name{
        margin-left: 10px;
    }
    .user-avator{
        margin-left: 20px;
    }
    .user-avator img{
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color: #333;
        cursor: pointer;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
