export const categories = ['Sarees', 'Readymade', 'Kurtis', 'Dresses', 'Jewellery', 'Accessories'];

export const products = [
  { id: 1, name: 'Classic Zari Saree', category: 'Sarees', price: 1899, oldPrice: 2299, colors: ['Maroon', 'Gold'], sizes: [], stock: 10, visual: 'saree', description: 'A graceful zari saree with a softly luminous border and an easy, elegant drape.' },
  { id: 2, name: 'Floral Cotton Kurti', category: 'Kurtis', price: 899, oldPrice: 1099, colors: ['Rose', 'Ivory'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], stock: 18, visual: 'kurti', description: 'Lightweight cotton with a hand-drawn floral rhythm for everyday ease.' },
  { id: 3, name: 'Embroidered Festive Kurta Set', category: 'Readymade', price: 1499, oldPrice: 1799, colors: ['Wine', 'Blush'], sizes: ['S', 'M', 'L', 'XL'], stock: 8, visual: 'set', description: 'A polished kurta set detailed with delicate embroidery for celebrations.' },
  { id: 4, name: 'Pearl Jewellery Set', category: 'Jewellery', price: 699, oldPrice: 899, colors: ['Pearl'], sizes: [], stock: 24, visual: 'jewellery', description: 'A luminous pearl-inspired set with a quiet, modern presence.' },
  { id: 5, name: 'Elegant Printed Saree', category: 'Sarees', price: 1299, oldPrice: 1599, colors: ['Indigo', 'Rose'], sizes: [], stock: 14, visual: 'print', description: 'An expressive printed saree with a fluid border and soft hand-feel.' },
  { id: 6, name: 'Everyday Rayon Kurti', category: 'Kurtis', price: 799, oldPrice: 999, colors: ['Terracotta', 'Black'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], stock: 20, visual: 'rayon', description: 'A versatile rayon kurti designed for long, comfortable days.' },
  { id: 7, name: 'Traditional Gold-Tone Necklace', category: 'Jewellery', price: 599, oldPrice: 749, colors: ['Gold'], sizes: [], stock: 30, visual: 'necklace', description: 'A sculptural gold-tone necklace to bring warmth to a simple look.' },
  { id: 8, name: 'Festive Anarkali Dress', category: 'Dresses', price: 1699, oldPrice: 1999, colors: ['Burgundy', 'Emerald'], sizes: ['S', 'M', 'L', 'XL'], stock: 6, visual: 'anarkali', description: 'A sweeping anarkali silhouette with a festive, softly architectural fall.' },
  { id: 9, name: 'Handloom Border Dupatta', category: 'Accessories', price: 649, oldPrice: 799, colors: ['Ochre', 'Wine'], sizes: [], stock: 12, visual: 'dupatta', description: 'A textural handloom-inspired layer finished with a graphic border.' },
  { id: 10, name: 'Rose Gold Jhumka Pair', category: 'Jewellery', price: 749, oldPrice: 999, colors: ['Rose Gold'], sizes: [], stock: 16, visual: 'jhumka', description: 'Delicate jhumkas with a contemporary rose gold finish.' }
];

export const getProduct = (id) => products.find((product) => product.id === Number(id));
export const money = (value) => `₹${value.toLocaleString('en-IN')}`;
