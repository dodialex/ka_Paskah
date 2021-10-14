import React from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'

const Gambarlah = () => {
    return (
        <div >

            <Row xs={1} md={2} style={row}>
                <Col >
                    <span style={col1}>
                        <img style={img1} src="https://cdn.pixabay.com/photo/2021/07/31/18/44/ellipse-6512786_960_720.jpg" width='115%' height='100%' />
                        <Button style={btn1}>MasterClass</Button>
                    </span>

                </Col>


                <Col>
                    <span style={col2}>
                        <img style={img2} src="https://cdn.pixabay.com/photo/2021/07/31/18/44/ellipse-6512786_960_720.jpg" width='115%' height='50%' />
                        <img style={img2} src="https://cdn.pixabay.com/photo/2020/11/08/00/17/waterfall-5722620_960_720.jpg" width='115%' height='50%' />
                    </span>

                </Col>
            </Row>














        </div >
    )
}

export default Gambarlah;
const btn1 = {
    marginTop: '-100px'
}

const row = {
    height: '50px'
}

const img1 = {
    marginLeft: '-15px',
}

const img2 = {
    marginLeft: '-15px',
}

const col1 = {
    backgroundColor: 'blue',
    height: '800%',
    width: '60%'
}
const col2 = {
    backgroundColor: 'green',
    height: '800%',
    width: '40%'

}
// const col3 = {
//     backgroundColor: 'blue'
// }
const col4 = {
    backgroundColor: 'red'
}
