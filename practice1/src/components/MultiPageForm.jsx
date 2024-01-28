import React from 'react'
import Page1 from './Page1';
import Page2 from './Page2';
import FinalPage from './FinalPage';
import { useState } from 'react';

function MultiPageForm() {
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
    });
    const [page,setPage]=useState(1);
    const handleOnchange=(a,value)=>{
        setFormData((prev)=>({...prev,[a]:value}));
    }
    const handleNext=()=>{
        setPage((prev)=>prev+1);
    }
    const handlePrev=()=>{
        setPage((prev)=>prev-1)
    }
  return (
    <div>
        <h1>MultiPageForm</h1>
        {page==1 && (<div>
            <Page1 
                formData={formData} 
                handleOnchange={handleOnchange} 
                handleNext={handleNext}
            />
        </div>)}
        {page==2 && (
            <div>
                <Page2 
                    formData={formData} 
                    handleOnchange={handleOnchange} 
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            </div>
        )}
        {page==3 && (
            <div>
                <FinalPage 
                    formData={formData}
                    handlePrev={handlePrev}
                />
            </div>
        )}
    </div>
  )
}

export default MultiPageForm