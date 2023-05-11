<script setup lang="ts">
import { ref } from 'vue';
import { uploadFile } from '../../api/index';

function request({
    url,
    method = "post",
    data,
    headers = {},
    onProgress = e => e,
    requestList
}: any) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        Object.keys(headers).forEach(key =>
            xhr.setRequestHeader(key, headers[key])
        );
        xhr.send(data);
        xhr.onload = e => {
            resolve({
                data: e.target.response
            });
        };
    });
}

const SIZE = 1024 * 1024 * 5;

const fileData = ref(null);
const allData = ref(null);

function handleFileChagne(e: any) {
    const [file] = e.target.files;
    if (!file) return;
    console.log('file', file);
    fileData.value = file;
}

function createFileChunk(file: File, size = SIZE) {
    const fileChunkList = [];
    let cur = 0;
    while (cur <= file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) });
        cur += size;
    }
    return fileChunkList;

}
function createProgressHandler(item, e) {
    console.log('createProgressHandler', item, e)
    return e => {
        item.percentage = parseInt(String((e.loaded / e.total) * 100));
        console.log('progress', item.percentage)
    };
}

async function uploadChunks(data: any) {
    const requestList = data.map(({ chunk, hash }) => {
        const formData: any = new FormData();
        formData.append("chunk", chunk);
        formData.append("hash", hash);
        formData.append("filename", fileData.value.name);

        console.log(formData);
        return { formData }
    }).map(({ formData }, index) => {
        console.log('upload file ', formData)
        request({
            url: "http://localhost:14030/api/upload/largefile",
            data: formData,
            onProgress: createProgressHandler(allData.value[index]),
        })
        // uploadFile('api/upload/largefile', formData);
    }
    );
    await Promise.all(requestList);
}

async function handleUpload() {
    if (!fileData.value) return;
    const fileChunkList = createFileChunk(fileData.value);
    console.log(fileChunkList, '-0--- file chunk list')
    const data = fileChunkList.map((item, index) => ({
        chunk: item.file,
        hash: fileData.value.name + '-' + index
    }));
    allData.value = data;
    await uploadChunks(data);
}



</script>
<template>
    <div>
        <h1>upload</h1>
        <div>
            <input type="file" @change="handleFileChagne" />
            <button @click="handleUpload">upload</button>
        </div>
    </div>
</template>

<style>

</style>
