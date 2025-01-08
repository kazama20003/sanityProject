'use client'

import { AnimatePresence, motion } from "framer-motion"

import { ProductThumb } from "./ProductThub"
import { Product } from "@/sanity.types"

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <AnimatePresence>
        {products?.map((product) => (
          <motion.div
            key={product._id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ProductThumb product={product} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}