<template>
  <div>
     <nav>
    <router-link :to="{ name:'home' }">Home</router-link> |
    <router-link :to=" {name:'about'}">About</router-link> |
    <router-link :to=" {name:'students'}">Students</router-link> 
    <!-- <router-link :to="{ path:'/' }">Path Home</router-link> |
    <router-link :to="{ path:'/about'}">Path About</router-link> -->
  </nav>
  <router-view/>
  </div>
 
  <!-- Ben hangi sayfayı çağırırsam çağırayım o sayfa router-view tarafında gelecektir. -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
