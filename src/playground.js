// Some ES6 stuff to be transpiled

let something = 'test';

console.log('something', something);

let bark = () => {
  console.log('woof');
};

bark();

let templateValue = 'Mozart';
let template = `this is
               a template and can
               have multiple lines
               and injected values: ${templateValue}`;

console.log(template);
