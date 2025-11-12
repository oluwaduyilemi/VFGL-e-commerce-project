"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, Share2, Star, ChevronDown } from "lucide-react";


interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

const productImages: ProductImage[] = [
  { id: 1, src: "/images/hero.png", alt: "Front view" },
  { id: 2, src: "/images/rtwo.png", alt: "Back view" },
  { id: 3, src: "/images/tthree.png", alt: "Side view" },
  { id: 4, src: "/images/tshirt.png", alt: "Close-up view" },
  { id: 5, src: "/images/rfour.png", alt: "Close-up view" },



];

const HeroSection = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedColor, setSelectedColor] = useState("brown");
  const [selectedSize, setSelectedSize] = useState("8");

  const colors = [
    { name: "Royal Brown", value: "brown", color: "#7B5E3B" },
    { name: "Gray", value: "gray", color: "#E5E5E5" },
    { name: "Blue", value: "blue", color: "#5B83A6" },
    { name: "Black", value: "black", color: "#111827" },
  ];

  const sizes = ["6", "8", "10", "14", "18", "20"];

  return (
    <section className="container m-auto px-4 py-10 grid md:grid-cols-2 gap-34 border-b border-dashed">
      <div className="flex flex-col">
        <div className="mb-5 flex sm:w-[600px]">
          <div className="flex items-center gap-2">   
          <h3 className="text-[#8F8F8F] font-medium text-[12px]">Homepage </h3>
          <ChevronDown className="rotate-[-90deg] text-[#8F8F8F] font-medium mr-1" size={14} />
        </div>
          <div className="flex items-center gap-2">   
          <h3 className="text-[#8F8F8F] font-medium text-[12px]">Women </h3>
          <ChevronDown className="rotate-[-90deg] text-[#8F8F8F] font-medium mr-1" size={14} />
        </div>
          <div className="flex items-center gap-2">   
          <h3 className="text-[#8F8F8F] font-medium text-[12px]">Women Shirt & Tops </h3>
          <ChevronDown className="rotate-[-90deg] text-[#8F8F8F] font-medium mr-1" size={14} />
        </div>
         <div>   
          <h3 className="text-forground font-medium text-[12px]">Long Sleeve Overshirt, Khaki, 6 </h3>
        </div>
        </div>
        <div className="relative">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={300}
            height={280}
            className="rounded-lg  object-cover bg-[#F2F2F2]"
          />
          <div className="absolute top-4 left-82 flex flex-col gap-3">
            <button className="bg-[#F2F2F2] p-2 rounded-sm hover:bg-gray-100">
              <Share2 className="text-[#141414]" size={14} />
            </button>
            <button className="bg-[#F2F2F2]  p-2 rounded-sm text- hover:bg-gray-100">
              <Heart className="text-[#141414]" size={14} />
            </button>
          </div>
        </div>

        <div className="hidden sm:absolute sm:bottom-10 sm:left-[430px] sm:flex sm:flex-col sm:gap-3">
           <button className="bg-[#F2F2F2] p-2 rounded-sm hover:bg-gray-100">
            <ChevronDown className="rotate-[90deg] text-[#141414] font-medium mr-1" size={14} />
          </button>
          <button className="bg-[#F2F2F2] p-2 rounded-sm hover:bg-gray-100">
            <ChevronDown className="rotate-[-90deg] text-[#141414] font-medium mr-1" size={14} />
          </button>
        </div>

        <div className="flex mt-4 gap-3 overflow-x-auto">
          {productImages.map((img) => (
            <button
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className={`relative rounded-md overflow-hidden border-2 ${
                selectedImage.id === img.id
                  ? "border-gray-300 bg-[#F2F2F2]"
                  : "border-transparent bg-[#F2F2F2]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={46}
                height={60}
                className="object-cover rounded-md"
              />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT: Product Info */}
      <div className="flex flex-col justify-start mt-8 ">
        <p className="text-[#8F8F8F] text-[13px] mb-1">John Lewis ANYDAY</p>
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
          Long Sleeve Overshirt, Khaki, 6
        </h1>

       <div className="gapp flex items-center justify-between mb-4 w-[410px] border-b border-[#A3A3A3] border-dashed">
         <div className="flex items-center gap-4 mb-3">
          <span className="text-[#8F8F8F]  line-through text-sm">£40.00</span>
          <span className="text-2xl font-bold text-darkprimary">£28.00</span>
        </div>

        <div className="flex items-center gap-3 mb-6 text-sm ">
          <span className="text-[#666666] text-[16px]">1,238 Sold</span>
          <span className="flex items-center ">
            <Star className="text-yellow-500" fill="currentColor" size={16} /> <span className="ml-1">4.5</span>
          </span>
        </div>
       </div>
     

        <div className="mb-4">
          <h3 className="font-bold text-[#292929]">Description:</h3>
          <p className="text-[#666666] text-[13px] w-[400px] mt-1">
            Boba etiam ut bulla tea est potus dilectus singulari compositione
            saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba
            refert ad pilas masticas tapiocas in fundo potus inventas. <span className="text-gray-900 font-medium text-sm mt-1">See More...</span>
          </p>
        </div>

        {/* Color */}
        <div className="mb-4">
          <h4 className="text-[#666666] font-medium mb-2">Color: {colors.find(c => c.value === selectedColor)?.name}</h4>
          <div className="flex gap-3">
            {colors.map((c) => (
              <button
                key={c.value}
                onClick={() => setSelectedColor(c.value)}
                style={{ backgroundColor: c.color}}
                className={`w-14 h-7 rounded-md border ${
                  selectedColor === c.value ? "border-black" : "border-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <div className="mb-6">
        <div className="flex items-center justify-between w-[400px]">
            <h4 className="text-[#666666] font-medium mb-4 ">Size: {selectedSize}</h4>
          <h4 className="underline text-[14px] text-[#666666] font-medium mb-4">View Size Chart</h4>
        </div>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-14 h-7 rounded-md border text-sm font-medium ${
                  selectedSize === size
                    ? "border-black bg-gray-300 text-[#141414] "
                    : "border-gray-300 text-[#141414]  hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="w-[390px] flex flex-col sm:flex-row gap-4 mb-3 mt-5">
          <button className="bg-[#141414] text-white ext-[14px] py-1 px-16 rounded-[5px] font-semibold hover:bg-gray-900">
            Add To Cart
          </button>
          <button className="border border-[#B8B8B8] text-[14px] py-1 px-8 text-[#333333] rounded-[5px] font-semibold hover:bg-gray-100">
            Checkout Now
          </button>
        </div>

        <p className="text-gray-500 text-[13px] underline cursor-pointer">
          Delivery T&C
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
