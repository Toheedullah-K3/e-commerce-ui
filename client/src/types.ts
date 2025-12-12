import { email, z } from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
}

export type ProductsTypes = ProductType[]

export type CartItemsType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export type CartItemsTypes = CartItemsType[]

// zod schema
export const shippingFormSchema = z.object({
    name: z.string().trim().nonempty("Name is Required!"),
    email: z.email().trim().nonempty("Email is Required!"),
    phone: z
        .string()
        .min(7, "Phone number must be between 7 to 10 digits")
        .max(10, "Phone number must be between 7 to 10 digits")
        .regex(/^\d+$/, "Phone number must only contain number"),
    address: z.string().trim().nonempty("Address is Required!"),
    city: z.string().trim().nonempty("City is Required!")
})

export type shippingFormInputs = z.infer<typeof shippingFormSchema>