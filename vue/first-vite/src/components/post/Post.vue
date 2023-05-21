<template>
    <div class="post-list-wrapper">
        <div v-for="(item, index) in props.list">
            <div :key="index">
                <div @click="goToPostContent(item.id)" class="post-wraaper">
                    <div>
                        {{ item.title }}
                    </div>
                    <div>
                        {{ item.author_name }}
                    </div>
                    <div>{{ item.content }}</div>
                    <div>{{ getCategoryName(item.category) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getCategoryName } from '../../common/util';
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
    list: Object
});
const router = useRouter();



function goToPostContent(id) {
    router.push(`/post/${id}`, { id });
}

</script>
<style>
.post-list-wrapper {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    font-size: 14px;
}

.post-wraaper {
    width: 274px;
    height: 210px;
    box-shadow: 0px 5px 13px 0px rgba(0, 0, 0, 0.05);
    margin: 20px;
}
</style>