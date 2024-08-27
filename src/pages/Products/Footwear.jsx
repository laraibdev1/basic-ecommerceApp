import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiShoppingBag, HiInbox, HiUser, HiArrowSmRight, HiTable } from 'react-icons/hi';

const products = [
  {
    id: 1,
    imageUrl: "https://m.media-amazon.com/images/I/61u-su9bWzL._AC_UL320_.jpg",
    title: "Mens Slider",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.amazon.in/Nike-OFFCOURT-ADJUST-WHITE-BLACK-Sandal/dp/B0BW63L89P",
  },
  {
    id: 2,
    imageUrl: "https://m.media-amazon.com/images/I/31+AitYinLL.jpg",
    title: "Mens Slider",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.amazon.in/Nike-DZ4475-103-JORDAN-MVP-WHITE-GLOW-BLACK-DZ4475-103-8UK/dp/B0CZDGLWJC",
  },
  {
    id: 3,
    imageUrl: "https://m.media-amazon.com/images/I/71r2cxMMfrL._SX500_.jpg",
    title: "Mens Slider",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.amazon.in/Nike-Sneaker-University-Black_9-_555088-134/dp/B08TW99KTG",
  },
  {
    id: 4,
    imageUrl: "https://m.media-amazon.com/images/I/51zi6Z1p0qL._SY500_.jpg",
    title: "Mens Slider",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.amazon.in/ALBERTO-TORRESI-Classic-Synthetic-Closure/dp/B0795MH4D5",
  },
  {
    id: 5,
    imageUrl: "https://m.media-amazon.com/images/I/81zxUb1-FAL._SX500_.jpg",
    title: "Mens Slider",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.amazon.in/crocs-Unisex-Adult-Clogs-7-206340-001/dp/B07TZMR2TP",
  },
  {
    id: 6,
    imageUrl: "https://m.media-amazon.com/images/I/61q5Df9A7kL._SY625_.jpg",
    title: "Mens Slider",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.amazon.in/Woodland-Leather-Boots-7-GB-3983021/dp/B0B9LLD2TN",
  },
  {
    id: 7,
    imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/03382ef9-d924-467c-acb5-c84d38bf2da7/air-jordan-1-mid-se-craft-shoes-7T3WKG.png",
    title: "Mens Slider",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.nike.com/in/t/air-jordan-1-mid-se-craft-shoes-7T3WKG/FQ3224-100",
  },
  {
    id: 8,
    imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245/c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8e475055-a3cf-464f-8bd5-23ff8dc0f243/air-jordan-1-low-shoes-459b4T.png",
    title: "Mens Slider",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.nike.com/in/t/air-jordan-1-low-shoes-459b4T/DC0774-001",
  },
  {
    id: 9,
    imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8e475055-a3cf-464f-8bd5-23ff8dc0f243/air-jordan-1-low-shoes-459b4T.png",
    title: "Nike Mens Offcourt Adjust Slide Sandal",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.nike.in"
  },
  {
    id: 10,
    imageUrl: "https://m.media-amazon.com/images/I/61u-su9bWzL._AC_UL320_.jpg",
    title: "Nike Mens Offcourt Adjust Slide Sandal",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.nike.in"
  },
  {
    id: 11,
    imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bab11a0e-6ccd-4b17-a3ec-db5eb94d5e8c/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
    title: "Nike Mens Offcourt Adjust Slide Sandal",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.nike.in"
  },
  {
    id: 12,
    imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0e6648ed-4722-4085-8fcb-882cc674454f/air-jordan-i-high-g-golf-shoes-qKzTBg.png",
    title: "Nike Mens Offcourt Adjust Slide Sandal",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.nike.in"
  },
  {
    id: 13,
    imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7bc1ba9e-20d2-4cd8-bd3e-7b4739c91312/jordan-1-retro-high-og-younger-shoes-KnJFC8.png",
    title: "Nike Mens Offcourt Adjust Slide Sandal",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.amazon.in/Nike-Offcourt-Adjust-Sandal/dp/B0BW63L89P/"
  },
  {
    id: 14,
    imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6f29432a-e469-47f0-ac54-28cd0e6a7909/tatum-2-pf-basketball-shoes-8fp79D.png",
    title: "Nike Mens Offcourt Adjust Slide Sandal",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.amazon.in/Nike-Offcourt-Adjust-Sandal/dp/B0BW63L89P/"
  },
  {
    id: 15,
    imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/25f80230-e6d5-4c2d-928b-008e2270fdaa/tatum-2-legacy-pf-basketball-shoes-WWbXXK.png",
    title: "Nike Mens Offcourt Adjust Slide Sandal",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.nike.in"
  },
  {
    id: 16,
    imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b7f49013-5bba-4207-8041-221bfc57ad4e/jordan-roam-slides-XsQbqX.png",
    title: "Nike Mens Offcourt Adjust Slide Sandal",
    price: "$50",
    description: "Nike mens Offcourt Adjust Slide Sandal",
    url: "https://www.nike.in"
  },
  {
    id: 17,
    imageUrl: "https://m.media-amazon.com/images/I/71xw6Po8FdL._AC_UL320_.jpg",
    title: "Shoes",
    price: "$70",
    description: "If a dog chews shoes whose shoes does he choose?",
    url: "https://www.amazon.in/Nike-Calm-Mule-LT-Smoke-GREY-FD5131-002-5-5UK/dp/B0CQP8LD8Q/"
  }
  // Add more products as needed, ensuring each has a unique id
];

function Footwear() {
  const [loading, setLoading] = useState({});

  const handleBuyNowClick = (id, url) => {
    setLoading((prevLoading) => ({ ...prevLoading, [id]: true }));
    setTimeout(() => {
      setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
      window.location.href = url;
    }, 2000);
  };

  return (
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl bg-slate-100">
            <figure className="px-10 pt-10">
              <img src={product.imageUrl} alt={product.title} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center bg-slate-100">
              <h2 className="card-title text-slate-700">{product.title}</h2>
              <p className="text-slate-500">{product.description}</p>
              <p className="text-slate-700 font-bold">{product.price}</p>
              <div className="card-actions">
                {loading[product.id] ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  <button className="btn btn-primary" onClick={() => handleBuyNowClick(product.id, product.url)}>
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footwear;