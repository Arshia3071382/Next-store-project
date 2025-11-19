import Container from "@/component/Container";
import ProductItem from "@/component/ProductItem";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/component/ProductItem";

export default async function Home() {
  const result = await fetch("https://fakestoreapi.com/products")
  const products = await result.json() as IProduct[]

  console.log(products)
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6'>
          {products.map((item) => (
            <Link 
              key={item.id} 
              href={`/product/${item.id}`}
              className="block transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
        
     
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">هیچ محصولی یافت نشد</p>
          </div>
        )}
      </Container>
    </div>
  );
}