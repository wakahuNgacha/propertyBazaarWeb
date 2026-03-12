<script setup>
const properties = ref([])

onMounted(async () =>{
    properties.value = await $fetch('/api/properties/properties')
})
</script>

<template>
    <div class="full">
        <h1>Featured Properties</h1>
        <p>We collaborate with the best agents and developers to help you get the best.</p>
        <div class="property_row">
            <div class="property_holder" v-for="property in properties.slice(0, 3)" :key="property.id">
                <PropertyComponent :property="property"/>                
            </div>

        </div>
        <button class="secondary">Explore More Listings</button>
    </div>

</template>

<style scoped>
    .full{
        /* background-color: aquamarine; */
        margin-top: 100px;
        /* padding: 40px; */
        margin-right: 20px;
        margin-left: 20px;}
    .property_row{
        /* width: 100%; */
        display: flex;
        gap: 10px;
        margin-bottom: 50px;
    }
    .property_holder{
        flex: 0 0 calc(33.33% - 10px); 
        box-sizing: border-box;
    }

</style>
