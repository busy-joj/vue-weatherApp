<template>
  <h2>Weather Cont</h2>
  <div class="weather-wrap">
    <ConHeader />
    <CitySeletor @selectCity="selectCity"/>
    <WeatherList :weatherList="weatherList"/>
  </div>

</template>

<script>
import weatherMixin from "@/mixins/weatherMixin"
import ConHeader from '@/components/weather/ConHeader'
import CitySeletor from '@/components/weather/CitySeletor'
import WeatherList from '@/components/weather/WeatherList'

export default {
    name:"weaterContent",
    components:{
        ConHeader,
        CitySeletor,
        WeatherList
    },
    mixins:[weatherMixin],
    data(){
      return{
        weatherList:[]
      }
    },
    methods:{
      async selectCity(city){
        if(city.selected){
          const weather = await this.getWeatherInfo(city)        
          this.weatherList.unshift(weather)
        } else{
          const index = this.weatherList.findIndex(weather => weather.code === city.code)
          this.weatherList.splice(index, 1)
        }
        console.log(city)
      }
    }
}
</script>

<style>

</style>