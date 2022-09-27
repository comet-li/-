<template>
  <nav class="app-topnav">
    <div class="container">
      <h1 data-spotlight="慧星机器人编程学习平台">慧星机器人编程学习平台</h1>
      <ul>
        <template v-if="profile.token">
        <li><a href="javascript:;">{{ profile.account }}</a></li>
        <li><a href="javascript:;">退出登录</a></li>
      </template>
      <template v-else>
        <li><a href="javascript:;">请先登录</a></li>
        <li><a href="javascript:;">免费注册</a></li>
      </template>
      </ul>
    </div>
  </nav>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'AppTopnav',
  setup () {
    // 获取用户的登录信息才能控制切换导航菜单
    const store = useStore()
    const { profile } = store.state.user
    return { profile }
  }
}
</script>
<style scoped lang="less">
// 流光效果
h1 {
  float: left;
  color: rgb(0, 0, 0);
  font-family: Helvetica;
  margin: 0;
  padding: 0;
  font-size: 4rem;
  letter-spacing: -0.3rem;
  position: relative;
}

h1::after {
  content: attr(data-spotlight);
  color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-clip-path: ellipse(100px 100px at 0% 50%);
  clip-path: ellipse(100px 100px at 0% 50%);
  animation: spotlight 10s infinite;
  background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F748e336463bd9f5b3291a7fb31fe556dc1b32b1610825-b4ADkF_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665715896&t=e4a673b9cb345c6bdb2e9fbf098c1207);
  background-size: 150%;
  background-position: center center;
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes spotlight {
  0% {
    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
  clip-path: ellipse(100px 100px at 0% 50%);
  }

  50% {
    -webkit-clip-path: ellipse(100px 100px at 100% 50%);
  clip-path: ellipse(100px 100px at 100% 50%);
  }

  100% {
    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
  clip-path: ellipse(100px 100px at 0% 50%);
  }
}


.app-topnav {
  background: rgb(255, 255, 255);
  ul {
    display: flex;
    height: 80px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>