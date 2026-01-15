<script setup>

</Script>
<template>
    <div class="container">
        <div class="controllers">
            <div class="right">
                <NuxtLink to="/blogs" class="secondary">
                    <img class="icon" src="/back.png" alt="back">
                    <p>Back to Blogs</p>
                </NuxtLink>
            </div>
            <div class="left">
                <button class="secondary">
                    <img class="icon" src="/share.png" alt="share">
                    <p>Share</p>
                </button>
                <button class="secondary">
                    <img class="icon" src="/bookmark.png" alt="save">
                    <p>Save</p>
                </button>           
            </div>

        </div>
        <div class="full">
            <h1>The Blogs Title for the  titksbhdcs</h1>
        </div>
        <div class="full image">
            <img src="/pexels-heyho-7031607.jpg" alt="blog image">
        </div>
        <div class="full tags">
            <p class="category">Market insights</p>
            <p>Published on: 2024-05-15</p>
        </div>
        <div class="full excerpt">
            <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae, unde ab tempora mollitia sequi tempore consequuntur saepe, officia quidem, incidunt ipsam voluptate quos hic. Incidunt nostrum velit ea! Laboriosam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae, unde ab tempora mollitia sequi tempore consequuntur saepe, officia quidem, incidunt ipsam voluptate quos hic. Incidunt nostrum velit ea! Laboriosam.
            </p>
        </div>
        <div class="full body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae, unde ab tempora mollitia sequi tempore consequuntur saepe, officia quidem, incidunt ipsam voluptate quos hic. Incidunt nostrum velit ea! Laboriosam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae, unde ab tempora mollitia sequi tempore consequuntur saepe, officia quidem, incidunt ipsam voluptate quos hic. Incidunt nostrum velit ea! Laboriosam.
            </p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae, unde ab tempora mollitia sequi tempore consequuntur saepe, officia quidem, incidunt ipsam voluptate quos hic. Incidunt nostrum velit ea! Laboriosam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae, unde ab tempora mollitia sequi tempore consequuntur saepe, officia quidem, incidunt ipsam voluptate quos hic. Incidunt nostrum velit ea! Laboriosam.
            </p>

        </div>
    </div>
</template>
<style scoped>
    .container{
        margin-left: 40px;
        margin-right: 40px;
    }
    .controllers{
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .secondary{
        padding-top: 2px;
        padding-bottom: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .left{
        display: flex;
        gap: 10px;
    }
    .image{
        width: 100%;
        height: 500px;
    }
    .image img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
    .category{
        background-color: var(--primary-green);
        /* color: var(--white); */
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: 500;
    }
    .tags{
        display: flex;
        align-items: center;
        margin-top: 20px;
        width: 100%;
        /* background-color: aquamarine; */
        justify-content: space-between;
    }
</style>
