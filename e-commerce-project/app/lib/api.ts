export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  image?: string;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://frontendcodingtest-production.up.railway.app/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    const placeholderImages = [
      "/images/mm1.png",
      "/images/mm2.png",
      "/images/mm3.png",
      "/images/mm4.png",
      "/images/mm4.png",
    ];

    const products = data.products.map((product: Product, index: number) => ({
      ...product,
      image: placeholderImages[index % placeholderImages.length],
    }));

    return products;
  } catch (error) {
    console.error("getProducts error:", error);
    return [];
  }
}
