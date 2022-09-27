<!--
<template>
  面包屑全局组件 
  <div class='xtx-bread'>
    <slot />
  </div>
</template>
-->

<script>
import { h } from 'vue';

export default {
  name: 'XtxBread',
  render () {
      // 用法
      // 1. template 标签去除， 单文件组件
      // 2. 返回值就是组件内容
      // 3. vue.2.0 的h函数传参进来的， vue3.0 的h函数导入进来
      // 4. h 第一个参数 标签名字 第二个参数 标签属性对象 第三个参数 子节点
      // 需求
      // 1. 创建xtx-bread父容器   -----> return h('div', {class: 'xtx-bread'}, '子节点')
      // 2. 获取默认插槽内容  ------>  const items = this.$slots.default()  [首页, 电器, 空调]  [ '<XtxBreadItem :to="{path: '/'}">首页</XtxBreadItem>' , '']
      // 3. 去除xtx-bread-item组件的i标签， 应该由render函数来组织
      // 4.遍历插槽中的item, 得到一个动态创建的节点，最后一个item不加i标签
      // 5. 把动态创建的节点渲染xtx-bread标签中
      //  获取默认插槽内容
    const items = this.$slots.default()   
    // console.log(items)
    // 再定义一个数组接收加 > (i)  后的 数组
    const dymanicItems = []
    items.forEach((item, i) => {
      dymanicItems.push(item)  //  ---->   <XtxBreadItem :to="{path: '/'}">首页</XtxBreadItem>
      if (i < (items.length - 1)) {  // ----->通过索引 让最后一个不加 i >
      dymanicItems.push(h('i', {class: 'iconfont icon-xiangyoujiantou'}))
      }
    })
    return h('div', {class: 'xtx-bread'}, dymanicItems)
  }
}
</script>

<style lang='less'>
  // 去除 scoped 属性， 目的： 让样式作用到xtx-bread-item 组件
.xtx-bread{
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all .4s;
      &:hover {
        color: @xtxColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
    // 样式的方式，不合理
    // &:last-child {
    //   display: none;
    // }
  }
}
</style>