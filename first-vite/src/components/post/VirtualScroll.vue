<template>
    <div class="virtual-list" ref="scrollRef" @scroll="handleScroll">
        <div  class="virtual-list-height" :style="{ height: listHeight + 'px' }">
            <div ref="contentRef" :style="{ position: 'absolute', top: top +'px' }">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
  
<script>
import Post from './Post.vue';
export default {
    components: {
        Post,
    },
    props: {
        listHeight: {
            type: Number,
            required: true
        },
        itemHeight: {
            type: Number,
            required: true,
            default: 210,
        },
        total: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            count: 0,
            top: 0,
            end: 0,
            listStart: 0,
            debounceScroll: null,
        };
    },

    // created() {
    //     this.debounceScroll = this.debounce(this.handleScroll);;
    // },

    // computed: {
    //     totalHeight() {
    //         return this.itemHeight * this.total;
    //     },
    //     subList() {
    //         console.log('computd new list');
    //         return this.list.slice(this.listStart, this.end);
    //     }
    // },
    mounted() {
        this.count = Math.ceil(this.$refs.scrollRef.clientHeight / this.itemHeight) * 2;
        this.end = this.listStart + 2*this.count;
        this.$emit('updatePosition', {start: this.listStart, end: this.end});
    },
    methods: {
        debounce(fn, delay = 100) {
            let timer = null;
            return function (...args) {
                if (timer) clearTimeout(timer);
                timer = setTimeout(() => {
                    fn.apply(this, args);
                }, delay);
            };
        },
        handleScroll() {
            console.log('---scrolling--');
            const top = this.$refs.scrollRef.scrollTop;
            this.top = top;
            const newStart = Math.floor(top / this.itemHeight);
           
            // console.log('excute refresh list ------');
            this.listStart = newStart - this.count > 0 ? newStart - this.count : newStart;
            this.end = newStart + this.count * 2;
            this.$emit('updatePosition', {start: this.listStart, end: this.end});
        }
    }
};
</script>
<style scoped>
.virtual-list {
    display: block;
    height: 100vh;
    overflow-y: auto;
    position: relative;
}
</style>
