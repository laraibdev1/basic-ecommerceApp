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
    url: "https://www.amazon.in/Nike-OFFCOURT-ADJUST-WHITE-BLACK-Sandal/dp/B0BW63L89P/ref=sr_1_2?crid=2PFXRG47KT2QN&dib=eyJ2IjoiMSJ9._TcNSieJun3cIsS20zBKVVSWhE3hNql_q-OLbVk0aXVwTzOj48k7l66tSK_sog3aBv7R-filHqg1N4rylnLe-5EhagC5tFRI7_Rl6H9zO_r2l43tNOZrXf1DMM8aunK558Z49bIh5ukahdijJqC5Kpj-IaxHO3xBRhm-GM67ssajuNK69QX4IREiFrZueETIFHUI447kAtqo6xfON4faVTcrwodx6vILFknHqauxJVRMXxK39imbOzJE7ZorExS9OFpdE09H1smHz7PDz8r85zh9efPub4JGPP4pFJpdjR8.UxoLyMwlaFJdVnrzD6TxabxDbHQFgYvYgb6E952Rb_o&dib_tag=se&keywords=mens+footwear+nike&qid=1719481152&sprefix=mens+footwear+ni%2Caps%2C270&sr=8-2",
  },
  {
    id: 2,
    imageUrl: "https://m.media-amazon.com/images/I/71xw6Po8FdL._AC_UL320_.jpg",
    title: "Shoes",
    price: "$70",
    description: "If a dog chews shoes whose shoes does he choose?",
    url: "https://www.amazon.in/Nike-Calm-Mule-LT-Smoke-GREY-FD5131-002-5-5UK/dp/B0CQP8LD8Q/ref=sr_1_9?crid=2PFXRG47KT2QN&dib=eyJ2IjoiMSJ9._TcNSieJun3cIsS20zBKVVSWhE3hNql_q-OLbVk0aXVwTzOj48k7l66tSK_sog3aBv7R-filHqg1N4rylnLe-5EhagC5tFRI7_Rl6H9zO_r2l43tNOZrXf1DMM8aunK558Z49bIh5ukahdijJqC5Kpj-IaxHO3xBRhm-GM67ssajuNK69QX4IREiFrZueETIFHUI447kAtqo6xfON4faVTcrwodx6vILFknHqauxJVRMXxK39imbOzJE7ZorExS9OFpdE09H1smHz7PDz8r85zh9efPub4JGPP4pFJpdjR8.UxoLyMwlaFJdVnrzD6TxabxDbHQFgYvYgb6E952Rb_o&dib_tag=se&keywords=mens+footwear+nike&qid=1719481152&sprefix=mens+footwear+ni%2Caps%2C270&sr=8-9",
  }
  // Add more products as needed, ensuring each has a unique id
];

function Upper() {
  const [loading, setLoading] = useState({});

  const handleBuyNowClick = (id, url) => {
    setLoading((prevLoading) => ({ ...prevLoading, [id]: true }));
    // Simulate an async operation
    setTimeout(() => {
      setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
      window.location.href = url;
    }, 2000);
  };

  return (
    <div className="flex bg-white">
      {/* Sidebar Component */}
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


      <div className="flex flex-wrap gap-4 justify-center bg-white">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`card bg-base-100 ${
              index % 2 === 0 ? 'w-96' : 'w-72'
            } shadow-xl bg-slate-100`}
          >
            <figure className="px-10 pt-10">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center bg-slate-100">
              <h2 className="card-title text-slate-700">{product.title}</h2>
              <p className="text-slate-500">{product.description}</p>
              <p className="text-slate-700 font-bold">{product.price}</p>
              <div className="card-actions">
                {loading[product.id] ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleBuyNowClick(product.id, product.url)}
                  >
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

export default Upper;
