import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/productSlice';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(event.target.value));
    };

    return (
        <input
            style={{width: "300px", height: "50px", marginBottom: "30px"}}
            type="text"
            placeholder="Search products..."
            onChange={handleSearch}
            className="p-2 border rounded w-full mb-4"
        />
    );
};

export default SearchBar;
