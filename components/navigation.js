import Link from "next/link"

export default function Navigation() {
    return <nav>
        <Link href="/">
            <a>Home Page</a>
        </Link>
        <Link href="/about">
            <a>About Page</a>
        </Link>
    </nav>
}