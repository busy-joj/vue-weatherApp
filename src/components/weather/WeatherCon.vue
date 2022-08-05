<template>
  <h2>Weather Cont</h2>
  <div class="weather-wrap">
    <ConHeader />
    <CitySeletor @selectCity="selectCity"/>
    <WeatherList :weatherList="weatherList"/>
  </div>

</template>

<script>
import ConHeader from './ConHeader'
import CitySeletor from './CitySeletor'
import WeatherList from './WeatherList'

export default {
    name:"weaterContent",
    components:{
        ConHeader,
        CitySeletor,
        WeatherList
    },
    data(){
      return{
        weatherList:[]
      }
    },
    methods:{
      selectCity(city){
        if(city.selected){
          this.weatherList.push(city)
        } else{
          const index = this.weatherList.findIndex(weather => weather.code===city.code)
          this.weatherList.splice(index, 1)
        }
        console.log(city)
      }
    }
}
</script>

<style>

</style>