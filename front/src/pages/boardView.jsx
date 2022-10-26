import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentItem from "../components/board/commentItem";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 80%;
`;
const TableStyle = styled.table`
  width: 100%;
  border: 1px solid #000;
  border-collapse: collapse;
  td {
    padding: 5px;
    text-align: center;
  }
`;
const InputCommentStyle = styled.ul`
  width: 100%;
  font-size: 14px;
  list-style: none;
  li {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
    height: 50px;
    padding: 10px;
    border: 1px solid #000;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    margin-right: 10px;
    border-bottom: 1px solid #000;
    padding-bottom: 5px;
  }
  input:focus {
    outline: none;
  }
  button {
    height: 100%;
    width: 10%;
  }
`;

const BoardView = () => {
  const [commentValues, setCommentValues] = useState();
  const [commentListValues, setCommentListValues] = useState([]);
  const [update, setUpdate] = useState(false);

  const params = useParams();
  const id = params.id;

  const location = useLocation();
  const boardValues = location.state.data;

  // 덧글 목록을 만드는 함수
  const comment = () => {
    return commentListValues.map((v, i) => {
      return (
        <>
          <CommentItem key={i} data={v} setUpdate={setUpdate} />
        </>
      );
    });
  };

  // 실행하자마자 데이터를 가져옴
  useEffect(() => {
    getCommentHandler();
    setUpdate(false);
  }, [update]);

  // 해당 게시글의 모든 덧글을 가져옴
  const getCommentHandler = async () => {
    const response = await axios.post(
      `http://localhost:4001/board/viewComment/${id}`
    );
    const data = response.data;
    setCommentListValues(data);
    setCommentValues("");
  };

  // 덧글 입력 감지 함수
  const handleChange = (e) => {
    const { value } = e.target;
    setCommentValues(value);
  };

  // 덧글 입력 함수
  const handleClick = async () => {
    const response = await axios.post(
      `http://localhost:4001/board/createComment`,
      { commentText: commentValues, id: boardValues.id }
    );
    getCommentHandler();
  };

  return (
    <Wrapper>
      <div style={{ marginBottom: "10px" }}>
        <TableStyle key={boardValues.id}>
          <thead>
            <tr style={{ border: "1px solid #000" }}>
              <td>글번호</td>
              <td>글제목</td>
              <td>작성자</td>
              <td>작성일</td>
            </tr>
            <tr style={{ border: "1px solid #000" }}>
              <td>{boardValues.id}</td>
              <td>{boardValues.boardText}</td>
              <td>{boardValues.u_id}</td>
              <td>{boardValues.createdAt.split("T")[0]}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  border: "1px solid #000",
                  textAlign: "left",
                  padding: "20px 10px",
                }}
                colSpan="4"
              >
                {boardValues.boardText}
              </td>
            </tr>
          </tbody>
        </TableStyle>
      </div>
      <div>
        <div style={{ marginBottom: "10px" }}>
          <span style={{ marginRight: "10px" }}>덧글</span>
          <span>
            <Link to="/board/boardList">글목록</Link>
          </span>
        </div>
        <InputCommentStyle>
          <li>
            <input onChange={handleChange} value={commentValues} />
            <button onClick={handleClick}>입력</button>
          </li>
        </InputCommentStyle>
        {!commentListValues ? "" : comment()}
      </div>
    </Wrapper>
  );
};

export default BoardView;
