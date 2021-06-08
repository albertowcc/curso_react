import React from 'react';

class App extends React.Component{

  state = {
    nome : ''
  }

  modificarNome = (event) => {
    let nome = event.target.value;
    this.setState({
      nome: nome
    })
  }

  criaCombobox = () => {
    const opcoes = ["fulano","outro"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
    return (
      <select>
          {comboBoxOpcoes}
      </select>
    )
  }

  componentDidMount(){
    console.log('Executou o componente didmount')
  }

  render(){
      console.log('executou o render')
      const MeuComboBox = () => this.criaCombobox()

    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1>Hello {this.state.nome} </h1>
        <MeuComboBox/>

      </>
    )
  }
}
export default App;
