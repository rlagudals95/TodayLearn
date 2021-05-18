// 객체지향 프로그래밍이란?
// 연관된 변수와 함수들을 한 덩어리로 묶어서 구조화하여 표현하는 프로그래밍 스타일

//클래스 속에서 정의된 함수들은 클래스 내 정의된 변수들에게 this를 써서 바로 접근가능
class Employee {
 fullName: string;
 age2: number;
 jobTitle: string;
 hourlyRate: number;
 workingHourPerWeek: number;

// 클래스내에 선언된 변수들에게 프로퍼티 , 함수는 메소드라고 부른다
    
printEmployDetaIls = (): void => {// 함수 인자를 안넣어 줘도 된다
    console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 
    ${this.hourlyRate*this.workingHourPerWeek}달러 입니다`)
    }
}


// let fullName: string;
// let age2: number;
// let jobTitle: string;
// let hourlyRate: number;
// let workingHourPerWeek: number;


// let printEmployDetaIls = (fullName: string, jobTitle: string,
// hourlyRate: number, workingHourPerWeek:number
// ): void {
//     console.log(`${fullName}의 직업은 ${jobTitle}이고 일주일의 수입은 
//     ${hourlyRate*workingHourPerWeek}달러 입니다`)
// }


////////////////////////////////////////////

//Employee를 바탕으로 employee1이라는 객체를 생성한다
//employee1객체는  Employee의 클래스를 뼈대로 삼아 만들어진 객체
let employee1 = new Employee()
employee1.printEmployDetaIls() // 자동완성

//이렇게 객체를 선언하고 안의 내용을 적어 넣어주고
//함수선언시 자동으로 함수 값으로 매게변수가 들어가 리턴값으로 반환
let employee2 = new Employee()
employee2.fullName = '형민';
employee2.fullName = 3;//클래스의 형식이랑 다르다
employee2.age2 = 27;
employee2.jobTitle = '주니어 개발자';
employee2.hourlyRate = 40;
employee2.workingHourPerWeek = 35;
employee2.printEmployDetaIls()


