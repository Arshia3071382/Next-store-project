

import React from 'react'


export interface IChildren {
    children : React.ReactNode
}
function Container({children} : IChildren) {
  return (
    <div className='w-full mr-auto ml-auto pl-10 pr-10'>
        {children}
    </div>
  )
}

export default Container