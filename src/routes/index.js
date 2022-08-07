import { createRouter, createWebHashHistory } from 'vue-router'
import WeatherCon from './WeatherCon'
import AirCon from './AirCon'

export default createRouter({
    //Hash 모드
    history: createWebHashHistory(),
    scrollBehavior() {
        return { top: 0 }
    },
    routes: [
        {
            path: '/',
            component: WeatherCon
        },
        {
            path: '/air',
            component: AirCon
        }
    ]
})