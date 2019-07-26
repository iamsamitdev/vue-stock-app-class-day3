<template>
    <div>
        <div class="row mb-3">
            <div class="col-md-10"><h3><v-icon name="list-alt" scale="2" /> Product List</h3></div>
            <div class="col-md-2 text-right">
                <router-link :to="{ name: 'create' }" class="btn btn-success"><v-icon name="plus"/> Add product</router-link>
            </div>
        </div>

        <div class="mb-3">
            <input class="form-control mr-sm-2 col-md-4" type="text" placeholder="Search Product..." 
            v-model="searchProduct">
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
                <tr v-for="product in filterProduct" :key="product.id">
                    <td><img :src="product.imgurl" width="50"></td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.date }}</td>
                    <td>{{ product.time }}</td>
                    <td class="text-right">
                        <router-link :to="{ name: 'edit', params: { id: product.id }}" class="btn btn-xs btn-warning text-light">
                            <v-icon name="pen"/>
                        </router-link> &nbsp;
                        <button class="btn btn-xs btn-danger" @click.prevent="deleteProduct(product.id)"><v-icon name="trash-alt"/> </button>
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
                searchProduct: '',
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
        },
        computed:{
            filterProduct(){
                if(this.searchProduct){
                    return this.products.filter((item) =>{
                        return item.name.toLowerCase().includes(this.searchProduct.toLowerCase())
                    })
                }else{
                    return this.products
                }
            }
        },
        methods:{
            deleteProduct:function(id){
                 ProductService.deleteProduct(id)
                .then(response => {
                    // อัพเดทข้อมูล
                    this.products.splice(this.products.findIndex(t => t.id == id), 1);
                })
                .catch(error => {
                    console.log(error.response)
                })
            }
        }
    }
</script>

<style scoped>

</style>