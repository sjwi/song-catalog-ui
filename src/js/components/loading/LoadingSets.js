import React from 'react'

export default function LoadingSets(props) {
  return (
    <div role="status" className="p-4 max-w shadow animate-pulse md:p-6 dark:border-gray-700 w-screen">
      {
      [...Array(30)].map((x,i) =>
        <div key={i} className="text-center py-6 my-4 border border-grey-300 rounded h-48 px-6 bg-white">
          <div className="h-3.5 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-6"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-3.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-3.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-3.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="h-3.5 mx-auto bg-gray-200 rounded dark:bg-gray-700 w-100 mt-6"></div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  )
}
