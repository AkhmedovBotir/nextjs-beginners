import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Index() {
    const router = useRouter()
    const handleRouting = () => {
        router.push('/about')
    }
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

                <button onClick={handleRouting}>About</button>
                {/* <Link href="/user">
                    <button>User</button>
                </Link>  */}
            </div>
        </div>
    )
}
