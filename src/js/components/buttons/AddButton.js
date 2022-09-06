import React from 'react'

function AddButton(props) {
  return (
    <div id="addItemBtnContainer" className={`absolute right-2 z-50 ${props.openCreateItem? 'bottom--20': 'bottom-4'}`}>
      { !props.openCreateItem &&
        <button id="addItemBtn" onClick={() => props.setOpenCreateItem(true)} className={`rounded-full inline-flex text-center py-2 px-2 items-center w-15 h-15 my-2 circle-shadow opacity-95 ${props.bg}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      }
    </div>
  )
}

export default AddButton