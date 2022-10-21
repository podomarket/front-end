import styled from "styled-components";

export const Logo = styled.div`
  padding: 1vh 1vw;
  text-align: left;
  width: 20vw;
  color: #f2f5f7;
  font-size: 30px;
`;

export const NavBar = styled.div`
  height: 4rem;
  width: 100vw;
  display: flex;
  background-color: #681170;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    position: fixed;
    z-index: 3;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  padding: 0 0.7vw;
  justify-content: space-evenly;
  align-items: center;
  text-transform: uppercase;
  list-style: none;
  font-weight: 600;
  & li a {
    margin: 0 0.7vw;
    text-decoration: none;
    transition: all ease-in-out 350ms;
    padding: 10px;
    color: #f2f5f7;
  }
  & li div {
    margin: 0 0.7vw;
    text-decoration: none;
    transition: all ease-in-out 350ms;
    padding: 10px;
    color: #f2f5f7;
  }
  & li p {
    margin: 0 0.7vw;
    text-decoration: none;
    transition: all ease-in-out 350ms;
    padding: 10px;
    color: #f2f5f7;
  }
  & li a:hover {
    color: #000;
    background-color: #fff;
    padding: 10px;
    border-radius: 50px;
  }
  & li {
    position: relative;
  }
  & li a:hover::before {
    width: 80%;
  }
  @media screen and (max-width: 800px) {
    background: #053742;
    position: fixed;
    opacity: 1;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    clip-path: circle(50px at 90% -20%);
    -webkit-clip-path: circle(50px at 90% -10%);
    transition: all 1s ease-out;
    pointer-events: none;
  }
`;
export const LogInOutButton = styled.button`
  padding: 0.6rem 0.8rem;
  margin-left: 2vw;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: 1.5px solid #f2f5f7;
  border-radius: 2em;
  font-weight: 600;
  &:hover {
    color: #fff;
    background-color: #2e0533;
    border: 1.5px solid #2e0533;
    transition: all ease-in-out 350ms;
  }
`;
export const Hamburger = styled.div`
  display: none;
  & div {
    width: 30px;
    height: 3px;
    background: #f2f5f7;
    margin: 5px;
    transition: all 0.3s ease;
  }
`;
