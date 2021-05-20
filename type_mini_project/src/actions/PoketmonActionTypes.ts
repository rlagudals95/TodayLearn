// import { TypeOfTag } from "typescript"

export const POKEMON_SUCCESS = 'POKEMON_SUCCESS'
export const POKEMON_FAIL = 'POKEMON_FAIL'


//포켓몬 하나에 대한 정보 능력과 이미지 사진으로 설정
export type PokemonType = {
    abilities: PokemonAbility[] 
    sprites: PokemonSprites
}

export type PokemonAbility = {
    ability: {
    name: string,
    url: string,
    },
    is_hidden: boolean,
    slot: number
}

export type PokemonSprites = {
    front_default: string //이미지 링크 스트링 값
}

// https://pokeapi.co/api/v2/pokemon/ditto
// 포켓몬 api의 데이터 형식
// ability: { 
// name: "limber",
// url: "https://pokeapi.co/api/v2/ability/7/"
// },
// is_hidden: false,
// slot: 1
// },


export interface pokemonFailDispatch {
    type: typeof POKEMON_FAIL


}

export interface pokemonSuccessDispatch {
    type: typeof POKEMON_SUCCESS
    payload: { //성공시 받아오는 데이터
        abilities: PokemonAbility[] // 어빌리티 배열은 PokemonAbility들로 이루어진 배열
        sprites: PokemonSprites
    }
}

export type PokemonDispatchType = pokemonFailDispatch | pokemonSuccessDispatch
// 포켓몬 디스패치 함수 타입까지 지정 실패 혹은 성공