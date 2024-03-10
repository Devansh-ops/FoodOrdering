export type Product = {
    id: number;
    name: string;
    image: ReturnType<typeof require>;
    price: number;
};