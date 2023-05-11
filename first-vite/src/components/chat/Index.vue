<template>
    <div class="chat-wrapper">
        <Chat :messages="msgList" @new-message="handleSendMsg" />
    </div>
</template>
  
<script setup>
import { reactive, effect } from 'vue';
import Chat from './Chat.vue';
const msgList = reactive([]);
const eff = reactive({v: 1});
const efn = effect(()=> {
    console.log(eff.v);
}, {lazy: true});
console.log('end--');

function handleSendMsg(arg) {
    console.log('---arg', arg);
    const msgItem = {
        user: 'askId',
        ...arg,
        type: 'incoming'
    };
    msgList.push(msgItem);
    const p = Promise.resolve(`${arg}--- answer`);
    p.then((res => {
        const msgItem = {
            user: 'ansId',
            ...arg
        }
        msgList.push(msgItem);
    }))


}
</script>
