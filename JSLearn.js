// in build
const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 }
];

/** group By & sort */
const response = Map.groupBy(fruits, ({ quantity }) => quantity >= 200 ? "ok" : "low")
console.log(fruits.sort((a, b) => b.name.localeCompare(a.name)))

// manual
/** group By & sort */
for (let i = 0; i < fruits.length - 1; i++) {
    for (let j = 0; j < fruits.length - i - 1; j++) {
        // asending /
        if (fruits[j].quantity > fruits[j + 1].quantity) {
            let current = fruits[j]
            fruits[j] = fruits[j + 1]
            fruits[j + 1] = current
        }
        // desending
        if (fruits[j].quantity < fruits[j + 1].quantity) {
            let current = fruits[j]
            fruits[j] = fruits[j + 1]
            fruits[j + 1] = current
        }
        // asc by string /
        // asending
        if (fruits[j].name.localeCompare(fruits[j + 1].name) === 1) {
            let current = fruits[j]
            fruits[j] = fruits[j + 1]
            fruits[j + 1] = current
        }

    }
}
// group by
const groupBy = (array, keyFn) => {
    return array.reduce((result, item) => {
        const key = keyFn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
};
console.log(groupBy(fruits, ({ quantity }) => quantity >= 200 ? "ok" : "low"))

const typecheck = []

console.log(typeof typecheck)
console.log({ name: 'John', age: 34 }.constructor())

const newText = "prasath"
console.log(newText.search("r"))

for (i in newText) {
    console.log(newText[i] + "-")
}

let sum = 10 + 2 * 3
console.log(sum)


const num = 1

function name(a) {
    const num = 10
    console.log(num)
}

name(num)
console.log(num)


const obj1 = {}
const obj2 = { a: "1", b: "2" }
console.log(Object.assign({}, obj2))


console.log(x)
var x = 5

const cins = () => 1

if (cins()) {
    console.log("kdkd")
}

const firstname = "prasath"

let newText1 = ""
for(i = text.length - 1; i >= 0; i--){
    newText1+=text[i]
}
console.log(newText1)

console.log(firstname.split("").reverse().join(""))
console.log(firstname.search("s"))

let length = firstname.length
let text = ""
for (i in firstname) {
    text += firstname[length - 1]
    --length
}
console.log(text)


const data = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 },
];

const groupedData = Object.groupBy(data, item => item.age);
console.log(groupedData);


// define property of
const person = {
    name: "prem",
    counter: 1,
    fullName: function () {
        return this.name + (this.counter)
    }
}

Object.defineProperty(person, "name", { value: "prem", enumerable: false })
console.log(Object.getOwnPropertyNames(person)
)
Object.defineProperty(person, "reset", {
    get: function () { this.counter = 0; },
})
Object.defineProperty(person, "add", {
    set: function (value) { this.counter += value }
})
console.log(person.counter)
person.reset
console.log(person.counter)
person.add = 5
console.log(person.counter)
console.log(person.fullName())

const car = { type: "Fiat", model: "500", color: "white" };
Object.preventExtensions(car)
Object.seal(car)
Object.freeze(car)
// Object.defineProperty(car,"name",{value:'ldldl'})
delete car.type
car.name = "dl"
car.type = "dd"
console.log(car)

// method use from another object
const callObject = {
    useEffect: function (fir, sec) { return fir + "" + sec }
}
console.log(callObject.useEffect.apply(person, ["Oslo", "Norway"]))
console.log(callObject.useEffect.call(person, "Oslo", "Norway"))

// objecy can borrow another object methos
const person3 = callObject.useEffect.bind(person)
console.log(person3("s", "s"))


const customSearch = (search, delay = 1000, callback) => {
    const [se, setS] = useState(search);

    useEffect(() => {
        const handler = setTimeout(() => {
            callback()
        }, delay)

        handler()
        return () => {
            clearTimeout(handler)
        }
    }, [search])
}

const subString = "123456"
console.log(subString.substring(1,3))

/**
 * Reconciliation:
 * Composition
 * Error Boundries
 * 
 * 
 */
//

