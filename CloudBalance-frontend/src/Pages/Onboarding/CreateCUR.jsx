import React from 'react'

const CreateCUR = () => {
  return (
    <div className=''>
        <div>
          <h1 className='text-2xl font-black' >Create Cost & Usage Report</h1>
          <p>Create a Cost & Usage Report by following these steps</p>
        </div>
        <div className='flex flex-col gap-5 bg-white border-0 rounded-md px-5 py-8 my-3'>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              1
            </div>
            <div className='w-full'>
                <div className='mb-5'>
                    Go to <span>Cost and Usage Reports</span> in the Billing Dashboard and click on <b>Create report</b>.
                </div>
            </div>
          </div>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              2
            </div>
            <div className='w-full'>
                <div className='mb-5'>
                    Name the report as shown below and select the <b> Include resource IDs </b> checkbox -
                </div>
                <div className='bg-gray-200 text-sm font-semibold border-0 rounded-md my-3 p-2 w-[400px] overflow-scroll'>
                ck-tuner-275595855473-hourly-cur
                </div>
                <div className='my-5'>
                    <div className='text-xs'>
                        Ensure that the following configuration is checked
                    </div>
                    <div className='cursor-pointer mx-10 my-2 text-sm'> <input type="checkbox" disabled checked/> <b>Include resource IDs</b> </div>
                </div>
                <div className='text-sm'> Click on <b>Next</b></div>
                <div><img src="/src/assets/SpecifyReport.png" alt="" /></div>
            </div>
          </div>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              3
            </div>
            <div className="w-full">
                <div className='mb-5'>
                    In Configure S3 Bucket, provide the name of the S3 bucket that was created -
                </div>
                <div className='my-5'>
                    <div className='text-xs'>
                        Ensure that the following configuration is checked
                    </div>
                    <div className='cursor-pointer mx-10 my-2 text-sm'> <input type="checkbox" disabled checked/> <b>The following default policy will be applied to your bucket</b> </div>
                </div>
                <div>
                    <img src="/src/assets/ConfigS3.png" alt="" />
                </div>
            </div>
          </div>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              4
            </div>
            <div>
              <div className=''>
                <div>
                    In the Delivery options section, enter the below-mentioned Report path prefix -
                </div>
                <div className='my-3'>
                    <p className='text-xs'>Report path prefix:</p>
                    <div className='bg-gray-200 text-sm font-semibold border-0 rounded-md p-2 w-[400px] overflow-scroll'>
                        ck-tuner-275595855473-hourly-cur
                    </div>
                    <div>
                        <div className='text-sm my-3'>Additionally, ensure that the following checks are in place</div>
                        <div className='my-3'>
                            <div className='text-sm'>Time granularity:</div>
                            <div><input type="radio" checked disabled/><p className='font-black inline-block mx-2 text-sm'>Hourly</p></div>
                        </div>
                    </div>
                    <div className='my-3'>
                        <div className='text-xs'>
                            Please make sure these checks are Enabled in Enable report data integration for:
                        </div>
                        <div className='cursor-pointer mx-10 my-2 text-sm'> <input type="checkbox" disabled checked/> <b>Amazon Athena</b> </div>
                    </div>
                    <div>
                        <img src="/src/assets/ReportDelivery.png" alt="" />
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              5
            </div>
            <div>
              <div>
                 Click on Next. Now, review the configuration of the Cost and Usage Report. Once satisfied, click on Create Report.
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreateCUR