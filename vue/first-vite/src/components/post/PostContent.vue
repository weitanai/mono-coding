<template>
    <div class="post-content-wrapper">
        <div>
            <button  @click="editContent">edit</button>
        </div>
        <div>
          <span>title:   </span>    {{postContent.title}}
        </div>
        <div>
            <span>author: </span>  {{postContent.author_name}}
        </div>
        <div>
              <span>content: </span> {{postContent.content}}
        </div>
        <div>
              <span>category: </span> {{getCategoryName(postContent.category)}}
        </div>
    </div>
</template>

<script>
import { getPostContent } from "../../api";
import {getCategoryName} from '../../common/util';

export default {
    name: 'PostContent',
    data() {
        return {
            postContent: {},
        }
    },
    props: {
        id: {
            type: String,
        }
    },
    created() {
        this.getPostContent(this.id);
    },
    methods: {
        getPostContent(id) {
            getPostContent('/post/content', {id}).then(res=> {
                console.log(res)
                this.postContent = res;
            }).catch(err=> console.log(err));
        },
        editContent() {
            this.$router.push({path: `/post/edit/${this.id}`, params: {id: 1}})
        },
        getCategoryName,
    }
    
}
</script>
<style scoped>

.content-wrapper {
    display: flex;
    flex-direction: column;
}
.post-content-wrapper > div {
    margin: 20px
}
</style>