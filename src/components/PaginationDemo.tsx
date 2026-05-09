import { useState } from "react";
import usePagination from "./usePagination";
import type { UsePaginationInputProps } from "../types";


function PaginationDemo({ totalItems, itemsPerPage, currentPage, onPageChange }) {

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];

  // Generate an array of page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

     return (
    <nav style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
      <button 
        disabled={currentPage === 1} 
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          style={{ fontWeight: currentPage === number ? 'bold' : 'normal' }}
        >
          {number}
          </button>
           ))}

      <button 
        disabled={currentPage === totalPages} 
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  );

}

export default PaginationDemo;



// import { useState } from "react";
// import usePagination from "./usePagination";
// import type { UsePaginationInputProps } from "../types";


// function PaginationDemo({ totalItems, itemsPerPage, currentPage, onPageChange }) {
//     // const [items] = useState(Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`));
//     // //const [currentPage, setCurrentPage] = useState(1);
//     // const itemsPerPage = 10;


//     const {
//         currentPage,
//         totalPages,
//         startIndex,
//         endIndex,
//         setPage,
//         nextPage,
//         prevPage,
//         canNextPage,
//         canPrevPage,
//     } = usePagination({ totalItems: items.length, itemsPerPage, initialPage: 1 });

    


//     //const data = [...Array(100).keys()]; // 100 items

//     ////const [items] = useState(Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`));
//     //// const itemsPerPage = 10;
//     const pageNumbers = [];

//     // Generate an array of page numbers
//     for (let i = 1; i <= totalPages; i++) {
//         pageNumbers.push(i);
//     }

//     // Calculate indices for slicing the data
//     const currentItems = items.slice(startIndex, endIndex);


//     // const currentItems = items.slice(startIndex, endIndex);

   

//     return (

//         <div style={{ padding: '20px' }}>
//             <h1>My Paginated List</h1>
//             <ul>
//                 {currentItems.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                 ))}
//             </ul>

//             <nav style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
//                 <button disabled={currentPage === 1} onClick={nextPage}>
//                     Previous
//                 </button>

//                 {pageNumbers.map(number => (
//                     <button key={number} onClick={() => setPage(number)} style={{ fontWeight: currentPage === number ? 'bold' : 'normal' }}>
//                         {number}
//                     </button>
//                 ))}

//                 <button disabled={currentPage === totalPages} onClick={prevPage}>
//                     Next
//                 </button>
//             </nav>

//         </div>

//     )



// }

// export default PaginationDemo;