import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../../database/firebase-config';

const CadastroUsuario = () => {

  const [formulario, setFormulario] = useState(
  {
     nome:'',
     email:'',
     senha:'',
     confSenha:''
  } //objeto - ultima vez que aparecer o valor é o que fica
  )// no slides de states, criando um objeto dentro da variavel, formulario que e o objeto vai ter 4 atributos. o objeto se reparte ali no espaço da variavel
// porque nao criar 4 variaveis ao inves de apenas uma sendo objeto? porque o obejto ia ser melhor, caber mais e ser mais resistente. Tudo entre aspas

  const alteraFormulario = (e) => {
  const { name, value } = e.target;
  setFormulario({ ...formulario, [name]: value});//spread é expandir, os reticencias significa que é a mesma coisa que os atributos das variaveis estivessem aqui
};

// para prevenir a execução padrão que e apagar quando envia no form
 const meuSubmit = async (evento) => { // deixou a função como assincrona "async"
  evento.preventDefault() // evita comportamento padrão do form
  console.log(formulario) //await - metodo assincrono, O formulario é um objeto
 
 const docRef = await addDoc(
  collection(db, "usuarios"), formulario
 )
}

const salvar2 = async () => {
  await setDoc(doc(db, "usuarios", /*aqui vai a chave =>*/ formulario.email ), formulario) 
  }
  

 return (
    <div>{/*Criando states*/}
      <h2>Cadastro de Usuário</h2>

      <form onSubmit={meuSubmit}>

        <label htmlFor='nome'>Nome</label>
        <input type="text" id="nome" name= "nome"
        value={formulario.nome} 
        onChange={alteraFormulario}/>
        
        <label htmlFor='email'>Email</label>
        <input type="text" id="email" name= "email"
        value={formulario.email}
        onChange={alteraFormulario}/>

        <label htmlFor='senha'>Senha</label>
        <input type="text" id="senha" name= "senha"
        value={formulario.senha}
        onChange={alteraFormulario}/>

        <label htmlFor='confSenha'>Confirmar Senha</label>
        <input type="text" id="confSenha" name= "confSenha" 
        value={formulario.confSenha}
        onChange={alteraFormulario}/>
        
        <button type='submit'>Salvar</button>

{/* eh padrão do form apagar tudo quando enviar, mas ele some com elas e por isso 
precisamos de uma funcao para fazer essas informações irem para um bd */}

      </form>

      <button onClick={salvar2}>Salvar 2</button>
      
    </div>
  );
};

export default CadastroUsuario;
