"use client";

import ProductForm from "../../_components/ProductForm";

export default function EditProductPage() {
   const action = (data: FormData) => {};
   // TODO: fetch the id and send the initial value

   return (
      <div className="p-6 max-w-3xl mx-auto">
         <h1 className="text-2xl font-bold mb-4">Edit Product {}</h1>
         <ProductForm action={action} initialValues={} isEdit />
      </div>
   );
}
