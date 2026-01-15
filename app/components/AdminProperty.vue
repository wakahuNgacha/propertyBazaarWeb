<script setup>

</script>

<template>
    <NuxtLink to="/admin/properties/1" class="property">
        <div class="image">
            <img src="/pexels-heyho-7031607.jpg" alt="">
        </div>
        <div class="text">
            <div class="price">
                <p>KSH 30000000</p>

                <div class="icon_holder">
                    <img class="icon" src="/heart.png" alt="">
                </div>
            </div>

            <div class="heading">
                <p>Big mansion for sale</p>
            </div>

            <div class="icon_holder location">
                <img class="icon" src="/location.png" alt="">
                <p>County, town</p>
            </div>
        </div>
        
        <div class="features">
            <div class="icon_holder feature" v-for="i in 5">
                <img class="icon" src="/bath.png" alt="">
                <p class="subtitle">5</p>
                <p class="subtitle">Baths</p>
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
