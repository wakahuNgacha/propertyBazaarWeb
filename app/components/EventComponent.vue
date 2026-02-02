<script setup>

</script>

<template>
    <NuxtLink to="/admin/media/events/1" class="property">
        <div class="image">
            <img src="/pexels-heyho-7031607.jpg" alt="">
        </div>
        <div class="text">
            <div class="price">
                <p>Campaign</p>

                <div class="icon_holder">
                    <img class="icon" src="/edit.png" alt="">
                </div>
            </div>

            <div class="heading">
                <p>(Description)Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, vitae maxime, sequi sapiente id ullam quam atque porro tempora, fugit debitis! Ad rem, voluptas pariatur praesentium atque delectus in deleniti?</p>
            </div>

            <div class="icon_holder location">
                <img class="icon" src="/calendar.png" alt="">
                <p>2/23/24</p>
            </div>

            <div class="icon_holder location">
                <img class="icon" src="/location.png" alt="">
                <p>County, town</p>
            </div>

        </div>
        
        <div class="features">
            <div class="icon_holder feature" v-for="i in 5">
                <p class="subtitle">content tags</p>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
    .property{
        width: 100%;
        /* flex: 0 0 calc(33.33% - 10px); */
        margin: 10px;
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
    .text{
        /* background-color: blueviolet; */
    }
    .price{
        display: flex;
        justify-content: space-between;
    }
    .icon_holder{
        display: flex;
        width: fit-content;
        /* background-color: aqua; */
        justify-content: center;
        align-items: center;
    }
    .icon{
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
    .features {
        display: grid;
        grid-template-columns: repeat(4, 1fr); 
        /* Space between your icons */
        gap: 5px; 
    }
    .feature{
        border: 1px, solid, var(--input-border);
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 5px;
    }
    .feature *{
        padding-left: 5px;
    }
</style>
