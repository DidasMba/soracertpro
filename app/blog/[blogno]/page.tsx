import React from 'react'
import Landing from '@/components/blog/slag/landing'
import Blogdetails from '@/components/blog/slag/details'
import RaletedBlog from '@/components/blog/slag/raleted'
const SingleBlogpage : React.FC<{ params: { blogno: string } }> = ({ params: { blogno } }) => {
  return (
    <>
      <Landing />
      <Blogdetails />
      <RaletedBlog />
    </>
  )
}

export default SingleBlogpage
