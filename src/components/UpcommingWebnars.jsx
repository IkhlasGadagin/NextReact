import Link from 'next/link'
import React from 'react'
import { Hovercard } from './Hovercard'

const UpcommingWebnars = () => {
    return (
        <div
            className='p-12 '
        >
            <div
                className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBNARS</h2>
                    <p className='mt-2 text-5xl sm:text-3xl leading-8
                                  font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-6xl xl:text-6xl'>
                                  Enhance Your Musical Journey</p>
                </div>
                <div className='mt-10'><Hovercard/></div>
                <div className='mt-10 text-center'>
                    <Link href="/courses" className="inline-block py-3 px-6 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors">
                        View All Courses
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcommingWebnars