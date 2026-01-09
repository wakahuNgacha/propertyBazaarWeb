<script setup>

</script>

<template>
    <AppHeader/>
    <div class="controllers">
        <div class="right">
            <button class="secondary">
                <img src="" alt="back">
                <p>Back</p>
            </button>
        </div>
        <div class="left">
            <button class="secondary">
                <img src="" alt="share">
                <p>Share</p>
            </button>
            <button class="secondary">
                <img src="" alt="save">
                <p>Save</p>
            </button>           
        </div>

    </div>

</template>

<style scoped>
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
    }
    .left{
        display: flex;
        gap: 10px;
    }
</style>
