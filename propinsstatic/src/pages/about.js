import React, { Component } from "react";

import { Button, Modal, Col, Row, Carousel } from "antd";
import { Card } from "react-bootstrap";
import { WhatsAppOutlined } from "@ant-design/icons";
import icon from "D:/Propins/Propins 2022/propinsmomentaneo/propinsstatic/src/utils/images.js";
import AliceCarousel from "react-alice-carousel";
import utilFunc from "D:/Propins/Propins 2022/propinsmomentaneo/propinsstatic/src/utils/utilsFunc.js";
import { listOfData } from "./Testimonios";

import { Helmet } from "react-helmet";

export class about extends Component {
  constructor(props) {
    super(props);

    let ganancia = Math.round(200000000 * 0.003);

    this.state = {
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open6: false,
      montoAhorro: utilFunc.formatNumeros(ganancia),
      montoCalc: 400000000,
      porcentaje: 0.003,
      propiedad: utilFunc.formatNumeros(200000000),
      showModalSuscripcion: false,
      tipo_moneda: "CLP",
      galleryItems: listOfData.map((item, index) => (
        <div key={index} className="carousel-nuevo fondo-mobile2">
          <div className="">
            <br />

            <div>
              <Row className={"quedicen"}>
                <Col>¿Qué dicen nuestros clientes?</Col>
              </Row>
              <Row className={"quedicen1"}>
                <Col>{item.text}</Col>
              </Row>
              <Row className={"quedicen2"}>
                <Col>
                  <div className={"tyty"}>{item.name} </div>
                  <br />
                  <span className={"ytyty"}>{item.comuna}</span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      )),
    };
  }

