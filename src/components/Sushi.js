import React, { useState } from 'react'

function Sushi({ sushiObj, setPlates, plates }) {
  const [plateUsed, setPlateUsed] = useState(false)

  const eatHandler = (e) => {
    let budget = 200 - plates.reduce((partialSum, a) => partialSum + a, 0)
    if (
      !plateUsed &&
       budget > sushiObj.price
    ) {
      setPlateUsed(true)
      setPlates([...plates, sushiObj.price])
    }
  }

  return (
    <div className='sushi'>
      <div className='plate' onClick={eatHandler}>
        {/* Tell me if this sushi has been eaten! */}
        {plateUsed ? null : (
          <img src={sushiObj.img_url} alt={sushiObj.name} width='100%' />
        )}
      </div>
      <h4 className='sushi-details'>
        {sushiObj.name} - ${sushiObj.price}
      </h4>
    </div>
  )
}

export default Sushi
