import React, { useEffect, useState } from 'react'
import '../../styles/grid.css'
import '../../styles/app.css'
import Footer from '../ui/footer/Footer'
import classes from './styles/WhereToGo.module.css'
import axios from 'axios'
import Card from '../ui/card/Card'
import Button from '../ui/button/Button'
import { Link } from 'react-router-dom'
import "./styles/WhereToGo.module.css"

function WhereToGo() {
  const site = 'http://127.0.0.1:8000/api/'
  const [sights, setSights] = useState([])
  const [events, setEvents] = useState([])
  const [cafes, setCafes] = useState([])
  const [hotels, setHotels] = useState([])
  async function getAll(count) {
    let response = await axios.get(site + "sights/sights/?count=" + count)
    setSights(response.data)
    // console.log(response.data)
    // response = await axios.get(site + "events/allSights/?count=" + count)
    // setEvents(response.data)
    // response = await axios.get(site + "cafes/allSights/?count=" + count)
    // setCafes(response.data)
    // response = await axios.get(site + "hotels/allSights/?count=" + count)
    // setHotels(response.data)
  }

  useEffect(() => {
    getAll(4)
  }, [])

  return (
    <div>
      <div className="container content">
        <div>
          <h1 className="w-100 text-center">Куда сходить</h1>
          <div className="row my-5 justify-content-center">
            
            <div className='col-sm-6 col-3 d-flex justify-content-center align-items-center my-1'>
              <Link to="sights" className={classes.blocklink}>
                <div className={`${classes.block} d-flex justify-content-center align-items-center`}>
                  <div className={`${classes.watch}`}>
                    <p>Что посмотреть</p><br />
                    <p className={classes.subtitle}>Достоприм., и т.д.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className='col-sm-6 col-3 d-flex justify-content-center align-items-center my-1'>
              <Link to="cafes" className={classes.blocklink}>
                <div className={`${classes.block} d-flex justify-content-center align-items-center`}>
                  <div className={`${classes.eat}`}>
                    <p>Где поесть</p><br />
                    <p className={classes.subtitle}>Кафе, бары, рестораны и т.д.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className='col-sm-6 col-3 d-flex justify-content-center align-items-center my-1'>
              <Link to="hotels" className={classes.blocklink}>
                <div className={`${classes.block} d-flex justify-content-center align-items-center`}>
                    <div className={`${classes.sleep}`}>
                      <p>Где отдохнуть</p><br />
                      <p className={classes.subtitle}>Гостиницы, отели, хостелы</p>
                    </div>
                </div>
              </Link>
            </div>

            <div className='col-sm-6 col-3 d-flex justify-content-center align-items-center my-1'>
              <Link to="/events" className={classes.blocklink}>
                <div className={`${classes.block} d-flex justify-content-center align-items-center`}>
                  <div className={`${classes.fun}`}>
                    <p>Где развлечься</p><br />
                    <p className={classes.subtitle}>Мероприятия</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>
          <h1 className="w-100 text-center my-5">Может быть интересно</h1>
          <div className="row justify-content-center">
            <h2 className="col-12 w-100 text-center">Достопримечательности</h2>
            {sights.map((sight) => 
              <Card post={sight}/>
            )}
            <div className="d-flex justify-content-center w-100 my-2">
              <Link to="sights">
                <Button type="outline">Показать другое</Button>
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <h2 className="col-12 w-100 text-center">Где развлечься</h2>
            {events.map((sight) => 
              <Card post={sight}/>
            )}
            <div className="d-flex justify-content-center w-100 my-2">
              <Link to="cafes">
                <Button type="outline">Показать другое</Button>
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <h2 className="col-12 w-100 text-center">Где поесть</h2>
            {cafes.map((sight) => 
              <Card post={sight}/>
            )}
            <div className="d-flex justify-content-center w-100 my-2">
              <Link to="hotels">
                <Button type="outline">Показать другое</Button>
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <h2 className="col-12 w-100 text-center">Где отдохнуть</h2>
            {hotels.map((sight) => 
              <Card post={sight}/>
            )}
            <div className="d-flex justify-content-center w-100 my-2">
              <Link to="/events">
                <Button type="outline">Показать другое</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WhereToGo
