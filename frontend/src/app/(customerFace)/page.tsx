"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
   const [query, setQuery] = useState({ name: "", category: "", maxPrice: "" });

   const { data: products, isLoading } = useQuery({
      queryKey: ["products", query],
      queryFn: async () => {
         const params = new URLSearchParams(query);
         const res = await fetch(`/api/products?${params}`);
         return res.json();
      },
   });

   return (
      <div className="p-6 space-y-4">
         <h1 className="text-2xl font-bold">Browse Products</h1>
         <div className="flex space-x-2">
            <input
               placeholder="Name"
               onChange={(e) => setQuery((q) => ({ ...q, name: e.target.value }))}
               className="input"
            />
            <input
               placeholder="Category"
               onChange={(e) => setQuery((q) => ({ ...q, category: e.target.value }))}
               className="input"
            />
            <input
               placeholder="Max Price"
               type="number"
               onChange={(e) => setQuery((q) => ({ ...q, maxPrice: e.target.value }))}
               className="input"
            />
         </div>

         {isLoading ? (
            <p>Loading...</p>
         ) : (
            <div className="grid grid-cols-2 gap-4">
               {products?.map((p: any) => (
                  <div key={p.id} className="border p-3 rounded shadow">
                     <h2 className="font-bold">{p.title}</h2>
                     <p>${p.price}</p>
                     <a href={`/products/${p.id}`} className="text-blue-500 underline">
                        View Details
                     </a>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}