  componentDidMount() {
    document.querySelector("body").scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <a
          href="https://wa.me/56978542618?"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="iconotrasnpare">
            <WhatsAppOutlined />
          </i>
        </a>
        <div className="container-fondo-home-comprar fondo-mobile">
          <div className="test-titulos">
            <div className="test-titulo1">Oportunidades exclusivas para tí</div>
            <div className="test-titulo2">
              {" "}
              Busca, encuentra y oferta 100% online.
            </div>
          </div>
          <div className="bajarbotonestest ">
            <Row>
              <Col sm="12" md="4" lg="2" className="mobilecenter">
                <a
                  href="https://wa.me/56978542618?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="comprar">Contáctanos</Button>
                </a>
              </Col>
            </Row>
          </div>
        </div>
        <section className="">
          <div className="soluciones-vender">Lo encontramos por ti!</div>

          <div className="lohacemorporti">
            Utilizamos la inteligencia de datos para encontrar tu propiedad
            ideal.
          </div>

          <Row>
            <Col md={{ span: 7, offset: 1 }} sm={{ span: 12 }}>
              <Card className={"mover-pasoss"}>
                <div className="icon-venderprop">
                  <Card.Img
                    className="center img1suscri"
                    variant="top"
                    src={icon.suscri1}
                  />
                </div>
                <div className="scrapingtitulo">Scrapping</div>
                <div className="scrapsubtitulo">
                  Recopilamos y ordenamos el 100% de la oferta vigente en el
                  mercado.
                </div>
              </Card>
            </Col>
            <Col md={{ span: 7, offset: 1 }} sm={{ span: 12 }}>
              <Card className={"center mover-pasoss"}>
                <div className="icon-venderprop">
                  <Card.Img
                    className="img1suscri center"
                    variant="top"
                    src={icon.suscri2}
                  />
                </div>

                <div className="scrapingtitulo">Perfilamiento</div>
                <div className="scrapsubtitulo">
                  Buscamos y analizamos las mejores propiedades vigentes que
                  coinciden con tus criterios de búsqueda.
                </div>
              </Card>
            </Col>
            <Col md={{ span: 7, offset: 1 }} sm={{ span: 12 }}>
              <Card className={"center mover-pasoss"}>
                <div className=" icon-venderprop">
                  <Card.Img
                    className="img1suscri center"
                    variant="top"
                    src={icon.suscri3}
                  />
                </div>

                <div className="movermatch scrapingtitulo">Match</div>
                <div className="scrapsubtitulo">
                  Te conectamos en tiempo real con la propiedad que buscas.
                </div>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="section-space-p1ex hideWEB2  bg-white">
          <Row className="soluciones-vender">
            <Col>¿Porque comprar tu casa con Propins?</Col>
          </Row>{" "}
          <Row>
            <Col md={{ span: 0 }} sm={{ span: 6 }}>
              <Carousel className="homecarousel1234">
                <div>
                  <h3>
                    <div className="tituloarrienda0">Compra asistida</div>
                    <Card className={"center"}>
                      <div className="mobilecenter">
                        <Card.Img
                          loading="lazy"
                          variant="top"
                          className="mobilecenter icon-venderprop"
                          alt="apunto con el dedo"
                          src={icon.paso1comprar}
                        />
                      </div>

                      <div className="textomobilearreindo center">
                        Proveemos asesoría comercial, financiera
                      </div>
                      <div className="textomobilearreindo center">
                        y legal durante todo el proceso de compra.
                      </div>
                    </Card>
                  </h3>
                </div>
                <div>
                  <h3>
                    <div className="tituloarrienda0">Digital</div>
                    <Card className={"center"}>
                      <div className="mobilecenter">
                        <Card.Img
                          loading="lazy"
                          variant="top"
                          className="mobilecenter icon-venderprop"
                          alt="Sonrio y miro pc"
                          src={icon.paso2comprar}
                        />
                      </div>

                      <div className="textomobilearreindo center">
                        Busca, encuentra y oferta 100% online.
                      </div>
                    </Card>
                  </h3>
                </div>
                <div>
                  <h3>
                    {" "}
                    <div className="tituloarrienda0">Transparente</div>
                    <Card className={"center"}>
                      <div className="mobilecenter">
                        <Card.Img
                          loading="lazy"
                          variant="top"
                          className="mobilecenter icon-venderprop"
                          alt="recostada leyendo"
                          src={icon.paso3comprar}
                        />
                      </div>

                      <div className="textomobilearreindo center">
                        Ocupamos nuestra tecnología para
                      </div>
                      <div className="textomobilearreindo center">
                        entregar información real y a tiempo.
                      </div>
                    </Card>
                  </h3>
                </div>
              </Carousel>
            </Col>
          </Row>
        </section>
        <section className="section-space-p1ex hide123  bg-white">
          <Row className="soluciones-vender">
            <Col>¿Porque comprar tu casa con Propins?</Col>
          </Row>{" "}
          <Row justify="">
            <Col lg={{ span: 6, offset: 2 }} sm={{ span: 12 }}>
              <Card className={"center mover-pasoss"}>
                <div className="mobilecenter ">
                  <Card.Img
                    loading="lazy"
                    variant="top"
                    className="mobilecenter icon-venderprop"
                    alt="apunto con el dedo"
                    src={icon.paso1comprar}
                  />
                </div>

                <div className="sol-vendere margin-sol-vendere">
                  <span className="dot1234"></span>Compra asistida
                </div>
                <div className="texto2planes-arriendo">
                  Proveemos asesoría comercial, financiera y legal durante todo
                  el proceso de compra.
                </div>
              </Card>
            </Col>
            <Col lg={{ span: 6, offset: 1 }} sm={{ span: 12 }}>
              <Card className={"center mover-pasoss"}>
                <div className="mobilecenter">
                  <Card.Img
                    loading="lazy"
                    className="icon-venderprop"
                    variant="top"
                    alt="saludo videollamada"
                    src={icon.paso2comprar}
                  />
                </div>

                <div className="sol-vendere margin-sol-vendere">
                  <span className="dot1234"></span>Digital
                </div>
                <div className="texto2planes-arriendo">
                  Busca, encuentra y oferta 100% online.
                </div>
              </Card>
            </Col>
            <Col lg={{ span: 6, offset: 1 }} sm={{ span: 12 }}>
              <Card className={"center mover-pasoss"}>
                <div className="mobilecenter">
                  <Card.Img
                    loading="lazy"
                    variant="top"
                    className="icon-venderprop"
                    alt="me relajo"
                    src={icon.paso3comprar}
                  />
                </div>

                <div className="sol-vendere margin-sol-vendere">
                  <span className="dot1234"></span>Transparente
                </div>
                <div className="texto2planes-arriendo">
                  Ocupamos nuestra tecnología para entregar información real y a
                  tiempo.
                </div>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="section-space-p1ex hideMOBILE  bg-white ">
          <AliceCarousel
            items={this.state.galleryItems}
            responsive={this.state.responsive}
            autoPlayDirection="rtl"
            autoPlay={false}
            renderPrevButton={true}
            renderNextButton={true}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={false}
            disableAutoPlayOnAction={true}
            showSlideInfo={false}
            keysControlDisabled={true}
            dotsDisabled={false}
            buttonsDisabled={true}
          />
        </section>
      </div>
    );
  }
}

export default about;
