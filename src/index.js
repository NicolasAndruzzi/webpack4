import _ from 'lodash';

function component() {
    var element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello4', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());