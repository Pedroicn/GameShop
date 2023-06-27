import React, { useState } from "react";
import styles from "./AddProducts.module.scss";
import Card from "../../card/Card";

const categories = [
  { id: 1, name: "Console" },
  { id: 2, name: "Joystick" },
  { id: 3, name: "Headphone" },
  { id: 4, name: "Computer" },
];

function AddProducts() {
  const [product, setProduct] = useState({
    name: "",
    imageURL: "",
    price: null,
    category: "",
    brand: "",
    desc: "",
  });

  const handleInputChange = (e) => {};
  const handleImageChange = (e) => {};
  return (
    <div className={styles.product}>
      <h1>Add New Product</h1>
      <Card cardClass={styles.card}>
        <form action="">
          <label>Product name:</label>
          <input
            type="text"
            placeholder="Product name"
            required
            name="name"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
          />
          <label>Product Image:</label>
          <Card cardClass={styles.group}>
            <div className={styles.progress}>
              <div className={styles["progress-bar"]} style={{ width: "50%" }}>
                Uploading 50%
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              placeholder="Product Image"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />
            <input
              type="text"
              required
              name="imageURL"
              value={product.imageURL}
              disabled
            />
          </Card>

          <label>Product price:</label>
          <input
            type="number"
            placeholder="Product price"
            required
            name="price"
            value={product.price}
            onChange={(e) => handleInputChange(e)}
          />
          <label>Product Category:</label>
          <select
            required
            name="category"
            value={product.category}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="" disabled>
              -- Choose product category --
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <label>Product Company/Brand:</label>
          <input
            type="text"
            placeholder="Product brand"
            required
            name="brand"
            value={product.brand}
            onChange={(e) => handleInputChange(e)}
          />

          <label>Product Description:</label>
          <textarea
            name="desc"
            required
            value={product.desc}
            onChange={(e) => handleInputChange(e)}
            cols="30"
            rows="10"
          ></textarea>
          <button className="--btn --btn-primary">Save Product</button>
        </form>
      </Card>
    </div>
  );
}

export default AddProducts;
