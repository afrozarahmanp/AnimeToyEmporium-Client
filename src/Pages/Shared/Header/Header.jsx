import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/' className="text-lg font-semibold">Home</Link></li>
        <li><Link to='/alltoys' className="text-lg font-semibold">All Toys</Link></li>
        {user?.email ? <><li><Link to='/ordertoys' className="text-lg font-semibold">My Toys</Link></li>
            <li><Link to='/addatoy' className="text-lg font-semibold">Add a Toy</Link></li>
        </> : <></>
        }
        <li><Link to='/blog' className="text-lg font-semibold">Blog</Link></li>

    </>

    return (
        <div className="navbar bg-gradient-to-r from-purple-200 to-blue-200 h-24 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-2xl font-bold" to='/'>AnimeToyEmporium</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">

                {user?.email ? <>

                    <Link to='/ordertoys'>
                        <button className="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></button>
                    </Link>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator flex justify-center">
                                <img className="rounded-full w-3/4" src={user.photoURL ? user.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />

                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{
                                    user ? <>
                                        {user.displayName ? user.displayName : 'User'}
                                    </> : "Profile"
                                }</span>
                                <span className="text-info">{
                                    user ? <>
                                        {user.email ? user.email : 'UserEmail'}
                                    </> : ""
                                }</span>
                                <div className="card-actions">
                                    <Link to='/ordertoys'>
                                        <button onClick={handleLogOut} className="btn btn-primary ml-2">LogOut</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </> :
                    <Link to='/login' className="btn btn-primary ml-2">Login</Link>

                }
            </div>
        </div>




    );
};

export default Header;