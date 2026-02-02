<script setup>

</script>

<template>
    <NuxtLink to="/admin/" class="subscriber">
        <div class="top">
            <div class="left">
                <img src="/pexels-heyho-7031607.jpg" alt="">
                <div class="name">
                    <p>Name</p>
                </div>
            </div>
            <hr>
            <div class="right">

            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <p>preferred Location: Nairobi</p>
                <p>preferred property type: Apartments</p>
                <p>Status: active</p>
            </div>
            <div class="right">
                <p>Subscribed at: 20/2/24</p>
            </div>
        </div>

    </NuxtLink>
</template>

<style scoped>
.subscriber{
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 250px;
    border: 1px, solid, var(--input-border);
    border-radius: 10px;
    margin-bottom: 10px;
}
.top .left{
    display: flex;
    gap: 10px;
    align-items: center;
}
.left img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
}
.bottom{
    display: flex;
    gap: 30px;
}
</style>
