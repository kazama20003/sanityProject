import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductsByCategory=async(categorySlug:string)=>{
    const PRODUCTS_BY_CATEGORY = defineQuery(`
            *[
                _type =="product"
                && references(*[_type == "category" && slug.current == $categorySlug]._id)
            ] | order(name asc) 
        `);
    
    try {
        const products = await sanityFetch({
            query:PRODUCTS_BY_CATEGORY,
            params:{
                categorySlug,
            }
        });
        return products.data || [];
    } catch (error) {
        console.log("Error Fetching all product by category",error);
        return[]
        
    }
}