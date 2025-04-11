"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const schema = z.object({
   title: z.string().min(1, "Title is required"),
   description: z.string().min(1, "Description is required"),
   category: z.string().min(1, "Category is required"),
   price: z.coerce.number().min(0, "Price must be a positive number"),
   images: z.any().optional(),
   video: z.any().optional(),
});

export type ProductFormValues = z.infer<typeof schema>;

type ProductFormProps = {
   initialValues?: Partial<ProductFormValues>;
   action: (data: FormData) => void;
   isEdit?: boolean;
};

export default function ProductForm({ initialValues, action, isEdit }: ProductFormProps) {
   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
   } = useForm<ProductFormValues>({
      resolver: zodResolver(schema),
      defaultValues: initialValues,
   });

   // Pre-fill initial values for edit
   useEffect(() => {
      if (initialValues) {
         Object.keys(initialValues).forEach((key) => {
            setValue(
               key as keyof ProductFormValues,
               initialValues[key as keyof ProductFormValues]
            );
         });
      }
   }, [initialValues, setValue]);

   const onSubmit = async (data: ProductFormValues) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("price", data.price.toString());

      Array.from(data.images).forEach((file) =>
         formData.append("images", file as string)
      );
      formData.append("video", data.video[0]);

      // Send to API endpoint
      action(formData);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
         <input {...register("title")} placeholder="Title" className="input" />
         {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

         <textarea
            {...register("description")}
            placeholder="Description"
            className="input"
         />
         {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
         )}

         <input {...register("category")} placeholder="Category" className="input" />
         {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
         )}

         <input
            type="number"
            {...register("price")}
            placeholder="Price"
            className="input"
         />
         {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

         <div>
            <label className="block mb-1 font-medium">
               Images (you can select multiple):
            </label>
            <input type="file" {...register("images")} multiple />
         </div>

         <div>
            <label className="block mb-1 font-medium">Preview Video:</label>
            <input type="file" {...register("video")} accept="video/*" />
         </div>

         <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
         >
            {isEdit ? "Update Product" : "Add Product"}
         </button>
      </form>
   );
}
