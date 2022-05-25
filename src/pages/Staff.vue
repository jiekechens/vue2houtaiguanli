<template>
    <div id="carousel" ref="xooxio">
        <!-- 头部信息显示 -->
        <div class="infouserinto">
            <div class="intoitem">
                <h1>科室总数</h1>
            </div>
            <div class="intoitem">
                <h1>房间总数</h1>
            </div>
            <div class="intoitem">
                <h1>设备运行总时长</h1>
            </div>
        </div>
        <!-- 曲线图层 -->
        <div class="timelist">
            <!-- 展示时间选择 -->
            <div v-for="(item, index) in timedist" :class="showtimeindex === index ? 'current' : ''"
                @click="checktime(index)" class="timeitem">
                {{ item }}</div>
        </div>
        <!-- 图标展示 -->
        <div ref="jsjsjs" class="wwowo"></div>

        <!-- 科室概况 -->
        <div class="departmentOverview">
            <h1>科室概况</h1>
            <div class="overview">
                <div class="overviewitem">
                    <h1>科室总数</h1>
                </div>
                <div class="overviewitem">
                    <h1>房间总数</h1>
                </div>
                <div class="overviewitem">
                    <h1>设备运行总时长</h1>
                </div>
            </div>
        </div>
        <!-- 用户使用情况 -->
        <div class="userUseSituation">
            <div class="timelist">
                <div v-for="(item, index) in timedist" :class="showtimeindex === index ? 'current' : ''"
                    @click="checktime(index)" class="timeitem">
                    {{ item }}</div>
            </div>
        </div>
        <!-- 用户使用情况图表 -->
        <div class="useGraphical" ref="useGraphical">
        </div>
        <!--  <div class="returnTop" @click="returnTop" v-show="!btnFlag">
            <img src="../assets/returnTop.png">
        </div> -->
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            timedist: ['天', '周', '月', '年'],
            showtimeindex: -1,
            graphX: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            scrollTop: null,
            btnFlag: true
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
        cakeEcharts() {
            let myChart = echarts.init(this.$refs.useGraphical);
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '负离子发生量'
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
            document.getElementById('carousel').scrollIntoView({ block: 'start', behavior: 'smooth' })

        },
        checktime(index) {
            this.showtimeindex = index
            console.log(this.$refs.xooxio.scrollTop);
        },
    },
    mounted() {
        this.makeEcharts()
        this.cakeEcharts()
    },
}
</script>
<style scoped>
.infouserinto {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 20px;
}

.intoitem {
    width: 300px;
    height: 100px;
    background-color: aqua;
}

.wwowo {
    width: 100%;
    height: 200px;
    background-color: pink;
}

.returnTop {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 150px;
    right: 80px;
    cursor: pointer;
}

.timelist {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    margin-bottom: 8px;
}

.timeitem {
    line-height: 32px;
    font-size: 26px;
    border-radius: 2px;
    border: 2px solid #21AC7C;
    width: 62px;
    height: 32px;
}

.current {
    background-color: #01bd98 !important;
    color: #fff;
}

img {
    width: 100%;
}

.overview {
    display: flex;
    justify-content: space-between;
}

.overviewitem {
    background-color: #01bd98;
    width: 200px;
    height: 100px;
}

.useGraphical {
    width: 700px;
    height: 400px;
    margin: auto;
    background-color: pink;
}
</style>