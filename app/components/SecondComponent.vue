<script setup>

</script>

<template>
    <div class="component_holder">
        <h1>Featured Properties</h1>
        <p>We collaborate with the best agents and developers to help you get the best.</p>

        <div class="property_row">
            <div class="property_holder" v-for="i in 3">
                <PropertyComponent/>                
            </div>

        </div>
        <button class="secondary">Explore More Listings</button>
    </div>

</template>

<style scoped>
    .component_holder{
        width: 90%;
        margin-top: 100px;
        padding: 40px;
    }
    .property_row{
        display: flex;
        gap: 15px;
        margin-bottom: 50px;
    }
    .property_holder{
        flex: 0 0 calc(33.33% - 10px); 
        box-sizing: border-box;
    }

</style>
