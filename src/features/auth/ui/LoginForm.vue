<script setup lang="ts">
import { ref } from "vue";
import { InputText, Password, Button, Message, useToast } from "primevue";
import { useAuthStore } from "../model/store.ts";
import { useRouter } from "vue-router";

const form = ref({
  email: "",
  password: "",
});

const errors = ref<string[]>([]);
const isSubmitting = ref(false);
const auth = useAuthStore();
const toast = useToast();
const router = useRouter();

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  errors.value = [];
  isSubmitting.value = true;

  if (!form.value.email) {
    errors.value.push("Email is required.");
  }

  if (!form.value.password) {
    errors.value.push("Password is required.");
  }

  if (errors.value.length === 0) {
    try {
      await auth.loginAction(form.value.email, form.value.password);
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Login successful!",
        life: 3000,
      });

    } catch (error: any) {
      const message = error.response?.data?.message || "Invalid email or password.";
      errors.value.push(message);
    }
  }

  isSubmitting.value = false;
};
</script>


<template>
  <form
      @submit.prevent="handleSubmit"
      class="bg-zinc-800 p-6 shadow-lg flex flex-col gap-3 w-[400px]"
  >
    <p class="text-2xl text-center mt-2 mb-3">Login</p>

    <InputText
        v-model="form.email"
        placeholder="Email"
        id="email"
        type="email"
        fluid
    />

    <Password
        v-model="form.password"
        :feedback="false"
        placeholder="Password"
        id="password"
        toggleMask
        fluid
    />

    <div v-if="errors.length" class="flex flex-col gap-2">
      <Message
          size="small"
          severity="error"
          v-for="(error, index) in errors"
          :key="index"
          class="mb-2"
      >
        {{ error }}
      </Message>
    </div>

    <Button label="Submit" type="submit" severity="success"  />
    <div class="text-center mt-3">
      If you don't have an account,
      <router-link to="/register" class="text-blue-300 underline">
        Register
      </router-link>
    </div>
  </form>
</template>

