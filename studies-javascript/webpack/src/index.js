import { abc } from './modules/my-file.js';
import css from './style.scss';
import jslogo from './images/js-logo.png';

const imgElement = document.querySelector('#my-image');
const numberElement = document.querySelector('#my-number');

class MyClass{
	constructor(){
		this.x = 5;
	}
}

let a = new MyClass();

imgElement.setAttribute('src', jslogo);
imgElement.classList.add(css['img-border']);

numberElement.addEventListener('click', async function(){
	console.log(numberElement.value);
	abc();
})

if(module.hot){
	module.hot.accept('./modules/my-file.js', function(){
		console.log('UPDATE: my-file.js');
	})
}