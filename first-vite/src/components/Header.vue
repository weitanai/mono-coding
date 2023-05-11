<template>
    <div class="header-wrapper">
        <ul class="headr-left-wrapper">
            <li v-for="item in list" :key="item.id" class="head-list" :class="{ activeCatogory: activeIndex === item.id }"
                @click="handleCategory(item.id)">
                <span class="head-item">{{ item.name }}</span>
            </li>
        </ul>
        <div v-if="userInfo" class="user-info-wrapper" ref="referenceRef" @mouseleave="isShowPopper = false"
            @mouseenter="isShowPopper = true">
            <span class="user-name">{{ userInfo.name }}</span>
            <img class="avatar-img" :src="userInfo.avatar" />
        </div>
        <!-- <div class="header-right" @mouseenter="isShow = true" @mouseleave="handleMouseleave">
            dog
                <List v-if="isShow" :scrollDis="scrollDistance" @getScrollTop="getScrollTop"
                    ></List>
        </div> -->
        <button  
        @click="isShowPopper = !isShowPopper" ref="cusbtn"
            class="change-bg-btn">color</button>
        <Popover 
            :value="isShowPopper"
            :reference="$refs.cusbtn">
            <ul>
                <li class="color-item" 
                :style="{background: item}"
                v-for="(item) in colorList" :key="item"
                @click="handleColorChange(item)"
                >
                </li>
            </ul>

        </Popover>
    </div>
</template>
<script>
import { categoryList } from '../common/data';
import Popover from './base/Popover.vue';
import List from './List.vue';
import { getColorList } from '../api';

// question not controll cmp can not get reference  dom; why;
export default {
    data() {
        return {
            list: categoryList,
            isShow: false,
            userInfo: null,
            activeIndex: 0,
            isShowPopper: false,
            currentDom: null,
            // popList: Array.from(Array(50), (val, i) => i + 1),
            scrollDistance: 0,
            colorList: [],
        }
    },
    components: {
        Popover,
        List
    },
    watch: {
        $refs(newVal) {
            if (newVal.referenceRef) {
                console.log(newVal.referenceRef, '--');
            }
        }
    },
    created() {
        this.userInfo = this.hasUserInfo();
        try {
            getColorList('bgcolor/list').then(res => {
                // console.log(res, 'get clorList');
                // this.colorList = res;
            });
        } catch (error) {
            console.log(error, 'errror--')
        }

    },
    mounted() {
        this.currentDom = this.$refs.referenceRef;
    },
    methods: {
        getScrollTop(arg) {
            console.log(arg, '---')
            this.scrollDistance = arg;
        },
        handleMouseenter() {
            this.isShowPopper = true;
        },
        handleMouseleave() {
            console.log('---isShow leave');
            this.isShow = false;
        },
        handleCategory(id) {
            if (this.activeIndex === id) return;
            this.activeIndex = id;
            this.$router.push(`/post/list?category=${id}`);
        },

        hasUserInfo() {
            let userInfo = this.$store.getters.isAuth;
            if (userInfo) return userInfo;

            // getUserList('/getuserList').then(res => {
            //     const userInfo = ({ name: res.name, avatar: res.avatar, age: res.age })
            //     this.userInfo = userInfo;
            //     this.$store.commit('SET_USER_INFO', userInfo);

            // }).catch(err => console.error(err));
        },
        handleColorChange(color) {
            console.log('before color change');
            this.$emit('changeColor', color);
        }
    }
}
</script>
<style scoped>
.header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    box-shadow: 2px 2px 8px 2px #f0f3f0;
    font-size: 18px;
    margin-bottom: 60px;
}

.headr-left-wrapper {
    display: flex;
}

.head-list {
    list-style: none;
    margin: 0 20px;
}

.user-info-wrapper {
    display: flex;
    align-items: center;
}

.user-name {
    margin-right: 12px;
}

.avatar-img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
}

.activeCatogory {
    color: #1365ec;
    font-weight: 600;
}

.header-right {
    margin-right: 60px;
    height: 100px;
}

.pop-list-wrapper {
    position: absolute;
    right: 60px;
    display: block;
    height: 300px;
    width: 300px;
    overflow: auto;
    background: #f0f3f0;
    box-shadow: 0px 5px 13px 0px rgb(0 0 0 / 5%);
}

.pop-item {
    display: block;
    list-style: none;
}

.change-bg-btn {
    color: rgb(101, 101, 217);
    border: null;
}
.color-item {
    list-style: none;
    width: 80px;
    height: 20px;
    margin: 10px;
}
</style>