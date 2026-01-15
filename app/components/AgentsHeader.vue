<script setup>

</script>

<template>
    <div class="full holder">
        <div class="section">
            <NuxtLink to="/agent">
                <h1>Property Bazaar</h1>                
            </NuxtLink>
        </div>
        <div class="section nav">
            <NuxtLink to="/agent/properties">Home </NuxtLink>
            <NuxtLink to="/agent/add">Add</NuxtLink>
            <NuxtLink to="/agent/refer">Refer </NuxtLink>
        </div>
        <div class="section">
            <NuxtLink to="/agent/agent-profile">
                <img class="icon" src="/avatar.png" alt="">                
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
