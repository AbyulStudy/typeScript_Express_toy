import express,{ Application, Express,Request,Response } from "express";
import dotenv from 'dotenv';

dotenv.config();

class App {
    public app: Application;

    constructor(){
        this.app = express();
        this.routes();
    }

    protected routes(): void {
        this.app.route('/').get((req:Request,res:Response) => {
            res.send("hello ts");
        })
    }
}

const app = new App().app;
const port: number = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})