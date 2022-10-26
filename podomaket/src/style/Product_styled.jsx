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
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Container = styled.div`
  margin: auto;
`;
export const H1 = styled.h1`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 300px;
  font-size: 25px;
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
  margin-bottom: 10px;
  &:hover {
    color: #fff;
    background-color: #2e0533;
    border: 1.5px solid #2e0533;
    transition: all ease-in-out 350ms;
  }
`;
export const EditButton = styled.button`
  margin-left: 10px;
  padding: 0.4rem 0.8rem;
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
export const DeleteButton = styled.button`
  margin-left: 10px;
  padding: 0.4rem 0.8rem;
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
export const ImageBox = styled.div`
  text-align: center;
  margin: auto;
`;
export const Image = styled.img`
  width: 500px;
  margin: 20px auto;
`;
export const P = styled.div`
  margin: 10px 0 10px 0;
`;

export const Price = styled.div`
  margin-top: 5px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LikeAndComment = styled.div`
  display: flex;
`;
export const Like = styled.div`
  margin-right: 10px;
`;
export const CommentContainer = styled.section`
  width: 600px;
  margin: 20px auto 0 auto;
  position: relative;
  background: gray;
  color: black;
  padding: 15px;
  padding-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  float: right;
`;
export const CommentBody = styled.p`
  text-align: left;
  margin-left: 1.1em;
`;
export const CommentInfo = styled.div`
  text-align: right;
`;

export const CommentMore = styled.span`
  margin-right: 10px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.3s;
  &:hover {
    color: whitesmoke;
    transform: scale(1.2);
  }
`;

export const CommentDate = styled.div`
  width: 100px;
  float: left;
  color: #c9c9c9;
`;
export const CommentBtn = styled.button`
  width: 10rem;
  height: 2rem;
  margin: 0 auto;
`;
export const CommentInput = styled.input`
  resize: none;
  width: 500px;
  padding: 20px;
  background-color: #cfcfcf;
  border: none;
  outline: none;
  margin: auto;
`;
export const Commentinput = styled.textarea`
  width: 20rem;
  height: 10rem;
  border: none;
  outline: none;
  background-color: #5f5f5f;
  color: #fff;
`;
