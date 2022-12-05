import express, { Application } from "express";
import morgan from "morgan";
import cors from 'cors';
import authRoutes from './routes/auth';
import negociosRoutes from "./routes/negocios.Routes";
import productosRoutes from "./routes/productos.Routes";

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/api/auth', authRoutes);
        this.app.use('/api/negocios', negociosRoutes);
        this.app.use('/api/productos', productosRoutes);
    }

    start(): void {
        this.app.listen(3000, () => {
            console.log(`Server on port`, this.app.get('port'));
        });
    }
}

const server = new Server();

server.start();