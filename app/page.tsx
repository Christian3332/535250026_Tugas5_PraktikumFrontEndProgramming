"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

const slides = [
  {
    gambar: "/images/slide-1.svg",
    judul: "Bersih & Wangi",
    teks: "Pakai deterjen dan pewangi pilihan",
  },
  {
    gambar: "/images/slide-2.svg",
    judul: "Gratis Antar Jemput",
    teks: "Tinggal chat, kurir langsung meluncur",
  },
  {
    gambar: "/images/slide-3.svg",
    judul: "Selesai 1-2 Hari",
    teks: "Gak perlu nunggu lama-lama",
  },
];

const layanan = [
  {
    nama: "Cuci Kering",
    gambar: "/images/cuci-kering.svg",
    desc: "Baju kamu dicuci bersih terus dikeringin, tinggal dilipet sendiri di rumah.",
  },
  {
    nama: "Cuci Setrika",
    gambar: "/images/cuci-setrika.svg",
    desc: "Paket paling laris! Dicuci, dikeringin, disetrika rapi, terus dilipet.",
  },
  {
    nama: "Setrika Aja",
    gambar: "/images/setrika.svg",
    desc: "Udah nyuci sendiri tapi males nyetrika? Serahin ke kita aja.",
  },
  {
    nama: "Cuci Sepatu",
    gambar: "/images/sepatu.svg",
    desc: "Sepatu kotor abis main hujan? Bisa kinclong lagi kayak baru beli.",
  },
];

const harga = [
  { nama: "Cuci Kering", harga: 5000, satuan: "kg" },
  { nama: "Cuci Setrika", harga: 7000, satuan: "kg" },
  { nama: "Setrika Aja", harga: 4000, satuan: "kg" },
  { nama: "Cuci Sepatu", harga: 25000, satuan: "pasang" },
  { nama: "Bed Cover", harga: 20000, satuan: "pcs" },
  { nama: "Selimut", harga: 15000, satuan: "pcs" },
];

const langkah = [
  { no: 1, judul: "Chat Admin", desc: "Hubungi kita lewat WhatsApp atau isi form di bawah." },
  { no: 2, judul: "Dijemput", desc: "Kurir kita dateng ke tempat kamu buat ambil cucian." },
  { no: 3, judul: "Dicuci", desc: "Cucian diproses pakai deterjen dan pewangi yang wangi banget." },
  { no: 4, judul: "Dianter", desc: "Cucian bersih dianter balik, kamu tinggal bayar deh." },
];

const testimoni = [
  {
    nama: "Rina",
    status: "Mahasiswi",
    isi: "Sumpah ngebantu banget buat anak kos kayak aku. Wanginya tahan lama!",
  },
  {
    nama: "Dimas",
    status: "Karyawan",
    isi: "Antar jemputnya on time, bajunya juga rapi. Langganan terus pokoknya.",
  },
  {
    nama: "Bu Sari",
    status: "Ibu Rumah Tangga",
    isi: "Harganya murah tapi hasilnya nggak murahan. Bed cover jadi bersih lagi.",
  },
];

function rupiah(angka: number) {
  return "Rp " + angka.toLocaleString("id-ID");
}

