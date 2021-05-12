import Info from "./Info";
import React, { useState, useMemo, useCallback } from "react";

const App = () => {
  const [color, setColor] = useState("");
  const [movie, setMovie] = useState("");

  // const onChangeHandler = (e) => {
  //   // 컬러(온체인지) 혹은 좋아하는 영화 장르선택(온클릭)
  //   // 둘중 하나라도 선택 혹은 입력시 2개의 함수가 실행
  //   if (e.target.id === "color") setColor(e.target.value);
  //   else setMovie(e.target.value);
  // };

  //state값이 변경 될때마다 재렌더링된다

  console.log("hi"); // 컬러 인풋 값에 글을 입력시 state값이 바뀌어서 계속 콘솔찍힘 재렌더링

  const onChangeHandler = useCallback((e) => {
    if (e.target.id === "color") setColor(e.target.value);
    else setMovie(e.target.value);
  }, []); // 어떤값이 변경 될때마다 실행하고 싶으면 []안에 그값을 넣어주면 된다

  return (
    <div className="App">
      <div>
        <label>
          What is your favorite color of rainbow ?
          <input id="color" value={color} onChange={onChangeHandler} />
        </label>
      </div>
      <div>
        What is your favorite movie among these ?
        <label>
          <input
            type="radio"
            name="movie"
            value="Marriage Story"
            onChange={onChangeHandler}
          />
          Marriage Story
        </label>
        <label>
          <input
            type="radio"
            name="movie"
            value="The Fast And The Furious"
            onChange={onChangeHandler}
          />
          The Fast And The Furious
        </label>
        <label>
          <input
            type="radio"
            name="movie"
            value="Avengers"
            onChange={onChangeHandler}
          />
          Avengers
        </label>
      </div>
      <Info color={color} movie={movie} />
    </div>
  );
};

export default App;
