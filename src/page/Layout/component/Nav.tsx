import { RiMenu2Line } from 'react-icons/ri';
import { Link, NavLink } from 'react-router'
import Logo from '../../../assets/logo.png'
const Nav = () => {
    const links = ["HOME", "HOME", "HOME", "HOME", "HOME", "HOME"];

    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                    <img src={Logo} alt="logo" className='object-contain w-44 h-20' />
                </div>
            <div className="hidden lg:flex navbar top-0 bg-base-100 justify-center px-48 shadow-lg z-20">
                <div className="flex-none">
                    <ul className="nav-list menu menu-horizontal gap-3 px-1 z-10">
                        {
                            links.map((link, index) => (
                                <li key={index}>
                                    <NavLink to={`${link === "HOME" ? "/" : link.toLocaleLowerCase()}`}>
                                        {link}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* mobile nav drawer */}
            <div className="grid lg:hidden drawer justify-end">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn drawer-button bg-transparent border-0 shadow-none">
                        <RiMenu2Line size={20} color='#000' />
                    </label>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        {
                            links.map((link, index) => (
                                <li key={index}>
                                    <Link to={`${link === "HOME" ? "/" : link.toLocaleLowerCase()}`}>
                                        {link}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav