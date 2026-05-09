import { useState } from "react";
import PaginationDemo from "./components/PaginationDemo"
import usePagination from "./components/usePagination";

function App() {

  const [items] = useState(Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`));
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState<number>(10);

   const {
        totalPages,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage,
    } = usePagination({ totalItems: items.length, itemsPerPage, initialPage: 1 })



// Calculate indices for slicing the data
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (

    <div style={{ padding: '20px' }}>
      <h2>My Paginated List</h2>

      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <span>Item per page: 
          <select style={{ marginLeft: "10px" }} value={itemsPerPage} onChange={(e) => setItemPerPage(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
             <option value="20">20</option>
          </select>
        </span>
        <span>Total items: {items.length}</span>
      </div>
      <ol>
        {currentItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>

      <PaginationDemo 
        totalItems={items.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  )
}

export default App
