import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled.div`
  background-color: #ffffff;
  max-width: 600px;
  width: 80vw;
  height: 40vh;
  border-radius: 10px;
  padding: 2rem 1rem;
  text-align: center;
`;
export const ModalH4 = styled.div`
  margin-bottom: 0;
  line-height: 1.5;
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 5px 50px 0 0;
`;
export const CancleButton = styled.div`
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
export const EditButton = styled.div`
  padding: 0.4rem 0.8rem;
  margin-left: 1vw;
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
export const ImageLayout = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  overflow: hidden;
  resize: none;
  margin: auto;
  margin-bottom: 10px;
  background-color: #ddd;
  border-radius: 100%;
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
export const TextArea = styled.textarea`
  width: 500px;
  height: 150px;
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
