<script setup>

</script>

<template>
    <div class="blog_card">
        <div class="image">
            <img src="/pexels-heyho-7031607.jpg" alt="blog image">
        </div>
        <div class="content">
            <div class="content_top">
                <p class="category">Market insights</p>
                <img class="icon" src="/bookmark.png" alt="bookmark">
            </div>

            <p>Published on: 2024-05-15</p>
            <h3>Blog Title</h3>
            <p>Blog Description</p>
            <NuxtLink to="/">Read More</NuxtLink>
        </div>
    </div>
</template>
<style scoped>
    .blog_card{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;
        background-color: var(--white);
    }
    .image{
        width: 100%;
        height: auto;
    }
    .image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
    .content{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .content_top{
        width: 100%;
        /* background-color: blue; */
        padding-left: 2px;
        padding-right: 2px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .category{
        background-color: var(--primary-green);
        color: var(--white);
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: 500;
    }
    .icon{
        width: 20px;
        height: 20px;
    }

</style>
 