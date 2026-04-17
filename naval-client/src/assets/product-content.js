import sweatshirt from "./img/sweatshirt.png";
import lanyard from "./img/lanyard.png";
import cap from "./img/cap.png";
import sticker from "./img/sticker.png";
import totebag from "./img/totebag.png";
import tumbler from "./img/tumbler.png";
import keychain from "./img/keychain.png";
import classic from "./img/nuclassic.png";

const products = [
  {
    name: "pro-id-lanyard-kit",
    title: "Pro ID Lanyard Kit",
    category: "Daily Carry",
    price: "PHP 199",
    stock: "In stock",
    image: lanyard,
    content: [
      "A detachable lanyard set with a clear ID sleeve and secure clasp for daily access cards.",
      "Comfortable neck strap with reinforced stitching for long-term use.",
      "Useful for students who need fast ID access in class buildings and events.",
    ],
  },
  {
    name: "campus-tote-bag",
    title: "Eco Canvas Campus Tote",
    category: "Daily Carry",
    price: "PHP 459",
    stock: "In stock",
    image: totebag,
    content: [
      "A recycled-canvas tote designed for books, gadgets, and daily campus errands.",
      "Features reinforced shoulder straps and a wide opening that makes packing and access easy.",
      "Ideal for students who prefer one reliable everyday bag for classes and commute.",
    ],
  },
  {
    name: "insulated-study-tumbler",
    title: "Insulated Study Tumbler",
    category: "Hydration",
    price: "PHP 549",
    stock: "Low stock",
    image: tumbler,
    content: [
      "An insulated tumbler that keeps drinks hot or cold between classes.",
      "Built with a secure lid and slip-resistant finish for dependable carry in backpacks.",
      "Perfect for long study sessions, commutes, and on-campus activities.",
    ],
  },
  {
    name: "heritage-campus-tee",
    title: "Heritage Campus Tee",
    category: "Campus Wear",
    price: "PHP 329",
    stock: "In stock",
    image: classic,
    content: [
      "A breathable cotton tee with a relaxed fit made for all-day campus comfort.",
      "Designed with a clean heritage-inspired print that pairs well with everyday outfits.",
      "A versatile essential for class days, organization events, and weekend wear.",
    ],
  },
  {
    name: "varsity-fleece-sweatshirt",
    title: "Varsity Fleece Sweatshirt",
    category: "Campus Wear",
    price: "PHP 1,099",
    image: sweatshirt,
    stock: "Preorder",
    content: [
      "A heavyweight fleece sweatshirt with a cozy interior for cooler days and late classes.",
      "Structured cuffs and hem keep the silhouette neat while staying comfortable.",
      "Open for preorder with limited size runs per release batch.",
    ],
  },
  {
    name: "campus-vibe-sticker-pack",
    title: "Campus Vibe Sticker Pack",
    category: "Small Accessories",
    price: "PHP 119",
    stock: "In stock",
    image: sticker,
    content: [
      "A themed sticker pack printed on waterproof vinyl for laptops, bottles, and notebooks.",
      "Each set includes multiple design cuts inspired by campus life and student culture.",
      "Peel-and-stick finish removes cleanly with minimal residue.",
    ],
  },
  {
    name: "alumni-shield-keychain",
    title: "Alumni Shield Keychain",
    category: "Small Accessories",
    price: "PHP 69",
    stock: "In stock",
    image: keychain,
    content: [
      "A compact acrylic keychain with a polished finish inspired by campus identity.",
      "Includes a durable metal loop to secure keys, IDs, and bag tags.",
      "A lightweight daily accessory that adds school pride without bulk.",
    ],
  },
  {
    name: "classic-campus-cap",
    title: "Classic Campus Cap",
    category: "Campus Wear",
    price: "PHP 429",
    stock: "In stock",
    image: cap,
    content: [
      "A curved-brim cap made with breathable fabric and embroidered campus-inspired emblem.",
      "Includes an adjustable back strap for a secure and comfortable fit.",
      "A simple finishing piece for sunny class days and outdoor activities.",
    ],
  },
];

export default products;
