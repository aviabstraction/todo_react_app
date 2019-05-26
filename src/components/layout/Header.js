import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header style={headerStyle}>
			<h1>Todo </h1>
			<Link style={linkStyle} to="/">
				Home
			</Link>{' '}
			|{' '}
			<Link style={linkStyle} to="/about">
				About
			</Link>
		</header>
	);
}
/*{' '} - added for explicit spaces */

const headerStyle = {
	backgroundImage: 'linear-gradient(45deg, red, #f06d06)',
	boxShadow: '0 10px 6px -6px #777',
	color: '#fff',
	fontFamily: 'Ubuntu',
	textAlign: 'center',
	padding: '10px',
	marginTop: '30px',
	borderRadius: '5px'
};

const linkStyle = {
	color: '#fff',
	textDecoration: 'none'
};

export default Header;
