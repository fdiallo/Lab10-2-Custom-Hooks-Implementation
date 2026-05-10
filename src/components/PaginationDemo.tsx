
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