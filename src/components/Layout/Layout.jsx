import { Outlet } from "react-router-dom"
import Navigation from "../Navigation/Navigation"


const Layout = () => {
    return (
        <div className='App'>
            <Navigation />
            <div className='page'>
                <Outlet />
            </div>
        </div>)
}

export default Layout