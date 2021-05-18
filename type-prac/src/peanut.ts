// 땅콩코딩 님의 강의

let studentID: number = 1234;
let studentName: string = 'hmk'
let age: number = 21; // 다른 컴포넌트에서 선언해준 변수명과 겹치면 안돼는 것 같다...!
let gender: string = 24;
let subject: string = 'JavaScript'
let courseCompleted: boolean = false

let student1 = {
    studentID  : 1234,
    studentName  : 'hmk',
    gender  : 'male',
    subject  :'JavaScript',
    courseCompleted : false,
}


// 함수 리턴값의 타입도 선언가능
// function getStudentDetails(studentID: number) // :void 리턴값이 없음,  객체 object
// :number   {
//     return 1// void가 아닌 함수들은 타입에 맞는 return을 꼭해줘야 오류가 안뜬다

// }

// 인터페이스 사용하기(첫글자는 대문자로 하자!)

interface Student { // 인터페이스로 정의 타입으로 사용가능
   readonly studentID: number;  // readonly쓰면 읽기 전용 프로퍼티가되 수정이 불가능하게 됨
    studentName: string;
    age?: number, //age 프로퍼티가 있어도 되고 없어도 됨
    gender: string,
    subject: string,
    courseCompleted: boolean
    // addComment(comment: string): string,
    addComment?:(comment: string) => string // 함수도 인터페이스로 지정가능
}

// 인터페이스를 타입으로 썼을때
function getStudentDetails(studentID: number): Student // 아래처럼 객체를 길게 안써도 된다
{
       return {
studentID  : 1234,
studentName  : 'hmk',
// 다른 컴포넌트에서 선언해준 변수명과 겹치면 안돼는 것 같다...!
gender  : 'male',
subject  :'JavaScript',
courseCompleted : false,

    }// void가 아닌 함수들은 타입에 맞는 return을 꼭해줘야 오류가 안뜬다
}
// 인터페이스를 타입으로 안썼을때

function getStudentDetails2(studentID: number):  {
        studentID: number;  //반환되는 객체의 구조를 타입으로 지정
        studentName: string;
        age?: number,
        gender:  GenderType.Male, // gender의 값은 사실 male, female로 두개 밖에없다 단순히 string말고 좀더 정확하게 정의 할 수 있는 방법은?
        subject: string,
        courseCompleted: boolean
} {
    return {
studentID  : 1234,
studentName  : 'hmk',
gender  : GenderType.Male,
subject  :'JavaScript',
courseCompleted : false,
    }// void가 아닌 함수들은 타입에 맞는 return을 꼭해줘야 오류가 안뜬다
}

// 근데 이렇게 함수 반환값을 객체구조로 했을때 코드가 너무 복잡하다! getStudentDetails함수 위처럼 해보자!


// 코드의 재사용 용이!
function saveStudentDetails(student: Student): void { // 인터페이스를 매게 변수로 가져옮
    // student.studentID = 11222; //studentID를 바꾸는 함수
    
}

saveStudentDetails(student1) //student1 위에서 변수로 지정!


//enum 선언 //ender의 값은 사실 male, female로 두개 밖에없다 단순히 string말고 좀더 정확하게 정의 할 수 있는 방법은?

enum GenderType {
    // Male,
    // Female // 이렇게 쎃어 놓으면 숫자 열거형으로 자바스크립트 파일로 컴파일시 [GenderType["Male"] = 0] = "Male"이런식으로 나온다
    Male = 'male',
    Female = 'female' //  [GenderType["Male"]] = "male" 문자 열거형으로 컴파일됨
}




function getStudentDetails3(studentID: number):  {
        studentID: number;  //반환되는 객체의 구조를 타입으로 지정
        studentName: string;
        age?: number,
        gender: GenderType, // gender의 값은 사실 male, female로 두개 밖에없다 단순히 string말고 좀더 정확하게 정의 할 수 있는 방법은?
        // enum 말고 리터럴 타입으로 조건?을 줄 수도 있다
        // gender: 'male'|'female'|'genderNeutral',
    subject: string,
        courseCompleted: boolean
} {
    return {
studentID  : 1234,
studentName  : 'hmk',
gender  : GenderType.Male,
subject  :'JavaScript',
courseCompleted : false,
    }// void가 아닌 함수들은 타입에 맞는 return을 꼭해줘야 오류가 안뜬다
}

/// 리터럴 타입