<script>
import Tiles from './Tiles.vue'

export default {
    name: 'Rows',
    props: {
        guesses: Array
    },
    components: {
        Tiles
    }
}
</script>

<template>
    <div class="rows-container">
        <div class="rows" v-for="(guess,i) in guesses" :key="i" :id="`guess-${i}`">
            <Tiles v-for="(tile,k) in guess" :key="k" :id="`guess-${i}-tile-${k}`" :guesses="guesses" />
        </div>
    </div>
</template>

<style scoped>
.rows-container {
    display: flex;
    align-content: center;
    flex-direction: column;
    padding: 30px 0;
}

.rows{
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    padding: 5px;
}

.tiles{
    width: 330px;
    margin-bottom: 30px;
}
</style>