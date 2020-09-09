import Layout from "../components/layout"
import Head from "next/head"

function HomePage() {
    return <Layout>
        <Head>
            <title>Home Page</title>
        </Head>
        <h1 className="home-page-title">Home Page</h1>

        <style>
            {`
            .home-page-title{
                color: blue;
            }
            `}
        </style>

        {/* body bu sayfanın içinde olmadığı için bir atama yapamıyor ve css'i işleyemiyor o yüzden global şeklinde kullanırsak 
        atamayayı yapıp css'i işleyebilir. */}
        <style global jsx>  
            {`
            body{
                background: yellow;
            }
            `}
        </style>
    </Layout>
}

export default HomePage