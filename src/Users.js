import React, { Component } from 'react';
import from './User';

class Users extends Component {
    state =){

    }
        data :[
            {nama :"Nuril"}
        ]
}
    kurang =()=>{
        const nilaibaru=this.state.Data.map(nilai)=> {
            const tempatTampung=nilai;
            tempatTampung.umur-=10;
            return tempatTampung;
        }
        this.setState({
            nilaibaru
        });
    }
    Tambah =()=>{
        const nilaibaru=this.state.Data.map(nilai)=>{
            const tempatTampung=nilai;
            tempatTampung.umur+=10;
        }
    }
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Nuris
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