export default function Home() {
  const [paket, setPaket] = useState(1);
  const [berat, setBerat] = useState(1);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");

  const total = harga[paket].harga * berat;

  function pesan(e: React.FormEvent) {
    e.preventDefault();
    if (nama === "" || alamat === "") {
      alert("Nama sama alamat diisi dulu ya!");
      return;
    }
    const pesanWa =
      "Halo LaCare, saya mau pesan laundry\n" +
      "Nama: " + nama + "\n" +
      "Alamat: " + alamat + "\n" +
      "Paket: " + harga[paket].nama + "\n" +
      "Jumlah: " + berat + " " + harga[paket].satuan + "\n" +
      "Perkiraan total: " + rupiah(total);
    window.open("https://wa.me/6281234567890?text=" + encodeURIComponent(pesanWa), "_blank");
  }

  return (
    <div className={styles.page}>
      <Navbar />

      <section id="home" className={styles.hero}>
        <div className={styles.container + " " + styles.heroIsi}>
          <div className={styles.heroTeks}>
            <p className={styles.badge}>🧺 Laundry Kiloan Antar Jemput</p>
            <h1>
              Cucian Numpuk? <br />
              Tenang, Ada <span>LaCare!</span>
            </h1>
            <p>
              Gak usah pusing lagi mikirin cucian. Kita jemput, kita cuci, kita
              anter balik. Bersih, wangi, dan pastinya ramah di kantong mahasiswa.
            </p>
            <div className={styles.heroTombol}>
              <a href="#pesan" className={styles.btn}>Pesan Sekarang</a>
              <a href="#harga" className={styles.btnOutline}>Lihat Harga</a>
            </div>
          </div>
          <div className={styles.heroGambar}>
            <Carousel slides={slides} />
          </div>
        </div>
      </section>

      <section id="tentang" className={styles.section}>
        <div className={styles.container + " " + styles.tentangIsi}>
          <div className={styles.tentangGambar}>
            <img src="/images/tentang.svg" alt="Tentang LaCare" />
          </div>
          <div className={styles.tentangTeks}>
            <h2 className={styles.judul}>Kenalan Sama LaCare</h2>
            <p>
              LaCare itu laundry yang awalnya dibuat buat bantuin anak kos di
              sekitar kampus. Soalnya kita tau banget rasanya tugas numpuk tapi
              cucian juga numpuk 😅.
            </p>
            <p>
              Sekarang LaCare udah melayani banyak pelanggan, dari mahasiswa,
              karyawan, sampai ibu rumah tangga. Kita selalu usahain cucian kamu
              balik dalam keadaan bersih, wangi, dan rapi.
            </p>
            <div className={styles.kelebihan}>
              <div>
                <h3>1-2 Hari</h3>
                <p>Cepet selesai</p>
              </div>
              <div>
                <h3>Gratis</h3>
                <p>Antar jemput</p>
              </div>
              <div>
                <h3>500+</h3>
                <p>Pelanggan puas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className={styles.section + " " + styles.bgBiru}>
        <div className={styles.container}>
          <h2 className={styles.judul + " " + styles.tengah}>Layanan Kita</h2>
          <p className={styles.subjudul}>Pilih aja sesuai kebutuhan kamu</p>
          <div className={styles.gridLayanan}>
            {layanan.map((item) => (
              <div key={item.nama} className={styles.kartu}>
                <img src={item.gambar} alt={item.nama} />
                <h3>{item.nama}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="harga" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.judul + " " + styles.tengah}>Daftar Harga</h2>
          <p className={styles.subjudul}>Murah meriah, gak bikin dompet nangis</p>
          <div className={styles.gridHarga}>
            {harga.map((item, i) => (
              <div key={item.nama} className={i === 1 ? styles.kartuHarga + " " + styles.populer : styles.kartuHarga}>
                {i === 1 && <span className={styles.labelPopuler}>Paling Laris</span>}
                <h3>{item.nama}</h3>
                <p className={styles.angka}>{rupiah(item.harga)}</p>
                <p className={styles.satuan}>per {item.satuan}</p>
              </div>
            ))}
          </div>
          <p className={styles.catatan}>* Minimal order 3 kg buat layanan kiloan ya</p>

          <h2 className={styles.judul + " " + styles.tengah + " " + styles.jarakAtas}>Cara Pesannya Gimana?</h2>
          <p className={styles.subjudul}>Gampang banget, cuma 4 langkah</p>
          <div className={styles.gridLangkah}>
            {langkah.map((item) => (
              <div key={item.no} className={styles.langkah}>
                <div className={styles.nomor}>{item.no}</div>
                <h3>{item.judul}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimoni" className={styles.section + " " + styles.bgBiru}>
        <div className={styles.container}>
          <h2 className={styles.judul + " " + styles.tengah}>Kata Mereka</h2>
          <p className={styles.subjudul}>Bukan kata kita lho ya, ini kata pelanggan</p>
          <div className={styles.gridTestimoni}>
            {testimoni.map((item) => (
              <div key={item.nama} className={styles.testimoni}>
                <p className={styles.bintang}>⭐⭐⭐⭐⭐</p>
                <p className={styles.isiTestimoni}>&quot;{item.isi}&quot;</p>
                <div className={styles.orang}>
                  <div className={styles.avatar}>{item.nama.charAt(0)}</div>
                  <div>
                    <h4>{item.nama}</h4>
                    <p>{item.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pesan" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.judul + " " + styles.tengah}>Pesan Sekarang</h2>
          <p className={styles.subjudul}>Isi form di bawah, nanti langsung nyambung ke WhatsApp admin</p>
          <form className={styles.form} onSubmit={pesan}>
            <label>Nama</label>
            <input
              type="text"
              placeholder="Nama kamu"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />

            <label>Alamat</label>
            <textarea
              placeholder="Alamat lengkap buat penjemputan"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />

            <label>Paket</label>
            <select value={paket} onChange={(e) => setPaket(Number(e.target.value))}>
              {harga.map((item, i) => (
                <option key={item.nama} value={i}>
                  {item.nama} - {rupiah(item.harga)}/{item.satuan}
                </option>
              ))}
            </select>

            <label>Jumlah ({harga[paket].satuan})</label>
            <input
              type="number"
              min={1}
              value={berat}
              onChange={(e) => setBerat(Math.max(1, Number(e.target.value)))}
            />

            <div className={styles.total}>
              Perkiraan Total: <b>{rupiah(total)}</b>
            </div>

            <button type="submit" className={styles.btn}>Kirim ke WhatsApp</button>
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container + " " + styles.footerIsi}>
          <div>
            <a href="#home" className={styles.logo}>
              La<span>Care</span>
            </a>
            <p>Laundry bersih, wangi, dan rapi buat kamu yang sibuk.</p>
          </div>
          <div>
            <h4>Alamat</h4>
            <p>Jl. Kampus No. 12, dekat gerbang belakang</p>
          </div>
          <div>
            <h4>Jam Buka</h4>
            <p>Senin - Sabtu: 08.00 - 20.00</p>
            <p>Minggu: 09.00 - 15.00</p>
          </div>
          <div>
            <h4>Kontak</h4>
            <p>WA: 0812-3456-7890</p>
            <p>IG: @lacare.laundry</p>
          </div>
        </div>
        <p className={styles.copyright}>© 2026 LaCare Laundry. Dibuat dengan ☕ dan semangat.</p>
      </footer>
    </div>
  );
}
