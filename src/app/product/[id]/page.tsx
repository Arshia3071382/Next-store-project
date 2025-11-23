


import AddToCart from "@/component/AddToCart";
import Container from "@/component/Container";
import { IProduct } from "@/component/ProductItem";

interface Props {
  id: string;
}

async function ProductDet({ id }: Props) {
  

   const result =await fetch(`https://fakestoreapi.com/products/${id}`)
   const data = await result.json() as IProduct
   

  return (
    <Container>
      <div className="shadow-2xl h-auto mt-4 grid grid-cols-1 md:grid-cols-12 rounded-2xl">
        
        <div className="bg-stone-200 col-span-2 p-4 flex flex-col items-center">
          <img
            className="rounded object-contain w-full h-48"
            src={data.image}
            alt={data.title}
          />
         <AddToCart id={id}/>
        </div>

        <div className="col-span-6">
          <h1>{data.title}</h1>
          <h3>{data.price}$</h3>
          <p>{data.description}</p>
        </div>

      </div>
    </Container>
  );
}

export default ProductDet