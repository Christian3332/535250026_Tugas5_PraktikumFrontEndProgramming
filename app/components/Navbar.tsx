"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const menu = [
  { id: "home", label: "Home" },
  { id: "tentang", label: "Tentang" },
  { id: "layanan", label: "Layanan" },
  { id: "harga", label: "Harga" },
  { id: "testimoni", label: "Testimoni" },
  { id: "pesan", label: "Pesan" },
];

export default function Navbar() {
  const [menuBuka, setMenuBuka] = useState(false);
  const [aktif, setAktif] = useState("home");

  useEffect(() => {
    function cekScroll() {
      let sekarang = "home";

      menu.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          sekarang = item.id;
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        sekarang = menu[menu.length - 1].id;
      }

      setAktif(sekarang);
    }

    cekScroll();
    window.addEventListener("scroll", cekScroll);
    return () => window.removeEventListener("scroll", cekScroll);
  }, []);

  function klikMenu(id: string) {
    setAktif(id);
    setMenuBuka(false);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.isi}>
        <a href="#home" className={styles.logo} onClick={() => klikMenu("home")}>
          La<span>Care</span>
        </a>

        <button className={styles.tombolMenu} onClick={() => setMenuBuka(!menuBuka)}>
          {menuBuka ? "✕" : "☰"}
        </button>

        <ul className={menuBuka ? styles.menu + " " + styles.menuBuka : styles.menu}>
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={"#" + item.id}
                className={aktif === item.id ? styles.link + " " + styles.aktif : styles.link}
                onClick={() => klikMenu(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
