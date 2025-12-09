import React from 'react'

const AddIAM = () => {
    const TrustPolicy = `{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "AWS": "arn:aws:iam::951485052809:role/ck-tuner-nonprod-transitive-role"
        },
        "Action": "sts:AssumeRole",
        "Condition": {
          "StringEquals": {
            "sts:ExternalId": "MU1HX0RFRkFVTFQwMzM5NTZlYS1kMDE3LTRjYmQtYjY3ZS1jMGI4NWJjY2U4Yzk="
          }
        }
      },
      {
        "Effect": "Allow",
        "Principal": {
          "Service": "s3.amazonaws.com"
        },
        "Action": "sts:AssumeRole"
      }
    ]
  }`

  return (
    <div className=''>
        <div>
          <h1 className='text-2xl font-black' >Create an IAM Role</h1>
          <p>Create an IAM Role by following these steps</p>
        </div>
        <div className='flex flex-col gap-5 bg-white border-0 rounded-md px-5 py-8 my-3'>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              1
            </div>
            <div>
              Log into AWS account & <span> Create an IAM Role.</span>
            </div>
          </div>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              2
            </div>
            <div className='w-full'>
              <div className='mb-5'>
                In theTrusted entity typesection, selectCustom trust policy.Replace the prefilled policy with the policy provided below -
              </div>
              <div className='bg-gray-200 text-blue-600 text-sm font-semibold border-0 rounded-md p-2 h-52 overflow-scroll'>
                <pre>
                  <code>{TrustPolicy}</code>
                </pre> 
              </div>
            </div>
          </div>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              3
            </div>
            <div>
              Click on Next to go to the Add permissions page. We would not be adding any permissions for now because the permission policy content will be dependent on the AWS Account ID retrieved from the IAM Role. Click on Next.
            </div>
          </div>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              4
            </div>
            <div>
              <div className=''>
                In the Role name field, enter the below-mentioned role name, and click on Create Role -
              </div>
              <div className='bg-gray-200 text-sm font-semibold border-0 rounded-md my-3 p-2 w-[400px] overflow-scroll'>
                CK-Tuner-Role-dev2
              </div>
            </div>
          </div>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              5
            </div>
            <div>
              <div>
                Go to the newly create IAM Role and copy the Role ARN -
              </div>
              <img className='my-3' src="/src/assets/A5-Dh6erahN.png" alt="" />
            </div>
          </div>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              6
            </div>
            <div>
              <div>
                Paste the copied Role ARN below -
              </div>
              <div className='flex my-3 gap-10'>
                <div className='flex flex-col'>
                  <label htmlFor="" className='text-sm text-gray-700 my-1 '>Enter the IAM Role ARN -</label>
                  <input type="text" className='p-2 w-[400px]' placeholder='Enter the IAM Role ARN' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="" className='text-sm text-gray-700 my-1 '>Enter Account ID -</label>
                  <input type="text" className='p-2 w-[400px]' placeholder='Enter 12 Digit Account ID' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="" className='text-sm text-gray-700 my-1 '>Enter Account Name -</label>
                  <input type="text" className='p-2 w-[400px]' placeholder='Enter Account Name' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AddIAM