import express, { Application } from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index-routes';
import empleadosRoutes from './routes/empleados-routes';
import cors from 'cors';
import { bloquesController } from './controllers/bloques-controllers';
import bloquesRoutes from './routes/bloques-routes';


class Server{
public app: Application;
constructor (){
    this.app= express();
    this.config();
    this.routes();

    }

    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());   //acepta objetos tipo json
        this.app.use(express.urlencoded({extended:false})); //acepta formularios html
    }


routes():void{                      //grupos de rutas
    this.app.use('/',indexRoutes);
    this.app.use('/empleados',empleadosRoutes);
    this.app.use('/bloques',bloquesRoutes);

}

start():void{
    this.app.listen(this.app.get('port'),()=>{
    console.log('Server on port ',this.app.get('port'));
    });
}
}
const server= new Server();
server.start(); 
