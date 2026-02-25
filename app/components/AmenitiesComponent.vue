<script setup lang="ts">
const props = defineProps({
  amenity: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle'])

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('toggle', {
    id: props.amenity.id,
    name: props.amenity.name,
    checked: target.checked
  })
}
</script>

<template>
  <div class="amenity-item">
    <div class="image">
      <img class="icon" src="/church.png" alt="Amenity Image" />
    </div>

    <p>{{ amenity.name }}</p>

    <input
      type="checkbox"
      @change="handleChange"
    />
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
