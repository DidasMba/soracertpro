/** @format */

import React from 'react'
import Recherche from '@/components/blogue/recherche'
import BlogueList from '@/components/blogue/BlogueList';

export default function Blogue() {
    return (
        <main className='w-full min-h-[50svh] flex flex-col gap-8'>
            <Recherche />
            {/* <BlogueList /> */}
        </main>
    );
}
