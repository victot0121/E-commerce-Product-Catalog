import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../redux/productSlice';
import { RootState } from '../redux/store';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import '../styles.css'; // Import CSS styles

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const { items, searchQuery, status } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);

    const filteredProducts = items.filter((product: any) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <SearchBar />
            <div className="grid grid-cols-1 sm-grid-cols-2 md-grid-cols-3">
                {filteredProducts.map((product: any) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
