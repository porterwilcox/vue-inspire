<template>
    <div class="weather">
       <h1>{{Math.floor(9/5*(weatherData.temp-273)+32)}}°F</h1>
       <h3>{{weatherData.name}}</h3>
       
    </div>
</template>

<script>
export default {
   name: "weather",
   props: [],
   data() {
      return {}
   },
   computed: {
      weatherData() {
         return this.$store.state.weatherData
      }
   },
   methods: {},
   components: {}
}
</script>

<style>
.weather {
   color: red;
   text-shadow: black;
   text-align: right;
}
</style>