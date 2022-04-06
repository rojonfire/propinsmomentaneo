import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "./NavbarElements";
import { Row, Col } from "antd";

import logo from "D:/Propins/Propins 2022/propinsmomentaneo/propinsstatic/src/logoblanco1.png";

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abrir: false,
    };
    this.setState({
      abrir: !this.state.abrir,
    });
  }
  hola = () => {
    this.setState({
      abrir: !this.state.abrir,
    });
  };
  //{window.location.pathname}
  render() {
    return (
      <div>
        <div className="hideMOBILE">
          <div className="Navrojo">
            <NavLink to="/" activeStyle>
              <img src={logo} className="moverlogoprincipal" alt="logo" />{" "}
            </NavLink>
            <div className="centrarnavmenu">
              <NavLink to="/" activeStyle>
                PROPIETARIO
              </NavLink>
              <NavLink to="/propiedades" activeStyle>
                PROPIEDADES
              </NavLink>
              <NavLink to="/referir" activeStyle>
                REFERIR
              </NavLink>
              <NavLink to="/inmobiliarias" activeStyle>
                INMOBILIARIAS
              </NavLink>
            </div>
          </div>
        </div>
        <div className="hideWEB2">
          <div className="colornavegador">
            <NavLink to="/" activeStyle>
              <img src={logo} className="bajologito w-35vw" alt="logo" />
            </NavLink>
            <button className="yuiki" onClick={this.hola}>
              {" "}
              <MenuOutlined style={{ fontSize: "25px", color: "white" }} />
            </button>
          </div>
          <div
            className={
              this.state.abrir == false ? "none hideMOBILE" : "toglemeabrio"
            }
          >
            <Row className="espacio99" justify="center">
              <Col>
                <NavLink to="/" activeStyle>
                  PROPIETARIO
                </NavLink>
              </Col>
            </Row>
            <Row className="espacio99" justify="center">
              <Col>
                <NavLink to="/propiedades" activeStyle>
                  PROPIEDADES
                </NavLink>
              </Col>
            </Row>
            <Row className="espacio99" justify="center">
              <Col>
                <NavLink to="/referir" activeStyle>
                  REFERIR
                </NavLink>
              </Col>
            </Row>
            <Row className="espacio99" justify="center">
              <Col>
                <NavLink to="/inmobiliarias" activeStyle>
                  INMOBILIARIAS
                </NavLink>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
