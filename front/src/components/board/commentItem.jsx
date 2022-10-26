import axios from "axios";
import styled from "styled-components";
import { useState } from "react";

const CommentStyle = styled.ul`
  width: 100%;
  font-size: 14px;
  list-style: none;
  li {
    width: 100%;
    padding: 10px;
    border: 1px solid #000;
  }
  span {
    margin-right: 10px;
  }
  div {
    margin-bottom: 5px;
  }
  input:focus {
    outline: none;
  }
`;

const CommentItem = ({ data, setUpdate }) => {
  const [values, setValues] = useState();
  const [commentUpdate, setCommentUpdate] = useState(false);

  // 수정버튼
  const handleClick = () => {
    setCommentUpdate(true); // input으로 변환
  };

  // 삭제버튼
  const handleDel = async (e) => {
    const id = data.id;
    const boardId = data.boardId;
    try {
      const response = await axios.post(
        `http://localhost:4001/board/deleteComment`,
        { id, boardId }
      );
      if (response.data.result == 1) {
        setUpdate(true);
      }
    } catch (e) {
      console.log("commentItem handleDel : ", e.message);
    }
  };

  // 수정내용인식
  const handleChange = (e) => {
    setValues(e.target.value);
  };

  // 수정완료
  const handleInputUpdate = async (e) => {
    setCommentUpdate(false); // input 숨기기
    setValues("");
    const id = data.id;
    const boardId = data.boardId;
    const commentText = values;
    try {
      const response = await axios.post(
        `http://localhost:4001/board/updateComment`,
        { id, boardId, commentText }
      );
      if (response.data.result == 1) {
        setUpdate(true);
      }
    } catch (e) {}
  };

  // 수정취소
  const handleCancel = () => {
    setCommentUpdate(false); // input 숨기기
  };

  return (
    <CommentStyle>
      <li key={data.id}>
        {!commentUpdate ? (
          <>
            <div style={{ fontSize: "12px" }}>
              <span>{data.u_id}</span>
              <span>{data.createdAt.split("T")[0]}</span>
            </div>
            <div>
              <span>{data.commentText}</span>
            </div>
            <div style={{ fontSize: "12px", marginBottom: "0px" }}>
              <span onClick={handleClick}>수정</span>
              <span onClick={handleDel}>삭제</span>
            </div>
          </>
        ) : (
          <>
            <div></div>
            <div>
              <input
                type="text"
                onChange={handleChange}
                value={values}
                style={{
                  width: "100%",
                  height: "30px",
                  marginBottom: "5px",
                  borderBottom: "1px solid #000",
                }}
              />
            </div>
            <div>
              <span onClick={handleInputUpdate}>수정완료</span>
              <span onClick={handleCancel}>수정취소</span>
            </div>
          </>
        )}
      </li>
    </CommentStyle>
  );
};

export default CommentItem;
