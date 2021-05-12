// 타입스크립트 인터페이스!

// let user: object;

// user = {
//     name: 'xx',
//     age: 30
// }

// console.log(user.name); // object 에는 특정 속성값에 대한 정보가 없어서 에러가 뜬다


// 프로퍼티를 정의해서 객체를 표현하고자 할 때 interface를 사용

// 점수를 String //[grade: number]: string 으로 주는게 아닌 위에서 타입을 지정해줘서 쓰자
type Score = 'A'|'B'|'C'|'D'


interface User {
    name: string,
    age: number
    gender? : string // 이렇게 ? 를 붙여주면 있어도 되고 없어도 되는 프로퍼티로 사용가능
    
    // gender : string // 인터페이스 안에 gender를 선언하고 사용해야한다
    readonly birthYear: number;
    // 1?: string;
    // 2?: string;
    // 3?: string;
    // 4?: string; //이렇게 하나씩 선언하지말고 아래처럼
    [grade: number]: Score // 위에서 선언한 Score타입 말고 재선언 불가능
    //학년은 숫자로 학점은 스트링(A,B,C)로 받는다
    // 키는 넘버 밸류는 스트링
    
    
}

let user: User = { 
    name: 'xx',
    age: 30,
    birthYear: 2000, //readonly를 쓰면 최초에 선언할때만 할당가능 하게함
    // gender : 'female'
    1: 'A',
    2: 'B'
}

user.age = 10;// 재선언시 문제없음
user.gender = "male" // 새로운값 넣을 시 문제 
user.birthYear =1995 // birthYear아래에서 재선언 해줘도 문제가 되지 않는다 그러나 인터페이스 설정에
//readonly를 넣어주면 재선언을 할 수 없게 된다
console.log(user.age, user.name);

//인터 페이스로 함수 정의

interface Add {
    (num1: number, num2: number): number;// 반환값이 number
}

const add : Add = function(x, y){ // 여기서 x,y는 number라고 인식이 된다
    return x + y;
}

add(10, '20') // 함수인자값으로 number만 넣을 수 있다

interface IsAdult {
    (age: number): boolean; // 반환값이 boolean

}

const a: IsAdult = (age) => {
    return age > 19 // age가 19 보다크면 true or false로 반환
}

a(33) // true


//implements //클래스를 정의할 수 있다

interface Car {
    color: string;
    wheels: number;
    start():void
}

interface Benz extends Car { // Car에서 추가로 더 정의 해줄 수 있다
    door: number;
    stop():void

}

const benz: Benz = {
    door: 5,
    stop() {
        console.log('stop');
    }
    // 더 정의 해주기만 하면 에러가 뜬다 Car의 속성 값들을 다 입력 해줘야 한다

}

/////////////


class Bmw implements Car {
   color
    wheels = 4;

    constructor(c:string) {
        this.color = c;
    }

    start() {
        console.log('go..');
    }
}

const b = new Bmw('green')
console.log(b) // Bmw : {"wheels": 4, "color":green} 이렇게 뜬다
b.start() //"go..."출력


////////////


// 인터페이스 확장 (합치기)

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

interface Toy {
    name?: string;
}

interface ToyCar extends Car, Toy {
    price: number; // 속성추가
    

}

const MiniCar: ToyCar = {
    price: 5000, // 인터 페이스 두개를 합친게 타입이된다 그리고 두개를 합친 속성값을 다 넣어줘야 오류가 안뜸
    color: 'red',
    wheels: 4,
    start() {
        console.log('object');

    },
    // name은 뒤에 ? 붙여줘서 안써줘도 된다!
}