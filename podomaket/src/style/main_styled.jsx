import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  & h2 {
    font-size: 25px;
    font-weight: 600;
    margin-top: 10px;
  }
`;
export const ProductView = styled.div`
  background-color: #fff;
  border: none;
  display: flex;
  justify-content: space-between;
`;
export const H2Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  border: none;
  background-color: #fff;
  padding: 20px;
`;
export const Hr = styled.hr`
  margin: 0;
`;
export const List = styled.div`
  padding: 10px 20px;
  margin: 10px;
`;
export const NewPost = styled(Link)`
  text-decoration: none;
  border: none;
  padding: 0.6rem 0.8rem;
  margin-left: 2vw;
  font-size: 1rem;
  cursor: pointer;
  background-color: #681170;
  border: 1.5px solid #f2f5f7;
  border-radius: 2em;
  font-weight: 600;
  color: #f2f5f7;
  &:hover {
    color: #f2f5f7;
    background-color: #2e0533;
    border: 1.5px solid #2e0533;
    transition: all ease-in-out 350ms;
  }
`;
