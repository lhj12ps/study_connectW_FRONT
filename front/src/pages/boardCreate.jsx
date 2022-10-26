import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 500px;
  li {
    list-style: none;
    border: 1px solid #000;
  }

  .title {
    margin-bottom: 10px;
  }

  .bodyText {
    margin-bottom: 10px;
    & > textarea {
      height: 200px;
      width: 100%;
      padding: 10px;
    }
  }

  input {
    padding: 5px 10px;
    width: 100%;
  }
`;

const CreateBoard = () => {
  const [getChange, setGetChange] = useState();
  const navigate = useNavigate();

  const handelChange = (e) => {
    const { id, value } = e.target;
    setGetChange({ ...getChange, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { boardTitle, boardText } = getChange;
    const result = await axios.post("http://localhost:4001/board/createBoard", {
      u_id: "222",
      boardTitle,
      boardText,
    });
    const data = result.data
    console.log('게시물 생성결과 : ',data.id)
    navigate(`/board/viewBoard/${data.id}`,{ state: { data:data } });
  };

  return (
    <Wrapper>
      <form>
        <ul>
          <li className="title">
            <label htmlFor="boardTitle"></label>
            <input
              type="text"
              id="boardTitle"
              placeholder="제목을 작성해주세요"
              onChange={handelChange}
            />
          </li>
          <li className="bodyText">
            <label htmlFor="boardText"></label>
            <textarea
              id="boardText"
              onChange={handelChange}
              placeholder="본문을 작성해주세요"
            />
          </li>
        </ul>
        <input type="submit" value="작성완료" onClick={handleSubmit} />
      </form>
    </Wrapper>
  );
};

export default CreateBoard;
