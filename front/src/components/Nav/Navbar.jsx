import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  color: #000;
  border-bottom: 1px solid #d7d7d7;
  margin-bottom: 5px;
  background: #ffabe1;
  z-index: 10;
  position: fixed;

  .navDiv {
    font-size: 14px;
    font-family: "Poppins-Medium";
    height: 100%;
    & > ul {
      display: flex;
      justify-content: space-around;
      list-style: none;
      height: 100%;

      & > li {
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="navDiv">
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/board/boardList">Board</Link>
            </li>
            <li>
              <Link to="/join">Join</Link>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
