const x = 'x';
const y = 'y';

console.log("Hello world")
console.log(x, y);

const os=require('os');
const path=require('path')
const math=require('./math')

console.log(math.add(5,3))

console.log(os.type())

console.log(os.version())
console.log(os.homedir())

console.log(__filename)
console.log(__dirname)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))

console.log(path.parse(__filename))

