import { Request, Response} from 'express';

const userRegister = async(req: Request, res: Response) =>{
    const {name, email, password, confirmPassowrd} = req.body

    if(!name && !email && !password && !confirmPassowrd){
        return res.status(422).json({ msg: 'Insira os dados corretamente!'})
    } 
    if(password !== confirmPassowrd){
        return res.status(422).json({msg: 'As senhas não coincidem!'})
    }

}