import React from 'react';
import {PaginationProps} from './types'
const Pagination: React.FC<PaginationProps> = ({ totalPages, onPageChange, page, PaginatorButtonCount }) => {
    const handlePageChange = React.useCallback((page) => {
      onPageChange(page)
    }, [])
    const pageNumbers = React.useMemo(() => {
      return Array.from({ length: PaginatorButtonCount }, (_, i) => {
        let shift = 1
        if (page > PaginatorButtonCount / 2) {
          shift = page - Math.floor(PaginatorButtonCount / 2)
        }
        if (page > totalPages - PaginatorButtonCount / 2) {
          shift = totalPages - PaginatorButtonCount + 1
        }
        return i + shift
      })
    }, [page])
  
    return (
      <nav
        aria-label="Page navigation"
        className="sticky left-0 mx-auto flex justify-center py-2"
      >
        <ul className="inline-flex items-center">
          {page > 1 && (
            <li>
              <button
                onClick={() => {
                  handlePageChange(page - 1)
                }}
                className="ml-0 block rounded-l-lg bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          )}
          {page > Math.floor(PaginatorButtonCount / 2) + 1 &&
            totalPages > PaginatorButtonCount && (
              <>
                <li>
                  <button
                    onClick={() => {
                      handlePageChange(1)
                    }}
                    className={`ml-0 block rounded bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 `}
                  >
                    {1}
                  </button>
                </li>
                <li className="cursor-default ml-0 block rounded bg-white  py-2 leading-tight text-gray-500">
                  ...
                </li>
              </>
            )}
          {pageNumbers.map((num, index) => {
            return (
              <li key={num}>
                <button
                  onClick={() => {
                    handlePageChange(num)
                  }}
                  className={`ml-0 block rounded bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${
                    num === page ? 'bold bg-gray-300 text-black ' : ''
                  }`}
                >
                  {num}
                </button>
              </li>
            )
          })}
          {page < totalPages - Math.floor(PaginatorButtonCount / 2) && (
            <>
              <li className="cursor-default ml-0 block rounded bg-white py-2 leading-tight text-gray-500">
                ...
              </li>
              <li>
                <button
                  onClick={() => {
                    handlePageChange(totalPages)
                  }}
                  className={`ml-0 block rounded bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 `}
                >
                  {totalPages}
                </button>
              </li>
            </>
          )}
  
          {page < totalPages && (
            <li>
              <button
                onClick={() => {
                  handlePageChange(page + 1)
                }}
                className="block rounded-r-lg bg-white  py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          )}
        </ul>
      </nav>
    )
  }
  export default Pagination