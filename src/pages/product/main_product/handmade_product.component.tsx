// import React, { useState, useEffect } from 'react';
// import { useHandMade } from './action/handmade.query';
// import { useParams } from 'react-router-dom';

// const FullScreenProductPage = () => {

//   const [quantity, setQuantity] = useState(1);
//   const [mainImage, setMainImage] = useState('');
//   const {id}=useParams()
//  const { data, isLoading, isError } = useHandMade(id);
//   useEffect(() => {
//     if (data && data[0]?.image_urls?.length >= 0) {
//       setMainImage(data[1]?.image_urls[0]);
//     }
//   }, [data]);

//   if (isLoading) return <div className="h-screen flex items-center justify-center font-serif italic">Yüklənir...</div>;
//   if (isError || !data || data.length === 0) return <div className="h-screen flex items-center justify-center text-red-500">Məhsul tapılmadı.</div>;

//   const product = data[1];

//   return (
//     <div className="min-h-screen bg-white text-gray-900">
//       <div className="flex flex-col lg:flex-row min-h-screen">
        
//         <div className="lg:w-3/5 w-full relative bg-gray-50 flex">
//           <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-4">
//             {product?.image_urls?.map((img :any, idx:number) => (
//               <button 
//                 key={idx} 
//                 onClick={() => setMainImage(img)}
//                 className={`w-16 h-20 overflow-hidden border-2 transition-all ${mainImage === img ? 'border-black scale-110 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}`}
//               >
//                 <img src={`https://handora-handora.nfa4yl.easypanel.host/${img}`} className="w-full h-full object-cover" alt={`thumb-${idx}`} />
//               </button>
//             ))}
//           </div>

//           <div className="w-full h-[60vh] lg:h-screen overflow-hidden">
//             <img 
//               // src={mainImage || product.image_urls[0]} 
//               src={`https://handora-handora.nfa4yl.easypanel.host/${mainImage || product?.image_urls[0]}`}
//               alt={product.name_az} 
//               className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
//             />
//             {product.is_new && (
//               <span className="absolute top-8 right-8 bg-black text-white px-4 py-1 text-xs uppercase tracking-widest">Yeni</span>
//             )}
//           </div>
//         </div>

//         <div className="lg:w-2/5 w-full p-8 lg:p-16 flex flex-col justify-between bg-white">
          
//           <div>
//             <div className="flex justify-between items-start mb-10">
//               <h1 className="text-4xl md:text-5xl font-serif font-light tracking-wide uppercase max-w-[70%]">
//                 {product.name_az}
//               </h1>
//               <div className="text-right">
//                 {product.is_sale && product.discount_price > 0 ? (
//                   <>
//                     <span className="block text-gray-400 line-through text-lg">{product.price} AZN</span>
//                     <span className="block text-3xl font-bold text-rose-600">{product.discount_price} AZN</span>
//                   </>
//                 ) : (
//                   <span className="text-3xl font-bold">{product.price} AZN</span>
//                 )}
//               </div>
//             </div>

//             <div className="mb-12">
//               <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-bold">Brend / Təsvir</h3>
//               <p className="text-lg text-gray-600 leading-relaxed font-light italic">
//                 {product.brand?.description || "Bu məhsul xüsusi əl işi sənətkarlıq nümunəsidir."}
//               </p>
//             </div>

//             <div className="flex flex-col gap-6">
//               <div className="flex items-center justify-between border-b border-gray-100 pb-6">
//                 <span className="text-sm uppercase tracking-widest font-bold">Miqdar Seçin</span>
//                 <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
//                   <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)} className="px-3 hover:text-rose-600 transition">-</button>
//                   <span className="px-6 font-medium text-xl">{quantity}</span>
//                   <button 
//                     onClick={() => setQuantity(q => q < product.stock ? q + 1 : q)} 
//                     className={`px-3 hover:text-rose-600 transition ${quantity >= product.stock ? 'opacity-30 cursor-not-allowed' : ''}`}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               <button 
//                 disabled={product.stock === 0}
//                 className={`w-full py-5 text-lg uppercase tracking-widest transition-colors duration-300 ${product.stock > 0 ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
//               >
//                 {product.stock > 0 ? 'Səbətə Əlavə Et' : 'Stokda Yoxdur'}
//               </button>
//               {product.stock > 0 && product.stock < 5 && (
//                 <p className="text-xs text-rose-500 italic text-center">Tələsin! Stokda son {product.stock} ədəd qalıb.</p>
//               )}
//             </div>
//           </div>

//           <div className="mt-12 pt-8 border-t border-gray-50 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               {product.brand?.logo_url ? (
//                 <img src={product.brand.logo_url} alt="brand-logo" className="w-10 h-10 rounded-full object-cover border" />
//               ) : (
//                 <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 uppercase">
//                   {product.brand?.name[0]}
//                 </div>
//               )}
//               <div>
//                 <p className="text-xs text-gray-400 uppercase tracking-tighter">Hazırlayan</p>
//                 <p className="text-sm font-medium text-gray-800 tracking-tight">
//                   {product.brand?.name}
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-2">
//                {product.is_new && <span className="text-[10px] uppercase border border-gray-200 px-2 py-1 rounded">Yeni Kolleksiya</span>}
//                <span className="text-[10px] uppercase border border-gray-200 px-2 py-1 rounded">Handmade</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default FullScreenProductPage;

