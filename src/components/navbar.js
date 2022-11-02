function navbar() {
    const element = document.createElement('nav').classList('navbar navbar-expand-md navbar-dark bg-dark').element.id('nav')
    const container = element.createElement('div').classList('container-fluid')
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(navbar());