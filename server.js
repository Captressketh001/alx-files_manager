import { express } from "express";
import router from "./routes";

const port = process.env.PORT || 5000
const app = express()

app.use(express.json({'limit': '5mb'}));
app.use(router);
app.listen(port)