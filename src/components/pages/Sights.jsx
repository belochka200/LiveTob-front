import React, { useState, useEffect }from 'react'
import '../../styles/grid.css'
import '../../styles/app.css'
import Footer from '../ui/footer/Footer'
import '../../styles/grid.css'
import axios from 'axios'
import Card from '../ui/card/Card'
import Button from '../ui/button/Button'

function Sights() {
  const site = 'http://127.0.0.1:8000/api/'
  const [sights, setSights] = useState([])
  const [filters, setFilter] = useState([])
  async function getSights(count) {
    const result = await axios.get(site + "sights/sights/?count=" + count)
    setSights(result.data)
  }
  async function getFilters() {
    const res_filters = await axios.get(site + "sights/allCategories/")
    setFilter(res_filters.data)
  }
  
  async function addSights(count) {
    const result = await axios.get(site + "sights/sights/?count=" + count)
    setSights([...sights, ...result.data])
  }
  useEffect(() => {
    getSights(9)
  }, [])
  useEffect(() => {
    getFilters()
  }, [])
  return (
    <div>
      <div className="container content">
        <div className="w-100 text-center">
          <h1>Достопримечательности</h1>
          {/* <div className="d-flex">
            {filters.map((filter) =>
              <p className=>{filter.category_name}</p>
            )}
          </div> */}
          <div className="row justify-content-center">
            {sights.map((post) =>
              <Card post={post} />
            )}
          </div>
          <div className="row justify-content-center">
              <Button onClick={() => addSights(9)}>Показать ещё</Button>
          </div> 
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sights
