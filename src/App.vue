<template>
  <nav>
    <router-link to="/">模板语法</router-link> |
    <router-link to="/about">响应式基础</router-link> |
    <router-link to="/ComputedPage">计算属性</router-link> | 
    <router-link to="/ClassStyle">class和style绑定</router-link> | 
    <router-link to="/RenderPage">条件和列表渲染</router-link> | 
    <router-link to="/EventPage">事件处理</router-link> | 
    <router-link to="/LifeCycle">生命周期</router-link> | 
    <router-link to="/WatchPage">watch函数</router-link> | 
    <router-link to="/ComponentPage">组件基础进阶</router-link> | 
    <router-link to="/ModelPage">model组件运用</router-link> | 
    <router-link to="/InjectPage">依赖注入</router-link> | 
    <router-link to="/SlotPage">插槽</router-link> | 
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
