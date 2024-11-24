/** @format */

import React from 'react'
import Bl from '@/components/blogue/bl'
import Recherche from '@/components/blogue/recherche'



export default function Blogue() {
    return (
        <main className='w-full min-h-[50svh] flex flex-col gap-8'>
            <Recherche />
            <Bl />
        </main>
    );
}
