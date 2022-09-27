<template>
  <!-- 这个是机器人模拟考场组件 -->
  <div class="home-mind">
    <HomePanel title="图形化考场" sub-title="青少年软件编程（图形化）等级考试">
      <template #right><XtxMore path="/" /></template>
      <div ref="target" style="position: relative;height: 250px;">
      <!-- 面板内容 -->
      <Transition name="fade">
      <ul v-if="goods.length" class="goods-list">
        <li v-for="item in goods" :key="item.id">
          <RouterLink :to="`/product/${item.id}`">
            <!-- <img :src="item.mind_pic" alt=""> -->
            <img v-lazy="item.mind_pic" alt="">
            <h3>{{item.mind_name}}</h3>
            <p class="price">&yen;{{item.mind_money === 0 ? '免费练习' : item.mind_money}}</p>
            <p class="count">{{item.mind_count}}人报名</p>
          </RouterLink>
        </li>
      </ul>
      <HomeSkeleton v-else />
    </Transition>
  </div>
    </HomePanel>
  </div>
</template>
<script>
import HomePanel from './home-panel'
import HomeSkeleton from './home-skeleton.vue'
import { findMind } from '../../../api/home';
import { useLazyData } from '@/hooks'
export default {
  name: 'HomeMind',
  components: { HomePanel, HomeSkeleton },
  setup() {
    // const goods = ref([])
    // findMind().then(data => {
    //   goods.value = data.result
    // })
    // const target = ref(null)
    const{ target, result} = useLazyData(findMind)
    return { goods: result, target }
  }
}
</script>
<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 250px;
  // background-color: rgb(158, 27, 27);
  li {
    width: 280px;
    height: 210px;
    background: #edeee6;
    border-radius: 5px;
    .hoverShadow();
    img {
      border-radius: 5px 5px 0px 0px;
      width: 280px;
      height: 140px;
    }
    h3 {
      color: rgb(0, 0, 0);
      text-align: center;
      padding-bottom: 3px;
      padding-top: 9px;
    }
    p {
      display: inline;
      font-size: 16px;
      padding: 0px 0 0 20px;
      // text-align: center;
    }
    .price {
      color: red;
    }
  }
}
</style>