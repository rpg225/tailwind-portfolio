import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header className="bg-zinc-600">
            
                <div className="container mx-auto flex justify-between">
                <nav className='flex'>
                    <NavLink to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100">
                        Home
                    </NavLink>
                    <NavLink to="/about" 
                        className="inflex-flex items-center py-6 px-3 mr-4 text-red-100"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        About
                    </NavLink>
                    <NavLink to="/project"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100"
                    >
                        Projects
                    </NavLink>
                    </nav>
                </div>
    </header>
  )
}

export default NavBar