import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Index() {
    const user = [
        {
            id: 1,
            name: 'John Doe',
        },
        {
            id: 2,
            name: 'Jane Doe',
        },
        {
            id: 3,
            name: 'John Smith',
        },
        {
            id: 4,
            name: 'Jane Smith',
        }
    ]
    return (
        <div>
            <Head>
                <title>Index</title>
            </Head>

            <div className='flex flex-col justify-center items-center h-[100vh] w-[100%]'>
                {/* <Link href="/about">
                    <button>About</button>
                </Link>
                <br />
                <Link href="/contact">
                    <button>Contact</button>
                </Link> */}

                <Link href="/user">
                    <button>User</button>
                </Link> 
                <br />

                {
                    user.map((item, index) => (
                        <div key={index}>
                            <Link href={`/user/${item.id}`}>
                                <h1>{item.name}</h1>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
