import React, { Component } from 'react'

import Layout from '../components/layout'

const actionOptions = ['coding','designing','planning','writing','programming','programming','programming','programming','programming','concluding','programming','thinking','optimizing','optimizing','optimizing','optimizing','optimizing','optimizing','refactoring','refactoring','refactoring','objectifying','simplifying','decoupling','debugging','debugging','debugging','debugging','debugging','debugging','configuring','streamlining','searching','tweaking','editing'];

const junk = ['#','@','%','*','&amp;','&lt;','&gt;','_','=','+','[',']','|','-','!','?'];

const randomInt = (min, max) => {
	return Math.round(min + (Math.random() * (max-min)));
}

const instagram = 'radial-gradient(circle at 25% 110%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%),radial-gradient(circle at 25% 110%,#b9a800 0,#938500 5%,#b10f00 45%,#8c0061 60%,#002ca9 90%)'

class IndexPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			action: '',
			timeoutId: false
		}
	}

	componentDidMount() {
		this.tick();
	}

	componentWillUnmount() {
		clearTimeout(this.state.timeoutId);
	}

	render() {
		return (
			<Layout>
			    <p className="action-animation">{this.state.action}</p>
			    <div className="follow">
			    	<a target="_blank" style={{background: '#4875B4'}} href="https://www.linkedin.com/in/edenadler/"><i className="fab fa-linkedin-in"></i></a>
			    	<a target="_blank" style={{background: '#4e545a'}} href="https://github.com/edenadler"><i className="fab fa-github"></i></a>
			    	<a target="_blank" style={{background: `${instagram}`, fontSize: '30px'}} href="https://www.instagram.com/edenadler/"><i className="fab fa-instagram"></i></a>
			    </div>
			</Layout>
		)
	}

	tick = () => {
		let text = actionOptions[randomInt(0, actionOptions.length-1)];
		const chars = text.split('');
  		const glitch = randomInt(0, 3);
		  
		for (var i = 0; i < glitch; i++) {
			chars[randomInt(0, chars.length-1)] = junk[randomInt(0, junk.length-1)];
		}
		
		text = chars.join('');

		const timeoutId = setTimeout(this.tick, randomInt(16,400));

		this.setState({ action: text, timeoutId });
	}
}

export default IndexPage
