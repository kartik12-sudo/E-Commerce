// src/component/pages/Home.jsx

import React, { useEffect, useState, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  FaLaptop,
  FaMobileAlt,
  FaCameraRetro,
  FaTags,
  FaTabletAlt,
  FaStar,
  FaTv,
  FaVolumeUp,
  FaHeadphones,
} from "react-icons/fa";
import { FiWatch } from "react-icons/fi";
import ProductList from "../common/ProductList";
import Pagination from "../common/Pagination";
import ApiService from "../../service/ApiService";
import "../../style/home.css";

const itemsPerPage = 10;

const categories = [
  { id: 1, name: "Computers", Icon: FaLaptop },
  { id: 2, name: "Mobile", Icon: FaMobileAlt },
  { id: 3, name: "Drones & Cameras", Icon: FaCameraRetro },
  { id: 4, name: "Sale", Icon: FaTags },
  { id: 5, name: "Tablets", Icon: FaTabletAlt },
  { id: 6, name: "Best Sellers", Icon: FaStar },
  { id: 7, name: "TV & Home Cinema", Icon: FaTv },
  { id: 8, name: "Wearable Tech", Icon: FiWatch },
  { id: 9, name: "Speakers", Icon: FaVolumeUp },
  { id: 10, name: "Headphones", Icon: FaHeadphones },
];

const Home = () => {
  const { search } = useLocation();
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams(search);
      const searchTerm = params.get("search");
      const response = searchTerm
        ? await ApiService.searchProducts(searchTerm)
        : await ApiService.getAllProducts();

      const list = response.productList || [];
      setAllProducts(list);
      setTotalPages(Math.ceil(list.length / itemsPerPage));
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    setCurrentPage(1);
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    setVisibleProducts(allProducts.slice(start, start + itemsPerPage));
  }, [allProducts, currentPage]);

  if (loading) {
    return (
      <div className="home-page">
        <div className="skeleton hero-skeleton" />
        <div className="skeleton categories-skeleton" />
        <div className="skeleton products-skeleton" />
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          className="hero-image"
          src="/HomePage.png"
          alt="Electronics Collection"
          loading="lazy"
        />
      </section>

      {/* Categories with Icons */}
      <section className="categories-section">
        <h2 className="section-title">Shop By Category</h2>
        <div className="category-grid">
          {categories.map(({ id, name, Icon }) => (
            <Link to={`/category/${id}`} key={id}>
              <div className="category-card">
                <Icon className="category-icon" size={48} />
                <h3>{name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="products-section">
        <h2 className="section-title">Our Products</h2>
        {error ? (
          <p className="error-message">{error}</p>
        ) : visibleProducts.length ? (
          <>
            {/* Horizontal scroll for product images */}
            <div className="products-images-scroll">
              {visibleProducts.map((product) => (
                <img
                  key={product.id}
                  src={product.imageUrl || "/placeholder.png"}
                  alt={product.name}
                  loading="lazy"
                />
              ))}
            </div>
            <ProductList products={visibleProducts} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <p className="empty-message">No products found.</p>
        )}
      </section>
    </div>
  );
};
// ...existing code...
export default Home;