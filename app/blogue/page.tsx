/** @format */

import React from 'react'
import Bl from '@/components/blogue/bl'
import Recherche from '@/components/blogue/recherche'
import Blpop from '@/components/blogue/blpop';

export default function Blogue() {
    return (
        <main className='w-full min-h-[50svh] flex flex-col gap-8'>
            <Recherche />
            <Bl />
            <Blpop />

        </main>
    );
}
