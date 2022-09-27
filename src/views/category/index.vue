<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <!-- <XtxBread parentName="模拟考场" parentPath="/category/1">机器人一级</XtxBread>  不合适用了 -->
      <XtxBread>
        <XtxBreadItem :to="{path: '/'}">首页</XtxBreadItem>
        <XtxBreadItem to="/category/4">电器</XtxBreadItem>
        <XtxBreadItem>空调</XtxBreadItem>
      </XtxBread>
      <h3>---- {{ $route.params.mid }} ---  {{ mid }}</h3>
    </div>
  </div>
</template>

<script>
import XtxBread from '@/components/library/xtx-bread.vue';
import XtxBreadItem from '@/components/library/xtx-bread-item.vue';
export default {
    name: "TopCategory",
    props: [
      'mid'
    ],
    components: { XtxBread, XtxBreadItem }
}
</script>

<style scoped lang="less">
.top-category{
  height: 1230px;
}
</style>