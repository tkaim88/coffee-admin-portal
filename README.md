# ☕ Coffee Admin Portal

A modern React-based administrator portal for managing coffee shop products.  
This project was developed as part of the Moringa School Software Engineering Program.

---

# 🌐 Live Demo

🔗 Vercel Deployment:  
https://coffee-admin-portal-vc59.vercel.app/

🔗 GitHub Repository:  
https://github.com/tkaim88/coffee-admin-portal

---

# 📌 Project Description

Coffee Admin Portal is a Single Page Application (SPA) built with React and Vite that allows administrators to manage coffee shop products dynamically.

The application demonstrates modern frontend development concepts including:

- React Hooks
- State Management
- Component Reusability
- Client-side Routing
- Form Handling
- Dynamic Rendering
- Persistent Data Storage
- Responsive Design
- Component Testing

The portal enables users to:

- View products
- Search products
- Add products
- Edit product names
- Edit product prices
- Delete products

All data persists using browser localStorage.

---

# 🖼️ Screenshots

## Home Page

![Home Page](./public/screenshots/home-page.png)

---

## Shop Page

![Shop Page](./public/screenshots/shop-page.png)

---

## Admin Panel

![Admin Page](./public/screenshots/admin-page.png)

---

# 🚀 Features

## ✅ Landing Page
Displays information about the coffee shop administrator portal.

## ✅ Product Listing
Displays coffee products dynamically using React `.map()` rendering.

## ✅ Add Product
Allows administrators to add new products through a controlled React form.

## ✅ Edit Product Price
Allows administrators to update coffee prices dynamically.

## ✅ Edit Product Name
Allows administrators to rename products dynamically.

## ✅ Delete Product
Allows administrators to remove products from the list.

## ✅ Search Functionality
Filters products dynamically as the user types.

## ✅ Persistent Data
Products remain saved after refresh using localStorage.

## ✅ Responsive Design
Responsive grid layout works on desktop and mobile devices.

## ✅ Client-Side Routing
Implemented using React Router.

---

# 🛠️ Technologies Used

- React
- Vite
- JavaScript (ES6)
- React Router DOM
- CSS3
- HTML5
- localStorage API
- Jest
- React Testing Library

---

# 📂 Project Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductForm.jsx
│   └── SearchBar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   └── Admin.jsx
│
├── data/
│   └── products.js
│
├── __tests__/
│   └── Navbar.test.jsx
│
├── App.jsx
├── App.css
├── main.jsx
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/tkaim88/coffee-admin-portal.git
```

## 2. Navigate Into Project

```bash
cd coffee-admin-portal
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start Development Server

```bash
npm run dev
```

## 5. Open Browser

```bash
http://localhost:5173/
```

---

# 🧠 How The Application Works

## React Router

The application uses React Router for navigation between pages:

- `/` → Home Page
- `/shop` → Product Shop
- `/admin` → Admin Panel

This creates a seamless Single Page Application experience.

---

# 🧠 State Management

The application uses React `useState()` hooks to manage:

- Products
- Search input
- Form data

The state is lifted to `App.jsx` and passed through props to child components.

---

# 💾 Data Persistence

The project uses browser `localStorage` to simulate backend persistence.

This allows products to remain saved after page refreshes.

Example:

```js
localStorage.setItem("products", JSON.stringify(products));
```

---

# 🔍 Search Functionality

The search bar dynamically filters products using:

```js
filter()
```

and

```js
includes()
```

to create real-time product searching.

---

# ✏️ Product Editing

Administrators can:

- Edit product names
- Edit product prices

using dynamic React state updates with:

```js
map()
```

---

# 🗑️ Product Deletion

Products are removed using:

```js
filter()
```

which creates a new array excluding the deleted product.

---

# 🎨 Styling

The application uses custom CSS styling featuring:

- Coffee-bean color palette
- Responsive grid layout
- Modern product cards
- Interactive hover effects
- Responsive navigation

---

# 🧪 Testing

Basic component testing was implemented using:

- Jest
- React Testing Library

Example tested component:

- Navbar rendering test

Run tests with:

```bash
npm test
```

---

# 📈 Future Improvements

Future enhancements may include:

- Backend database integration
- Authentication system
- Dark mode
- Product image uploads
- Product categories
- Order management
- API integration
- User role permissions

---

# 👨‍💻 Author

### Thomas Komora

GitHub:  
https://github.com/tkaim88

Moringa School – Software Engineering Program

---

# 📄 License

This project is licensed under the xirtam License.

---

# 🙏 Acknowledgements

- Moringa School
- React Documentation
- Vite Documentation
- React Router Documentation