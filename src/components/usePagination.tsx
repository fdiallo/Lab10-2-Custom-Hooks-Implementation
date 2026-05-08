import { useState } from "react";
import type { UsePaginationInputProps, UsePaginationReturnProps } from "../types";


function usePagination(
    { totalItems, itemsPerPage, initialPage }: UsePaginationInputProps
): UsePaginationReturnProps {

    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(0)
    const [itemsOnCurrentPage, setItemsOnCurrentPage] = useState(0)
    const [canNextPage, setCanNextPage] = useState(false)
    const [canPrevPage, setCanPrevPage] = useState(false)

    const setPage = (pageNumber: number) => { }
    const nextPage = () => { }
    const prevPage = () => { }

    return (

        {
            currentPage, totalPages, startIndex, endIndex,
            itemsOnCurrentPage, setPage, nextPage, prevPage, canNextPage, canPrevPage
        }

    )


}

export default usePagination;