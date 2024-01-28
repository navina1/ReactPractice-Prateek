import React from 'react';
import useFetch from './useFetch';
import { useState } from 'react';

function Pagination() {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [page, setPage] = useState(1)
    console.log(data);
    const itemsPerPage = 5;

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    const totalLength = data?.length;
    const startIndex = (page-1)* itemsPerPage;
    const endIndex = (startIndex + itemsPerPage);
    const numOfPages = Math.ceil(data?.length / itemsPerPage);
    const currentData = data?.slice(startIndex, endIndex);
    const handlePageNext = () => {
        if (page == numOfPages) return
        setPage((prevPage) => prevPage + 1)
    }
    const handlePagePrev = () => {
        if (page === 1) return
        setPage((prev) => prev - 1)
    }
    return (
        <div>
            <h1>Pagination</h1>
            <div>
                {currentData.map((data, index) => (
                    <p>{data.title}</p>
                ))}
            </div>
            <div>
                <button onClick={handlePagePrev}>Prev</button>
                {page}
                <button onClick={handlePageNext}>Next</button>
            </div>
        </div>
    )
}

export default Pagination