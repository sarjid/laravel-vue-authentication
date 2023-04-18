<template>
  <div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content">
        <div class="card w-full max-w-md shadow-2xl bg-base-100">
          <div class="card-body">
            <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
            <font-awesome-icon :icon="['fas', 'user-secret']" />

            <Form
              @submit="onSubmit"
              v-slot="{ meta, isSubmitting }"
              :validation-schema="schema"
              :initial-values="formValues"
            >
              <div class="form-control">
                <LabelInput label="Email" for="email" />
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                />
              </div>

              <div class="form-control">
                <LabelInput label="Password" />
                <TextInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <div class="form-control mt-6">
                <button
                  class="btn btn-primary"
                  :disabled="!meta.valid || isSubmitting"
                >
                  <span v-if="!isSubmitting"> Login</span>
                  <font-awesome-icon
                    v-else="isSubmitting"
                    :icon="['fas', 'spinner']"
                    size="2x"
                  />
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import TextInput from "@/components/Form/TextInput.vue";
import LabelInput from "@/components/Form/LabelInput.vue";
import { Form } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("Email field is required").email(),
  password: yup.string().required("Password field is required").min(8),
});

const auth = useAuthStore();
const router = useRouter();

// Initial values
const formValues = {
  email: "test@gmail.com",
  password: "password",
};

async function onSubmit(values, actions) {
  const res = await auth.login(values);
  if (res.data) {
    router.push({ name: "user.dashboard" });
  } else {
    actions.setErrors(res);
  }
}
</script>

<style scoped>
/* Define an animation behavior */
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.fa-spinner {
  animation: spinner 1s linear infinite;
}
</style>
