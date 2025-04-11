"use client";

import { useMutation } from "@tanstack/react-query";

interface BanUserButtonProps {
   userId: string;
}

export default function BanUserButton({ userId }: BanUserButtonProps) {
   const banMutation = useMutation({
      mutationFn: async () => {
         const res = await fetch(`/api/admin/ban-user/${userId}`, {
            method: "POST",
         });
         if (!res.ok) throw new Error("Failed to ban user");
         return res.json();
      },
      onSuccess: () => {
         alert("User banned");
      },
      onError: () => {
         alert("Somethign went wrong while bannign user");
      },
   });

   return (
      <button
         onClick={() => banMutation.mutate()}
         className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
      >
         Ban User
      </button>
   );
}
