<script>
export default {
    name: "Tiles",
    props: {
        guesses: Array
    }
}
</script>

<template>
    <div class="tile">
    </div>
</template>

<style scoped>
.tile {
    width: 62px;
    height: 62px;
    background-color: #121213;
    border: 2px solid #3A3A3C;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
}

@keyframes flipping {
    0% {
        transform: rotateY(0deg);
    }
    50%{
        transform: rotateY(90deg);
    }
    100%{
        transform: rotateY(0deg);
    }
}
.tile.flip{
    animation: 0.3s linear flipping;
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