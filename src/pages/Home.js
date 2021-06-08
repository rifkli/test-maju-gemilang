import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    CardImg,
    Card,
    Col,
    CardBody,
    CardTitle,
    Button,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Spinner,
    Modal,
  ModalHeader,
  ModalBody,
  } from "reactstrap";
import axios from "axios";

const Home =(props)=>{
    const urlHome="https://jsonplaceholder.typicode.com/albums/1/photos";
    const [home, setHome] = useState([]);
    const [loading, setLoading] = useState(false);   
    const [modal, setModal] = useState(false);
    const [detailId, setDetailId] = useState([]);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        setLoading(true);
        axios.get(urlHome).then((res) => {
            console.log(res)
          setHome(res.data);
          setLoading(false);  
        });

      }, []);

      if (loading) {
        return (
          <div>
            <Row className="justify-content-center mt-5">
              <Spinner type="grow" color="warning" />
            </Row>
            <Row className="justify-content-center mt-3 font-weight-bold">
              Loading...
            </Row>
          </div>
        );
      }
      const detail = (id) => {
        setLoading(true);
        const url = ` https://jsonplaceholder.typicode.com/albums/1/photos?id=${id}`;
        axios
          .get(url)
          .then((res) => {
            console.log("subscribe id", res.data);
            setDetailId(res.data);
            setModal(!modal);
            setLoading(false);
            
          })
          .catch((err) => console.log(err));
      };

return (
    <Container fluid className="popular">
        <Container id="service" data-aos="fade-up">
          <h1 className="section-title" style={{ color: "#003764" }}>
            <b>Popular Photos</b>
          </h1>
          <div className="section-title-divider "></div>
          <Row>
            {home.map((homes, i) => (
              <Col sm="3" key={i}>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    height="170px"
                    src={homes.thumbnailUrl}
                    alt={homes.title}
                  />
                <CardBody className="bg-dangers">
                    <Button
                      onClick={() => detail(homes.id)}
                      className="btn btn-primary btn-block"
                      id="button"
                    >
                      <b>Detail</b>
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}></ModalHeader>
            <ModalBody>
              {detailId.map((details) => (
                <Row key={details.id}>
                  <CardTitle style={{textAlign:"center"}}>
                    <p>
                      <strong>{details.title}</strong>
                    </p>
                  </CardTitle> 
                  {/* <CardImg
                    top
                    width="15%"
                    //src={subscribe.picture}
                    style={{ border: "0.5px solid grey" }}
                    alt="subscribtion"
                  /> */}
                  <CardBody style={{ marginBottom:"-25px" }}>
                    {/* <CardText style={{ textAlign: "justify" }}>
                      //<p>{subscribe.description}</p>
                    </CardText> */}
                    <Row>
                    <Col md="12">
                        <Button
                          //onClick={subscribtion}
                          className="btn btn-block"
                          id="button"
                        >
                          <b>Subscribe</b>
                        </Button>
                    </Col>
                    </Row>
                  </CardBody>
                </Row>
              ))}
            </ModalBody>
          </Modal>
        </Row>
        </Container>
      </Container>
)
}
export default Home;
