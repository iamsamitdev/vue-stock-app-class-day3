<template>
    <div>
        <div class="row mb-3">
                <div class="col-md-10"><h3><v-icon name="list-alt" scale="2" /> Product List</h3></div>
                <div class="col-md-2 text-right">
                    <router-link :to="{ name: 'create' }" class="btn btn-success"><v-icon name="plus"/> Add product</router-link>
                </div>
        </div>

        <div class="small">
            <line-chart :chart-data="datacollection"></line-chart>
            <button @click="fillData()">Randomize</button>
        </div>

    </div>
</template>

<script>
    import LineChart from '@/LineChart.js'

    export default {
        components:{
            LineChart 
        },

        data() {
            return {
                datacollection: {}
            }
        },

        mounted () {
            this.fillData()
        },

        methods: {
            fillData () {
                this.datacollection = {
                labels: [this.getRandomInt(), this.getRandomInt()],
                datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        }, 
                        {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        }
                    ]
            }
        },
        getRandomInt () {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }
    }
}
</script>

<style scoped>
    .small {
        max-width: 600px;
        height: 200px;;
        margin:  50px auto;
    }
</style>