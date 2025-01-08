import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { notFound } from "next/navigation";
import Image from "next/image";
import { imageURL } from "@/lib/imageUrl";
import { PortableText } from "next-sanity";
const ProductPage =async ({params}:{params:Promise<{slug:string}>}) => {
    const {slug} = await params;
    const product = await getProductBySlug(slug);
    if (!product) {
        return notFound();
    }
    const isOutOfStocke = product.stock != null && product.stock <=0;
    return(
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStocke ? "opacity-50":""}`}>
                    {product.image &&(
                        <Image
                        src={imageURL(product.image).url()}
                        alt={product.name ?? "Product Image"}
                        fill
                        className="object-contain transition-transform duration-300 hover:scale-105"
                        />
                    )
                    }
                    </div>
                    <div className="flex flex-col justify-between">
                    <div>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <div className="text-xl font-semibold mb-4">
                            s/.{product.price?.toFixed(2)}
                        </div>
                    <div className="prose max-h-none mb-6">
                        {Array.isArray(product.description)&&(
                            <PortableText value={product.description}/>
                        )}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage