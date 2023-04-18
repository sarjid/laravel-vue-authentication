<script setup>
import HeaderPart from "@/components/Header/Index.vue";
import FooterPart from "@/components/Footer/Index.vue";
</script>
<template>
  <div>
    <HeaderPart />
    <slot name="content" />
    <FooterPart />
  </div>
</template>
