<script setup lang="ts">
  import { ref } from "vue";
  import {Button, InputText, Message, Password, useToast} from "primevue";
  import {useAuthStore} from "../model/store";

  const auth = useAuthStore();

  const form = ref({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const errors = ref<string[]>([]);
  const toast = useToast();

  const handleSubmit = async () => {
    errors.value = [];

    if (!form.value.email) {
      errors.value.push("Email is required.");
    }

    if(!form.value.name) {
      errors.value.push("Name is required.");
    }

    if (!form.value.password) {
      errors.value.push("Password is required.");
    }
    if(form.value.password !== form.value.confirmPassword)
      errors.value.push(
          "Password and Confirm Password must be the same."
      )

    if (errors.value.length === 0) {
      try{
        await auth.registerAction(form.value.username, form.value.email, form.value.password);
        toast.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Register Success',
          life: 3000,
        });
      }catch{
        errors.value.push("Invalid email or password.");
      }
    }
  };

</script>

<template>
  <form @submit.prevent="handleSubmit" class="dark:bg-zinc-800  bg-[#D9D9D9] p-6 shadow-lg flex flex-col gap-3 w-[400px]">
    <p class="text-2xl text-center mt-2 mb-3">Register</p>
    <InputText
        v-model="form.username"
        placeholder="Username"
        id="username"
        type="text"
        fluid
    />
    <InputText
        v-model="form.name"
        placeholder="Full Name"
        id="username"
        type="text"
        fluid
    />
    <InputText
        v-model="form.email"
        placeholder="Email"
        id="email"
        type="email"
        fluid
    />
    <Password
        v-model="form.password"
        placeholder="Password"
        id="password"
        toggleMask
        fluid
    />
    <Password
        v-model="form.confirmPassword"
        placeholder="Confirm Password"
        id="confirmPassword"
        toggleMask
        fluid
    />
    <div v-if="errors.length" class="flex flex-col gap-2">
      <Message size="small" severity="error" v-for="(error, index) in errors" :key="index" class="mb-2">
        {{ error }}
      </Message>
    </div>
    <Button label="Submit" type="submit" />
    <div class="text-center mt-3">
      If you have account. <router-link to="/login" class="text-blue-300 underline">Login</router-link>
    </div>
  </form>
</template>
