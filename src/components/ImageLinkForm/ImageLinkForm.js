import React from 'react' ;
import  './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
	return (
		<div>
			<p className='center f3'>
				Detects faces in pictures
			</p>
			<div className='center' >
				<div className= 'fback form pa4 br3 shadow-5 center'>
					<input className='f4 pa2 w-70 center' type="text" onChange ={ onInputChange } />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-blue br2' onClick ={onSubmit} > Detect </button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm; 