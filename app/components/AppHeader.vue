<script setup>

</script>

<template>
    <div class="full holder">
        <div class="section">
            <NuxtLink to="/">
                <h1>Property Bazaar</h1>                
            </NuxtLink>
        </div>
        <div class="section nav">
            <NuxtLink to="/properties">Home </NuxtLink>
            <NuxtLink to="/sell">Sell </NuxtLink>
            <NuxtLink to="/agent">Agent </NuxtLink>
            <NuxtLink to="">Refer </NuxtLink> 
            <NuxtLink to="/blogs">Blogs </NuxtLink>
            <NuxtLink to="">About us </NuxtLink>
            <NuxtLink to="">Contact us</NuxtLink>                    

        </div>
        <div class="section">
            <button class="secondary">Log in</button>
            <NuxtLink to="/getStarted">
                <button class="primary">Get Started</button>                
            </NuxtLink>

        </div>
    </div>
    <hr>
</template>

<style scoped>
    .full{
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* background-color: aquamarine; */
    }
    .section{
        display: flex;
        width: fit-content;
        gap: 20px;
    }
    .nav a:hover {
        color: var(--primary-green);
        text-decoration: underline;
        text-underline-offset: 8px;
        transition: all 0.3s ease;
        text-decoration-thickness: 2px;
    }
</style>
