"use strict";
// 땅콩코딩 님의 강의
var studentID = 1234;
var studentName = 'hmk';
var age = 21; // 다른 컴포넌트에서 선언해준 변수명과 겹치면 안돼는 것 같다...!
var gender = 24;
var subject = 'JavaScript';
var courseCompleted = false;
var student1 = {
    studentID: 1234,
    studentName: 'hmk',
    gender: 'male',
    subject: 'JavaScript',
    courseCompleted: false,
};
// 인터페이스를 타입으로 썼을때
function getStudentDetails(studentID) {
    return {
        studentID: 1234,
        studentName: 'hmk',
        // 다른 컴포넌트에서 선언해준 변수명과 겹치면 안돼는 것 같다...!
        gender: 'male',
        subject: 'JavaScript',
        courseCompleted: false,
    }; // void가 아닌 함수들은 타입에 맞는 return을 꼭해줘야 오류가 안뜬다
}
// 인터페이스를 타입으로 안썼을때
function getStudentDetails2(studentID) {
    return {
        studentID: 1234,
        studentName: 'hmk',
        gender: GenderType.Male,
        subject: 'JavaScript',
        courseCompleted: false,
    }; // void가 아닌 함수들은 타입에 맞는 return을 꼭해줘야 오류가 안뜬다
}
// 근데 이렇게 함수 반환값을 객체구조로 했을때 코드가 너무 복잡하다! getStudentDetails함수 위처럼 해보자!
// 코드의 재사용 용이!
function saveStudentDetails(student) {
    // student.studentID = 11222; //studentID를 바꾸는 함수
}
saveStudentDetails(student1); //student1 위에서 변수로 지정!
//enum 선언 //ender의 값은 사실 male, female로 두개 밖에없다 단순히 string말고 좀더 정확하게 정의 할 수 있는 방법은?
var GenderType;
(function (GenderType) {
    // Male,
    // Female // 이렇게 쎃어 놓으면 숫자 열거형으로 자바스크립트 파일로 컴파일시 [GenderType["Male"] = 0] = "Male"이런식으로 나온다
    GenderType["Male"] = "male";
    GenderType["Female"] = "female"; //  [GenderType["Male"]] = "male" 문자 열거형으로 컴파일됨
})(GenderType || (GenderType = {}));
function getStudentDetails3(studentID) {
    return {
        studentID: 1234,
        studentName: 'hmk',
        gender: GenderType.Male,
        subject: 'JavaScript',
        courseCompleted: false,
    }; // void가 아닌 함수들은 타입에 맞는 return을 꼭해줘야 오류가 안뜬다
}
/// 리터럴 타입
