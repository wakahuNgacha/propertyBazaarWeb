<script setup>
</script>

<template>
    <div class="channel">
        <div class="top">
            <img src="/whatsapp.png" alt="">
        </div>
        <div class="bottom">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatum, veritatis quos ipsum omnis ab molestias itaque eligendi laboriosam libero voluptate ipsam laudantium fuga, provident numquam impedit labore dignissimos illum.</p>
        </div>
    </div>

</template>

<style scoped>
.channel{
    width: 90%;
    padding: 20px;
    height: 200px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    border: 1px, solid, var(--input-border);
    border-radius: 10px;
    margin-bottom: 10px;
}

.top img{
    width: 30px;
    height: 30px;
}
</style>
