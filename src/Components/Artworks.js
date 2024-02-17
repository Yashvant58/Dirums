import React from 'react'
import Product1 from './img/Group 246.jpg';
import Product2 from './img/Group 249.jpg';
import Product3 from './img/Group 250.jpg';
import Product4 from './img/Group 251.jpg';
import Product5 from './img/Group 536.jpg';
import Product6 from './img/Group 537.jpg';

function Artworks(){
    return(
    
        <div className='grid md:grid-cols-9'>
            <div className='lg:col-span-2 relative h-full'>
                <div>
                    <div>
                        <div className='bg-global  lg:hidden flex fixed justify-center items-center bottom-20 left-4 w-12 rounded-full h-12 text-sm z-50'>
                            <p className='text-white'>
                                <i className='fas fa-filter'></i>
                            </p>
                        </div>
                        <div className='h-auto w-full lg:left-0 -left-full sticky top-40 pb-12 pt-4 lg:flex flex-col items-center overflow-hidden transition ease-in-out duration-1000 parent bg-white pl-4 hidden'>
                            <div className='w-full flex items-center justify-between border-b-2 border-black'>
                                <h3 className='text-3xl text-black font-bold'>Filters</h3>
                            </div>
                            <div className='w-full'>
                                <div className='flex flex-col items-start max-h-screen product_filter overflow-auto'>
                                <div className='pb-5 cursor-pointer w-full p-4 transition ease-in-out duration-300 parent__filter'>
                                <h4 className="text-base py-2 font-bold text-black" data-id="price__filter">Price</h4>
                                <label className='text-sm  text-black pb-1 cursor-pointer w-full block transition ease-in-out duration-300'>
                                <input type="radio" name="priceRange" value="price > 100 AND price <= 10000" className="mr-2"/>"Below 10,000"
                                </label>
                                <label className='text-sm  text-black pb-1 cursor-pointer w-full block transition ease-in-out duration-300'>
                                <input type="radio" name="priceRange" value="price > 10000 AND price <= 25000" className="mr-2"/>"10,000 - 25,000"
                                </label>
                                <label className='text-sm  text-black pb-1 cursor-pointer w-full block transition ease-in-out duration-300'>
                                <input type="radio" name="priceRange" value="price > 25000 AND price <= 50000" className="mr-2"/>"25,000 -50,000"
                                </label>
                                <label className='text-sm  text-black pb-1 cursor-pointer w-full block transition ease-in-out duration-300'>
                                <input type="radio" name="priceRange" value="price > 50000 AND price <= 100000" className="mr-2"/>"50,000 -100,000"
                                </label>
                                <label className='text-sm  text-black pb-1 cursor-pointer w-full block transition ease-in-out duration-300'>
                                <input type="radio" name="priceRange" value="price > 100000" className="mr-2"/>"Above 100,000"
                                </label>
                                </div>
                                <div className='pb-5 cursor-pointer w-full p-4 transition ease-in-out duration-300 parent__filter'>
                                <h4 className="text-base py-2 font-bold text-black" data-id="sort__filter">Sort by date</h4>
                                <label className='text-sm  text-black pb-1 cursor-pointer w-full block transition ease-in-out duration-300'>
                                <input type="radio" name="sortDate" value="new" className="mr-2"/>"Newest"
                                </label>
                                <label className='text-sm  text-black pb-1 cursor-pointer w-full block transition ease-in-out duration-300'>
                                <input type="radio" name="sortDate" value="old" className="mr-2"/>"Oldest"
                                </label>
                                </div>
                                <div className='pb-5 cursor-pointer w-full p-4 transition ease-in-out duration-300 parent__filter'>
                                <h4 className="text-base py-2 font-bold text-black" data-id="sort__filter">Sort by price</h4>
                                <label className='text-sm  text-black pb-1 cursor-pointer w-full block transition ease-in-out duration-300'>
                                <input type="radio" name="sort" value="high" className="mr-2"/>"High to low"
                                </label>
                                <label className='text-sm  text-black pb-1 cursor-pointer w-full block transition ease-in-out duration-300'>
                                <input type="radio" name="sort" value="low" className="mr-2"/>"Low to High"
                                </label>
                                </div>
                                </div>
                                <button className="border rounded-md px-5 py-1 border-black mt-5 text-xs hover:bg-global hover:text-white transition-all duration-200">Reset Filter</button>
                            </div>
                        </div>
                        <div className='h-screen lg:hidden w-full py-12 shadow-lg flex flex-col items-start px-10 overflow-hidden fixed -left-full transition ease-in-out duration-500 parent top-0 z-50 bg-white'>Remaing</div>
                    </div>
                </div>
            </div>
            <div className='md:col-span-7 mb-10'>
                <div className='px-4 md:py-24 m-h-screen grid'>
                    <div className='text-center mt-6 md:mt-0'>
                        <h1 className='md:text-4xl texxt-exl font-bold'>
                        <div>OUR EXQUISITE ART COLLECTION</div>
                        </h1>
                        <hr className='bg-global h-[2px] w-full mt-4'/>
                        <span className='md:text-base text-xs  md:w-4/5 md:mx-auto font-normal md:text-center text-justify py-4'>
                            <div>
                                <p>
                                    "Acquire original art from our online art gallery. Take a look at our vast collection of artwork created by artists from across the world."
                                </p>
                            </div>
                        </span>
                        <hr className='bg-global h-[2px] w-full mb-12'/>
                    </div>
                    <div className="mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img src={Product1} alt="Product 1" className="w-full h-auto" />
        </div>
        <div>
          <img src={Product2} alt="Product 2" className="w-full h-auto" />
        </div>
        <div>
          <img src={Product3} alt="Product 3" className="w-full h-auto" />
        </div>
        <div>
          <img src={Product4} alt="Product 4" className="w-full h-auto" />
        </div>
        <div>
          <img src={Product5} alt="Product 5" className="w-full h-auto" />
        </div>
        <div>
          <img src={Product6} alt="Product 6" className="w-full h-auto" />
        </div>
      </div>
    </div>
                </div>
                <div className='flex justify-center mt-18 md:pt-10 md:pb-10 pt-2 pb-10'></div>
                <div className=' w-full lg:px-32 px-4 text-justify'></div>
            </div>
        </div>
    )
}
export default Artworks;