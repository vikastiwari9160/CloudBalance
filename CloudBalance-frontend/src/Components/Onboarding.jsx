import React, { useState } from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIAM from '../Pages/Onboarding/AddIAM';
import CustomerPolicy from '../Pages/Onboarding/CustomerPolicy';
import CreateCUR from '../Pages/Onboarding/CreateCUR';

const Onboarding = () => {
  
  const steps = ["Create an IAM Role", "Add Customer Managed Policies", "Create CUR"]

  const [curr,setCurr] = useState(0);

  const handleNext =()=>{
    setCurr(curr+1);
  }

  return (
    <div className='my-2'>
      <div className='flex gap-5 bg-white px-2 py-5' >
        {steps.map((item, index) => {
          return (
            <div className='flex items-center gap-2'>
              <div><CheckCircleIcon sx={{ width: 20 }} /> </div>
              <div className='text-sm'>{ String.fromCharCode(65+index)+". "+ item}</div>
              {steps.length - 1 > index ? <div className='font-semibold'>&gt;</div> : ""}
            </div>
          )
        })}
      </div>
      <div className='m-10'>
        {curr===0 && <AddIAM/>}
        {curr===1 && <CustomerPolicy/>}
        {curr===2 && <CreateCUR/>}
        <div className='flex justify-between my-4'>
          <div>
            <button className='px-5 py-2 mr-3 bg-white border border-blue-600 rounded-sm text-blue-600 text-xs font-semibold'>Cancel</button>
          </div>
          <div>
            <button className='px-5 py-2 bg-white border border-blue-600 rounded-sm text-blue-600 text-xs font-semibold'>Back {curr-1>=0?`- ${steps[curr-1]}`:``}</button>
            <button className='px-5 py-2 ml-3 bg-white border border-blue-600 rounded-sm text-blue-600 text-xs font-semibold' onClick={handleNext}>{curr+1>=steps.length?`Submit`:`Next - ${steps[curr+1]}`}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding