<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Authenticated from "@/Layouts/Authenticated.vue";
import Button from "@/Components/Button.vue";
</script>
<template>
    <Head title="Post" />
    <authenticated>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Posts
            </h2>
            <div class="py-6">
                <div class="text-right" @click="route('admin.post.create')">
                    <Button>Create</Button>
                </div>
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 min-h-screen">
                    Post list
                </div>
            </div>
        </template>
    </authenticated>
</template>
