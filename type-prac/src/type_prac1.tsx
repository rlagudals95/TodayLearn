// 타입스크립트 타입설정 기초
let t = 3
let car: string = "hmk"; //변수 선언시 타입을 정해준다

car = "mmm"; // 재선언시 정상 작동

car = 3; // 재선언시 타입string이 달라 오류가뜬다

function add(num1: number, num2: number) {
  //함수 인자값에 타입선언

  console.log(num1 + num2);
}

add();
add(1);
add(1, 2);
add(3, 4, 5); // 함수인자 수가 맞지 않아도 오류라는 것을 알려줌
add("hello", "world"); // 스트링값이여서 오류발생

function showitem(arr: number[]) {
  //number로 이루어진 배열만 받겠다 선언
  arr.forEach((item) => {
    console.log(item);
  });
}

showitem(1, 2, 3); //
showitem([1, 2, 3]);


let age: number = 30;
let isAdult: boolean = true;

let a:number[] = [1, 2, 3]; // 이렇게 해도 되고 아래처럼 타입설정해도 된다!
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ['mon', 'tue', 'wed']
let week2: Array<string> = ['mon', 'tue', 'wed']

week1.push(3) // 스트링 배열로 선언된 배열에 숫자 삽입시 에러
week1.push('fri') // string삽입시 정상작동

console.log(a)
// 튜플 (tuple)

let b: [string, number];// 배열의 첫번째 요소는 string 두번째 요소는 number 타입선언

b = ['h', 1]
b = [2, 3]

b[0].toLocaleLowerCase
b[1].toLocaleLowerCase// 두번째는 number로 타입이 설정되있어 소문자로 만드는 함수가 먹히지 않음

// void, never

function sayHello():void { // 함수에서 return 값이 없을때 주로 사용
  console.log('hello')
}


//never는 항상 에러는 반환하거나 끝나지 않는 함수에 자주 쓴다
function showError():never { // 
    throw new Error()

}

function infLoop():never {
  while (true) {
    // do something......
  }
}

// enum >> 비슷한 값끼리 묶어준다??

//Os를 enum으로 지정 // 그리고 안에 타입들을 넣어준다
// enum Os { 
//   Window, //0
//   IoS,  //1
//   Android //2 //enum에 속성을 주지 않으면 자동으로 0,1,2 ...의 숫자 배열이 된다
// }

// enum Os { 
//   Window = 3, // 3으로 바꿔주면 다음 Ios와 Android는 4,5
//   IoS = 10,  // 10으로 바꿔주면 다음수는 11
//   Android 
// }

// console.log(Os[10]) //Ios출력
// console.log(Os['Ios']) // 10출력.... 참 특이한데???

// 문자열도 선언가능

enum Os { 
  Window = 'win', 
  IoS = 'ios',  
  Android = 'and', 
}

let myOs: Os; // myOs의 타입은 OS라고 선언

myOs = Os.Window // 특정값을 입력하게 만들고 싶을 때 사용 그 값들이 공통점이 있을대 사용

//null , undefined

let c:null = null
let d:undefined = undefined

