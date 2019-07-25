<template>
    <div>
        <div class="row mb-3">
            <div class="col-md-10"><h3>Product List</h3></div>
            <div class="col-md-2 text-right">
                <router-link :to="{ name: 'create' }" class="btn btn-success">Add product</router-link>
            </div>
        </div>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th class="text-right">Manage</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td><img :src="product.imgurl" width="50"></td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.date }}</td>
                    <td>{{ product.time }}</td>
                    <td class="text-right">
                        <button class="btn btn-xs btn-warning text-light">Edit</button> &nbsp;
                        <button class="btn btn-xs btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ProductService from '@/services/ProductService.js';
    export default {
        data() {
            return {
                products: []
            }
        },
        created(){
            ProductService.getProducts()
            .then(response => {
                // console.log(response.data)
                this.products = response.data
            })
            .catch(error => {
                console.log(error.response)
            })
        }
    }
</script>

<style scoped>

</style>