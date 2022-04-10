import React from 'react'

function Breadcrumb({}) {
  return (
    <nav className="flex border-b w-full py-3 mb-3" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      <li >
      <div className="flex items-center">
        <a href="#" className="inline-flex items-center text-sm font-medium text-blue-900 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white">
          Home
        </a>
        </div>
      </li>
      <li>
        <div className="flex items-center">
          <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          <a href="#" className="ml-1 text-sm font-medium text-blue-900 hover:text-blue-700 md:ml-2 dark:text-gray-400 dark:hover:text-white">Administration</a>
        </div>
      </li>
      <li>
        <div className="flex items-center">
          <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Logger Search</span>
        </div>
      </li>
    </ol>
  </nav>
  )
}

export default Breadcrumb