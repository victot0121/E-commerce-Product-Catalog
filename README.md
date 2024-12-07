# **E-commerce Product Catalog**

This is a responsive product catalog built for an e-commerce site as part of the Wingman Coding Challenge. The catalog fetches products from a public API, displays them in a grid or list layout based on the screen size, and includes live search functionality.

---

## **Features**

- **Responsive Design**:  
  - Desktop: Grid layout.  
  - Mobile: Single-column layout.
  
- **Product Details**:  
  - Displays product name, price, thumbnail image, and rating.

- **Live Search**:  
  - Real-time filtering of products based on their name.

- **State Management**:  
  - Utilizes Redux for efficient state management.

- **TypeScript Integration**:  
  - Type safety for API responses, Redux slices, and component props.

- **Optimized Performance**:  
  - React.memo and useMemo used to avoid unnecessary re-renders.

### **Bonus Features**
- Sorting functionality by price and rating.  
- Pagination for easy navigation of products.  
- Unit tests for critical components using Jest and React Testing Library.  
- Dark mode support.

---

## **Technologies Used**

- **Frontend Framework**: React with Vite.  
- **Styling**: Tailwind CSS.  
- **State Management**: Redux Toolkit.  
- **TypeScript**: For strong typing and improved developer experience.  
- **API**: [Fake Store API](https://fakestoreapi.com/products).  
- **Deployment**: Hosted on Vercel.

---

## **Demo**

- **Live URL**: [E-commerce Product Catalog](#) *(replace `#` with the live URL from Vercel)*  
- **GitHub Repository**: [GitHub Link](#) *(replace `#` with your GitHub repository URL)*  

---

## **Getting Started**

Follow these instructions to run the project locally:

### **1. Clone the Repository**

```bash
git clone <https://github.com/victot0121/E-commerce-Product-Catalog>
cd <E-commerce-Product-Catalog>
```

### **2. Install Dependencies**

Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:

```bash
npm install
```

### **3. Run the Development Server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## **Build and Deployment**

To build the project for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## **Project Structure**

```plaintext
src/
├── components/         # Reusable components like ProductCard and SearchBar.
├── pages/              # Application pages (e.g., HomePage).
├── redux/              # Redux slices and store setup.
├── styles/             # Tailwind CSS styles (or standard CSS if converted).
├── types/              # TypeScript interfaces and types.
└── App.tsx             # Main application entry.
```

---

## **API Details**

This project uses [Fake Store API](https://fakestoreapi.com/products) to fetch product data.

---

## **Customizations**

1. **Sorting**: Products can be sorted by price or rating.  
2. **Dark Mode**: Toggle between light and dark themes.  
3. **Pagination**: Displays a fixed number of products per page.

---

## **Testing**

Critical components and features are tested using Jest and React Testing Library. To run tests:

```bash
npm run test
```

---

## **Deployment**

The app is deployed on Vercel for easy access. The live link is available under the **Demo** section.

---

## **Contact**

For questions or feedback, please contact:  
- **Name**: [Your Name]  
- **Email**: [Your Email]  
- **LinkedIn**: [Your LinkedIn Profile]  

