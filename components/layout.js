import Navigation from "./navigation"
import Head from "next/head"

export default function Layout({ children }) {
    return <div>
        <Head>
            <title>Default Title</title>
        </Head>
        <Navigation />
        <main>
            {children}
        </main>
        <footer>Design By Umut Vural for Test Purpose</footer>
    </div>
}