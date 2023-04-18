<script setup>
const props = defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
});
</script>
<template>
  <label class="label">
    <span v-if="label" class="label-text">{{ label }}</span>
    <span v-else>
      <slot />
    </span>
  </label>
</template>

<style scoped></style>
