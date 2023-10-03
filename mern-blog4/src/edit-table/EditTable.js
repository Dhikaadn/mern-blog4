import "./EditTable.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditTable = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };

  const inputPrice = (event) => {
    setPrice(event.target.value);
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const data = await response.json();
    setTitle(data.title);
    setPrice(data.price);
  };

  const updateTable = async (event) => {
    event.preventDefault();
    const product = { title, price };
    await fetch(`http://localhost:8080/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "content-type": "application/json",
      },
    });
    navigate("/table");
  };
  return (
    <div>
      <form className="m-4" onSubmit={updateTable}>
        <label className="block">Title</label>
        <input
          className="border border-slate-400 p-3 h-8"
          type="text"
          value={title}
          onChange={inputTitle}
        />

        <label className="block mt-4">Price</label>
        <input
          className="border border-slate-400 p-3 h-8"
          type="text"
          value={price}
          onChange={inputPrice}
        ></input>
        <button
          className="bg-cyan-400 p-2 px-4 rounded-lg block mt-4"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTable;
