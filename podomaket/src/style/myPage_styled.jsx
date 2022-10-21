import styled from "styled-components";
export const Wrap = styled.div`
  width: 600px;
  margin: 50px auto 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Profile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 1px solid black;
  background-image: url("https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/free_myprofile/%EB%B0%80%EB%A6%AC%EC%BD%A9/%EB%B3%B4%EB%93%A4%EC%9D%B4.png");
  background-position: center;
  background-size: cover;
`;
export const Main = styled.div`
  color: #000000;
  font-size: 18px;
  size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 600;
`;
export const Sub = styled.div`
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  size: 14px;
  margin-top: 0px;
  margin-bottom: 30px;
`;
export const Button = styled.button`
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: 1.5px solid #2e0533;
  border-radius: 2em;
  font-weight: 600;
  margin-bottom: 20px;
  &:hover {
    color: #fff;
    background-color: #2e0533;
    border: 1.5px solid #2e0533;
    transition: all ease-in-out 350ms;
  }
`;
