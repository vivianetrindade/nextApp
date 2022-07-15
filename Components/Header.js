import Link from "next/link"

export default function Header () {
    return (
        <div className="header">
            <div className="header-logo">
                <h1>Header</h1>
            </div>
            <div className="header-nav">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <Link href="/products">
                        <a>Products</a>
                        </Link>
                    </li>
                </ul>
                </div>  
        </div>
    )
}
// End of Navbar.js
