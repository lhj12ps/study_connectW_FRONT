import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import styled from "styled-components";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/home";
import Join from "./components/user/join";
import Board from "./pages/board"
import CreateBoard from "./pages/createBoard"

const BodyDiv = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <BodyDiv>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/board/boardList" element={<Board />}></Route>
          <Route path="/board/createBoard" element={< CreateBoard/>}></Route>
        </Routes>
      </BodyDiv>
    </>
  );
};

export default App;
