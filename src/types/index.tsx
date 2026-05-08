

export interface UsePaginationInputProps {
    totalItems: number,
    itemsPerPage: number,
    initialPage: number
}

export interface UsePaginationReturnProps {
    currentPage: number,
    totalPages: number,
    startIndex: number,
    endIndex: number,
    itemsOnCurrentPage: number,
    setPage: (pageNumber: number) => void,
    nextPage: () => void,
    prevPage: () => void,
    canNextPage: Boolean,
    canPrevPage: Boolean
}

