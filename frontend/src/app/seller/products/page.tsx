import Link from "next/link";

export default async function ProductsPage() {
   const products = [{ id: "1", title: "1", category: "23" }];

   return (
      <div className="min-h-screen bg-gray-100">
         <main className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between mb-4">
               <h1 className="text-2xl font-bold">Products</h1>
               <Link
                  href="/admin/products/new"
                  className="bg-green-500 text-white px-4 py-2 rounded"
               >
                  Add Product
               </Link>
            </div>
            <ul className="space-y-4">
               {products.map((product) => (
                  <li
                     key={product.id}
                     className="bg-white p-4 shadow rounded flex justify-between items-center"
                  >
                     <div>
                        <h2 className="font-semibold">{product.title}</h2>
                        <p className="text-sm text-gray-600">{product.category}</p>
                     </div>
                     <div className="space-x-2">
                        <Link
                           href={`/admin/products/${product.id}/edit`}
                           className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                        >
                           Edit
                        </Link>
                        <button className="px-3 py-1 bg-red-600 text-white rounded text-sm">
                           Delete
                        </button>
                     </div>
                  </li>
               ))}
            </ul>
         </main>
      </div>
   );
}
