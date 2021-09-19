
import Link from 'next/link'
import { useContext } from 'react'
import { Context } from '../../context'
import { Icon, Menu } from 'semantic-ui-react'

const Navbar = () => {

  const { state, dispatch } = useContext(Context)

  const handleItemClick = (name) => {
    dispatch({ 
      type: 'SET_ACTIVE_TAB', 
      payload: name 
    })
  }

  return (
    <Menu 
    pointing 
    secondary 
    color='purple' 
    >
      <Link href='/'>
        <Menu.Item 
        link 
        active={state.active === '/'}
        onClick={() => {handleItemClick('/')}}
        >
          <Icon name='home'/>
        </Menu.Item>
      </Link>
      <Menu.Menu position='right'>
        <Link href='/tasks'>
          <Menu.Item 
          link
          active={state.active === '/tasks'}
          onClick={() => {handleItemClick('/tasks')}}
          >
            <Icon name='tasks'/>
            Tasks
          </Menu.Item>
        </Link>
        <Link href='/projects'>
          <Menu.Item 
          link
          active={state.active === '/projects'}
          onClick={() => {handleItemClick('/projects')}}
          >
            <Icon name='book'/>
            Projects
          </Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar