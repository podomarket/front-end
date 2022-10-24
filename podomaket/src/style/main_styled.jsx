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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const List = styled.div`
  padding: 10px 20px;
  margin: 10px;
`;
export const Product = styled.div`
  width: 200px;
`;
export const Thumbnail = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  border: 1px solid black;
  background-image: url("https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/free_myprofile/%EB%B0%80%EB%A6%AC%EC%BD%A9/%EB%B3%B4%EB%93%A4%EC%9D%B4.png");
  background-position: center;
  cursor: pointer;
  background-size: cover;
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
export const LikeAndReply = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LikeAndReplyFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Like = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Reply = styled.div`
  margin-left: 5px;
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
