<template>
    <div class="dashboard container-fluid">
       <router-link class="mx-5" :to="{name: 'todos'}">Check your Todos</router-link>
      <weather />
      <quote />
    </div>
</template>

<script>
import Quote from '@/components/Quote.vue'
import Weather from '@/components/Weather.vue'

export default {
   name: "dashboard",
   props: [],
   data() {
      return {}
   },
   computed: {},
   methods: {},
   components: {
      Quote,
      Weather
   }
}
</script>

