import { useRouter } from 'next/router'
import { active } from './reducers/active'
import { useReducer, createContext } from 'react'


const getInitialState = () => {
  const { asPath } = useRouter()

  return ({
    active: asPath,
  })
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
    combineReducers(active), getInitialState()
  )
  const value = { state, dispatch }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { Context, Provider }