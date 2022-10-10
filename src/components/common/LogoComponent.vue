<template>
    <div class="logo">
        <router-link :to="{ name: 'HomeView' }">
            <img src="@/assets/images/logo.svg" alt="logo">
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'LogoComponent',
}
</script>