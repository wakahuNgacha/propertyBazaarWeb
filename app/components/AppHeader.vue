<script setup>

</script>

<template>
    <div class="holder">
        <div class="section">
            <NuxtLink to="/">
                <h1>Property Bazaar</h1>                
            </NuxtLink>
        </div>
        <div class="section nav">
            <NuxtLink to="/properties">Home </NuxtLink>
            <NuxtLink to="">Sell </NuxtLink>
            <NuxtLink to="">Refer </NuxtLink> 
            <NuxtLink to="">Blogs </NuxtLink>
            <NuxtLink to="">About us </NuxtLink>
            <NuxtLink to="">Contact us</NuxtLink>                    

        </div>
        <div class="section">
            <button class="secondary">Log in</button>
            <button class="primary">Get Started</button>
        </div>
    </div>
    <hr>
</template>

<style scoped>
    .holder{
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* background-color: aquamarine; */
    }
    .section{
        display: flex;
        width: fit-content;

    }
    .section *{
        margin-left: 5px;
        margin-right: 5px;
    }
    .nav a:hover {
        color: var(--primary-green);
        text-decoration: underline;
        text-underline-offset: 8px;
        transition: all 0.3s ease;
        text-decoration-thickness: 2px;
    }
</style>
