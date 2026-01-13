<script setup>

</script>

<template>
    <div class="full container">
        <div class="filters">
            <div class="filter">
                <div class="top">
                    <p>Location </p>                
                </div>
                <div class="bottom">
                    <p class="subtitle">Town, Location</p>
                </div>
            </div>

            <div class="filter">
                <div class="top">
                    <p>Price </p>                
                </div>
                <div class="bottom">
                    <p class="subtitle">select</p>
                </div>
            </div>

            <div class="filter">
                <div class="top">
                    <p>Property Type</p>                
                </div>
                <div class="bottom">
                    <p class="subtitle">select</p>
                </div>
            </div>

            <div class="filter">
                <div class="top">
                    <p>Property Use</p>                
                </div>
                <div class="bottom">
                    <p class="subtitle">select</p>
                </div>
            </div>

            <div class="filter">
                <div class="top">
                    <p>Size</p>                
                </div>
                <div class="bottom">
                    <p class="subtitle">select</p>
                </div>
            </div>

        </div>

        <div class="sum_search">
            <h2>Nairobi, Kilimani House 2 acres</h2>
            <p>2000 Properties found</p>

        </div>

        <div class="property_row">
            <div class="property_holder" v-for="i in 10">
                <PropertyComponent/>            
            </div>

        </div>        
    </div>
</template>

<style scoped>
    .container{ 
        margin: 20px;
    }
    .filters{
        display: flex;
        margin-top: 50px;
        margin-bottom: 50px;
        gap: 10px;
    }
    .filter{
        border: 1px, solid, var(--input-border);
        border-radius: 5px;
        width: fit-content;
        padding-left: 20px;
        padding-right: 20px;
        min-width: 150px;
    }
    .property_row{
        width: 100%;
        /* background-color: aquamarine; */
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-right: 20px;
        margin-right: 20px;
    }
    .property_holder{
        flex: 0 0 calc(33.33% - 10px); 
        box-sizing: border-box;
    }
</style>
