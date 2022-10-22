import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  box-shadow: 6px 6px 10px 3px #dfdfdf;
  width: 600px;
  margin: 100px auto;
  display: flex;
  height: 600px;
  border-radius: 10px;
  padding: 30px;
`;
export const Container = styled.div`
  margin: auto;
`;
export const Products = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProductTitleAndAuthor = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const H1 = styled.h1`
  font-size: 30px;
  margin-right: 10px;
  font-weight: 600;
`;
export const H4 = styled.h4`
  font-size: 20px;
  margin-right: 10px;
  margin-top: 10px;
  font-weight: 400;
`;
export const Button = styled.button`
  padding: 0.4rem 0.8rem;
  margin-left: 2vw;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: 1.5px solid #2e0533;
  border-radius: 2em;
  font-weight: 600;
  &:hover {
    color: #fff;
    background-color: #2e0533;
    border: 1.5px solid #2e0533;
    transition: all ease-in-out 350ms;
  }
`;
export const Image = styled.div`
  padding: 180px 20px;
  margin: 10px auto;
  text-align: center;
  background-color: gray;
`;
export const P = styled.div`
  margin: 20px 0 20px 0;
`;
export const LikeAndComment = styled.div`
  display: flex;
`;
export const Like = styled.div`
  margin-right: 10px;
`;
