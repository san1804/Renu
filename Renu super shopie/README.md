# Renu Super Shopie

A no-backend e-commerce prototype for an Indian women's fashion and lifestyle store. It uses semantic HTML, CSS illustrations, ES modules, and localStorage for cart, wishlist, and demo orders.

## Run locally

Serve this folder over HTTP so browser modules work:

```text
python -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

## Architecture

- `js/products.js` contains Shopify-ready catalog data.
- `js/main.js` owns shared layout, product cards, wishlist, cart primitives, and localStorage keys.
- `js/shop.js`, `product.js`, `cart.js`, `wishlist.js`, and `checkout.js` own page behavior.
- No human photography or external product assets are used; visuals are CSS-generated textile placeholders.
