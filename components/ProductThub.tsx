import { Product } from "@/sanity.types"
import Link from "next/link";
import Image from "next/image";
import { imageURL } from "@/lib/imageUrl";
export const ProductThumb = ({product}:{product:Product}) => {
    const isOutOfStocke = product.stock != null && product.stock <= 0;
  return (
    <Link href={`/product/${product.slug?.current}`}
    className={`group flex flex-col bg-white rounded-l border  border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden 
        ${isOutOfStocke ? "opacity-50":""}`}
    >
        <div className="relative aspect-square w-full h-full overflow-hidden">
            {product.image &&(
                <Image className="object-contain transition-transform duration-300 group-hover:scale-105"
                src={imageURL(product.image).url()}
                alt={product.name || "Imagen del producto"}
                fill
                />
            )

            }
            {isOutOfStocke && (
                <div className="absolute  inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <span className="text-white font-bold text-lg">Stock Agotado</span>
                </div>
            )}
        </div>
        <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {product.description
                ?.map((block)=>
                    block._type === "block"
                    ? block.children?.map((child)=> child.text).join("")    
                    :""
                )
                    .join(" ")||"Descripcion no disponible"
                }
            </p>
            <p className="mt-2 text-lg font-bold text-gray-900">
                S/{product.price?.toFixed(2)}
            </p>
        </div>
    </Link>
  )
}
