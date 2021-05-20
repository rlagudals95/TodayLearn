import React, { useState} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { RootReducerType } from './Store'
import {fetchPoketmonData } from './actions/PoketmonActions'

// const pokemonReducer = useSelector((state)=> state.poke)

function App() {

  const dispatch = useDispatch()
  const [pokemonName, setPokemonName] = useState("");
  const pokemonReducer = useSelector((state:RootReducerType)=> state.PoketmonReducer)
  const searchButtonTapped = () => {
    dispatch(fetchPoketmonData(pokemonName))
  }

  const handlePokemonName = (event:React.ChangeEvent<HTMLInputElement>) => { //함수 인자는 타입을 정해줘야하나 보다...
    // 이벤트 타입은 onChange={}여기서 온체인지에 마우스를 갖다 되면 보인다
    setPokemonName(event.target.value)
  }



  return (
    <div className="App">
      <input value={pokemonName} onChange={handlePokemonName} />
      <button
        onClick={searchButtonTapped}
      
      >포켓몬찾기</button>
      <div>
        {pokemonReducer.success && <div>
          <p>
          {pokemonName}
          </p>
          {pokemonReducer.pokemon?.abilities.map((ability) => {
            return <div><p>{ability.ability.name}</p>
             <p>{ability.slot}</p>
            </div>
           
          })}
          {/* .pokemon? 포켓몬 값이 있을때만 렌더 */}
          <img src={pokemonReducer.pokemon?.sprites.front_default }></img>
        </div>}
      </div>

    </div>
  );
}

export default App;
