<script setup>

</script>

<template>
    <div class="container">
        <NuxtLink to="/signUp" class="category">
            <img src="/pexels-heyho-7031607.jpg" alt="">
            <h3>Get started as a real estate investor</h3>
        </NuxtLink>

        <NuxtLink to="/agentSignUp" class="category">
            <img src="/pexels-heyho-7031607.jpg" alt="">
            <h3>Get started as a real estate Agent</h3>
        </NuxtLink>

        <NuxtLink to="/partnerSignUp" class="category">
            <img src="/pexels-heyho-7031607.jpg" alt="">
            <h3>Get started as a Partner</h3>
        </NuxtLink>
    </div>

</template>

<style scoped>
    .container{
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .category{
        width: 400px;
        height: 400px;
        margin: 20px;
        /* background-color: blue; */
        /* border: 1px, solid, var(--input-border); */
    }
    .category img{
        width: 350px;
        border-radius: 5px;
    }

</style>
