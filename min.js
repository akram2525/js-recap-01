// data types number,string boolean

// number
const count = 23;
console.log(typeof count);

// string

const friend = 'afzal'
console.log(typeof friend);

// boolean
const result = true;
console.log(typeof result);

// math (+,-,*,/)
const a = 10;
const b=5;
const sum= a+b
const devided=a-b;
console.log(sum);
console.log(devided);

// oparatior president




const c = 23.4454334;
const d = 23.4433234;
const e= c+d;
console.log(e.toFixed(2));

// assignment operator
console.log(8 === '8');
console.log(8 !== '8')

// logical operator

console.log(6==6 && 2==3)
console.log(6==6 || 2==3)



// type coertion
console.log(12+'23'-12+'3'-1)

//  switch catch
const day = 'sunday'
switch(day){
    case 'sunda':
        console.log('has class');
        break;
        case "sunday":
            console.log("has");
            break;
}

// condition if else
const hasJob = 'false';
const money = 50000;
const hasFlat = 'false'
const hasGirlFriend = 'true'

if(hasGirlFriend ){
    if(hasJob && money>=100000){
        console.log('you can marry')
    }
}


// templete string

const fristName = 'MD AKRAM';
const lastName = 'HOSSAIN'
const fullName = `${fristName} ${lastName}`;
console.log(fullName)

// ternery operator
const cond = fristName === "MD AKRAM" ? 'boy' : "girl";
console.log(cond);

const myVillage = 'joypur';
const vutter = `${myVillage} do have vutter ${myVillage==="joypur"?"620 people": "i dont know"}`;
console.log(vutter)



// array

const arr = [2,3,2,4,];

console.log(arr.length-1)
console.log(arr)
console.log(arr.at(2))
console.log(arr.pop(0))

