<script setup lang="ts">
const props = defineProps({
  feature: {
    type: Object,
    required: true
  }
})
const count = ref(1)
const emit = defineEmits(['toggle'])
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('toggle', {
    id: props.feature.id,
    name: props.feature.name,
    count: count.value,
    checked: target.checked
  })
}
</script>

<template>
    <div class="amenity-item">
        <div class="image">
            <img class="icon" src="/church.png" alt="Feature Image" />
        </div>
        <p>{{ feature.name }}</p>
        <p>{{ count }}</p>
        <input type="number" name="count" id="" placeholder="Count" v-model="count">

        <input type="checkbox" @change="handleChange">
    </div>
</template>

<style scoped>
.amenity-item {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid var(--primary-green);
    padding-left: 10px;
    padding-right: 20px;
    width: fit-content;
    background-color: var(--input-bg);
}
</style>
