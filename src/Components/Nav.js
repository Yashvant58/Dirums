import React from 'react'
import { Link} from 'react-router-dom';

function Nav(){
return(
<>
<nav className=' p-3 bg-gray-300 '>
    <ol className='flex'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li className=' '>&#62;
            <Link to="/artworks">Artworks</Link>
        </li>
    </ol>
</nav>
</>
)
}
export default Nav;