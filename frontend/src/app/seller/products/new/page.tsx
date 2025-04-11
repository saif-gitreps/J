"use client";

import ProductForm, { ProductFormValues } from "../_components/ProductForm";

export default function AddProductPage() {
   const action = (data: FormData) => {};

   return (
      <div className="p-6 max-w-3xl mx-auto">
         <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
         <ProductForm action={action} />
      </div>
   );
}
