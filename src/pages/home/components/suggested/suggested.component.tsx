import React, { useState } from "react";
import { useSuggested } from "./action/suggested.query";
import { usesuggestedStyle } from "./suggested.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Heart } from "lucide-react"; 
import { useNavigate } from "react-router-dom";

const SuggestedComponent = () => {
  const classes = usesuggestedStyle();
  const { data } = useSuggested();
  const navigate=useNavigate()
  console.log("img",data)

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleFavoriteClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();

    console.log("Seçilən Məhsul ID:", id);

    setSelectedIds((prev) =>
      prev.includes(id) 
        ? prev.filter((favId) => favId !== id)
        : [...prev, id] 
    );
  };

  const productClick=(e:number)=>{
      navigate(`/products/${e}`)
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-[50px] font-bold text-gray-900 mb-10">
          Təklif olunan məhsullar
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={800}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {data?.map((product: any) => {
            const isFavorite = selectedIds.includes(product.id);

            return (
              <SwiperSlide key={product.id}>
                <div onClick={()=>productClick(product.id)} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-md bg-gray-200">
                    <img
                      src={`https://handora-handora.nfa4yl.easypanel.host/${product.image_urls[0]}`}
                      alt={product.name_az}
                      className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                    />
                    <button
                      onClick={(e) => handleFavoriteClick(e, product.id)}
                      className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform active:scale-90"
                    >
                      <Heart
                        size={20}
                        className={`transition-colors ${
                          isFavorite 
                            ? "fill-red-600 text-red-600" 
                            : "text-gray-400 hover:text-red-600"
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
                      <h3 className="text-sm text-gray-900 font-medium text-[16px]">
                        {product.name_az}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.brand?.name}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      {product.price && product.discount_price > 0 ? (
                        <>
                          <span className="text-xs text-gray-400 line-through decoration-gray-500">
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

export default SuggestedComponent;