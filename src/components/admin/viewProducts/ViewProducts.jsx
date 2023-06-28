import React, { useEffect, useState } from "react";
import styles from "./ViewProducts.module.scss";
import { toast } from "react-toastify";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setIsLoading(true);
    try {
      const productsRef = collection(db, "products");
      const q = query(productsRef, orderBy("createdAt", "desc"));

      onSnapshot(q, (snapshot) => {
        // console.log(snapshot.docs);
        const allProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(allProducts);
        setProducts(allProducts);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <div className={styles.table}>
      <h2>All Products</h2>
      {products.length === 0 ? (
        <p>No products found!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          {products.map((product, index) => {
            const { id, name, price, imageURL, category } = product;
            return (
              <tbody>
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={imageURL} alt={name} style={{ width: "100px" }} />
                  </td>
                  <td>{name}</td>
                  <td>{category}</td>
                  <td>{`R$ ${price}`}</td>
                  <td>
                    <Link to="/admin/add-products">
                      <FaEdit size={20} color="green" />
                    </Link>
                    &nbsp;
                    <FaTrashAlt size={18} color="red" />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      )}
    </div>
  );
}

export default ViewProducts;
