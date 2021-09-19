import { useRouter } from 'next/router'
import { active } from './reducers/active'
import { working } from './reducers/working'
import { projects } from './reducers/projects'
import { useReducer, createContext } from 'react'


const getInitialState = () => {
  const { asPath } = useRouter()

  return ({
    active: asPath,
    working: { id: 1, name: 'Jugar', running: true, start: '2021-09-19 20:00:00', end: '2021-09-19 22:23:00'},
    projects: [
      { id: 1, name: 'Lola', items: [
        { id: 0, name: 'Comer', running: false, start: '2021-09-19 13:00:00', end: '2021-09-19 13:23:00'}, 
        { id: 1, name: 'Jugar', running: true, start: '2021-09-19 21:00:00', end: '2021-09-19 22:23:00'}
      ], count: 2, elapsed: 109 }, 
      { id: 2, name: 'Maya', items: [], count: 0, elapsed:0 }
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