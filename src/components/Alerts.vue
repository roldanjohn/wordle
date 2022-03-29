<script>
export default {
    name: "Alerts",
    props: {
        alert: String,
        isCorrect: Boolean
    }
}
</script>

<template>
    <div class="alert-container" >
        <p v-show="isCorrect">{{alert}}</p>
    </div>
</template>

<style scoped>
.alert-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 10px;
    margin: 20px;
}

.alert-container p{
    background-color: #818384;
    border-radius: 10px;
    padding: 10px;
    margin: 0;
}
</style>