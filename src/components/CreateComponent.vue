<template>
   <div>
        <div class="row mb-3">
            <div class="col-md-10"><h3>Add new product</h3></div>
            <div class="col-md-2 text-right">
                <router-link :to="{ name: 'show' }" class="btn btn-primary">Back to product</router-link>
            </div>
        </div>

        <form @submit.prevent="checkForm">

        <div class="form-group row">
            <label for="panme" class="col-md-4 col-form-label">Name</label>
            <div class="col-md-8">
            <input type="text" class="form-control" name="panme" id="panme">
            </div>
        </div>

        <div class="form-group row">
            <label for="pdesc" class="col-md-4 col-form-label">Description</label>
            <div class="col-md-8">
            <textarea class="form-control"  name="pdesc" id="pdesc" rows="5"></textarea>
            </div>
        </div>

        <div class="form-group row">
            <label for="pprice" class="col-md-4 col-form-label">Price</label>
            <div class="col-md-8">
            <input type="number" step="0.01" class="form-control" name="pprice" id="pprice">
            </div>
        </div>

        <div class="form-group row">
            <label for="imgurl" class="col-md-4 col-form-label">Image URL</label>
            <div class="col-md-8">
            <input type="text" class="form-control" name="pimgurl" id="pimgurl">
            </div>
        </div>

        <div class="form-group row">
            <label for="category" class="col-md-4 col-form-label">Category</label>
            <div class="col-md-8">
            <input type="text" class="form-control" name="category" id="category">
            </div>
        </div>

        <div class="form-group row">
            <label for="date" class="col-md-4 col-form-label">Date</label>
            <div class="col-md-8">
            <input type="text" class="form-control" name="date" id="date">
            </div>
        </div>

        <div class="form-group row">
            <label for="time" class="col-md-4 col-form-label">Time</label>
            <div class="col-md-8">
            <input type="text" class="form-control" name="time" id="time">
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
    export default {
        
    }
</script>

<style scoped>

</style>