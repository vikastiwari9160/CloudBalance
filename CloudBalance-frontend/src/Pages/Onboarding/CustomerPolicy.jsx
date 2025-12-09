
const CustomerPolicy = () => {
  return (
    <div className=''>
        <div>
          <h1 className='text-2xl font-black' >Add Customer Managed Policies</h1>
          <p>Create an Inline policy for the role by following these steps</p>
        </div>
        <div className='flex flex-col gap-5 bg-white border-0 rounded-md px-5 py-8 my-3'>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              1
            </div>
            <div className='w-full'>
                <div className='mb-5'>
                    Go to the <span> CK-Tuner-Role</span>
                </div>
                <div>
                    <img src="/src/assets/CK-Tuner-Role.png" alt="" />
                </div>
            </div>
          </div>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              2
            </div>
            <div className='w-full'>
              <div className='mb-5'>
                In Permission policies, click on Add permissions &gt; Attach Policy
              </div>
              <div>
                    <img src="/src/assets/PermissionPolicies.png" alt="" />
              </div>
            </div>
          </div>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              3
            </div>
            <div className="w-full">
                <div className='mb-5'>
                    Filter by Type &gt; Customer managed then search for cktuner-CostAuditPolicy, cktuner-SecAuditPolicy, cktuner-TunerReadEssentials and select them.
                </div>
                <div>
                    <img src="/src/assets/OtherPermissions.png" alt="" />
                </div>
            </div>
          </div>
          <div className='flex gap-5 items-start'>
            <div className='bg-[#B0CDF6] px-2 py-0.5 text-sm border-0 rounded-4xl'>
              4
            </div>
            <div>
              <div className=''>
                Now, click on Add permissions
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CustomerPolicy