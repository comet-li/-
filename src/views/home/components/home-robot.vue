<template>
  <!-- 这个是机器人模拟考场组件 -->
  <div class="home-robot">
    <HomePanel title="机器人考场" sub-title="全国青少年机器人等级考试 1-6模拟考场">
      <template #right><XtxMore path="/category/1" /></template>
      <!-- 面板内容 -->
      <Transition name="fade">
      <ul v-if="goods.length" class="goods-list">
        <li v-for="item in goods" :key="item.id">
          <RouterLink :to="`/product/${item.id}`">
            <img :src="item.robot_pic" alt="">
            <h3>{{item.robot_name}}</h3>
            <p class="price">&yen;{{item.robot_money === 0 ? '免费' : item.robot_money }}</p>
            <p class="count">{{item.robot_count}}人报名</p>
          </RouterLink>
        </li>
      </ul>
      <HomeSkeleton v-else />
    </Transition>
    </HomePanel>
  </div>
</template>
<script>
import { ref } from 'vue';
import HomePanel from './home-panel'
import HomeSkeleton from './home-skeleton.vue'
import { findRobot } from '../../../api/home';
export default {
  name: 'HomeRobot',
  components: { HomePanel, HomeSkeleton },
  setup() {
    const goods = ref([])
    findRobot().then(data => {
      goods.value = data.result
    })
    return { goods }
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