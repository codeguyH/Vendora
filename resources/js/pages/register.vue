<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import axios from 'axios';
import { reactive, ref } from 'vue';

const form = reactive({
    name: '',
    email: '',
    password: '',
});

const isLoading = ref(false);
const errorMessage = ref(''); // To show errors on the UI

const handleRegister = async () => {
    isLoading.value = true;
    errorMessage.value = '';

    try {
        // Use 'form' directly (no .value for reactive)
        // Ensure the URL matches your Laravel route (e.g., /api/register)
        const response = await axios.post('/register', form);

        console.log('Success:', response.data);
        alert('Registration successful!');
    } catch (error: any) {
        console.error('Error:', error.response?.data);
        errorMessage.value = error.response?.data?.message || 'Something went wrong';
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <div class="flex min-h-screen items-center justify-center bg-slate-50 p-4">
        <div class="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-8 shadow-xl">
            <!-- Header -->
            <div class="mb-8 text-center">
                <h1 class="text-2xl font-bold text-slate-900">Create an Account</h1>
                <p class="mt-2 text-sm text-slate-500">Join us by filling out the details below</p>
            </div>

            <!-- Form -->
            <form @submit.prevent="handleRegister" class="space-y-5">
                <!-- Username Field -->
                <div>
                    <label class="mb-1.5 block text-sm font-semibold text-slate-700">Username</label>
                    <input
                        v-model="form.name"
                        type="text"
                        placeholder="johndoe"
                        class="w-full rounded-lg border border-slate-300 px-4 py-2.5 transition outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <!-- Email Field -->
                <div>
                    <label class="mb-1.5 block text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                        v-model="form.email"
                        type="email"
                        placeholder="name@company.com"
                        class="w-full rounded-lg border border-slate-300 px-4 py-2.5 transition outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <!-- Password Field -->
                <div>
                    <label class="mb-1.5 block text-sm font-semibold text-slate-700">Password</label>
                    <input
                        v-model="form.password"
                        type="password"
                        placeholder="••••••••"
                        class="w-full rounded-lg border border-slate-300 px-4 py-2.5 transition outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <!-- Submit Button -->
                <button
                    type="submit"
                    :disabled="isLoading"
                    class="w-full rounded-lg bg-blue-600 py-3 font-bold text-white shadow-lg shadow-blue-200 transition-all duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <span v-if="!isLoading">Sign Up</span>
                    <span v-else>Creating account...</span>
                </button>
            </form>

            <!-- Footer Link -->
            <div class="mt-8 border-t border-slate-100 pt-6 text-center">
                <p class="text-sm text-slate-600">
                    Already have an account?
                    <a href="#" class="font-bold text-blue-600 transition hover:text-blue-700" @click="router.visit('/login')">Sign In</a>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Tailwind handles the styling. Ensure Tailwind is installed in your Vue project. */
</style>
