<template>
  <!-- <nav>顶部通栏</nav> -->
  <AppTopnav/>
  <!-- <header>头部</header> -->
  <AppHeader/>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <!-- <footer>底部</footer> -->
  <AppFooter/>
</template>

<script>
// 导入组件
import AppTopnav from '@/components/app-topnav.vue';
import AppHeader from '@/components/app-header.vue';
import AppFooter from '@/components/app-footer.vue';
export default {
  name: 'Layout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped lang='less'></style>
