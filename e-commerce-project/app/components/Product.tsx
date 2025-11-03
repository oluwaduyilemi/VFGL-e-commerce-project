import Image from "next/image";
import { getProducts, Product } from "../lib/api";

export default async function RelatedProducts() {
  const products: Product[] = await getProducts();

  return (
    <section className="container m-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] text-[#141414] font-semibold">Related Products</h2>
        <a href="#" className="text-[13px] font-medium text-[#525252] underline">
          View All
        </a>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="cursor-pointer group transition-all duration-200">
              <div className="bg-[#F2F2F2] rounded-[5px] overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-200"
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
              <div className="mt-3 space-y-1">
                <p className="font-semibold text-gray-800">{product.name}</p>
                <p className="font-medium text-[#141414]">${product.price}</p>

                <div className="flex items-center space-x-2 text-[14px] text-gray-600">
                  <span className="text-[#FF8A00] font-extrabold text-[20px]">★</span>
                  <span>4.8</span>
                  <span>•</span>
                  <span>1,238 Sold</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
