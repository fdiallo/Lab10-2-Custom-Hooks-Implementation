import { useMemo, useState } from "react";

function usePagination(
    { totalItems, itemsPerPage, initialPage = 1 }
): {
    currentPage: number,
    totalPages: number,
    startIndex: number,
    endIndex: number,
    itemsOnCurrentPage: number,
    setCurrentPage: (pageNumber: number) => void,
    setPage: (pageNumber: number) => void,
    nextPage: () => void,
    prevPage: () => void,
    canNextPage: Boolean,
    canPrevPage: Boolean
} {

    const [currentPage, setCurrentPage] = useState(initialPage)

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const endIndex = currentPage * itemsPerPage;
    const startIndex = endIndex - itemsPerPage;

    const [itemsOnCurrentPage, setItemsOnCurrentPage] = useState(0)

    const canNextPage = currentPage === totalPages
    const canPrevPage = currentPage === 1

    // Navigation functions
    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (

        {
            totalPages, nextPage, prevPage, canNextPage, canPrevPage
        }
    )

}

export default usePagination;