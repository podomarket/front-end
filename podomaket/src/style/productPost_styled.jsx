import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  box-shadow: 6px 6px 10px 3px #dfdfdf;
  width: 600px;
  margin: 100px auto;
  display: flex;
  height: 600px;
  border-radius: 10px;
`;
export const Container = styled.div`
  margin: auto;
`;
export const Input = styled.input`
  width: 500px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background-color: #dddddd;
  font-size: 16px;
  resize: none;
  margin-bottom: 10px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 350px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background-color: #dddddd;
  font-size: 16px;
  resize: none;
  margin-bottom: 20px;
  overflow: hidden;
`;
export const CustomFile = styled.div`
  background-color: #eee;
  width: 500px;
  height: 30px;
  border: 1px solid #ccc;
  position: relative;
  z-index: 1;
  & span {
    font-family: Tahoma, Arial;
    font-size: 15px;
    display: block;
    padding: 5px 0 0 5px;
  }
  &:after {
    content: "파일 업로드";
    width: 100px;
    height: 30px;
    color: #fff;
    background-color: #535353;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    font-family: Tahmoa, Arial;
  }
`;
export const UploadName = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;
export const Label = styled.div`
  display: inline-block;
  padding: 0 10px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  margin-left: 10px;
`;
export const ButtonSet = styled.div`
  display: flex;
  justify-content: end;
`;
export const BackButton = styled(Link)`
  text-decoration: none;
  border: none;
  padding: 0.8rem 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #681170;
  border: 1.5px solid #f2f5f7;
  border-radius: 2em;
  font-weight: 600;
  color: #f2f5f7;
  margin-top: 10px;
  &:hover {
    color: #f2f5f7;
    background-color: #2e0533;
    border: 1.5px solid #2e0533;
    transition: all ease-in-out 350ms;
  }
`;
export const NewButton = styled(Link)`
  text-decoration: none;
  border: none;
  padding: 0.8rem 0.8rem;
  margin-left: 1vw;
  font-size: 1rem;
  cursor: pointer;
  background-color: #681170;
  border: 1.5px solid #f2f5f7;
  border-radius: 2em;
  font-weight: 600;
  color: #f2f5f7;
  margin-top: 10px;
  &:hover {
    color: #f2f5f7;
    background-color: #2e0533;
    border: 1.5px solid #2e0533;
    transition: all ease-in-out 350ms;
  }
`;
