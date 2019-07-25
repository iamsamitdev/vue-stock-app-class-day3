<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">Mini Stock</router-link>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/show" class="nav-link">Show product</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/create" class="nav-link">Add new product</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/edit/5" class="nav-link">Edit</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
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