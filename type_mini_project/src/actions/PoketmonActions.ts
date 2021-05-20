import axios from 'axios'
import { Dispatch } from 'redux'
import {PokemonDispatchType, POKEMON_SUCCESS,POKEMON_FAIL} from './PoketmonActionTypes'


// 함수 인자들의 타입을 명확하게 정해주자
export const fetchPoketmonData = (poketmonName: string) =>async (dispatch:Dispatch<PokemonDispatchType>) => { 
    try { //디스패치 타입을 dispatch:Dispatch 에서 dispatch:Dispatch<PokemonDispatchType> 좀 더 명확하게 타입을 정해준다
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poketmonName}`)
        const data = res.data

        dispatch({
            type: POKEMON_SUCCESS,
            payload:data
        })

    } catch(err) {
            dispatch({
            type: POKEMON_FAIL,        
        })
    }

}