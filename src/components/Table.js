import { React, useState } from 'react'

function Table({ plates }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className='empty-plate' style={{ top: -7 * index }} />
  ))
  // const [platesSum, setPlatesSum] = useState(0)

  // const [budget, setBudget] = useState(
  //   200 - plates.reduce((partialSum, a) => partialSum + a, 0)
  // )

  return (
    <>
      <h1 className='remaining'>You have: ${200 - plates.reduce((partialSum, a) => partialSum + a, 0)} remaining!</h1>
      <div className='table'>
        <div className='stack'>{emptyPlates}</div>
      </div>
    </>
  )
}

export default Table
