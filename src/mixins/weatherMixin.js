import axios from "axios"

const weatherMixin = {
    data() {
        return {}
    },
    methods: {
        async getWeatherInfo(city) {
            const API_KEY = "c737530293546e8a6c1306f5b49dea1c"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.code}&appid=${API_KEY}"`
            const res = await axios.get(url)
            return res.data;
        },
    }
}

export default weatherMixin