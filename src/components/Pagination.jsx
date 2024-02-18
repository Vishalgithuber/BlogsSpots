import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const { page, totalPages, handlerPageChange } = useContext(AppContext);

  const handlePrevious = () => {
    if (page > 1) {
      handlerPageChange(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      handlerPageChange(page + 1);
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 bg-[#6d45fc] text-white py-2.5 border-t-2 border-t-gray-300">
      <div className='flex item-center gap-x-3 w-11/12 max-w-2xl mx-auto'>
      {page !== 1 && (
        <button onClick={handlePrevious}
        className="border-2 border-gray-300 py-1 px-4 rounded-md"
        >
          Previous

        </button>
      )}
      {page !== totalPages && (
        <button onClick={handleNext}
        className="border-2 border-gray-300 py-1 px-4 rounded-md"
        >
          Next
        </button>
      )}

      <div  className="text-sm font-semibold ml-auto">
        Page {page} of {totalPages}
      </div>
      </div>
    </div>
  );
};

export default Pagination;