import React, { useState, useEffect } from 'react';
import { useHandMade } from './action/handmade.query';
import { useParams } from 'react-router-dom';

const FullScreenProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');
  const { id } = useParams();
  
  // Adlandırmaya əl dəymirik: data, isLoading, isError
  const { data, isLoading, isError } = useHandMade(id);

  useEffect(() => {
    // API-dan gələn data birbaşa obyektdir, ona görə data.image_urls yoxlayırıq
    if (data && data.image_urls && data.image_urls.length > 0) {
      setMainImage(data.image_urls[0]);
    }
  }, [data]);

  if (isLoading) return <div className="h-screen flex items-center justify-center font-serif italic">Yüklənir...</div>;
  
  // Burada data.length === 0 yoxlamasını sildim, çünki obyektin length-i olmur
  if (isError || !data) return <div className="h-screen flex items-center justify-center text-red-500">Məhsul tapılmadı.</div>;

  // data artıq məhsulun özüdür (product = data)
  const product = data;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Sol tərəf: Şəkillər */}
        <div className="lg:w-3/5 w-full relative bg-gray-50 flex">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-4">
            {product?.image_urls?.map((img: any, idx: number) => (
              <button 
                key={idx} 
                onClick={() => setMainImage(img)}
                className={`w-16 h-20 overflow-hidden border-2 transition-all ${mainImage === img ? 'border-black scale-110 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                <img src={`https://handora-handora.nfa4yl.easypanel.host/${img}`} className="w-full h-full object-cover" alt={`thumb-${idx}`} />
              </button>
            ))}
          </div>

          <div className="w-full h-[60vh] lg:h-screen overflow-hidden">
            <img 
              src={`https://handora-handora.nfa4yl.easypanel.host/${mainImage || product?.image_urls?.[0]}`}
              alt={product.name_az} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
            {product.is_new && (
              <span className="absolute top-8 right-8 bg-black text-white px-4 py-1 text-xs uppercase tracking-widest">Yeni</span>
            )}
          </div>
        </div>

        {/* Sağ tərəf: Detallar */}
        <div className="lg:w-2/5 w-full p-8 lg:p-16 flex flex-col justify-between bg-white">
          
          <div>
            <div className="flex justify-between items-start mb-10">
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-wide uppercase max-w-[70%]">
                {product.name_az}
              </h1>
              <div className="text-right">
                {product.is_sale && product.discount_price > 0 ? (
                  <>
                    <span className="block text-gray-400 line-through text-lg">{product.price} AZN</span>
                    <span className="block text-3xl font-bold text-rose-600">{product.discount_price} AZN</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold">{product.price} AZN</span>
                )}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-bold">Brend / Təsvir</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light italic">
                {product.brand?.description || "Bu məhsul xüsusi əl işi sənətkarlıq nümunəsidir."}
              </p>
              <p className="mt-4 text-gray-500">{product.description_az}</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                <span className="text-sm uppercase tracking-widest font-bold">Miqdar Seçin</span>
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                  <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)} className="px-3 hover:text-rose-600 transition">-</button>
                  <span className="px-6 font-medium text-xl">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q < product.stock ? q + 1 : q)} 
                    className={`px-3 hover:text-rose-600 transition ${quantity >= product.stock ? 'opacity-30 cursor-not-allowed' : ''}`}
                  >
                    +
                  </button>
                </div>
              </div>

              <button 
                disabled={product.stock === 0}
                className={`w-full py-5 text-lg uppercase tracking-widest transition-colors duration-300 ${product.stock > 0 ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                {product.stock > 0 ? 'Səbətə Əlavə Et' : 'Stokda Yoxdur'}
              </button>
              {product.stock > 0 && product.stock < 5 && (
                <p className="text-xs text-rose-500 italic text-center">Tələsin! Stokda son {product.stock} ədəd qalıb.</p>
              )}
            </div>
          </div>

          {/* Brend Məlumatı */}
          <div className="mt-12 pt-8 border-t border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {product.brand?.logo_url ? (
                <img src={product.brand.logo_url} alt="brand-logo" className="w-10 h-10 rounded-full object-cover border" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 uppercase">
                  {product.brand?.name ? product.brand.name[0] : 'B'}
                </div>
              )}
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-tighter">Hazırlayan</p>
                <p className="text-sm font-medium text-gray-800 tracking-tight">
                  {product.brand?.name}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
               {product.is_new && <span className="text-[10px] uppercase border border-gray-200 px-2 py-1 rounded">Yeni Kolleksiya</span>}
               <span className="text-[10px] uppercase border border-gray-200 px-2 py-1 rounded">Handmade</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FullScreenProductPage;
// 