"use client";
import Image from 'next/image';
import { useState } from 'react';
import './css.css'

const JoinUsSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        dependents: [''],
      });
    
      const handleInputChange = (field:any, value:any) => {
        setFormData({
          ...formData,
          [field]: value,
        });
      };
      
    
      const validateForm = () => {
        let isValid = true;
    
        if (formData.fullName.trim() === '') {
        
          isValid = false;
        }
    
        if (formData.email.trim() === '') {
        
          isValid = false;
        }
    
        if (formData.phone.trim() === '') {
      
          isValid = false;
        }
    
    
        return isValid;
      };
    
      const handleSubmit = (e:any) => {
        e.preventDefault();
    
        if (validateForm()) {
          console.log('Form Data:', formData);
       
        } else {
          console.log('Form has validation errors');
        }
      };

  return (
    <section className="container mx-auto  max-w-7xl px-4 py-12 flex flex-stretch flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 p-4 flex-stretch">
        <Image
          src="/82b00963-9032-4a80-83c4-dca5e4a1efa2_1720460460690293397.png"
          alt="Join Us"
          width={600}
          height={400}
          className="rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">COME JOIN US</h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>
      <div className="w-full md:w-1/2 div-section-QZF">
      <div className="">
                <div className="header-v1o">
                  <p className="lets-get-you-started-4Nu">LET'S GET YOU STARTED</p>
                  <p className="create-an-account-CED text-2xl" style={{textDecoration:'uppercase'}}>Register</p>
                </div>
                <form className="group-5-vg1" onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type="text" id="full-name" className=" appearance-none border-none rounded w-full py-2 bg-[#fafafa] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={{border:'none',borderBottom:'solid black',}} placeholder="Leonard John" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" className=" appearance-none border rounded w-full block px-4 py-2 bg-[#fafafa] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  style={{border:'none',borderBottom:'solid black'}} placeholder="admin@abc.com" />
            </div>
       
   

                  
                  <button className="btn-pry-template-1-75b" type="submit">
                    Register
                  </button>
                 
                </form>
              </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
