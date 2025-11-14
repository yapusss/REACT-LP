import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext({
  lang: "id",
  setLang: () => {},
  t: (key) => key,
});

const translations = {
  id: {
    nav_home: "Home",
    nav_about: "Tentang",
    nav_products: "Produk",
    nav_contact: "Kontak",
    cta_contact: "Hubungi Kami",
    brand_tagline: "Rasa tradisional dengan sentuhan modern",
    footer_copyright: "© {year} Peyek Andien. Semua hak cipta dilindungi.",

    // Home
    home_badge: "Authentic. Crunchy. Modern.",
    home_title: "Keripik Peyek Legendaris dengan Sentuhan Teknologi Modern",
    home_desc:
      "Peyek Andien memadukan resep turun-temurun dengan produksi modern untuk menghasilkan keripik yang renyah, gurih, dan konsisten di setiap gigitan.",
    home_view_products: "Lihat Koleksi Produk",
    home_our_story: "Cerita Kami",
    home_why_title: "Kenapa Pelanggan Memilih Peyek Andien?",
    home_why_desc:
      "Kami menghadirkan perpaduan rasa tradisional dengan kualitas modern. Semua varian dibuat untuk menemani momen favorit Anda, dari camilan santai hingga suguhan spesial.",
    home_stat_years: "Tahun Pengalaman",
    home_stat_flavors: "Varian Rasa",
    home_stat_happy: "Pelanggan Puas",
    home_highlight_1_title: "Bahan Terpilih",
    home_highlight_1_desc:
      "Kami hanya menggunakan kacang dan rempah lokal terbaik dengan standar kontrol kualitas ketat.",
    home_highlight_2_title: "Dapur Tradisonal",
    home_highlight_2_desc:
      "Diproduksi di fasilitas higienis dengan cara tradisonal sehingga rasa konsisten dan selalu renyah.",
    home_highlight_3_title: "Pengiriman Cepat",
    home_highlight_3_desc:
      "Nikmati peyek favorit Anda dalam kondisi terbaik, dikirim langsung ke depan pintu rumah.",

    // About
    about_badge: "Tentang Kami",
    about_title: "Meracik Keripik Peyek Terbaik Sejak Tahun 2010",
    about_p1:
      "Berdiri dari dapur kecil di Cikarang, Peyek Andien lahir dari kecintaan keluarga kami terhadap cita rasa Nusantara. Kami percaya bahwa makanan terbaik dibuat dengan hati, bahan pilihan, dan sentuhan teknologi untuk memastikan kualitasnya selalu konsisten.",
    about_p2:
      "Kini kami menggabungkan resep klasik. Setiap peyek digoreng dengan cara tradisional dan dibungkus secara higienis, sehingga tetap renyah dan gurih hingga ke tangan Anda.",
    about_milestones: "Tonggak Perjalanan",
    about_m1_title: "Awal Perjalanan",
    about_m1_desc:
      "Memulai usaha rumahan dengan resep keluarga yang diwariskan turun-temurun dari generasi sebelumnya.",
    about_m2_title: "Ekspansi Produksi",
    about_m2_desc:
      "Membuka fasilitas produksi modern dan memperkenalkan kontrol kualitas digital pertama kami.",
    about_m3_title: "Digitalisasi",
    about_m3_desc:
      "Membangun sistem pemesanan online serta memperluas distribusi ke seluruh Indonesia.",
    about_m4_title: "Peyek Andien",
    about_m4_desc:
      "Meluncurkan identitas baru dengan fokus pada inovasi rasa dan pengalaman pelanggan yang lebih modern.",

    // Contact
    contact_badge: "Hubungi Kami",
    contact_title: "Siap Menyediakan Peyek Terbaik untuk Anda",
    contact_desc:
      "Kami dengan senang hati membantu kebutuhan camilan Anda. Silakan kirim pesan atau hubungi kami melalui kanal di bawah ini.",
    contact_direct: "Kontak Langsung",
    contact_po_note:
      "Pemesanan harus dilakukan melalui pre-order (PO) dan tidak dapat datang langsung ke dapur produksi. Pesanan dilakukan minimal 1 hari sebelumnya dan layanan kami tersedia 24 jam.",
    contact_address_label: "Alamat",
    contact_address_value: "📍Cikarang Selatan, Bekasi",
    contact_phone_label: "Telepon & WhatsApp",
    contact_phone_value: "📱+62 812-1855-1924",
    contact_email_label: "Email",
    contact_email_value: "halo@peyekit.id",
    contact_quote:
      "“Kami siap membantu menyediakan peyek terbaik untuk acara keluarga, kantor, hingga hampers spesial. Tinggalkan pesan dan kami akan segera menghubungi Anda.”",
    contact_quote_by: "— Tim Peyek Andien",
    contact_whatsapp: "Hubungi via WhatsApp",

    // Produk
    products_badge: "Produk Unggulan",
    products_title: "Varian Peyek Favorit Keluarga Indonesia",
    products_desc:
      "Setiap kemasan diproses dengan teliti untuk menjaga kerenyahan dan keaslian rasa. Pilih varian yang paling pas untuk momen kebersamaan Anda.",
    products_favorite: "Favorit keluarga",
    products_order_now: "Pesan Sekarang",
    prod_kacang_title: "Peyek Kacang",
    prod_kacang_desc:
      "Perpaduan klasik adonan peyek yang renyah dan garing, dipadukan dengan gurihnya kacang tanah pilihan.",
    prod_hijau_title: "Peyek Kacang Hijau",
    prod_hijau_desc:
      "Sensasi unik peyek gurih dengan taburan kacang hijau yang renyah dan khas di setiap gigitan.",
    prod_rebon_title: "Peyek Udang Rebon",
    prod_rebon_desc:
      "Cita rasa gurih dan renyah dengan aroma sedap udang rebon asli, memberikan rasa laut yang nikmat.",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_products: "Products",
    nav_contact: "Contact",
    cta_contact: "Contact Us",
    brand_tagline: "Traditional taste with a modern touch",
    footer_copyright: "© {year} Peyek Andien. All rights reserved.",

    // Home
    home_badge: "Authentic. Crunchy. Modern.",
    home_title: "Legendary Peyek Chips with a Modern Tech Touch",
    home_desc:
      "Peyek Andien blends heritage recipes with modern production to deliver crispy, savory, and consistent chips in every bite.",
    home_view_products: "Browse Products",
    home_our_story: "Our Story",
    home_why_title: "Why Customers Choose Peyek Andien",
    home_why_desc:
      "We combine traditional flavors with modern quality. Every variant is crafted for your favorite moments, from casual snacks to special treats.",
    home_stat_years: "Years of Experience",
    home_stat_flavors: "Flavor Variants",
    home_stat_happy: "Happy Customers",
    home_highlight_1_title: "Selected Ingredients",
    home_highlight_1_desc:
      "We use only the best local peanuts and spices with strict quality control standards.",
    home_highlight_2_title: "Traditional Kitchen",
    home_highlight_2_desc:
      "Produced hygienically using traditional methods for consistent and always-crispy taste.",
    home_highlight_3_title: "Fast Delivery",
    home_highlight_3_desc:
      "Enjoy your favorite peyek in its best condition, delivered right to your doorstep.",

    // About
    about_badge: "About Us",
    about_title: "Crafting the Best Peyek Chips Since 2010",
    about_p1:
      "Born from a small kitchen in Cikarang, Peyek Andien started from our family’s love for Nusantara flavors. We believe the best food is made with heart, selected ingredients, and a touch of technology to ensure consistent quality.",
    about_p2:
      "Today we combine classic recipes. Every peyek is fried traditionally and hygienically packed to stay crispy and savory until it reaches you.",
    about_milestones: "Milestones",
    about_m1_title: "The Beginning",
    about_m1_desc:
      "Started as a home business with family recipes passed down through generations.",
    about_m2_title: "Production Expansion",
    about_m2_desc:
      "Opened a modern production facility and introduced our first digital quality control.",
    about_m3_title: "Digitalization",
    about_m3_desc:
      "Built an online ordering system and expanded distribution across Indonesia.",
    about_m4_title: "Peyek Andien",
    about_m4_desc:
      "Launched a new identity focusing on flavor innovation and a more modern customer experience.",

    // Contact
    contact_badge: "Contact Us",
    contact_title: "Ready to Serve You the Best Peyek",
    contact_desc:
      "We’re happy to help with your snack needs. Send a message or reach us via the channels below.",
    contact_direct: "Direct Contact",
    contact_po_note:
      "Orders must be placed via pre-order (PO) and cannot visit the production kitchen directly. Orders are placed at least 1 day in advance and our service is available 24 hours.",
    contact_address_label: "Address",
    contact_address_value: "📍Villa Mutiara Cikarang Blok H22/36, Ciantra, Cikarang Selatan, Bekasi",
    contact_phone_label: "Phone & WhatsApp",
    contact_phone_value: "📱+62 813-1839-9612",
    contact_email_label: "Email",
    contact_email_value: "halo@peyekit.id",
    contact_quote:
      "“We’re ready to provide the best peyek for family events, offices, and special hampers. Leave a message and we’ll contact you shortly.”",
    contact_quote_by: "— Peyek Andien Team",
    contact_whatsapp: "Contact via WhatsApp",

    // Produk
    products_badge: "Featured Products",
    products_title: "Favorite Peyek Variants for the Family",
    products_desc:
      "Each pack is carefully processed to maintain crispiness and authentic taste. Choose the variant that fits your moments best.",
    products_favorite: "Family favorite",
    products_order_now: "Order Now",
    prod_kacang_title: "Peanut Peyek",
    prod_kacang_desc:
      "A classic blend of crispy peyek batter combined with the savory taste of selected peanuts.",
    prod_hijau_title: "Mung Bean Peyek",
    prod_hijau_desc:
      "Unique savory peyek with crunchy mung beans in every bite.",
    prod_rebon_title: "Dried Shrimp Peyek",
    prod_rebon_desc:
      "Savory and crispy taste with the delightful aroma of real dried shrimp, bringing a touch of the sea.",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved === "id" || saved === "en") return saved;
    const browser =
      typeof navigator !== "undefined" ? navigator.language : "id";
    return browser?.toLowerCase().startsWith("en") ? "en" : "id";
  });
  const [dict, setDict] = useState(translations[lang] || translations.id);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch(`/locales/${lang}.json`, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load ${lang}.json`);
        const data = await res.json();
        if (!cancelled) {
          // JSON overrides fallback keys; fallback fills missing ones
          setDict({ ...(translations[lang] || translations.id), ...data });
        }
      } catch {
        if (!cancelled) {
          setDict(translations[lang] || translations.id);
        }
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [lang]);

  const value = useMemo(() => {
    const t = (key) => {
      const str = dict[key] ?? key;
      return str;
    };
    return { lang, setLang, t };
  }, [lang, dict]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  return useContext(LanguageContext);
}
