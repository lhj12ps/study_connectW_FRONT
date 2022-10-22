import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

const BoardItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(list);
  }, []);

  const list = [
    {
      id: "001",
      u_id: "ingoo7722",
      boardText: "텍스트",
      createAt: "2022-10-02",
      comment: "0",
      hit: "0",
    },
    {
      id: "002",
      u_id: "web7722",
      boardText: "글 제목222",
      createAt: "2022-08-11",
      comment: "0",
      hit: "0",
    },
  ];

  const item = items.map((v, k) => {
    return (
      <tr key={k}>
        <td>
          'hello'
        </td>
        <td>{v.u_id}</td>
        <td>{v.createAt}</td>
        <td>{v.comment}</td>
        <td>{v.hit}</td>
      </tr>
    );
  });

  return <>{item}</>;
};

export default BoardItem;
