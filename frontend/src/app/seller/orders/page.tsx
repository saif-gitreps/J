import Link from "next/link";

export default async function OrdersPage() {
   const orders = [{ id: "1", status: "pending" }];

   return (
      <div className="min-h-screen bg-gray-100">
         <main className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Orders</h1>
            <ul className="space-y-4">
               {orders.map((order) => (
                  <li
                     key={order.id}
                     className="bg-white p-4 shadow rounded flex justify-between"
                  >
                     <div>
                        <p>Order #{order.id}</p>
                        <p className="text-sm text-gray-600">Status: {order.status}</p>
                     </div>
                     <Link
                        href={`/admin/orders/${order.id}`}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                     >
                        View
                     </Link>
                  </li>
               ))}
            </ul>
         </main>
      </div>
   );
}
