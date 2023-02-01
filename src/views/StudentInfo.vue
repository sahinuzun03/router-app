<template>
  <div>
    <h3>Öğrenci Bilgi Sayfası</h3>
    <p>Öğrenci ID : {{ id }}</p>
  </div>
</template>

<script>
export default {
    //Burada propslara id vererek id'yi erişilebilri yapmış oldum.
    props:['id']
}
</script>

<style>

</style>