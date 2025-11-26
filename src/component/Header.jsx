import { Plus } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='title'>
            <h1>My Recipes</h1>
            <p>Discover and organize your favorite recipes</p>
        </div>
        <div>
            <button className='add-btn'><Plus size={25} color='white'/> <span className='add'>Add recipes</span></button>
        </div>
    </div>
  )
}

export default Header