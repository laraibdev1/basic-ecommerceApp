import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiShoppingBag, HiInbox, HiArrowSmRight, HiTable } from 'react-icons/hi';

function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Sidebar */}
      <div className="flex min-h-screen ">
      <div className="flex min-h-screen">
  <Sidebar aria-label="Sidebar with multi-level dropdown example" className="bg-gray-200 min-h-screen">
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/" icon={HiChartPie} className="no-underline">
          Dashboard
        </Sidebar.Item>
        <Sidebar.Collapse icon={HiShoppingBag} label="Products">
          <Sidebar.Item href="/products/upper" className="no-underline">Upper Outfits</Sidebar.Item>
          <Sidebar.Item href="/products/lower" className="no-underline">Lower Outfits</Sidebar.Item>
          <Sidebar.Item href="/products/footwear" className="no-underline">Footwear</Sidebar.Item>
          <Sidebar.Item href="/products/accessories" className="no-underline">Sigma Accessories</Sidebar.Item>
        </Sidebar.Collapse>
        <Sidebar.Item href="#" icon={HiInbox} className="no-underline">
          Cart
        </Sidebar.Item>
        <Sidebar.Item href="/login" icon={HiArrowSmRight} className="no-underline">
          Sign In
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiTable} className="no-underline">
          Sign Up
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
</div>


        {/* Main Content */}
        <div className="flex flex-col w-full">
          {/* Upper Outfits Section */}
          <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="flex flex-col justify-center items-center w-full p-8 bg-black bg-opacity-50">
              <h1 className="text-4xl font-bold text-white mb-4">Upper Outfits</h1>
              <p className="text-lg text-white">Explore our latest collection of stylish upper outfits.</p>
              <a href="/products/upper" className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 no-underline">
                Shop Now
              </a>
            </div>
          </div>

          {/* Lower Outfits Section */}
          <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="flex flex-col justify-center items-center w-full p-8 bg-black bg-opacity-50">
              <h1 className="text-4xl font-bold text-white mb-4">Lower Outfits</h1>
              <p className="text-lg text-white">Discover our range of trendy lower outfits.</p>
              <a href="/products/lower" className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 no-underline">
                Shop Now
              </a>
            </div>
          </div>

          {/* Footwear Section */}
          <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1633464129147-777bdcc97c1d?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="flex flex-col justify-center items-center w-full p-8 bg-black bg-opacity-50">
              <h1 className="text-4xl font-bold text-white mb-4">Footwear</h1>
              <p className="text-lg text-white">Step into style with our latest footwear collection.</p>
              <a href="/products/footwear" className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 no-underline">
                Shop Now
              </a>
            </div>
          </div>

          {/* Accessories Section */}
          <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="flex flex-col justify-center items-center w-full p-8 bg-black bg-opacity-50">
              <h1 className="text-4xl font-bold text-white mb-4">Accessories</h1>
              <p className="text-lg text-white">Complete your look with our exclusive accessories.</p>
              <a href="/products/accessories" className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 no-underline">
                Shop Now
              </a>
            </div>
          </div>

          {/* Last Section (Additional content if needed) */}
          <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515762909411-f9aea3cb6969?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="flex flex-col justify-center items-center w-full p-8 bg-black bg-opacity-50">
              <h1 className="text-4xl font-bold text-white mb-4">Explore More</h1>
              <p className="text-lg text-white">Check out our entire range of products for more amazing finds.</p>
              <a href="/products" className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 no-underline">
                Shop All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
