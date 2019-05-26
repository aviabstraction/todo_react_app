import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import axios from 'axios';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
	state = {
		todos: []
	};
	//setting up intial state

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then((res) => this.setState({ todos: res.data }));
	}
	//lifecycle hook for making request to API

	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};
	// toggle completed or not

	delTodo = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((res) => this.setState({ todos: [ ...this.state.todos.filter((todo) => todo.id !== id) ] }));
	};

	// add Todo
	addTodo = (title) => {
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title, //es6 short form when property and value are same
				completed: false
			})
			.then((res) => this.setState({ todos: [ ...this.state.todos, res.data ] }));
	};
	// delete Todo

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<div className="container">
						<Header />
						<Route
							exact
							path="/"
							render={(props) => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									<Todos
										todos={this.state.todos}
										markComplete={this.markComplete}
										delTodo={this.delTodo}
									/>
								</React.Fragment>
							)}
						/>
						<Route path="/about" component={About} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

//render prop here is used instead of component prop to hold multiple components in home route

export default App;
