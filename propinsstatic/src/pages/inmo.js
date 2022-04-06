import React from "react";
import { WhatsAppOutlined } from "@ant-design/icons";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import icon from "D:/Propins/Propins 2022/propinsmomentaneo/propinsstatic/src/utils/images.js";

import { Row, Col } from "antd";

export class IndexInmo extends React.Component {
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
        <Helmet>
          ‍<title>Herramientas aumentar ventas inmobiliarias</title>
          ‍
          <meta
            name="description"
            content="Dinamiza la demanda y aumenta la visibilidad de tus proyectos inmobiliarios"
          />
        </Helmet>
        <section className="container-fondo-home-inmo fondo-mobile">
          <div className="test-titulos">
            <div className="test-titulo1">
              Dinamiza la demanda y aumenta la visibilidad de tus proyectos
            </div>
            <div className="test-titulo2">
              ¿Sabías que el boca a boca es 10 veces más eficaz que la
              publicidad tradicional?
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
                  <button className="btn-home-inmo">Contáctanos</button>
                </a>
              </Col>
            </Row>
          </div>
        </section>

        <section className="bg-info">
          <Row justify="center">
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
              className="px-6rem lineasborde text-center gutter-row"
            >
              <div className="py-1rem">
                <div className="Numero">
                  <CountUp start={0} end={300} delay={0} duration={7}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />%
                      </div>
                    )}
                  </CountUp>
                </div>
                <div className="txt-inmobiliaria-featured">
                  {" "}
                  Aumenta la probabilidad de conversión si es referido
                </div>
              </div>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
              className="px-6rem lineasborde text-center gutter-row"
            >
              <div className="py-1rem">
                <div className="Numero">
                  {" "}
                  <CountUp start={0} end={81} delay={0} duration={7}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />%
                      </div>
                    )}
                  </CountUp>
                </div>
                <div className="txt-inmobiliaria-featured">
                  {" "}
                  De los clientes de las inmobiliarias usó alguna herramienta
                  digital para su búsqueda
                </div>
              </div>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
              className="px-6rem text-center gutter-row"
            >
              <div className="py-1rem">
                <div className="Numero">
                  {" "}
                  <CountUp start={0} end={79} delay={0} duration={7}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />%
                      </div>
                    )}
                  </CountUp>
                </div>
                <div className="txt-inmobiliaria-featured">
                  {" "}
                  De los clientes requiere vender su propiedad para comprarse
                  una nueva
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section className="section-space-p1ex hideMOBILE bg-white">
          <Row className="soluciones-inmo">
            <Col>Soluciones</Col>
          </Row>
          <Row justify="space-around">
            <Col md={12} lg={8} className="px-6rem">
              <div className="mb-3rem">
                <img
                  className="icon-item21"
                  variant="left"
                  src={icon.logomanoainmo}
                />
              </div>
              <div className="sol-ventacol-titulo mb-3rem">
                Venta colaborativa
              </div>
              <div className="soluciones-ventacol">
                Integramos y automatizamos el sistema de referidos para ampliar
                exponencialmente tú fuerza de ventas.
              </div>
            </Col>
            <Col md={12} lg={8} className="px-6rem">
              <div className="mb-3rem">
                <img
                  className="icon-item21"
                  variant="left"
                  src={icon.logocamarainmo}
                />
              </div>
              <div className="sol-ventacol-titulo mb-3rem">
                Sala de venta virtual
              </div>
              <div className="soluciones-ventacol">
                Llevamos tus salas de venta a clientes potenciales de forma
                interactiva, a cualquier hora, lugar y etapa del proyecto.
              </div>
            </Col>
            <Col md={12} lg={8} className="px-6rem">
              <div className="mb-3rem">
                <img
                  className="icon-item21"
                  variant="left"
                  src={icon.logoestreainmo}
                />
              </div>
              <div className="sol-ventacol-titulo mb-3rem">
                Recibo de propiedades usadas
              </div>
              <div className="soluciones-ventacol">
                Mejoramos la experiencia de tus clientes y aumentamos tus ventas
                gestionando (sin costo) la venta de las propiedades usadas de
                los compradores de tus proyectos.
              </div>
            </Col>
          </Row>
        </section>

        <section className="section-space-p1ex hideWEB2 hide-ipad bg-white">
          <Row className="">
            <Col className="center soluciones-inmo text-center">Soluciones</Col>
          </Row>
          <Row>
            <Col className="">
              <img
                className="icon-item2"
                variant="top"
                src={icon.logomanoainmo}
              />

              <div className="center text-center sol-ventacol-titulo">
                Venta colaborativa
              </div>
              <div className="soluciones-ventacol center text-center">
                Integramos y automatizamos el sistema de referidos para ampliar
                exponencialmente tú fuerza de ventas.
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="icon-item2"
                variant="top"
                src={icon.logocamarainmo}
              />

              <div className=" center text-center sol-ventacol-titulo">
                Sala de venta virtual
              </div>
              <div className="soluciones-ventacol">
                Llevamos tus salas de venta a clientes potenciales de forma
                interactiva, a cualquier hora, lugar y etapa del proyecto.
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="icon-item2"
                variant="top"
                src={icon.logoestreainmo}
              />

              <div className=" center text-center sol-ventacol-titulo">
                Recibo de propiedades usadas
              </div>
              <div className=" center text-center soluciones-ventacol">
                Mejoramos la experiencia de tus clientes y aumentamos tus ventas
                gestionando (sin costo) la venta de las propiedades usadas de
                los compradores de tus proyectos.
              </div>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

export default IndexInmo;
