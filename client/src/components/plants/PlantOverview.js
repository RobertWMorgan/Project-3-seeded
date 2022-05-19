import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const PlantOverview = () => {

  const [plants, setPlants] = useState([])
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    // !isUserAuth() && navigate('/login')

    const getPlants = async () => {
      try {
        const { data } = await axios.get('/api/plants')
        console.log(data)
        setPlants(data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getPlants()
  }, [])


  return (
    <section>
      {errors ?
        <p>Sorry, we had trouble growing the data!</p>
        :
        <div className='plants-container'>
          <Container className='bstrap-container'>
            <Row className='bstrap-row'>
              {plants.map(plant => {
                const { _id, name, image, sciName } = plant
                return (
                  <Col md='6' lg='4' xl='3' className='plant mb-5' key={_id}>
                    <div className='link-container'>
                      <Link to={`/plants/${_id}`} >
                        <Card className='card'>
                          {/* <div className='sciname-container'>
                        </div> */}
                          <Card.Img className='card-img' variant='top' src={image} />
                          <div className='middle'>
                            <div className='text'>{sciName}</div>
                          </div>
                          <Card.Body >
                            <Card.Title className='text-center mb-0 card-title'>{name}</Card.Title>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
      }
    </section >
  )
}


export default PlantOverview