<template>
      <!-- 首页入口 -->
  <div class='home-entry'>
    <div class="container">
    <!-- 轮播图 -->
    <HomeBanner />
    </div>
  <!-- 机器人考场 -->
  <HomeRobot />
  <!-- 图形化考场 -->
  <HomeMind />
  </div>
</template>

<script>
import HomeBanner from './components/home-banner.vue'
import HomeRobot from './components/home-robot.vue'
import HomeMind from './components/home-mind.vue'
export default {
  name: 'HomePage',
  components: {
    HomeBanner,
    HomeRobot,
    HomeMind,
}
}
</script>

<style scoped lang='less'>
.container{
  height: 500px;
}
</style>
