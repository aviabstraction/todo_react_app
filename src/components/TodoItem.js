import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			fontFamily: 'Ubuntu',
			padding: '10px',
			boxShadow: '0 10px 6px -6px #777',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {title}
					<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
						<i className="fas fa-times" />
					</button>
				</p>
			</div>
		);
	}
}

//valitdate  PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
};

const btnStyle = {
	background: 'red',
	boxShadow: '0 10px 6px -6px #777',
	color: '#fff',
	border: 'none',
	float: 'right'
};

export default TodoItem;
