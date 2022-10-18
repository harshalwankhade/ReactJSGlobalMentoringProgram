import { React, useState } from 'react'

const fruitsCollection=[ 'apple', 'orange', 'mango', 'pineapple' ];

export default function SearchComponent() {
    
    const [searchValue, setSearchValue] = useState("")

  return (
    <div>
        <h1>Search</h1>
        <form >
            <input type="text" value={searchValue} onChange={e=> setSearchValue(e.target.value)} /> &nbsp;            
        </form>
        <p>
        {fruitsCollection
        .filter(name => name.match(new RegExp(searchValue, "i")))
        .map(name => (  
          <li key={name}>  
            {name}  
          </li>  
        ))} 
        </p>
      </div>
  )
}
