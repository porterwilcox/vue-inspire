<template>
    <div class="quote quotes">
       <h1>{{quoteData.author}}</h1>
       <h3>{{quoteData.body}}</h3>
    </div>
</template>

<script>
export default {
   name: "quote",
   props: [],
   data() {
      return {}
   },
   computed: {
      quoteData() {
         return this.$store.state.quoteData
      }
   },
   methods: {},
   components: {}
}
</script>

<style>
.quotes {
   color: white;
   text-shadow: 0 0 5px black;
   text-align: center;
   margin-top: 18%;
}
</style>
