"use client";

import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

type Slide = {
  gambar: string;
  judul: string;
  teks: string;
};

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  function sebelumnya() {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  }

  function selanjutnya() {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [index, slides.length]);

  return (
    <div className={styles.carousel}>
      <div className={styles.track} style={{ transform: "translateX(-" + index * 100 + "%)" }}>
        {slides.map((slide) => (
          <div key={slide.judul} className={styles.slide}>
            <img src={slide.gambar} alt={slide.judul} />
            <div className={styles.caption}>
              <h3>{slide.judul}</h3>
              <p>{slide.teks}</p>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.tombol + " " + styles.kiri} onClick={sebelumnya}>
        ‹
      </button>
      <button className={styles.tombol + " " + styles.kanan} onClick={selanjutnya}>
        ›
      </button>

      <div className={styles.titik}>
        {slides.map((slide, i) => (
          <button
            key={slide.judul}
            className={i === index ? styles.dot + " " + styles.dotAktif : styles.dot}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
