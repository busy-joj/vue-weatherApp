<template>
  <li class="weather-item">
    <h3>{{ weather.label }}</h3>
    <div class="weather-img">
        <img :src="weather.icon">
    </div>
    <p class="temperature">{{ weather.temperature }}&deg;c</p>
    <p class="info">
        <span>습도 {{ weather.humidity }}</span>
        <span>바람 {{ weather.wind }}m/s</span>
    </p>
  </li>
</template>

<script>
export default {
    name: "weaterItem",
    props:{
        weather:{
            type:Object,
            default(){
                return {
                    label:'서울',
                    code: 'Seoul',
                    temperature:20,
                    humidity:15,
                    wind:1.5
                }
            }
        }
    }
}
</script>

<style scoped>
.weather-item{display:flex;flex-direction: column;justify-content:center;align-items: center;padding:0.5em;border-radius:20px;box-shadow: 10px 10px 20px #a6a6a6,-10px -10px 20px #ffffff;margin-bottom:20px;}
.weather-item h3{font-size:14px;color:#333;}
.weather-item .temperature{font-size:30px;}
.info{display:flex;justify-content:center;align-items: center;font-size:12px;}
.info *{margin-right:0.4em;}
.weather-img{width:80px;}
.weather-img img{width:100%;}
</style>