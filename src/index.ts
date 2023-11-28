import express from 'express';
const app = express();
import router from './router.js';


app.use(express.json());
app.use(router);

app.listen({
    port: 3030
})
