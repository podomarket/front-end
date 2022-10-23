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
export const TextArea = styled.textarea`
  width: 500px;
  height: 250px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background-color: #dddddd;
  font-size: 16px;
  resize: none;
  margin-bottom: 10px;
  overflow: hidden;
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
export const ImageLayout = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  overflow: hidden;
  resize: none;
  margin: 10px auto;
  border: 1px solid #ccc;
`;
export const ImagePreview = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ImageLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: transparent;
`;

export const ImageInput = styled.input`
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
  margin-bottom: 10px;
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
