<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">MINI STOCK</router-link>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link"><v-icon name="home" /> HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/show" class="nav-link"><v-icon name="box"/> STOCK</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/create" class="nav-link"> <v-icon name="plus"/> ADD PRODUCT</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>