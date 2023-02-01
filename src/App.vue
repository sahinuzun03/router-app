<template>
  <div>
     <nav>
    <router-link :to="{ name:'home' }">Home</router-link> |
    <router-link :to=" {name:'about'}">About</router-link> |
    <router-link :to=" {name:'students'}">Students</router-link> 
    <!-- <router-link :to="{ path:'/' }">Path Home</router-link> |
    <router-link :to="{ path:'/about'}">Path About</router-link> -->
  </nav>
  <div>
    <span @click="anasayfa">Anasayfa</span> |
    <span @click="geri">Geri</span> |
    <span @click="ileri">İleri</span>
  </div>


  <router-view/>
  </div>
 
  <!-- Ben hangi sayfayı çağırırsam çağırayım o sayfa router-view tarafında gelecektir. -->
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    anasayfa(){
      this.$router.push({name:'home'})
    },
    ileri(){
      
      this.$router.go(+1) //ileri gitmek için kullanılır
    },
    geri(){
      this.$router.go(-1) //Geri gitmek için kullanılır
    }
  }
}
</script>

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
