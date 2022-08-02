<template>
    <header class="header">
        <h2>Weather Application</h2>
        <p>{{ username }}님, 반갑습니다.</p>
    </header>
</template>

<script>
export default {
    
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
</style>