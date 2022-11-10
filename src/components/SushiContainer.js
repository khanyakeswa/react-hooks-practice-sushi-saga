import React from 'react'
import MoreButton from './MoreButton'
import Sushi from './Sushi'

function SushiContainer({ sushi, setSushiSpread, sushiSpread, setPlates, plates }) {
  const renderedSushi = sushi.map((sushiObj) => {
    return <Sushi plates={plates} setPlates={setPlates} key={sushiObj.id} sushiObj={sushiObj} />
  })

  const moreButtonOnClick = () => {
    const newSpread = {
      start: sushiSpread.start + 4,
      end: sushiSpread.end + 4
    }
    setSushiSpread(newSpread)
    console.log(sushiSpread)
  }

  return (
    <div className='belt'>
      {renderedSushi}
      <MoreButton moreButtonOnClick={moreButtonOnClick}/>
    </div>
  )
}

export default SushiContainer
