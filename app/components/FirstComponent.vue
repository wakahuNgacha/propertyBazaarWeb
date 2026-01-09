<script setup>

</script>

<template>
    <div class="component_holder">
        <div class="search_holder">
            <div class="search_text">
                <h1>Get Your Dream Property With Property Bazaar</h1>
                <p>The number one real estate marketplace</p>
            </div>
            <div class="search_box">
                <div class="buy">
                    <button class="primary">Buy</button>
                    <button class="secondary">Sell</button>
                </div>
                <div class="form">
                    <form action="">
                        <!-- <input type="text"> -->

                    </form>
                </div>
            </div>
        </div>
        <div class="image">
            <img src="/pexels-pixabay-280229.jpg" alt="">
        </div>
        <div class="categories">
            <p>Brows to find</p>
            <div class="categories_holder">
                <div class="category_sections">
                    <img src="/house.png" alt="">
                    <p>Homes</p>
                </div>
                <div class="category_sections">
                    <img src="/city.png" alt="">
                    <p>Apartments</p>
                </div>
                <div class="category_sections">
                    <img src="/land.png" alt="">
                    <p>Plots</p>
                </div>
                <div class="category_sections">
                    <img src="/farm.png" alt="">
                    <p>Ranches</p>
                </div>               
            </div>
        </div>
    </div>

</template>

<style scoped>
    .component_holder{
        position: relative;
        background-color: var(--input-bg);
        height: 800px;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        padding: 40px;
    }
    .search_holder{
        background-color: var(--white);
        width: 80%;
        height: 300px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        /* align-items: center; */
        border-radius: 10px;
        z-index: 2;
    }
    .search_box{
        /* background-color: aquamarine; */
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        padding: 40px;
    }
    .buy *{
        margin: 5px;
    }
    .form{
        border: 1px, solid, var(--input-border);
        border-radius: 5px;
        height: 50px ;
        width: 100%;
    }
    .image{
        position: absolute;
        top: 30%;
        width: 90%;
        height: 500px;
        border-radius: 10px;
    }
    .image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    .categories{
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        width: 90%;
    }
    .categories_holder{
        display: flex;
        justify-content: space-between;
        flex-direction: row;  
    }
    .category_sections{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .category_sections img{
        width: 30px;
        height: 30px;
        margin: 10px;
    }

</style>
