import React from "react";

const Harita = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-indigo-900 mb-6">Harita</h1>
      {/* Harita resmini sığdırma */}
      <div className="flex justify-center overflow-hidden">
        <img 
          src="/map.jpg" // public klasöründeki harita dosyasına erişim
          alt="Kurtlar Vadisi Haritası"
          className="w-full h-screen object-contain" // Resmin boyutunu sınırlıyoruz
        />
      </div>
    </div>
  );
};

export default Harita;
