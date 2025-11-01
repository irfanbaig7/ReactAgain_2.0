import { useQuery } from "@tanstack/react-query";
import { api } from "../project/axios";
import toast from "react-hot-toast";

async function fetchProducts() {
  const res = await api.get("/products?limit=10");
  return res.data.products;
}

export default function ProductLiss() {
  const {
    data: products,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 2, // 2 minutes
    gcTime: 1000 * 60 * 10, // cache stays 10 min in memory
  });

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError) {
    toast.error("Failed to fetch products");
    return <p className="text-center mt-10 text-red-500">{error.message}</p>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">🛒 Products</h2>
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Refetch
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products?.map((item) => (
          <div
            key={item.id}
            className="p-3 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img src={item.thumbnail} alt={item.title} className="rounded mb-2" />
            <h3 className="text-sm font-medium">{item.title}</h3>
            <p className="text-xs text-gray-500">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
