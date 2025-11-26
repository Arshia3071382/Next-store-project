
import AddToCart from "@/component/AddToCart";
import Container from "@/component/Container";
import { IProduct } from "@/component/ProductItem";

async function ProductDet({ params }: { params: Promise<{id : string}>}) {

  const { id } =await params;

  const result = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-cache",
  }).then(data => data.json());

  // const data = await result.json() as IProduct

  console.log()

  return (

    
    <Container>

      <div className="shadow-2xl h-auto mt-4 grid grid-cols-1 md:grid-cols-12 rounded-2xl">
        
        <div className="bg-stone-200 col-span-2 p-4 flex flex-col items-center">
          <img
            className="rounded object-contain w-full h-48"
            src={result.image}
            alt={result.title}
          />
          <AddToCart id={id} />
        </div>

        <div className="col-span-6 p-4">
          <h1 className="text-xl font-bold">{result.title}</h1>
          <h3 className="text-lg text-green-700">{result.price}$</h3>
          <p className="mt-2">{result.description}</p>
        </div>

      </div>
    </Container>
  );
}

export default ProductDet;
