"use client";

import { logout } from "@/store/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function AdminHeader() {
   const router = useRouter();
   const dispatch = useDispatch();

   const handleLogout = () => {
      dispatch(logout());
      router.push("/login");
   };

   return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
         <h1 className="text-xl font-semibold">Admin page</h1>
         <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
         >
            Logout
         </button>
      </header>
   );
}
