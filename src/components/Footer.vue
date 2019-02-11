<template>
  <footer>
    <p>Powered by 若许闲乘月 · 本站仅供学习使用 · <a href="#">建议</a></p>
    <p>&copy; {{new Date().getFullYear()}} v.kieee.cn</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer{
  text-align: center;
  color: #aaa;
  background-color: #313131;
}
</style>
