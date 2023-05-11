<template>
    <ul class="pop-list-wrapper" @scroll="handleScroll" ref="scrollContainer" :style="{'scroll-top': scrollDis + 'px'}">
        <li v-for="(item, index) in list" :key="index" class="list-item">{{ index }}</li>
    </ul>
</template>

<script>
export default {
    name: 'List',
    props: {
        scrollDis: {
            type: Number,
            required: true,
            default: 0
        }
    },
    data: () => {
        return {
            list: Array.from(Array(50), (val, i) => i + 1),
        }
    },
    mounted() {
        // console.log(this.scrollDis, '---scrollDis');

        this.$nextTick(()=>{
            this.$refs.scrollContainer.scrollTop = this.scrollDis;
        })

        // this.$nextTick(() => {
        // })
    },
    methods: {
        handleScroll(e) {
            const scrollTop = e.target.scrollTop;
            this.$emit('getScrollTop', scrollTop);
            const innerHeight = this.list.length * 30;
            if (innerHeight <= scrollTop + 300) {
                this.list =Array.from(Array(this.list.length + 20), (val, index)=> index+1);
            }
        }
    },
}
</script>
<style scoped>
.pop-list-wrapper {
    display: block;
    height: 300px;
    widows: 300px;
    box-shadow: 0px 5px 13px 0px rgb(0 0 0 / 5%);
    overflow: auto;
}

.list-item {
    list-style: none;
    height: 30px;
}
</style>