import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  background: #ffabe1;
  z-index: 10;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-bottom: 1px solid #d7d7d7;

  .navDiv {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: "Poppins-Medium";
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="navDiv">
        <div>
          <Link href="/">Main</Link>
        </div>
        <div>
          <Link href="/login/">Login</Link>
        </div>
        <div>
          <Link href="/">Board</Link>
        </div>
        <div>
          <Link href="/join/">회원가입</Link>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
