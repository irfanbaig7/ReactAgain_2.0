import { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "./hooks/useDebounce";
import { useThrottle } from "./hooks/useTrrotal";

function SmartSearchWithoutHooks() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [scrollY, setScrollY] = useState(0);


  // debounced version of query
  const debouncedQuery = useDebounce(query, 700 )

  // ❌ Problem 1: Every keystroke -> API call
  useEffect(() => {
    if (!debouncedQuery) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
        setResults(res.data.products);
        console.log("🔴 API CALLED for:", debouncedQuery);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [debouncedQuery, query]);

  // ❌ Problem 2: Scroll event -> updates too frequently
  useEffect(() => {
     const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const throttleScrollY = useThrottle(scrollY, 500)

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold text-center">🚫 Without Debounce/Throttle</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="border w-full p-2 rounded"
      />

      <p className="text-sm text-gray-500">
        Actual scrollY: {scrollY.toFixed(0)}px <br />
        Throttled scrollY: <b>{throttleScrollY.toFixed(0)}px</b>
      </p>

      <div className="space-y-2">
        {results.map((p) => (
          <div key={p.id} className="border p-2 rounded">
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-600">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmartSearchWithoutHooks;
