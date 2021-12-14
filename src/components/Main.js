import React, { Component } from 'react';
import './Main.css';
export default class Main extends Component {
	state = {
            novaTarefa:'',
        };
   
	handleChange = (e)=>{
        this.setState({
            novaTarefa: e.target.value,
        });
	};
	render() {
        const {novaTarefa} = this.state;
		return (
			<div className='main'>
				<h1>LISTA DE TAREFAS</h1>
				<form>
					<input type='text' onChange={this.handleChange}/>
					<button type='submit'>ENVIAR</button>
				</form>
			</div>
		);
	}
}
