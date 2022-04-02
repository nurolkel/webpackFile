// import your function
import _ from 'lodash'
import './style.css';
import MePhoto from './MePhoto.jpg'
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');

  // use your function!
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

  // add image to exisiting div 
    const myImage = new Image();
    myImage.src = MePhoto;

    element.appendChild(myImage)

    console.log(Data);
    console.log(Notes);
  

    return element;
}

document.body.appendChild(component());
  