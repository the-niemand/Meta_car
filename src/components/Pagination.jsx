import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      {pages.map((page, index) => {
        return (
          <div key={index} style={{ marginRight: '8px' }}>
            <button
              onClick={() => setCurrentPage(page)}
              style={{
                backgroundColor: page === currentPage ? '#EF4444' : 'transparent',
                color: page === currentPage ? '#FFFFFF' : '#000000',
                fontWeight: page === currentPage ? 'bold' : 'normal',
                border: page === currentPage ? 'none' : '1px solid #CBD5E0',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                outline: 'none',
                transition: 'background-color 0.3s',
              }}
            >
              {page}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Pagination;
