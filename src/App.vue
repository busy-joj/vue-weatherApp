<template>
  <MainHeader/>
  <WeatherCon/>
</template>

<script>
import MainHeader from './components/MainHeader'
import WeatherCon from './components/weather/WeatherCon'

export default {
  name: 'App',
  components: {
    MainHeader,
    WeatherCon
  }
}
</script>

<style>
</style>
