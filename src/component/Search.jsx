import React from 'react'
import { Search, Heart } from 'lucide-react'

const SearchInput = () => {
  return (
    <div className="search-opt">
     <div className="search">
         <Search size={25} className='s-icon'/>
         <input
             placeholder='Search recipes by name category, or description'
         />
     </div>
        <button className='fev-btn'><Heart size={25} className='heart'/><span className='text-fev'>Fevorite</span></button>
    </div>
  )
}

export default SearchInput