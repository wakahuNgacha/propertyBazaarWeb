<script setup>

</Script>
<template>
    <div class="full">
        <div class="blog_search">
            <h1>Explore Expert Insights And Stay Informed</h1>
            <p>Discover the latest trends, expert advice, and industry insights to help you make informed decisions about your property investments.</p>
            <div class="form_holder">
                <input type="text" placeholder="Search blogs..." />
                <button class="primary">Search</button>               
            </div>

        </div>
    </div>

    <div class="container">
        <h3>Recent Blog Posts</h3>
        <div class="top_blogs">
            <div class="main">
                <div class="main_card">
                    <div class="image">
                        <img src="/pexels-heyho-7031607.jpg" alt="blog image">
                    </div>
                    <div class="content">
                        <p>Published on: 2024-05-15</p>
                        <h3>Blog Title</h3>
                        <p>Blog Description</p>
                    </div>
                    <div class="read_more">
                        <NuxtLink to="/">Read More</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="side">
                <div class="side_card">
                    <div class="image">
                        <img src="/pexels-heyho-7031607.jpg" alt="blog image">
                    </div>
                    <div class="content">
                        <p>Published on: 2024-05-15</p>
                        <h3>Blog Title</h3>
                        <p>Blog Description</p>
                        <NuxtLink to="/">Read More</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container nav">
        <NuxtLink to="">All Blogs</NuxtLink>
        <NuxtLink to="">Buying Property </NuxtLink>
        <NuxtLink to="">Market insights </NuxtLink> 
        <NuxtLink to="">Legal matters </NuxtLink>
        <NuxtLink to="">Mortgage Hub </NuxtLink>
        <NuxtLink to="">Sellers guide</NuxtLink>    
    </div>

    <div class="container blogs">
        <div class="blog_holder" v-for="i in 6" :key="i">
            <BlogComponent/>
        </div>
    </div>

</template>
<style scoped>
    .full{
        position: relative;
        background-color: var(--input-bg);
        height: 300px;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        padding: 40px;
        margin: 20px;
    }
    .container{
        margin-left: 40px;
        margin-right: 40px;
    }
    .top_blogs{
        display: flex;
        gap: 20px;
        margin-top: 20px;
    }
    .main{
        width: 50%;
    }
    .side{
        width: 50%;
    }
    .main_card, .side_card{
        display: flex;
        gap: 10px;
    }
    .main_card{
        flex-direction: column;
    }
    .main_card .image img{
        width: 100%;
        border-radius: 10px;
        height: auto;
    } 
    .side_card .image img{
        width: 200px;
        height: 150px;
        border-radius: 10px;
        object-fit: cover;
    }
    .side_card .content{
        display: flex;
        height: 150px;
        width: calc(100% - 210px);
        flex-direction: column;
        /* background-color: blueviolet; */
        align-items: start;
        justify-content: start;
    }
    .nav{
        display: flex;
        gap: 20px;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .nav a:hover {
        color: var(--primary-green);
        text-decoration: underline;
        text-underline-offset: 8px;
        transition: all 0.3s ease;
        text-decoration-thickness: 2px;
    }
    .blogs{
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }
    .blog_holder{
        flex: 0 0 calc(33.33% - 10px); 
        box-sizing: border-box;
    }
</style>
