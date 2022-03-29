<script>
export default {
    name: "Keys",
    data(){
        return {
            letters: [
                'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<<'
            ]
        }
    }
}
</script>

<template>
    <div class="keys">
        <button @click="$emit('click-handler', letter)" v-for="letter in letters" :key="letter" :id="letter" class="keys__button">{{letter}}</button>
    </div>
</template>

<style scoped>
.keys{
    width: 510px;
    display: flex;
    flex-wrap: wrap;
}

.keys__button{
    width: 43px;
    height: 58px;
    border-radius: 4px;
    border: none;
    background-color: #818384;
    margin: 4px;
}

.keys__button:nth-child(11){
    margin-left: 20px;
}

.keys__button:nth-child(20), .keys__button:nth-child(28) {
    width: 68px;
}

.grey-overlay{
    background-color: #3A3A3C;
    border: none;
}

.green-overlay{
    background-color: #538D4E;
    border: none;
}

.yellow-overlay{
    background-color: #B59F3A;
    border: none;
}
</style>