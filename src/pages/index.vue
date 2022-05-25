<template>
    <div>
        <el-container class="weqwe" ref="weqwe">
            <el-header>
                <IndexHeader></IndexHeader>
            </el-header>
            <el-container class="xxe">
                <el-aside>
                    <Aside></Aside>
                </el-aside>
                <el-container>
                    <el-main>
                        <div class="block">
                            <span class="demonstration">Click 指示器触发</span>
                            <el-carousel trigger="click" height="380px">
                                <el-carousel-item v-for="item in 4" :key="item">
                                    <h3 class="small">{{ item }}</h3>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                        <div>
                            <video
                                src="https://vd3.bdstatic.com/mda-ndcenp9yusqihmvq/sc/cae_h264_delogo/1649856502188004676/mda-ndcenp9yusqihmvq.mp4?v_from_s=hkapp-haokan-hna&auth_key=1652947822-0-0-a9f711afaeff0326d77c6cb498b17e66&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=2422455066&vid=6389323465288334804&abtest=17451_2&klogid=2422455066"
                                width="800" height="400px"></video>
                            <a
                                href="https://vd3.bdstatic.com/mda-ndcenp9yusqihmvq/sc/cae_h264_delogo/1649856502188004676/mda-ndcenp9yusqihmvq.mp4?v_from_s=hkapp-haokan-hna&auth_key=1652947822-0-0-a9f711afaeff0326d77c6cb498b17e66&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=2422455066&vid=6389323465288334804&abtest=17451_2&klogid=2422455066">2321</a>
                        </div>
                        <router-view></router-view>
                    </el-main>
                    <el-footer>
                        <IndexFooter></IndexFooter>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
        <div class="returnTop" @click="returnTop">
            <img src="../assets/returnTop.png">
        </div>
    </div>
</template>
<script>
import IndexHeader from "../components/IndexHeader.vue"
import IndexFooter from "../components/IndexFooter.vue"
import Main from "../components/Main.vue"
import Aside from "../components/Aside.vue"

export default {
    components: {
        IndexHeader,
        IndexFooter,
        Main,
        Aside,

    },
    data() {
        return {
            scrollTop: null,
            btnFlag: true,
            httpsx: 'https://vd3.bdstatic.com/mda-ndcenp9yusqihmvq/sc/cae_h264_delogo/1649856502188004676/mda-ndcenp9yusqihmvq.mp4?v_from_s=hkapp-haokan-hna&auth_key=1652947822-0-0-a9f711afaeff0326d77c6cb498b17e66&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=2422455066&vid=6389323465288334804&abtest=17451_2&klogid=2422455066'
        }
    },
    methods: {
        makeEcharts() {
            let myChart = echarts.init(this.$refs.jsjsjs);
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '负离子发生量变化曲线图'
                },
                tooltip: {},
                xAxis: {
                    data: this.graphX
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            });
        },
        /* 回到顶部的功能实现 */
        returnTop() {
            /* block 头部 尾部 中间  behavior 自定义过渡动画 */
            document.getElementById('weqwe').scrollIntoView({ block: 'start', behavior: 'smooth' })

        },
        backTop() {
            const that = this
            let timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if (that.scrollTop === 0) {
                    clearInterval(timer)
                }
            }, 16)
        },
        checktime(index) {
            this.showtimeindex = index
            console.log(this.$refs.xooxio.scrollTop);
        },

        scrollToTop() {
            console.log(222);
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if (that.scrollTop > 60) {
                that.btnFlag = false
            } else {
                that.btnFlag = true
            }
            console.log(this.scrollTop);
        }
    },
}
</script>
<style >
.el-header {
    padding: 0;
}

.block {
    padding-top: 40px;
    width: 800px;
    height: 400px;
    margin: auto;
    background-color: pink;
}

.art-video {
    width: 800px;
    height: 400px;

}

.returnTop {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 150px;
    right: 80px;
    cursor: pointer;
}

.weqwe {
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
}

.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
}

.el-aside {
    background-color: #304156;
    color: #333;
    text-align: center;
    height: 100%;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
}

.xxe {
    overflow-y: scroll
}

body>.el-container {
    margin-bottom: 40px;

}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

img {
    width: 100%;
}

/* .el-container:nth-child(7) .el-aside {} */
</style>
