import React from "react";
import { Row, Col, Card } from "antd";
import YouTube from "react-youtube";
export class Videos extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fondo-videos fondo-mobile">
          <div className="containecards">
            <Row className="card-topvideo" justify="space-between">
              <Col lg={{ span: 4 }} sm={{ span: 12 }}>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  className="card-unique-video"
                  cover={
                    <YouTube videoId="PZYMVYw36nI" className="largovideo" />
                  }
                >
                  <div className="tit-video">Inteligencia Artificial</div>
                  <div className="tit-video2">
                    Predecimos los tiempos de colocación para entregar seguridad
                    y confianza a nuestros clientes.
                  </div>
                </Card>
              </Col>
              <Col lg={{ span: 4 }} sm={{ span: 12 }}>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  className="card-unique-video"
                  cover={
                    <YouTube videoId="uTnBUMWI3zc" className="largovideo" />
                  }
                >
                  <div className="tit-video">Tasación</div>
                  <div className="tit-video2">
                    Analizamos toda la oferta del mercado en tiempo real,
                    entregando el valor preciso de tu activo sin costo para ti.
                  </div>
                </Card>
              </Col>
              <Col lg={{ span: 4 }} sm={{ span: 12 }}>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  className="card-unique-video"
                  cover={
                    <YouTube videoId="xyz3ImkT2tI" className="largovideo" />
                  }
                >
                  <div className="tit-video"> Oportunidades</div>
                  <div className="tit-video2">
                    Detectamos las opciones más rentables para invertir en
                    cuestión de minutos.
                  </div>
                </Card>
              </Col>
              <Col lg={{ span: 4 }} sm={{ span: 12 }}>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  className="card-unique-video"
                  cover={
                    <YouTube videoId="owThvDGi0qM" className="largovideo" />
                  }
                >
                  <div className="tit-video"> Personal Broker </div>
                  <div className="tit-video2">
                    Lo encontramos por ti. Utilizamos la inteligencia de datos
                    para encontrar tu propiedad ideal.
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
