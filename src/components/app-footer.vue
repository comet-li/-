<template>
  <footer class="app-footer">
    <div class="container">
      <p>创客机器人编程-慧星机器人学习平台</p>
      <p>
        <a href="http://beian.miit.gov.cn">技术支持：广州创客师科技有限公司 粤ICP备19135715号</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped lang='less'>

.app-footer{
  background-color: #239bd3;
  height: 100px;
}
.container{
  height: 100px;
  padding-top: 30px;
}
p{
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 16px;
  a{
    color: rgb(255, 255, 255);
    font-size: 16px;
  }
}
</style>