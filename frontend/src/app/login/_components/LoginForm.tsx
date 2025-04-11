"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const loginSchema = z.object({
   email: z.string().email({ message: "Invalid email address" }),
   password: z.string().min(6, { message: "Password must be at least 6 characters" }),
   role: z.enum(["admin", "customer", "seller"], {
      required_error: "Please select a role",
   }),
});
type FormData = z.infer<typeof loginSchema>;

function LoginForm() {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
   } = useForm<FormData>({
      resolver: zodResolver(loginSchema),
   });

   //    const loginMutation = useMutation({
   //       mutationFn: async (data: FormData) => {
   //          const response = await axios.post("/api/login", data);
   //          return response.data;
   //       },
   //       onSuccess: (data) => {
   //          alert("Logged in successfully!");
   //          console.log("Login response:", data);
   //       },
   //       onError: (error: any) => {
   //          alert("Login failed!");
   //          console.error(error);
   //       },
   //    });

   const onSubmit = (data: FormData) => {
      //loginMutation.mutate(data);
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow space-y-4"
      >
         <h2 className="text-2xl font-bold text-center">Login</h2>

         <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
               type="email"
               {...register("email")}
               className="w-full px-3 py-2 border rounded"
            />
            {errors.email && (
               <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
         </div>

         <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
               type="password"
               {...register("password")}
               className="w-full px-3 py-2 border rounded"
            />
            {errors.password && (
               <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
         </div>

         <div className="space-y-2">
            <p className="font-medium">Login as:</p>
            <div className="flex space-x-4">
               <label className="flex items-center space-x-1">
                  <input
                     type="radio"
                     value="admin"
                     {...register("role")}
                     className="accent-blue-600"
                  />
                  <span>Admin</span>
               </label>
               <label className="flex items-center space-x-1">
                  <input
                     type="radio"
                     value="customer"
                     {...register("role")}
                     className="accent-blue-600"
                  />
                  <span>Customer</span>
               </label>
               <label className="flex items-center space-x-1">
                  <input
                     type="radio"
                     value="seller"
                     {...register("role")}
                     className="accent-blue-600"
                  />
                  <span>Seller</span>
               </label>
            </div>
            {errors.role && <p className="text-sm text-red-500">{errors.role.message}</p>}
         </div>
         <button
            type="submit"
            //disabled={isSubmitting || loginMutation.isPending}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
         >
            {isSubmitting ? "Logging in..." : "Login"}
         </button>
      </form>
   );
}

export default LoginForm;
