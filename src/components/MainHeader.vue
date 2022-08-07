<template>
    <header class="header">
        <h2>Weather Application</h2>
        <p>{{ username }}님, 반갑습니다.</p>
        
    </header>
    <div class="nav">
        <div
        v-for="nav in navigation"
        :key="nav.name"
        class="nav-item">
            <RouterLink
                :to="nav.href"
                active-class="active"
                class="nav-link">
                {{ nav.name }}
            </RouterLink>
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            navigation:[
                {
                    name : 'Weather',
                    href : '/'
                },
                {
                    name : 'Air',
                    href : '/air'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .header{
        background: linear-gradient(45deg,#8360c3, #2ebf91);display:flex;justify-content: space-between;align-items:center;
        padding:1em;
    }
    .header h2{
        color:#fff;
    }
    .header p{
        font-size:12px;color:#fff;
    }
    .nav{
        display:flex;justify-content: space-evenly;
    }
</style>