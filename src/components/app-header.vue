<template>
  <header class='app-header'>
    <div class="container">
      <ul>
        <li class="active"><RouterLink to="/">首页</RouterLink></li>
        <!-- <li><a href="#">模拟考场</a></li>
        <li><a href="#">学习课程</a></li>
        <li><a href="#">软件下载</a></li>
        <li><a href="#">考试信息</a></li> -->
        <li v-for="item in goods" :key="item.id">
          <RouterLink :to="`/category/${item.id}`">{{ item.category_name }}</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
import { findCategory } from '../api/home'

export default {
  name: 'AppHeader',
  setup() {
    const goods = ref([])
    findCategory().then(data => {
      goods.value = data.result
    })
    return { goods }
  }
}
</script>

<style scoped lang='less'>
.app-header {
  background-color: #239bd3;
  height: 50px;
}

ul {
  width: 1240px;
  // height: 50px;
  // background-color: pink;
  li{
    display: inline-block;
    a{
      display: inline-block;
      color: white;
      width: 100px;
      height: 50px;
      font-size: 16px;
      text-align: center;
      line-height: 50px;
    }
    &:hover {
    background-color: #25be8b;
    a {
      color: #000;
    }
    }  
  }
}

// .active {
//     background-color: #25be8b;
// }

</style>