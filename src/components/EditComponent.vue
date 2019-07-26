<template>
   <div>
        <div class="row mb-3">
            <div class="col-md-10"><h3><v-icon name="box" scale="2" /> Edit product</h3></div>
            <div class="col-md-2 text-right">
                <router-link :to="{ name: 'show' }" class="btn btn-primary"><v-icon name="chevron-left"/> Back</router-link>
            </div>
        </div>

        <form @submit.prevent="checkForm">

        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label">Name</label>
            <div class="col-md-8">
            <input type="text" class="form-control" name="name" id="name" v-model="product.name"
                        v-validate="'required|min:5'" :class="{'is-invalid': submitted && errors.has('name') }">
            <div v-if="submitted" class="invalid-feedback">{{ errors.first('name') }}</div>
            </div>
        </div>

        <div class="form-group row">
            <label for="description" class="col-md-4 col-form-label">Description</label>
            <div class="col-md-8">
            <textarea class="form-control"  name="description" id="description" rows="5" v-model="product.description"
                            v-validate="'required'" :class="{'is-invalid': submitted && errors.has('description') }"></textarea>
            <div v-if="submitted" class="invalid-feedback">{{ errors.first('description') }}</div>
            </div>
        </div>

        <div class="form-group row">
            <label for="price" class="col-md-4 col-form-label">Price</label>
            <div class="col-md-8">
            <input type="text" class="form-control" name="price" id="price" v-model="product.price"
                        v-validate="'required|numeric'" :class="{'is-invalid': submitted && errors.has('price') }">
            <div v-if="submitted" class="invalid-feedback">{{ errors.first('price') }}</div>            
            </div>
        </div>

        <div class="form-group row">
            <label for="imgurl" class="col-md-4 col-form-label">Image URL</label>
            <div class="col-md-8">
            <input type="text" class="form-control" name="imgurl" id="imgurl" v-model="product.imgurl"
                        v-validate="'required'" :class="{'is-invalid': submitted && errors.has('imgurl') }">
            <div v-if="submitted" class="invalid-feedback">{{ errors.first('imgurl') }}</div>       
            </div>
        </div>

        <div class="form-group row">
            <label for="category" class="col-md-4 col-form-label">Category</label>
            <div class="col-md-8">
            <input type="text" class="form-control" name="category" id="category" v-model="product.category"
                         v-validate="'required'" :class="{'is-invalid': submitted && errors.has('category') }">
            <div v-if="submitted" class="invalid-feedback">{{ errors.first('category') }}</div>
            </div>
        </div>

        <div class="form-group row">
            <label for="date" class="col-md-4 col-form-label">Date</label>
            <div class="col-md-8">
            <input type="text" class="form-control" name="date" id="date" v-model="product.date"
                        v-validate="'required'" :class="{'is-invalid': submitted && errors.has('date') }">
            <div v-if="submitted" class="invalid-feedback">{{ errors.first('date') }}</div>
            </div>
        </div>

        <div class="form-group row">
            <label for="time" class="col-md-4 col-form-label">Time</label>
            <div class="col-md-8">
            <input type="text" class="form-control" name="time" id="time" v-model="product.time"
                        v-validate="'required'" :class="{'is-invalid': submitted && errors.has('time') }">
            <div v-if="submitted" class="invalid-feedback">{{ errors.first('time') }}</div>
            </div>
        </div>

        <div class="form-group row">
            <label for="pdesc" class="col-md-4 col-form-label"></label>
            <div class="col-md-8">
            <button class="btn btn-primary">Add to stock</button>
            </div>
        </div>

        </form>
    </div>
</template>

<script>
    import ProductService from '@/services/ProductService.js';
    export default {
        data() {
            return {
                product: {},
                submitted: false
            }
        },

        created() {
                ProductService.getProduct(this.$route.params.id)
                .then(response => {
                    this.product = response.data
                })
                .catch(error => {
                    console.log(error.response);
                })
        },

        methods:{
            checkForm:function(e){
                this.submitted = true

                const dict = {
                    custom: {
                        name: {
                            required: 'ชื่อสินค้าต้องไม่เป็นค่าว่าง',
                            min: 'ชื่อสินค้าต้องไม่น้อยกว่า 5 ตัวอักษร'
                        },
                        description: {
                            required: 'รายละเอียดสินค้าต้องไม่เป็นค่าว่าง'
                        },
                        price: {
                            required: 'ป้อนราคาสินค้าก่อน',
                            numeric: 'ราคาสินค้าต้องเป็นตัวเลขเท่านั้น'
                        }
                    }
                };
                this.$validator.localize('en', dict);
                this.$validator.validate().then(valid => {
                    if(valid){
                         // validate success
                        this.updateProduct()
                    }
                })

            },

            updateProduct:function(){
                ProductService.updateProduct(this.$route.params.id,this.product)
                .then(response => {
                    this.$router.push({ name: 'show' })
                })
                .catch(error => {
                    console.log(error.response);
                })
            }
        }
    }
</script>

<style scoped>

</style>