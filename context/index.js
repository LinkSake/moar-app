import { useRouter } from 'next/router'
import { active } from './reducers/active'
import { working } from './reducers/working'
import { projects } from './reducers/projects'
import { useReducer, createContext } from 'react'


const getInitialState = () => {
  const { asPath } = useRouter()

  return ({
    active: asPath,
    working: { id: 1, name: 'Study', running: true, start: '2021-09-19 21:00:00', end: ''},
    projects: [
      { id: 1, name: 'School', items: [
        { id: 0, name: 'Homework', running: false, start: '2021-09-19 13:00:00', end: '2021-09-19 13:23:00'}, 
        { id: 1, name: 'Study', running: true, start: '2021-09-19 21:00:00', end: ''}
      ]}, 
      { id: 2, name: 'House', items: []}
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