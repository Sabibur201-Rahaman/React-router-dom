// import React, { useEffect } from 'react'
// import React from 'react'
import { Outlet,NavLink, useLocation } from 'react-router-dom'
// import{useNavigate} from 'react-router-dom'
import {Row,Col,Card,ListGroup} from 'react-bootstrap'
export function About({company}) {
  // const navigate=useNavigate()
  const location=useLocation()
  console.log(location)
//   React.useEffect(()=>{
// navigate('/about/founder')
//   },[navigate])
  return (
    <Row>
      <p>this is About page</p>
      <Col sm={5}>
      <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>
        <NavLink to='company/webdeveloper'className='nav-link'>company</NavLink>
        </ListGroup.Item>
       
        <ListGroup.Item>
        <NavLink to='founder' className='nav-link'>Founder</NavLink>
        </ListGroup.Item>
       
      </ListGroup>
    </Card>
      </Col>
      <Col sm={7}></Col>
      <Outlet/>
    </Row>
  )
}

