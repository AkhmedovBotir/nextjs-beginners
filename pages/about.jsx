import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>

            <div className='flex flex-col justify-center items-center h-[100vh] w-[100%]'>
                <Link href="/">
                    <button>Home</button>
                </Link>
            </div>
        </div>
    )
}

export default About