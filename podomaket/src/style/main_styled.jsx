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
  cursor: pointer;
`;
export const Hr = styled.hr`
  margin: 0;
`;
export const Wrap = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  margin: 20px 0;
  & ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
  }
`;
export const List = styled.div`
  padding: 10px 20px;
  margin: 10px;
`;
export const Loading = styled.div`
  font-weight: 600;
  font-size: 100px;
  text-align: center;
`;
export const Product = styled.div`
  width: 200px;
`;
export const Thumbnail = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  border: 1px solid black;
  background-position: center;
  cursor: pointer;
  object-fit: cover;
`;
export const Title = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 160px;
  font-weight: 600;
  cursor: pointer;
  font-size: 20px;
`;
export const Price = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 120px;
  white-space: nowrap;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
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
