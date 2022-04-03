import React, { useEffect, useState } from 'react'
import '../../styles/app.css'
import Button from '../ui/button/Button'
import Card from '../ui/card/Card'
import Footer from '../ui/footer/Footer'
import classes from './styles/Main.module.css'
import axios from 'axios'
import CardWithoutImg from '../ui/cardWithoutImg/CardWithoutImg'

function Main() {

  const [popularPeoples, setPopularPeoples] = useState([])
  const [interestingFacts, setInterestingFacts] = useState([])

  async function getPopularPeoples() {
    const response = await axios.get("http://127.0.0.1:8000/api/main/popularPeoples")
    setPopularPeoples(response.data)
  }

  async function getInterestingFacts() {
    const response = await axios.get("http://127.0.0.1:8000/api/main/interestingFacts")
    setInterestingFacts(response.data)
  }

  useEffect(() => {
    getPopularPeoples()
  }, [])
  useEffect(() => {
    getInterestingFacts()
  }, [])
  return (
    <div>
      <div className={classes.welcome_img}>
        <div className="container h-100">
          <div className={classes.welcome_block}>
            <h1 className={classes.welcome_title}>Добро пожаловать в Тобольск!</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className={classes.content}>
          <h1 className='my-5 text-center'>Впервые в Тобольске?</h1>
          <div className={classes.historybtn}>
            <Button>Прочитай историю города!</Button>
          </div>
          <div className='row justify-content-center text-center my-5'>
            <h1>Интересные факты о Тобольске</h1>
            <div className="row justify-content-center align-items-center my-1">
              {interestingFacts.map((card) => 
                <CardWithoutImg post={card} key={card.pk}/>
              )}
            </div>
          </div>
          <div className='row justify-content-center text-center my-5'>
            <h1>Известные люди из Тобольска</h1>
            <div className="row justify-content-center align-items-center my-1">
              {popularPeoples.map((card) =>
                <Card post={card} key={card.pk}/>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
