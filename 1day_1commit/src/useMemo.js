import React, { useState, useMemo } from "react";

// 간단히 요약하자면 useCallback은 함수 자체를 캐싱하고, useMemo는 값을 캐싱합니다.

// useCallback(() => {}, []);
// useMemo(() => 값, []);

const getAverage = (num) => {
  console.log("평균값을 계산중입니다.....");
  if (num.length === 0) return 0;
  const sum = num.reduce((a, b) => a + b);
  return sum / num.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [num, setNum] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    if (!isNaN(Number(value))) {
      setNum(value);
    } else {
      alert("숫자만 입력 가능합니다.");
    }
  };
  const onInsert = () => {
    const nextList = [...list, parseInt(num)];
    setList(nextList);
    setNum("");
  };
  return (
    <div>
      <input value={num} onChange={onChange} type="text" />
      <button onClick={onInsert}>submit</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>avg</b>: {getAverage(list)}
      </div>
    </div>
  );
};

//위의 평균을 구하는 컴포넌트를 최적화 하려면 아래를 참고

const Average = () => {
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <React.Fragment>
      <b>avg</b>:{avg}
    </React.Fragment>
  );
};

// 첫번째 인자에 콜백함수를, 두번째 인자에 변하기를 원하는 state 값을 설정해 주면
// 해당 값이 변할 때에만 함수를 재실행해 렌더링을 효율적으로 조정할 수 있다.
// 이를 통해 list 배열이 바뀔 때에만 getAverage 함수를 호출할 수 있다.

////////////////////////////////////////////////////////////////////

// useMemo를 사용하지 않은 컴포넌트
import React from "react";
const computeValueFromProp = (prop) => {
  // 에너지가 많이 소모되는 계산이 일어남
};
const ComponentThatRendersOften = ({ prop1, prop2 }) => {
  const valueComputedFromProp1 = computeValueFromProp(prop1);
  return (
    <>
      <div>{valueComputedFromProp1}</div>
      <div>{prop2}</div>
    </>
  );
};

// useMemo를 사용한 예제

import React, { useMemo } from "react";
const computeValueFromProp = (prop) => {
  // 에너지가 많이 소모되는 계산이 일어남
};
const ComponentThatRendersOften = ({ prop1, prop2 }) => {
  const valueComputedFromProp1 = useMemo(() => {
    return computeValueFromProp(prop1);
  }, [prop1]);
  return (
    <>
      <div>{valueComputedFromProp1}</div>
      <div>{prop2}</div>
    </>
  );
};

///useMemo의 두 번째 인자로 넣은 [prop1]은 prop1이 변경되었을 때만
//계산을 다시 하라고 알려주기 위한 배열이다.만약 우리가 prop1뿐만 아니고
//prop2가 변경되었을 때도 다시 계산하는 것이 필요하다면 배열은[prop1, prop2]가
//될 것이다.만약에 최초의 mount 시에만 계산을 하고 싶다면 빈 배열[]을 넣으면 된다.

/////////////////////////////

// 기본 형태 :
// useCallback( function, deps )

// - function : 재사용 할 함수

// - deps : 검사할 특정 값을 담은 배열

// (배열 안의 값이 바뀌면 함수를 호출해서 연산하고, 값이 바뀌지 않으면 이전에 연산한 값을 재사용한다.

//  함수 안에서 state나 props가 바뀌면 함수를 호출해서 실행한다.)

import React, { useState, useCallback } from "react";

//코드 생략

const onCreate = useCallback(() => {
  const user = {
    id: nextId.current,
    username,
    email,
  };
  setUsers(users.concat(user));

  setInputs({
    username: "",
    email: "",
  });
  nextId.current += 1;
}, [users, username, email]);

//코드 생략
