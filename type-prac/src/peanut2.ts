// 타입스크립트 유니언 타입, 타입가드 , 타입별칭

let someValue: any; // 어느 타입이든 재선언 ok

someValue = 'hello'
someValue = 'true'

//최대한 any 타입은 쓰지말자~!

// 유니언 타입

let someValue2: number | string; //타입 2개 지정

someValue2 = 1;
someValue2 = 'hmk';
someValue2 = true// boolean은 에러가 뜬다

// 같은 조합이 계속 반복될 경우 리팩토링 하기

type StrOrNum = number|string //Type Aliases 넘버 혹은 스트링의 새로운 타입형태 선언

const calc = (price: StrOrNum, qty: number)
    : void => {
    
    
}