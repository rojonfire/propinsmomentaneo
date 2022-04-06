import { MenuOutlined } from "@ant-design/icons";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
    text-decoration: underline;
    text-underline-offset: 12px;
  }
  &:hover {
    color: white;
  }
`;

export const Bars = <MenuOutlined />;
