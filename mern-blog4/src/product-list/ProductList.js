import "./ProductList.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const ProductList = () => {
  const [getProducts, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    setProducts(data);
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:8080/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchData();
  };

  // console.log(getProducts[0].title);
  return (
    <div className="m-5">
      <table className="border-collapse border-spacing-6 border border-black">
        <thead>
          <tr>
            <th className="border border-black px-3">Id</th>
            <th className="border border-black px-4">Title</th>
            <th className="border border-black px-5">Price</th>
            <th className="border border-black px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {getProducts.map((product, index) => (
            <tr key={product.id} className="text-center border border-black">
              <td className="border border-black">{index + 1}</td>
              <td className="border border-black">{product.title}</td>
              <td className="border border-black">{product.price}</td>
              <td className="border border-black px-6">
                <Link
                  to={`/edit/${product.id}`}
                  className="bg-green-400 p-2 px-5 rounded-lg text-white font-bold hover:bg-green-300 mr-3"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-rose-600 p-2 px-2 rounded-lg text-white font-bold hover:bg-rose-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
