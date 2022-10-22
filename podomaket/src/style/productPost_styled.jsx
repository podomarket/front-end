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
export const UploadName = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 78%;
  color: #999999;
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
