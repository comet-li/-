<template>
  <!-- 面板骨架效果，防止首页白屏 -->
  <div class='home-skeleton'>
    <div class="item" v-for="i in 4" :key="i" :style="{backgroundColor:bg}">
      <XtxSkeleton class="mb" bg="#e4e4e4" width="280px" height="210px" animated />
      <!-- <XtxSkeleton bg="#e4e4e4" width="160px" height="24px" animated /> -->
      <!-- <XtxSkeleton bg="#e4e4e4" width="120px" height="24px" animated /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSkeleton',
  props: {
    bg: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style scoped lang='less'>
.home-skeleton {
  width: 1240px;
  height: 250px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 280px;
    .xtx-skeleton ~ .xtx-skeleton{
      display: block;
      margin: 16px auto 0;
    }
    .mb {
      border-radius: 5px;
    }
  }
}
</style>
