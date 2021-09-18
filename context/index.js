import { useRouter } from 'next/router'
import { active } from './reducers/active'
import { working } from './reducers/working'
import { projects } from './reducers/projects'
import { useReducer, createContext } from 'react'


const getInitialState = () => {
  const { asPath } = useRouter()

  return ({
    active: asPath,
    working: {},
    projects: [
      {id: 1, name: 'Lola', items: [{ id:1, name: 'Yum', running: false, elapsed: 2}], count: 1, elapsed:0 }, 
      {id: 2, name: 'Maya', items: [], count: 0, elapsed:0 }
    ],
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
    combineReducers(
      active, 
      working, 
      projects
    ), getInitialState()
  )
  const value = { state, dispatch }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { Context, Provider }