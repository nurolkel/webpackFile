// import your function
import _ from 'lodash'


function component() {
    const element = document.createElement('div');

  // use your function!
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

  // add image to exisiting div 
  

    
  

    return element;
}

document.body.appendChild(component());
  