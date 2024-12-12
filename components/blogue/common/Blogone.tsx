"use client";
import React from 'react';
import Image from "next/image";
import { useQuery } from '@tanstack/react-query';
import { getBlogBySlug } from '@/lib/api/blogue';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import style from "@/app/markdown-styles.module.css";
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

// Functional component with proper Props typing
const Blogone: React.FC<{ slug: string }> = ({ slug }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getBlogBySlug(slug)
  })
  return (
    <div className='mb-10'>
      {isLoading ? (
        <div className='flex justify-center min-h-[50svh] items-center'>
          <span className='loading loading-spinner loading-lg'></span>
        </div>
      ) : (
        <div className='min-h-[60svh] flex flex-col gap-6 max-w-7xl mx-auto px-4 md:px-8'>
           <div className='flex flex-col items-start'>
                        <Link
                            className='bg-customBlue px-6 py-2 flex text-white gap-2 font-medium hover:bg-blue-900 rounded items-center'
                            href={"/sora/blogue"}
                        >
                            <IoMdArrowBack size={20} />
                            Retour
                        </Link>
                    </div>
          <div className='flex flex-col gap-2'>
            <p className='font-semibold text-base'>Ecrit par:</p>
            <div className='flex items-center gap-2'>
              <div className='h-10 w-10 rounded-full'>
                <Image src={data?.data.author.avatar!} alt={data?.data.author.firstname!} width={40} height={40} className='w-full h-full object-cover rounded-full' />
              </div>
              <p className='text-gray-500 font-semibold'>{data?.data.author.firstname} {data?.data.author.lastname}</p>
            </div>
          </div>
          <div className='h-[50svh] w-full bg-no-repeat bg-cover rounded-md border border-gray-400' style={{ backgroundImage: `url(${data?.data.thumbnail})` }}>
          </div>
          <h1 className='text-2xl md:text-3xl text-customBlue font-bold'>{data?.data.title}</h1>
          <div className=''>
            {data?.data.content && (
              <ReactMarkdown
                className={style.reactMarkDown}
                remarkPlugins={[remarkGfm]}
              >
                {data.data.content}
              </ReactMarkdown>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogone;

