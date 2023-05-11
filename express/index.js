import express from 'express';
import cors from 'cors';
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';


const app = express();

// create application/json parser
app.use(cors());


// 当对主页发出 GET 请求时，响应“hello world”
app.get('/', (req, res) => {
    console.log(req.query);
  res.send(`${req.query.callback}(1111)`);
})

app.listen(3003, () => console.log('http://localhost:3003'));