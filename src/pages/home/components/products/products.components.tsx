import  { useState } from "react";
import { useSuggested } from "../suggested/action/suggested.query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Heart } from "lucide-react"; 

const ProductsComponent = () => {
  const { data } = useSuggested();

  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    console.log("Məhsul ID:", id);
    setWishlist((prev) =>
      prev.includes(id) 
        ? prev.filter((favId) => favId !== id) 
        : [...prev, id]
    );
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-[40px] md:text-[50px] font-bold text-gray-900 mb-10">
           Məhsullar
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={800}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {data?.map((product: any) => {
            const isFavorite = wishlist.includes(product.id);

            return (
              <SwiperSlide key={product.id}>
                <div className="group relative border border-transparent hover:border-gray-100 p-2 rounded-lg transition-all">
                  <div className="relative h-80 w-full overflow-hidden rounded-md bg-gray-200">
                    <img
                      src={product.product_image}
                      alt={product.name_az}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-3 right-3 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
                    >
                      <Heart
                        size={20}
                        className={`transition-colors duration-300 ${
                          isFavorite 
                            ? "fill-red-500 text-red-500" 
                            : "text-gray-600 hover:text-red-500"
                        }`}
                      />
                    </button>
                    {product.is_sale && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                        ENDİRİM
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-gray-900 font-medium text-[16px] line-clamp-1">
                        {product.name_az}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.brand?.name}
                      </p>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                      {product.discount_price > 0 ? (
                        <>
                          <span className="text-xs text-gray-400 line-through">
                            {product.price} ₼
                          </span>
                          <span className="text-sm font-bold text-red-600">
                            {product.discount_price} ₼
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-bold text-gray-900">
                          {product.price} ₼
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsComponent;