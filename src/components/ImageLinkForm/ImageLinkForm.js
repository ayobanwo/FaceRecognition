import React from 'react' ;
import  './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
	return (
		<div className = 'main'>
			<p className='center f3'>
				Input Image to Detect Faces
			</p>
			<div className='center' >
				<div className= 'fback form pa4 br3 shadow-5 center'>
					<input className='f4 pa2 w-70 center hover-bg-black hover-white' type="text" onChange ={ onInputChange } />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-blue br2' onClick ={onPictureSubmit} > Detect </button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm; 