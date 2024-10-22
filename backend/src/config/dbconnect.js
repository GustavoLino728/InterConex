import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function conectaBanco(){
    try{
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    
        console.log('Conexão com o MongoDB estabelecida com sucesso!');
        return mongoose.connection;
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        throw error;
    }
};

export default conectaBanco;