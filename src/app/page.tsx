"use client";
import { useState, useEffect } from "react";
import Container from "@/component/Container";
import ProductItem from "@/component/ProductItem";
import Link from "next/link";
import { IProduct } from "@/component/ProductItem";
import SearchBox from "@/component/SearchBox";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProduccts = async () => {
      const result = await fetch("https://fakestoreapi.com/products");
      const data = (await result.json()) as IProduct[];
      setProducts(data)
      setFilteredProducts(data)
    };
    fetchProduccts()
  }, []);

  const handleSearch = (searchText : string) => {
    if(searchText === ""){
      setFilteredProducts(products)
    }else{
      const filtered = products.filter(item =>
        item.title.toUpperCase().includes(searchText.toUpperCase())
      )
      setFilteredProducts(filtered)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <SearchBox onSearch={handleSearch} />

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
          {filteredProducts.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="block transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              <ProductItem {...item} />
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">هیچ محصولی یافت نشد</p>
          </div>
        )}
      </Container>
    </div>
  );
}


