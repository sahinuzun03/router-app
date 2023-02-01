<template>
  <div>
    <h1>Öğrenciler</h1>
    <div v-for="student in students" :key="student.id">
        <p> {{ student.name }} : {{ student.not }}</p>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        students:[{id:1,name:"Şahin",not:100},
        {id:2,name:"Esma",not:100},
        {id:3,name:"Mehmet",not:90},
        {id:4,name:"Ayşenur",not:80},
        {id:5,name:"Yusuf",not:25},
        {id:6,name:"Ali",not:45},]
    }
}
}
</script>

<style>

</style>