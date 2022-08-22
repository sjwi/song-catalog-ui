import React, { Component } from 'react'
import { SearchIcon } from '@heroicons/react/outline'

export default class Search extends Component {
  render() {
    return (
      <button
        type="button"
        className={`p-1 rounded-full hover:text-white focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white ` +  this.props.classes}
      >
        <span className="sr-only">Search catalog</span>
        <SearchIcon className="h-6 w-6 text-white hover:text-grey-300" aria-hidden="true" />
      </button>
    )
  }
}
