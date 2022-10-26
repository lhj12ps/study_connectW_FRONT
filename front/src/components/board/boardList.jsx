import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import BoardItem from "./boardItem";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .tableBox {
    width: 80%;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    tr,
    th,
    td {
      border: 1px solid #000;
      text-align: center;
    }
  }
`;

const WriteBtn = styled.div`
  display: flex;
  justify-content: right;
  button {
    margin-top: 10px;
    padding: 5px;
  }
`;

const BoardList = () => {
  const [setItems, getSetItems] = useState();
  useEffect(() => {
    getDataHandler();
  }, []);

  const getDataHandler = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/board/boardList`);
      getSetItems(response.data);
    } catch (e) {}
  };

  const checkDB = () => {
    if (setItems !== undefined) {
      return setItems.map((v, i) => {
        return <BoardItem key={i} num={i} data={v} />;
      });
    } else {
    }
  };

  return (
    <Wrapper>
      <div className="tableBox">
        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>덧글</th>
              <th>hit</th>
            </tr>
          </thead>
          <tbody>{checkDB()}</tbody>
        </table>
        <WriteBtn>
          <button>
            <Link to="/board/createBoard">글작성</Link>
          </button>
        </WriteBtn>
      </div>
    </Wrapper>
  );
};

export default BoardList;
