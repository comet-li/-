<template>
    <div class="box">
      <div class="title">
        <h2>机器人考场</h2>
      </div>

      <div class="content">
        <ul v-if="goods.length">
          <li v-for="item in goods" :key="item.id">
            <RouterLink :to="`/product/${item.id}`">
              <img :src="item.robot_pic" alt="">
              <h3>{{item.robot_name}}</h3>
              <p><span>&yen;{{item.robot_money === 0 ? '免费' : item.robot_money }}</span>  •  {{item.robot_count}}人在学习</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import HomePanel from '../../home/components/home-panel.vue'
import { findMonikaochangRobot } from '@/api/monikaochang'
export default {
  name: 'MonikaochangRobot',
  components: {HomePanel},
  setup() {
    const goods = ref([])
    findMonikaochangRobot().then(data => {
      goods.value = data.result
    })
    return { goods }
  }
}
</script>

<style scoped lang="less">
.box {
    margin-top: 10px;
    height: 1230px;
    .title{
      height: 40px;
      // background-color: pink;
      h2{
        font-size: 20px;
        color: #494949;
         font-weight: 400;
      }
    }
    .content{
      li{
        float: left;
        margin-right: 25px;
        margin-bottom: 25px;
        width: 280px;
        height: 210px;
        background-color: #edeee6;
        .hoverShadow();
      }
      :nth-child(4n) {
        margin-right: 0;
      }
      h3{
       padding: 20px;
       font-size: 14px;
       color: #050505;
       font-weight: 400;
      }
      p{
        padding: 0 20px;
        font-size: 12px;
        color: #999;
      }
      span {
        color: #ff7c2d;
      }
    }
}
  </style>