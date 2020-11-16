import Head from 'next/head'
import News from '../components/news'
import Excellence from '../components/excellence'
import Footer from '../components/footer'
import Banner from '../components/banner'
import AboutUs from '../components/aboutUs'

function Home({data}) {

    return (
        <div>
            <Head>
                <title>SMP AL-QUR'AN MA'RIFATUSSALAAM (QURANIC BOARDING SCHOOL)
                </title>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Ma'rifatussalaam Qur'anic Boarding School adalah sekolang Boarding School terbaik di subang"></meta>

                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta
                    property="og:title"
                    content="SMP AL-QUR'AN MA'RIFATUSSALAAM - TERDEPAN MENJADI SEKOLAH GENERASI BERKARAKTER QURANI"/>
                <meta
                    property="og:description"
                    content="SMP AL-Qur'an Ma'rifatussalaam adalah sekolah boarding terbaik di subang"/>
                <meta property="og:url" content="https://marifatussalaam.org/"/>
                <meta
                    property="og:site_name"
                    content="SMP AL-QUR'AN MA'RIFATUSSALAAM BOARDING SCHOOL SUBANG"/>
            </Head>

            <Banner/>
            <AboutUs/>

            <News news={data}/>
            {/* <Excellence/> */}

        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://marifatussalaam.org/Rest_api`)
    const data = await res.json()
    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}

export default Home