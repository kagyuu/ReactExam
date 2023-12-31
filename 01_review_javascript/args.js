// variable args
const sum = (...nums) => {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum;
}
console.log(sum(0,1,2,3,4,5,6,7,8,9));

// object args
const emplyee = {
    name : `tanaka`,
    sex: `female`,
    age: 33,
    division: 'account'
}

const hello = ({name, division}) => {
    console.log("### HELLO1")
    console.log(name);
    console.log(division);
}

const hello2 = (emp) => {
    console.log("### HELLO2")
    console.log(emp.name);
    console.log(emp.division);
}

hello(emplyee);
hello2(emplyee);