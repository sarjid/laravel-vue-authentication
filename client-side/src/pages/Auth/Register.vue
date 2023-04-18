<template>
  <div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content">
        <div class="card w-full max-w-md shadow-2xl bg-base-100">
          <div class="card-body">
            <Form
              @submit="onSubmit"
              v-slot="{ meta, isSubmitting }"
              :validation-schema="schema"
            >
              <div class="form-control">
                <LabelInput label="Name" for="name" />
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="name"
                />
              </div>

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

              <div class="form-control">
                <LabelInput for="confirmPass" label="Retype Password" />
                <TextInput
                  id="confirmPass"
                  type="password"
                  name="password_confirmation"
                  placeholder="Retype Password"
                />
              </div>

              <div class="form-control mt-6">
                <button
                  class="btn btn-primary"
                  :disabled="!meta.valid || isSubmitting"
                >
                  Register
                  <span v-show="isSubmitting">..loading</span>
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
import TextInput from "@/components/Form/TextInput.vue";
import LabelInput from "@/components/Form/LabelInput.vue";
import { Form } from "vee-validate";
import { object, string, ref as yupRef } from "yup";

const schema = object({
  name: string().required().min(3),
  email: string().required().email(),
  password: string().required().min(8),
  password_confirmation: string()
    .required()
    .min(8)
    .oneOf(
      [yupRef("password"), null],
      "password and confirm password must be match"
    ),
});

async function onSubmit(values, actions) {
  // Submit values to API...
  // alert(JSON.stringify(values, null, 2));
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(values);
  actions.resetForm();
}
</script>

<style lang="scss" scoped></style>
