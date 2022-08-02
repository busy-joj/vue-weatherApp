<template>
  <h2>Weather Cont</h2>
  <div class="weather-wrap">
    <ConHeader />
    <CitySeletor />
  </div>

</template>

<script>
import ConHeader from './ConHeader'
import CitySeletor from './CitySeletor'

export default {
    name:"weaterContent",
    components:{
        ConHeader,
        CitySeletor
    }
}
</script>

<style>

</style>