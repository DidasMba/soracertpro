/** @format */

import React from 'react'
import Bl from '@/components/blogue/bl'
import Recherche from '@/components/blogue/recherche'
import Blpop from '@/components/blogue/blpop';
import BlogueList from '@/components/blogue/BlogueList';

export default function Blogue() {
    return (
        <main className='w-full min-h-[50svh] flex flex-col gap-8'>
            <Recherche />
            <BlogueList />
            <Bl />
            <Blpop />

        </main>
    );
}
