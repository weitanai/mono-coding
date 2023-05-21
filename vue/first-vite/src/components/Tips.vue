<template>
    <div v-if="timer" class="msg-wrapper">
        {{msg}}
    </div>
</template>    

<script>
export default {
    props: {
        msg: {
            type: String,
            required: true,
            default: "success"
        },
        time: {
            type: Number,
            required: false,
            default: 1,
        }
    },
    data() {
        return {
            timer: null,
        }
    },
    mounted() {
        this.timer = setTimeout(() => {

        }, time)
    }
}
</script>

<style>
.msg-wrapper {
    position: fixed; 
    top: 200px;   
    left: 50%;
    transform: translatex(-50%);
}
</style>