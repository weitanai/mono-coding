<template>
    <div>
        <button @click="handleLogout">logout</button>
    </div>
</template>

<script>
import {logout} from '../api'
    export default {
        methods: {
            handleLogout() {
                logout('/logout').then(res=>console.log(res)).catch(err=>console.log(err))
            }
        }
    }
</script>