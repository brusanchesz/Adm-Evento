import { useState } from 'react';

const CadastroUsuario = () => {

  const [formulario, setFormulario] = useState(
<<<<<<< HEAD
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
 const meuSubmit = (evento) => {
  evento.preventDefault()
  console.log(formulario)
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
=======
    {
      nome: '',
      emai: '',
      senha: '',
      confSenha: ''
    }//OBJETO
  )

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form>
        <label htmlFor='nome' >Nome</label>
        <input type='text' id="nome"
          value={formulario.nome}
          onChange={ } />

        <label htmlFor='email' >Email</label>
        <input type='text' id="email"
          value={formulario.emai} />

        <label htmlFor='senha' >Senha</label>
        <input type='text' id="senha"
          value={formulario.senha} />

        <label htmlFor='confSenha' >Confirmar Senha</label>
        <input type='text' id="confSenha"
          value={formulario.confSenha} />

        <button type='submit'>Salvar</button>
      </form>

>>>>>>> a88600e50ce9045cc74baf91e9012807a221da4e
    </div>
  );
};

export default CadastroUsuario;
