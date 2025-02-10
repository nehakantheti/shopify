import { useState } from "react";

function SearchBar({onSearch}){
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value)
    }

    return (
        <div className="search-container">
            <input
                type = "text"
                placeholder="Search products"
                value = {searchTerm}
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar;