import React from 'react'

const Add = () => {
    return (
        <div>
            <form>
                <div className='w-full'>
                    <h5 className='h5'>Product Name</h5>
                    <input type="text" placeholder='Write here...' className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg' />
                </div>
                <div className='w-full'>
                    <h5 className='h5'>Product Description</h5>
                    <textarea rows={5} placeholder='Write here...' className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg' />
                </div>
                {/** CATEGORIES */}
            </form>
        </div>
    )
}

export default Add