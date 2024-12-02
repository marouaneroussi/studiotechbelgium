"use client";
import { useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import Image from "next/image";

const Gallery = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4; // Number of items to show per row
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000); // Auto-play every 5 seconds
    return () => clearInterval(autoSlide); // Clear interval on component unmount
  }, []);

  const visibleItems = items.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.sectionTitle}>Our Showcase</h2>
      <div className={styles.galleryGrid}>
        {visibleItems.map((item, index) => (
          <div className={`${styles.galleryItem} ${styles.fadeIn}`} key={index}>
            <Image
              src={item.imageUrl}
              alt={item.altText}
              className={`${styles.galleryImage} ${styles.scaleUp}`}
            />
            <div className={styles.overlay}></div>
            <div className={styles.textContainer}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </section>
  );
};

export default Gallery;
