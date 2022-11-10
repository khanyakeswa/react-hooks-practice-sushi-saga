import React, { useEffect, useState } from 'react'
import SushiContainer from './SushiContainer'
import Table from './Table'

const API = 'http://localhost:3001/sushis'

function App() {
  const [sushiArray, setSushiArray] = useState([])
  const [sushiSpread, setSushiSpread] = useState({
    start: 0,
    end: 4,
  })
  const [plates, setPlates] = useState([])


  const currentSushi = sushiArray.slice(sushiSpread.start, sushiSpread.end)

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((sushiData) => setSushiArray(sushiData))
  }, [])

  return (
    <div className='app'>
      <SushiContainer
        sushi={currentSushi}
        setSushiSpread={setSushiSpread}
        sushiSpread={sushiSpread}
        setPlates={setPlates}
        plates={plates}
      />
      <Table plates={plates} sushi={currentSushi} />
    </div>
  )
}

export default App
