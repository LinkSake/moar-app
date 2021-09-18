import { active } from './reducers/active'
import { useReducer, createContext } from 'react'

const initialState = {
  active: 'home',
}

const Context = createContext({})

const combineReducers = (...reducers) => (state, action) => {
  reducers.forEach(reducer => {
    state = reducer(state, action)
  })
  return state
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers(active), initialState
  )
  const value = { state, dispatch }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { Context, Provider }