// linked lists
class Node {
    constructor(value , next = null){
        this.value = value
        this.next = next
    }
}
class PlayLists {
    constructor(){
        this.head = null
        this.size = 0
    }
    insertLast(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }
    insertFirst(value){
        this.head = new Node(value , this.head)
        this.size++
    }
    print(){
        let text = ""
        let current = this.head;
        while(current){
            text+=current.value+" "
            current = current.next
        }
        return text
    }
    insertAt(value , index){
        if((index > this.size) || (index < 0)){
             throw Error("Give Valid Index")
        }

        if(index === 0){
          this.insertFirst(value)
          return;
        }

        let newNode = new Node(value)
        let current, previous, count = 0
        current = this.head

        while(count < index){
            previous = current;
            current = current.next
            count++ 
        }

        newNode.next = current;
        previous.next = newNode
        this.size ++
    
    }
    removeAt(index){
        if((index > this.size) && (index < 0)){
            throw Error("Give Valid Index")
       }
      let count = 0, current = this.head, previous;
      if(index === 0){
        this.head = current.next
      }
      else{
        while(count < index){
            previous = current;
            current = current.next
            count++
           }
           previous.next = current.next
      }
    }

}
const play = new PlayLists()
play.insertLast(10)
play.insertLast(20)
play.insertLast(30)
play.insertLast(40)
play.insertLast(50)
play.insertAt(60 , 1)
play.removeAt(0)
console.log(play.print())

// stacks (last in first out)
function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char]) {
            stack.push(map[char]);
        } else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));

// quoes
// first in firstout

// hash table
class HashTable {
    constructor() {
        this.data = new Map();
    }
    hashValue(value) {
        let hash = 0
        for (let i = 0; i < value.length; i++) {
            hash += value.charCodeAt(i) * i
        }
        return hash
    }
    set(key , value){
        const hash = this.hashValue(key)
         this.data[hash] = value
    }
    get(key){
        const hash = this.hashValue(key)
        return this.data[hash]
    }
    remove(key){
        const hash = this.hashValue(key)
        delete this.data[hash]
    }
}
const playlist = new HashTable(30)
playlist.set("prasath" , 20)
playlist.set("prem" , 11)
playlist.set("sam" , 12)
playlist.set("sam1" , 13)
playlist.set("sam12" , 14)
console.log(playlist.get("prasath"))
console.log(playlist.get("prem"))
console.log(playlist.get("sam"))
console.log(playlist.get("sam1"))
console.log(playlist.get("sam12"))



// binary search
const searchBinary=(array , key ,find)=>{
    let left = 0;
    let rigth = array.length - 1

    while(left <= rigth){
        const mid = Math.floor((left + rigth) / 2)
        const current = typeof JSON.stringify(array[mid][key]) === "string" ? JSON.stringify(array[mid][key]) : String(JSON.stringify(array[mid][key])) 
        const search = typeof find === "string" ? find : String(find)
        if(array[mid][key] === find){
            return array[mid]
        }
        if(current.localeCompare(search) < 0){
            left = mid + 1
        }
        if(current.localeCompare(search) > 0){
            rigth = mid - 1
        }
    }
    return "No Data"


}
console.log(searchBinary(fruits , 'name' , 'oranges'))


const useDebounce = () => {
    const [state, setState] = useState("")
    const debounce = (callback, delay) => {
        clearTimeout(state);
        const handler = setTimeout(() => {
            callback()
        }, delay)
        setState(handler)
    }
    return debounce
}

const useWindow=()=>{
    const [state,setState]=useState(window.innerWidth)
    const resize=()=>{
        setState(window.innerWidth)
    }
    useState(()=>{
      window.addEventListener('resize' , resize)
      return ()=>window.removeEventListener('resize' , resize)
    },[])
    return state
}


class ErrorBoundry extends Component {
    constructor(props){
        super(props)
        this.isError = false
    }
    static getDerivedStateError(err){
        return {isError: true}
    }
    componentDidCatch(err , info){
        console.log(err , info)
    }
    render(){
        return this.props.children
    }
    
}

test("1 + 2 is equal to 3" , ()=>{
    expact(sum(1,2)).toBe(3)
})

function Human(name , age){
    this.name = name;
    this.age = age
}
Human.prototype.greet = function(){
    return `${this.age} ${this.name}`;
}


function Animal(name , age){
    this.name = name;
    this.age = age
}

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const alice = new Human("alice" , 30);
const dog = new Animal("dog" , 20);

console.log(alice.greet.call(dog))
console.log(alice.greet())

