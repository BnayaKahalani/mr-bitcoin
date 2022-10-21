<template>
    <section class="charts-container">
        <market-price-history v-if="bitcoinPrices" :data="priceData" :labels="priceLabels" />
    </section>
</template>

<script>
import { bitcoinService } from '../services/bitcoinService'
import MarketPriceHistory from '../components/stats.vue'


export default {

    data() {
        return {
            bitcoinPrices: null
        };
    },
    async created() {
        await this.getMarketPriceHistory();
    },
    methods: {
        async getMarketPriceHistory() {
            const { values } = await bitcoinService.getMarketPriceHistory();
            this.bitcoinPrices = values;
        }
    },
    computed: {
        priceLabels() {
            return this.bitcoinPrices.map((value, index) => new Date(Date.now() - ((365 - index) * 86400000)).toLocaleDateString());
        },
        priceData() {
            return this.bitcoinPrices.map(value => value.y);
        }
    },
    components: { MarketPriceHistory }
}
</script>

<style lang="scss">
.charts-container {
    background: white;
    display: flex;
    justify-content: center;
    margin-top: 40px;

    div {
        width: 800px;
    }

}
</style>