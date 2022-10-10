import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";
import BoardItem from "./boardItem";

const Wrapper = styled.div`
  table {
    width: 500px;
    border-collapse: collapse;
    tr,
    th,
    td {
      border: 1px solid #000;
      text-align: center;
    }
  }
`;

const BoardList = () => {
  return (
    <Wrapper>
      <div>
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
          <tbody>
            <BoardItem />
          </tbody>
        </table>
        <div>
          <button>
            <Link href="board/createBoard">글작성</Link>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default BoardList;
