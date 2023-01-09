import Link from "next/link";
import { useRouter } from "next/router"

const Navbar = () => {
    const router = useRouter()
    console.log(router.pathname);
    
    return (
        <nav
            className="navbar"
            >
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div className="flex flex-grow flex-wrap items-center" id="navbarSupportedContent1">
                    {/* Logo section */}
                    <a className="text-xl text-white p-2 mr-4 font-semibold" href="#">Invedus</a>
                    {/* Links */}
                    <ul className="flex items-center space-x-4 navbar-nav pl-0 list-style-none mr-auto">
                        <li className="nav-item p-2 w-max">
                            <Link className={`nav-link ${router.pathname === '/' && 'active'}`} href="/" passHref>
                                Contacts
                            </Link>
                        </li>
                        <li className="nav-item p-2 w-max">
                            <Link className={`nav-link ${router.pathname === '/add-contact' && 'active'}`} href="/add-contact" passHref>
                                Add Contacts
                            </Link> 
                        </li>   
                    </ul>
                </div>
            </div>
            </nav>
    )
}


export default Navbar