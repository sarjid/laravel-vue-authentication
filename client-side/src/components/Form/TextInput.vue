<script setup>
import InputError from "@/components/Form/InputError.vue";
import { Field } from "vee-validate";

// props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },

  modelValue: {
    type: String,
    default: "",
  },
});

//emits for v-model data updated
// defineEmits(["update:modelValue"]);

// use for validation with veevalidate
</script>
<template>
  <Field :name="name" v-slot="{ field, meta, errors }">
    <div
      class="border border-green-500 rounded-lg flex"
      :class="{
        'border-green-500': meta.valid && meta.touched,
        'border-red-500': !meta.valid && meta.touched,
      }"
    >
      <input
        class="flex-auto p-3 block rounded-lg font-medium outline-none border-transparent focus:border-transparent focus:ring-0 font-bn text-lg"
        v-bind="{ ...$attrs, ...field }"
        @input="$emit('update:modelValue', $event.target.value)"
      />

      <div class="flex items-center pr-4">
        <svg
          v-show="(meta.valid && meta.touched) || (!meta.valid && meta.touched)"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          class="stroke-current text-green-500 inline-block h-6 w-6"
          :class="{
            'text-green-500': meta.valid && meta.touched,
            'text-red-500': !meta.valid && meta.touched,
          }"
        >
          <path
            v-if="meta.valid && meta.touched"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />

          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>

    <InputError :message="errors[0]" />
  </Field>
</template>

<style scoped>
.is-success {
  border: 2px solid green;
}

.is-danger {
  border: 2px solid red;
}
</style>
