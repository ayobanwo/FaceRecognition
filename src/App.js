import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/logo/Logo';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOptions = {
	particles: {
		number: {
			value: 60,
			density: {
				enable: true,
				value_area: 500
			}
		}
	}
}

class App extends Component{
	render(){
	    return (
	        <div className="App">
	        	<Particles className='particles'
	        	    params={particlesOptions}
	        	 />
	            <Navigation /> 
	      		<Logo />
	      		<Rank />
	            <ImageLinkForm />
	                       {  /*<FaceRecognition />*/}
	        </div>
	    );
	}
}

export default App;
