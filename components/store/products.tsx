"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import {FaStar} from "react-icons/fa"

import StarRating from './starrating';

const HeroSection = () => {
  return (

    <div className='py-24'>
      <div className='container'>
        
       

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
                <div className='relative image-rounded'>
                <div className=""> {/* Dimensions fixes w-80 h-80*/}
                  <Image
                     className="imagepro object-cover w-full h-full"
                     src="/st1.JPG" 
                     alt="Pro 1"
                     width={500}
                     height={500} 
                     />
                  </div>
                    
                </div>
              
             
            </div>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
            <div className='relative image-rounded'>
            <div className="w-80 h-80"> {/* Dimensions fixes w-80 h-80*/}
                  <Image
                     className="imagepro object-cover w-full h-full"
                     src="/s3.jpg" 
                     alt="Pro 1"
                     width={500}
                     height={500} 
                     />
                  </div>
                     
                    
                </div>
                <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Skinny Fit Jeans
                    </div>
                
                  <StarRating />
              
                  <h2 className="font-bold text-xl ">$145
                  </h2>
               </div>
            </div>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
            <div className='relative image-rounded'>
            <div className="w-80 h-80"> {/* Dimensions fixes w-80 h-80*/}
                  <Image
                     className="imagepro object-cover w-full h-full"
                     src="/s4.jpg" 
                     alt="Pro 1"
                     width={500}
                     height={500} 
                     />
                  </div>
                    
                    
                </div>
                <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Skinny Fit Jeans
                    </div>
                
                  <StarRating />
              
                  <h2 className="font-bold text-xl ">$145
                  </h2>
               </div>
            </div>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
            <div className='relative image-rounded'>
            <div className="w-80 h-80"> {/* Dimensions fixes w-80 h-80*/}
                  <Image
                     className="imagepro object-cover w-full h-full"
                     src="/s7.jpg" 
                     alt="Pro 1"
                     width={500}
                     height={500} 
                     />
                  </div>
                   
                </div>
                <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Skinny Fit Jeans
                    </div>
                
                  <StarRating />
              
                  <h2 className="font-bold text-xl ">$145
                  </h2>
               </div>
            </div>
          </div>
      </div>
      

      <div className='container'>
        
       

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
               
               

            </div>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
            <div className='relative image-rounded'>
            <div className="w-80 h-80"> {/* Dimensions fixes w-80 h-80*/}
                  <Image
                     className="imagepro object-cover w-full h-full"
                     src="/s9.jpg" 
                     alt="Pro 1"
                     width={500}
                     height={500} 
                     />
                  </div>
                     
                   
                </div>
                <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Skinny Fit Jeans
                    </div>
                
                  <StarRating />
              
                  <h2 className="font-bold text-xl ">$145
                  </h2>
               </div>
            </div>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
            <div className='relative image-rounded'>
            <div className="w-80 h-80"> {/* Dimensions fixes w-80 h-80*/}
                  <Image
                     className="imagepro object-cover w-full h-full"
                     src="/s8.jpg" 
                     alt="Pro 1"
                     width={500}
                     height={500} 
                     />
                  </div>
                    
                   
                </div>
                <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Skinny Fit Jeans
                    </div>
                
                  <StarRating />
              
                  <h2 className="font-bold text-xl ">$145
                  </h2>
               </div>
            </div>
            <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
            <div className='relative image-rounded'>
            <div className="w-80 h-80"> {/* Dimensions fixes w-80 h-80*/}
                  <Image
                     className="imagepro object-cover w-full h-full"
                     src="/st1.JPG" 
                     alt="Pro 1"
                     width={500}
                     height={500} 
                     />
                  </div>
                     
                    
                </div>
                <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Skinny Fit Jeans
                    </div>
                
                  <StarRating />
              
                  <h2 className="font-bold text-xl ">$145
                  </h2>
               </div>
            </div>
          </div>
      </div>
    
      <div className='container'>
        
       

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
          <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
              

           
          </div>
          <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
          <div className='relative image-rounded'>
          <div className="w-80 h-80"> {/* Dimensions fixes w-80 h-80*/}
                  <Image
                     className="imagepro object-cover w-full h-full"
                     src="/s6.jpg" 
                     alt="Pro 1"
                     width={500}
                     height={500} 
                     />
                  </div>
                   
                  
              </div>
              <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Skinny Fit Jeans
                    </div>
                
                  <StarRating />
              
                  <h2 className="font-bold text-xl ">$145
                  </h2>
               </div>
          </div>
          <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
          <div className='relative image-rounded'>
          <div className="w-80 h-80"> {/* Dimensions fixes w-80 h-80*/}
                  <Image
                     className="imagepro object-cover w-full h-full"
                     src="/s12.jpg" 
                     alt="Pro 1"
                     width={500}
                     height={500} 
                     />
                  </div>
                   
                 
              </div>
              <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Skinny Fit Jeans
                    </div>
                
                  <StarRating />
              
                  <h2 className="font-bold text-xl ">$145
                  </h2>
               </div>
          </div>
          <div className=''> {/* Div contenant la generalite le texet est l image on peut y ajouter rounded-2xl  et shadow-lg dans className */}
          <div className='relative image-rounded'>
          <div className="w-80 h-80"> {/* Dimensions fixes w-80 h-80*/}
                  <Image
                     className="imagepro object-cover w-full h-full"
                     src="/s10.jpg" 
                     alt="Pro 1"
                     width={500}
                     height={500} 
                     />
                  </div>
                  
              </div>
              <div className="px-6 py-4">
                    <div className="texteone font-bold text-xl mb-2">Skinny Fit Jeans
                    </div>
                
                  <StarRating />
              
                  <h2 className="font-bold text-xl ">$145
                  </h2>
               </div>
          </div>
        </div>
    </div>
      
    </div>

    



   
  );
};

export default HeroSection;





