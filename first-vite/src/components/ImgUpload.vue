<script>
// slice data, 
import axios from 'axios';
import { postData} from '../api';

export default {
  data() {
    return {
    container: {
        file: null
      },
      data: []
    }
  },
  methods: {
     handleFileChange(e) {
        const [file] = e.target.files;
        console.log(file);
        if (!file) return;
        this.container.file = file;
    },

    createdFileChunks(file, size = 10000) {
      console.log("file", file)
        const fileChunksList = [];
        let cur = 0;
        while(file.size > cur) {
            fileChunksList.push({file: file.slice(cur, cur+size)});
            cur += size;
        }
        return fileChunksList;
    },
    async uploadChunk() {
        const reqList = this.data.map(({chunk, hash})=> {
            const formData = new FormData();
            formData.append('chunk', chunk);
            formData.append('hash', hash);
            formData.append('filename', this.container.file.name);
            return formData;
        }).map(({formData})=>{
            postData('/create' , formData);
        });
        await Promise.all(reqList);
    },
    async handleUpload(e) {
        try{
          const fileChunk = this.createdFileChunks(this.container.file);
          console.log(fileChunk);
          this.data = fileChunk.map(({file}, index)=> ({
            chunk: file,
            hash: this.container.file.name + '-' + index
          }));
          await this.uploadChunk();
        } catch(e) {
            console.log(e)
        }
    },
   
  },
}
</script>

<template>
  <div class="img-upload-wrapper">
    <input @change="handleFileChange" type="file" multiple="multiple" />
    <button @click="handleUpload">uplaod</button>
  </div>
</template>

<style scoped>
.img-upload-wrapper {
}
</style>
