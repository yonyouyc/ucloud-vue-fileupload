<template>
  <div id="app">
    <h1>1.当前租户：附件只读</h1>
    <ufileuploader></ufileuploader>
    <h1>2.当前租户：附件上传下载删除</h1>
    <ufileuploader></ufileuploader>
    <h1>3.当前租户：行内附件</h1>
    <ufileuploader></ufileuploader>
    <h1>4.跨租户：行内附件</h1>
    <ufileuploader></ufileuploader>
    <h1>5.跨租户：非行内附件</h1>
    <ufileuploader></ufileuploader>
    <h1>6.isDark 来自招投标的需求隐藏返回的文件名和下载下来的文件名</h1>
    <ufileuploader></ufileuploader>
  </div>
</template>

<script>
import ufileuploader from './index'
export default {
  name: 'app',
  components: {
    ufileuploader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
