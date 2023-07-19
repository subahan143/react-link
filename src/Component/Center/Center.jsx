import React from 'react'

const Center = () => {
  return (
    <>
    <div className="w-full  h-[100vh] flex bg-neutral-600  ">
    
    <div id="demo" class="carousel slide w-full h-[100vh] flex  " data-bs-ride="carousel">
    
    
    <ul class="carousel-indicators flex ">
    <li data-target="#demo" data-bs-slide-to="0" class="active"></li>
    <li data-target="#demo" data-bs-slide-to="1"></li>
    <li data-target="#demo" data-bs-slide-to="2"></li>
    </ul>
    
    
    <div class="carousel-inner w-full h-[100vh] flex  ">
    <div class="carousel-item active w-full h-[100vh] flex  ">
    <img className='w-full h-[100vh] flex bg-center object-cover ' src="https://images.unsplash.com/photo-1683438849896-bc17ba4ed571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Los Angeles" />
    </div>
    <div class="carousel-item active w-full h-[100vh] flex ">
    <img className='w-full h-[100vh] flex object-' src="https://images.unsplash.com/photo-1688247533295-fc41e5685004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=957&q=80" alt="Chicago" />
    </div>
    <div class="carousel-item active w-full h-[100vh] flex ">
    <img className='w-full h-[100vh] flex object-cover  ' src="https://plus.unsplash.com/premium_photo-1661963643193-8bedab8db800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=893&q=80" alt="New York" />
    </div>
    </div>
    
    
    <button class="carousel-control-prev  " data-bs-target="#demo" data-bs-slide="prev">
    <i class="fa-solid fa-chevron-left text-pink-500 w-[50px] h-[50px] rounded-full bg-teal-400 flex items-center justify-center text-3xl  "></i>
    </button>
    <button class="carousel-control-next" data-bs-target="#demo" data-bs-slide="next">
    <i class="fa-solid fa-angle-right text-pink-500 w-[50px] h-[50px] rounded-full bg-teal-400 flex items-center justify-center text-3xl "></i>
    </button>
    </div>
    
    
    
    </div>
    
    
    </>
    )
  }
  
  export default Center
  