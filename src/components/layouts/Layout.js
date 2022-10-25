import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
    return (
        <>
            <nav>
                <ul className="navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <Outlet />
            </div>

        </>
    )
};

export default Layout;
