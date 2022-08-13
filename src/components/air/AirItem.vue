<template>
  <li class=air-item>
    <h3>{{ air.label }}</h3>
    <p class="temperature">{{ air.aqi }}</p>
    <p class="info">
        <img :src="air.icon">
    </p>
  </li>
</template>

<script>
export default {
    name: "airItem",
    props:{
        air:{
            type:Object,
            default(){
                return {
                    label:'서울',
                    code: 'Seoul',
                    aqi:1
                }
            }
        }
    }
}
</script>

<style scoped>
.air-item{display:flex;flex-direction: column;justify-content:center;align-items: center;padding:0.5em;border-radius:20px;box-shadow: 10px 10px 20px #a6a6a6,-10px -10px 20px #ffffff;margin-bottom:20px;}
.air-item.good{background: #00ff00;}

.air-item h3{font-size:14px;color:#333;}
.air-item .temperature{font-size:36px;}
.info{display:flex;justify-content:center;align-items: center;font-size:12px;}
.info *{margin-right:0.4em;}
</style>