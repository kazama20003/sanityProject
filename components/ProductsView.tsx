import { Category, Product } from "@/sanity.types"
import { ProductGrid } from "./ProducGrid"
import { CategorySelectorComponent } from "./ui/category-select"
interface ProductsViewProps{
    products: Product[]
    categories: Category[]
}
export const ProductsView = ({products, categories}:ProductsViewProps)=>{
    return(
        <div className="flex flex-col">
            {/* Categorias*/}

            <div className="w-full sm:w-[200px]">
                <CategorySelectorComponent categories={categories}/> 
            </div>
            {/* Productos*/}
            <div className="flex-1">
                <div>
                    <ProductGrid products={products}/> 
                    <hr className="w-1/2 sm:w-3/4" />
                </div>
            </div>
        </div>
    )
}