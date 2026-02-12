import React, { useState, useEffect } from 'react';
import { useHandMade } from './action/handmade.query';
import { useParams, useNavigate } from 'react-router-dom'; 
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, X, CheckCircle2, AlertCircle } from 'lucide-react';

const FullScreenProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  // Modal üçün state-lər
  const [showModal, setShowModal] = useState({ show: false, type: '', message: '' });
  
  const { id } = useParams();
  const navigate = useNavigate(); 
  
  const { data, isLoading, isError } = useHandMade(id);

  const baseUrl = "https://handora-handora.nfa4yl.easypanel.host/";

  useEffect(() => {
    if (isFullScreen || showModal.show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFullScreen, showModal.show]);

  useEffect(() => {
    if (data && data.image_urls && data.image_urls.length > 0) {
      setMainImage(data.image_urls[0]);
    }
  }, [data]);

  const handleAddToCart = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setShowModal({
        show: true,
        type: 'auth',
        message: 'Səbətə məhsul əlavə etmək üçün giriş etməlisiniz. Login səhifəsinə keçid edilsin?'
      });
      return;
    }

    // Məhsulun uğurla əlavə edilməsi simulyasiyası
    console.log(`${product.name_az} səbətə əlavə edildi. Miqdar: ${quantity}`);
    setShowModal({
        show: true,
        type: 'success',
        message: 'Məhsul uğurla səbətə əlavə olundu!'
    });
  };

  if (isLoading) return <div className="h-screen flex items-center justify-center font-serif italic">Yüklənir...</div>;
  if (isError || !data) return <div className="h-screen flex items-center justify-center text-red-500">Məhsul tapılmadı.</div>;

  const product = data;

  const handleNext = () => {
    const currentIndex = product.image_urls.indexOf(mainImage);
    const nextIndex = (currentIndex + 1) % product.image_urls.length;
    setMainImage(product.image_urls[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = product.image_urls.indexOf(mainImage);
    const prevIndex = (currentIndex - 1 + product.image_urls.length) % product.image_urls.length;
    setMainImage(product.image_urls[prevIndex]);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        <div className="lg:w-3/5 w-full relative bg-gray-50 flex">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col items-center gap-2">
            <button onClick={handlePrev} className="p-1 hover:bg-gray-200 rounded-full transition">
              <ChevronUp size={24} />
            </button>
            
            <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto overflow-x-hidden no-scrollbar py-2">
              {product?.image_urls?.map((img: any, idx: number) => (
                <button 
                  key={idx} 
                  onClick={() => setMainImage(img)}
                  className={`w-16 h-20 flex-shrink-0 overflow-hidden border-2 transition-all ${mainImage === img ? 'border-black scale-110 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={`${baseUrl}${img}`} className="w-full h-full object-cover" alt={`thumb-${idx}`} />
                </button>
              ))}
            </div>

            <button onClick={handleNext} className="p-1 hover:bg-gray-200 rounded-full transition">
              <ChevronDown size={24} />
            </button>
          </div>

          <div 
            className="w-full h-[60vh] lg:h-screen overflow-hidden cursor-zoom-in"
            onClick={() => setIsFullScreen(true)}
          >
            <img 
              src={`${baseUrl}${mainImage || product?.image_urls?.[0]}`}
              alt={product.name_az} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
            {product.is_new && (
              <span className="absolute top-8 right-8 bg-black text-white px-4 py-1 text-xs uppercase tracking-widest">Yeni</span>
            )}
          </div>
        </div>
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
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`w-full py-5 text-lg uppercase tracking-widest transition-colors duration-300 ${product.stock > 0 ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                {product.stock > 0 ? 'Səbətə Əlavə Et' : 'Stokda Yoxdur'}
              </button>
            </div>
          </div>

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
                <p className="text-sm font-medium text-gray-800 tracking-tight">{product.brand?.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isFullScreen && (
        <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden">
          <button 
            onClick={() => setIsFullScreen(false)}
            className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full z-[110]"
          >
            <X size={32} />
          </button>

          <button onClick={handlePrev} className="absolute left-4 md:left-10 p-4 hover:bg-gray-100 rounded-full z-[110]">
            <ChevronLeft size={48} />
          </button>

          <img 
            src={`${baseUrl}${mainImage}`} 
            className="max-w-full max-h-screen object-contain"
            alt="fullscreen-view"
          />

          <button onClick={handleNext} className="absolute right-4 md:right-10 p-4 hover:bg-gray-100 rounded-full z-[110]">
            <ChevronRight size={48} />
          </button>
        </div>
      )}

      {showModal.show && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl transform transition-all scale-100 flex flex-col items-center text-center">
            {showModal.type === 'success' ? (
              <CheckCircle2 size={60} className="text-green-500 mb-4" />
            ) : (
              <AlertCircle size={60} className="text-amber-500 mb-4" />
            )}
            
            <h2 className="text-xl font-bold mb-2">
              {showModal.type === 'success' ? 'Uğurlu!' : 'Diqqət!'}
            </h2>
            <p className="text-gray-600 mb-8">
              {showModal.message}
            </p>

            <div className="flex gap-4 w-full">
              {showModal.type === 'auth' ? (
                <>
                  <button 
                    onClick={() => setShowModal({ show: false, type: '', message: '' })}
                    className="flex-1 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition font-medium"
                  >
                    Ləğv et
                  </button>
                  <button 
                    onClick={() => navigate('/login')}
                    className="flex-1 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition font-medium"
                  >
                    Giriş et
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => setShowModal({ show: false, type: '', message: '' })}
                  className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition font-medium"
                >
                  Tamam
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-in { animation: fade-in 0.2s ease-out; }
      `}</style>
    </div>
  );
};

export default FullScreenProductPage;