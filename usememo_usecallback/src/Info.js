import React, { useState, useMemo, useCallback } from "react";

const getColorKor = (color) => {
  console.log("getColorKor");
  switch (color) {
    case "red":
      return "빨강";
    case "orange":
      return "주황";
    case "yellow":
      return "노랑";
    case "green":
      return "초록";
    case "blue":
      return "파랑";
    case "navy":
      return "남";
    case "purple":
      return "보라";
    default:
      return "레인보우";
  }
};

const getMovieGenreKor = (movie) => {
  console.log("getMovieGenreKor");
  switch (movie) {
    case "Marriage Story":
      return "드라마";
    case "The Fast And The Furious":
      return "액션";
    case "Avengers":
      return "슈퍼히어로";
    default:
      return "아직 잘 모름";
  }
};

const Info = ({ color, movie }) => {
  console.log("컬러", color);
  console.log("무비", movie);
  //   const colorKor = getColorKor(color);
  //   const movieGenreKor = getMovieGenreKor(movie);
  //아래처럼 유즈 메모를 사용하면 하나의 함수만 실행된다
  const movieGenreKor = useMemo(() => getMovieGenreKor(movie), [movie]);
  const colorKor = useMemo(() => getColorKor(color), [color]);
  // []안의 값이 바뀌지 않는한 useMemo안에 있는 함수는 실행되지 않는다
  return (
    <div className="info-wrapper">
      제가 가장 좋아하는 색은 {colorKor} 이고, <br />
      즐겨보는 영화 장르는 {movieGenreKor} 입니다.
    </div>
  );
};

export default Info;
