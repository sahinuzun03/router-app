<template>
  <div>
    <h3>Öğrenci Bilgi Sayfası</h3>
    <p>Öğrenci ID : {{ studentID }}</p>
  </div>
</template>

<script>
export default {
data(){
    return {
        studentID:this.$route.params.id
    }
}
}
</script>

<style>

</style>