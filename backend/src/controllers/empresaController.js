import empresas from "../models/empresas.js";
import usuarios from "../models/usuarios.js";

class empresasController {

    //Requisição de login da empresa
    static async requisicaoLogin (req,res){
        const { email, senha } = req.body;

        const user = await usuarios.findOne({ email, senha: senha });
        const company = await empresas.findOne({ email, senha: senha });
      
        if (user) {
            return res.status(200).json(user);
        } else if (company) {
            return res.status(200).json(company);
        } else {
            return res.status(401).json({ message: 'Email ou senha inválidos.' });
        }
    }

    // Requisição de registro de empresa
    static async requisicaoRegistro(req, res) {
        try {
            const { nome_empresa, email, cnpj, tipo1, tipo2, senha } = req.body;

            // Verifica se o email ou CNPJ já está em uso por outra empresa ou usuário
            const emailExistente = await empresas.findOne({ email });
            const cnpjExistente = await empresas.findOne({ cnpj });

            if (emailExistente) {
                return res.status(409).json({ message: 'O Email já está em uso.' });
            }

            if (cnpjExistente) {
                return res.status(409).json({ message: 'CNPJ já está cadastrado.' });
            }

            // Cria e salva a nova empresa
            const novaEmpresa = new empresas({
                nome_empresa,
                email,
                senha,  // Armazenando a senha em texto puro
                cnpj,
                tipo1,
                tipo2,
            });

            await novaEmpresa.save();

            return res.status(201).json({ message: 'Empresa registrada com sucesso.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    // Requisição para deletar uma empresa
    static async requisicaoDeletar(req, res) {
        try {
            const { email, senha } = req.body;
    
            // Verificar se a empresa existe no banco
            const usuario = await empresas.findOne({ email, senha });
    
            if (!usuario) {
                return res.status(404).json({ message: 'Empresa não encontrada ou senha inválida.' });
            }
    
            // Deleta a empresa encontrada
            await empresas.deleteOne({ email });
    
            return res.status(200).json({ message: 'Empresa removida com sucesso.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

    // Requisição para buscar usuario ou empresa 
    static async requisicaoBuscar(req, res) {
        try {
            const { nome } = req.query;
    
            if (!nome) {
                return res.status(400).json({ message: 'Nome é obrigatório.' });
            }
            
            // Buscar empresas com base no nome
            const usuarios = await empresas.find({
                nome: { $regex: nome, $options: 'i' } // Busca case-insensitive
            });

            //Busca usuarios com base no nome
            const empresas = await usuarios.find({
                nome: { $regex: nome, $options: 'i' }
            })
    
            if (usuarios.length === 0 && empresas.length === 0) {
                return res.status(404).json({ message: 'Nenhum usuário ou empresa encontrada com esse nome.' });
            }
    
            return res.status(200).json({usuarios, empresas});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }    
};

export default empresasController;