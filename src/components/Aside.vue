<template>
    <div class="sidebar">
        <transition name="fade">
            <el-menu :collapse="collapse" :unique-opened="true" collapse-transition mode="vertical" router
                background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff">
                <muens v-for="(item, index) in items" :meuns="item" unique-opened>
                </muens>
            </el-menu>
        </transition>
    </div>
</template>
<script>
import muens from "./muetiem.vue"
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    name: "首页",
                    icon: "el-icon-s-home",
                    url: "/index",
                },
                {
                    name: "员工管理",
                    icon: "el-icon-user",
                    url: "/staff",
                    children: [
                        {
                            name: "员工管理",
                            icon: "el-icon-user",
                            url: "/staff",
                        },
                        {
                            name: "场地管理",
                            icon: "el-icon-phone-outline",
                            url: "/field",
                        },
                        {
                            name: "设备管理",
                            icon: "el-icon-s-check",
                            url: "/equipment",
                        },
                        {
                            name: "区管管理",
                            icon: "el-icon-s-finance",
                            url: "/district",
                        },
                        {
                            name: "管理员",
                            icon: "el-icon-s-custom",
                            url: "/url/admin",
                        }
                    ]
                },
                {
                    name: "场地管理",
                    icon: "el-icon-s-grid",
                    url: "/field",
                    children: [
                        {
                            name: "全部产品",
                            icon: "el-icon-notebook-2",
                            url: "/product/all",
                        },
                        {
                            name: "汽车消费",
                            icon: "el-icon-truck",
                            url: "/product/carConsumption",
                        },
                        {
                            name: "房产消费",
                            icon: "el-icon-office-building",
                            url: "/product/estate",
                        },
                        {
                            name: "抵押贷款",
                            icon: "el-icon-money",
                            url: "/product/mortgage",
                        },
                    ]
                },
                {
                    name: "设备管理",
                    icon: "el-icon-s-check",
                    url: "/equipment",

                    children: [
                        {
                            name: "所有订单",
                            icon: "el-icon-tickets",
                            url: "/orders/all",
                        },
                        {
                            name: "新建订单",
                            icon: "el-icon-document",
                            url: "/orders/create",
                            children: [
                                {
                                    name: "基本222信息",
                                    icon: "el-icon-chat-square",
                                    url: "/customer/infoss",
                                },
                                {
                                    name: "资金222记录",
                                    icon: "el-icon-bank-card",
                                    url: "/recordsss",
                                },
                            ]
                        },
                    ]
                },
                {
                    name: "区管管理",
                    icon: "el-icon-s-finance",
                    url: "/district",
                    children: [
                        {
                            name: "基本信息",
                            icon: "el-icon-chat-square",
                            url: "/customer/info",
                        },
                        {
                            name: "资金记录",
                            icon: "el-icon-bank-card",
                            url: "/record",
                        },
                    ]
                },

            ],
        }
    },
    created() {
        this.$bus.$on('collapse', (msg) => {
            this.collapse = msg || false
        })
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: {
        muens
    }

}
</script>
<style  scoped>
.asidename {
    height: 80px;
    background-color: #304156;
    font-size: 20px;

}

.sidebar /deep/.el-menu {
    border-right: 0px;
    overflow: hidden;

}



.sidebar {
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
    width: 300px;
    background-color: #304156;
    margin-top: -10px;
}

.sidebar::-webkit-scrollbar {
    width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
    width: 300px;
}
</style>