import AdminHeader from "./_components/AdminHeader";
import BanUserButton from "./_components/BanUserButton";

export default async function AdminPage() {
   const users = [
      {
         id: "1",
         email: "karl",
         role: "customer",
      },
      {
         id: "2",
         email: "Peter",
         role: "seller",
      },
   ];

   return (
      <div className="min-h-screen bg-gray-400">
         <AdminHeader />
         <main className="max-w-3xl mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">All Users</h1>
            <ul className="space-y-4">
               {users.map((user) => (
                  <li
                     key={user.id}
                     className="bg-white shadow p-4 rounded flex justify-between items-center"
                  >
                     <div>
                        <p className="font-medium">{user.email}</p>
                        <p className="text-sm text-gray-600">{user.role}</p>
                     </div>
                     {/* <BanUserButton userId={user.id} /> */}
                  </li>
               ))}
            </ul>
         </main>
      </div>
   );
}
