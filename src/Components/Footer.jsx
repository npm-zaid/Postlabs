import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black  text-white px-6 relative h-screen'>
    <div className='fixed w-full h-full bottom-0'>
        <div className='h-[90vh] flex justify-center items-center '>
      <div className=' grid md:grid-cols-2 grid-col-1 md:gap-0 gap-10  w-full'>


        <div className='flex flex-col md:text-[3vw] text-[12vw]'><h1>PostLabs</h1></div>
        <div className='flex flex-col '>
           <div className='flex flex-col gap-1 mb-8 md:text-lg text-xl'> 

           <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
         </div>
           {/* Newsletter Signup */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-2">Sign Up for Our Newsletter</h4>
            <div className="flex items-center border-b border-gray-500 py-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-black text-white placeholder-gray-500 outline-none w-full"
              />
              <button type="submit" className="text-white ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
       
    
        </div>
       
      </div>
      </div>

      <div className='w-full h-[10vh]  flex flex-col md:flex-row md:justify-between items-center border-t border-zinc-200/40'>

        <p>© 2025 Post Labs, Inc. All rights reserved.</p>
        <p>Designed by HRVST.</p>
      </div>
    </div>
    </footer>
    

    
  )
}

export default Footer