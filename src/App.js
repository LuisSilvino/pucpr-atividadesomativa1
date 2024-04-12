import { Component } from 'react';
import './App.css'

  class App extends Component{
    constructor(props){
      super(props)

      this.state = {
        email: "",
        senha: "",
        mensagem: ""
      }

      this.login = this.login.bind(this)
    }

    login(e){
      if (this.state.email === 'eduardo.lino@pucpr.br' && this.state.senha === '123456') {
        this.state.mensagem = 'Acessado com sucesso!';
      } else {
        this.state.mensagem = 'Usuário ou senha incorretos!';
      } 

      this.setState(this.state)
      
    }

    render(){
      return(
      <div>  
        <h1 className='componentes'>Login</h1>
        <input type="email" className='componentes' value={this.state.email} onChange={(e) => this.setState({email:e.target.value})}/>
        <input type="password" className='componentes' value={this.state.senha} onChange={(e) => this.setState({senha:e.target.value})}/>
        <button className='componentes' onClick={this.login}>Acessar</button>
        <label className='componentes'>{this.state.mensagem}</label>

    </div>  
      ) 
    }  
  }



export default App;