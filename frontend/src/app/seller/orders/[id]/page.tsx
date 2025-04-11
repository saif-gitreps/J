export default async function SingleOrderPage({ params }: { params: { id: string } }) {
   const order = {
      id: "1",
      status: "pending",
      items: ["car", "bike"],
   };

   return (
      <div className="p-6 max-w-3xl mx-auto">
         <h1 className="text-2xl font-bold mb-4">Order #{order.id}</h1>
         <p>Status: {order.status}</p>
         <p>Items: {order.items.length}</p>

         <div className="space-x-2 mt-4">
            <button className="bg-green-600 text-white px-3 py-1 rounded">Approve</button>
            <button className="bg-red-600 text-white px-3 py-1 rounded">Reject</button>
         </div>

         <div className="space-x-2 mt-4">
            {["Processing", "Out for Delivery", "Completed"].map((status) => (
               <button key={status} className="bg-gray-600 text-white px-3 py-1 rounded">
                  Mark as {status}
               </button>
            ))}
         </div>
      </div>
   );
}
