<template>
    <div class="sidebar">
        <router-link to="index">
            <img class="logo" src="static/img/logo.png" alt="" />
        </router-link>
        <ul class="sidebar-nav">
            <li>
                <a href="http://192.168.0.20/FileStation/index.aspx" target="_blank">
                    <img src="static/img/nav/icon_file.png" />
                    <span>文件台</span>
                </a>
            </li>
	    <li>
                <router-link to="index" :class="{cur: cur =='/index'}">
                    <img src="static/img/nav/icon_info.png" />
                    <span>首页展示</span>
                </router-link>
            </li>
            <li>
                <router-link to="basedata" :class="{cur: cur =='/basedata'}">
                    <img src="static/img/nav/icon_info.png" />
                    <span>基础资料</span>
                </router-link>
            </li>
            <li>
                <router-link to="bondfund" :class="{cur: cur =='/bondfund'}">
                    <img src="static/img/nav/icon_fund.png" />
                    <span>债券基金</span>
                </router-link>
            </li>
            <li>
                <router-link to="processcenter" :class="{cur: cur == '/processcenter'}">
                    <img src="static/img/nav/icon_flow.png" />
                    <span>流程中心</span>
                </router-link>
            </li>
            <li>
                <router-link to="systemsetup" :class="{cur: cur == '/systemsetup'}">
                    <img src="static/img/nav/icon_set.png" />
                    <span>系统设置</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                cur: '/index'
            }
        },
        created() {
            this.switchNav()
        },
        methods: {
            switchNav() {
                this.cur = this.$route.path,
		console.log(this)
            }
        },
        watch: {
          // 如果路由有变化，会再次执行该方法
          "$route": "switchNav"
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom:0;
        background-color: #0E1A35;
        overflow-y: scroll;
    }
    .sidebar .logo {
        display: block;
        margin: 40px auto;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar .sidebar-nav {
        width: 200px;
        height:100%;
    }
    .sidebar .sidebar-nav a {
        display: flex;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        color: #dbdbdd;
        border-left: 4px solid #0E1A35;
        border-right: 4px solid #0E1A35;
        justify-content:center;
        align-items:center;
    }
    .sidebar .sidebar-nav a:hover,
    .sidebar .sidebar-nav a.cur {
        border-left: 4px solid #198CFF;
        border-right: 4px solid #122143;
        background: #122143;
    }
    .sidebar .sidebar-nav img {
        margin-right: 15px;
    }
</style>
