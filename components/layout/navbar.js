
import Link from 'next/link'
import { useState } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

const Navbar = () => {

  const [active, setActive] = useState('home')

  const handleItemClick = (name) => setActive(name)

  return (
    <Menu 
    pointing 
    secondary 
    stackable 
    color='purple' 
    >
      <Link href='/'>
        <Menu.Item 
        link 
        active={active === 'home'}
        onClick={() => {handleItemClick('home')}}
        >
          <Icon name='home'/>
        </Menu.Item>
      </Link>
      <Menu.Menu position='right'>
        <Link href='/tasks'>
          <Menu.Item 
          link
          active={active === 'tasks'}
          onClick={() => {handleItemClick('tasks')}}
          >
            <Icon name='tasks'/>
            Tasks
          </Menu.Item>
        </Link>
        <Link href='/projects'>
          <Menu.Item 
          link
          active={active === 'projects'}
          onClick={() => {handleItemClick('projects')}}
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