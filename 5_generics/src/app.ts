// const names: Array<string> = ['Costa', 'Max']; // string[]
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Costa' }, { age: 27 });
console.log(mergeObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 0) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));
console.log(countAndDescribe(''));
