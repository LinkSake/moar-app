const updateProjects = ( state, dispatch, newProject ) => {
  let objectIndex = state.projects.findIndex(project => project.id === newProject.id)
  let newProjectsContext = [...state.projects]
  newProjectsContext[objectIndex] = newProject
  dispatch({ type: 'SET_PROJECTS', payload: newProjectsContext })
}

export {
  updateProjects
}