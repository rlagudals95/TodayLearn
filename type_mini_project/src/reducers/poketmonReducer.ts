import { POKEMON_FAIL, POKEMON_SUCCESS, PokemonType, PokemonDispatchType} from "../actions/PoketmonActionTypes"


interface initialState { // 인터 페이스로 이니셜 스테이트 타입지정
    success: boolean,
    pokemon?:PokemonType// 포켓몬 처음값을 null이니까 옵셔널 체인지로 없어도 에러가 안나게 해준다
}




const initialState:initialState = {
    success: false,
    
}
//PokemonDispatchType = 성공 or 실패
const PoketmonReducer = (state=initialState, action: PokemonDispatchType):initialState => {//이 함수의 반환값은 언제나 이니셜 스테이트 타입
    switch (action.type) {
        case POKEMON_FAIL:
            return {
                ...state, //실패한 경우 그냥 이니셜 스테이트 그대로
                success:false
            }
            
        case POKEMON_SUCCESS:
            const { abilities, sprites } = action.payload
            return {
                ...state,
                success:true,
                pokemon: {
                    abilities,
                    sprites
                    }
            }
                
        

        default:
            return state
    }
}

export default PoketmonReducer
