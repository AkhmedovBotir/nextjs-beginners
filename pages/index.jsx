import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Index() {
    return (
        <div>
            <Head>
                <title>Index</title>
            </Head>

            <div className='flex flex-col justify-center items-center h-[100vh] w-[100%]'>
                <Link href="/about">
                    <button>About</button>
                </Link>
                <br />
                <Link href="/contact">
                    <button>Contact</button>
                </Link>

                <Link href="/user">
                    <button>User</button>
                </Link>
                <Link href="/user/12">
                    <button>User id</button>
                </Link>
            </div>
        </div>
    )
}
