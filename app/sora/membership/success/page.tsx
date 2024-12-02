/** @format */

import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";

export default function page() {
    return (
        <main className='min-h-[80svh] flex items-center justify-center'>
            <div className='flex flex-col gap-3 items-center border p-6 rounded-xl'>
                <CiMail size={60} />
                <h1 className='text-base md:text-lg font-semibold'>
                    Votre compte membre a été créé. Veuillez vérifier votre
                    boîte e-mail.
                </h1>
                <Link
                    className='px-6 py-1 text-sm font-medium md:py-2 bg-customBlue duration-300 text-white rounded-full hover:bg-customHoverBlue hover:text-customBlue'
                    href={"/"}
                >
                    Entrer a la page d'accueil
                </Link>
            </div>
        </main>
    );
}
