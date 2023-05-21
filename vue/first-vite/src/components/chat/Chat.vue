<template>
    <div class="chat-wrapper">
      <div class="chat-header">
        <h3>{{ title }}</h3>
      </div>
      <div class="chat-messages">
        <ul>
          <li v-for="message in messages" :class="{'incoming': message.type === 'incoming', 'outgoing': message.type === 'outgoing'}">
            <div class="message-content">{{ message.content }}</div>
          </li>
        </ul>
      </div>
      <div class="chat-input">
        <input type="text" placeholder="请输入消息" v-model="newMessageContent" @keyup.enter="sendMessage" />
        <button @click="sendMessage">发送</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatBox',
    props: {
      title: {
        type: String,
        default: '聊天对话框'
      },
      messages: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        newMessageContent: ''
      }
    },
    methods: {
      sendMessage() {
        if (this.newMessageContent) {
          this.$emit('new-message', {
            content: this.newMessageContent,
            type: 'outgoing'
          })
          this.newMessageContent = ''
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .chat-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .chat-header {
    background-color: #ededed;
    padding: 10px;
    text-align: center;
  }
  
  .chat-messages {
    flex: 1;
    overflow-y: scroll;
  }
  
  .chat-messages ul {
    list-style: none;
    padding: 0;
  }
  
  .chat-messages li {
    margin: 10px;
    padding: 10px;
    max-width: 70%;
    word-wrap: break-word;
  }
  
  .chat-messages li.incoming {
    background-color: #f1f0f0;
    border-radius: 10px 10px 0 10px;
    display: flex;
    justify-content: flex-start;
  }
  
  .chat-messages li.outgoing {
    background-color: #2ac9aa;
    border-radius: 10px 10px 10px 0;
    color: #fff;
    display: flex;
    justify-content: flex-end;
  }
  
  .message-content {
    font-size: 16px;
    line-height: 1.5;
  }
  
  .chat-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #ededed;
  }
  
  .chat-input input {
    flex: 1;
    border: none;
    padding: 10px;
    border-radius: 20px;
    background-color: #f1f0f0;
    margin-right: 10px;
    font-size: 16px;
  }
  
  .chat-input button {
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #2ac9aa;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  

</style>