import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({

    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/index',
                    component: resolve => require(['../components/page/index.vue'], resolve),
                    meta: { title: '首页' }
                },
                {
                    path: '/basedata',
                    component: resolve => require(['../components/page/BaseData.vue'], resolve),
                    meta: { title: '基础资料' }
                },
                {
                    path: '/bondfund',
                    component: resolve => require(['../components/page/BondFund.vue'], resolve),
                    meta: { title: '债券基金' }
                },
                {
                    path: '/processcenter',
                    component: resolve => require(['../components/page/ProcessCenter.vue'], resolve),
                    meta: { title: '流程中心' }
                },
                {
                    path: '/systemsetup',
                    component: resolve => require(['../components/page/SystemSetup.vue'], resolve),
                    meta: { title: '系统设置' }
                },
                {
                    path: '/inapplication',
                    component: resolve => require(['../components/page/base-data/InApplication.vue'], resolve),
                    meta: { title: '人员入职申请' }    
                },
                {
                    path: '/outapplication',
                    component: resolve => require(['../components/page/base-data/OutApplication.vue'], resolve),
                    meta: { title: '人员离职申请' }   
                },
                {
                    path: '/personnelaccreditapplication',
                    component: resolve => require(['../components/page/base-data/PersonnelAccreditApplication.vue'], resolve),
                    meta: { title: '人员授权申请' }
                },
                {
                    path: '/postaccreditapplication',
                    component: resolve => require(['../components/page/base-data/PostAccreditApplication.vue'], resolve),
                    meta: { title: '岗位授权申请' }
                },
                {
                    path: '/staffmaintenance',
                    component: resolve => require(['../components/page/base-data/StaffMaintenance.vue'], resolve),
                    meta: { title: '人员维护' }
                },{
                    path: '/personnelaccess',
                    component: resolve => require(['../components/page/base-data/PersonnelAccess.vue'], resolve),
                    meta: { title: '人员权限收回' }
                },
                {
                    path: '/productmaintenance',
                    component: resolve => require(['../components/page/bond-fund/ProductMaintenance.vue'], resolve),
                    meta: { title: '债券基金产品维护' }
                },
                {
                    path: '/advanceredeem',
                    component: resolve => require(['../components/page/bond-fund/AdvanceRedeem.vue'], resolve),
                    meta: { title: '提前赎回行政费率维护' }
                },
                {
                    path: '/customerapprove' ,
                    component: resolve => require(['../components/page/bond-fund/CustomerApprove.vue'], resolve),
                    meta: { title: '客户资料审批' } 
                },
                {
                    path: '/customerapprovedetails',
                    component: resolve => require(['../components/page/bond-fund/CustomerApproveDetails.vue'], resolve),
                    meta: { title: '审批客户资料' } 
                },
                {
                    path: '/contractmanagement',
                    component: resolve => require(['../components/page/bond-fund/contract-management/ContractManagement.vue'], resolve),
                    meta: { title: '合约管理' }
                },
                {
                    path: '/looksolocontract',
                    component: resolve => require(['../components/page/bond-fund/contract-management/LookSoloContract.vue'], resolve),
                    meta: { title: '查看单人合约' }
                },
                {
                    path: '/lookjointlycontract',
                    component: resolve => require(['../components/page/bond-fund/contract-management/LookJointlyContract.vue'], resolve),
                    meta: { title: '查看联名合约' }
                },
                {
                    path: '/customermanagement',
                    component: resolve => require(['../components/page/bond-fund/CustomerManagement.vue'], resolve),
                    meta: { title: '客户管理' }
                },
                {
                    path: '/customermanagementdetails',
                    component: resolve => require(['../components/page/bond-fund/CustomerManagementDetails.vue'], resolve),
                    meta: { title: '客户详情' }
                },
                {
                    path: '/dividendapplication',
                    component: resolve => require(['../components/page/bond-fund/DividendApplication.vue'], resolve),
                    meta: { title: '派息申请' }
                },
                {
                    path: '/postmaintenance',
                    component: resolve => require(['../components/page/system-setup/PostMaintenance.vue'], resolve),
                    meta: { title: '岗位维护' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '权限测试' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/forgetpassword',
            component: resolve => require(['../components/page/ForgetPassword.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        },
		{
            path: '/test/:id',
            component: resolve => require(['../components/page/Test.vue'], resolve),
			meta: { title: '陈培锋测试' }
        },
		{
            path: '/phone',
            component: resolve => require(['../phone/Phone.vue'], resolve),
			meta: { title: '陈培锋测试' },
			name: 'test'
        }
    ]
})
