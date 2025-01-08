import { ProductGrid } from "@/components/ProducGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";

const SearchPage = async ({
    searchParams,
}: {
    searchParams: {
        query: string;
    };
}) => {
    const { query } = await searchParams;
    const products = await searchProductsByName(query);

    if (!products.length) {
        return (
            <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        No se encontraron productos para: {query}
                    </h1>
                    <p className="text-gray-600 text-center">
                        Pruebe a buscar con diferentes palabras clave
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Search result {query}
            </h1>
            <ProductGrid products={products}></ProductGrid>
        </div>
    )
};

export default SearchPage;
