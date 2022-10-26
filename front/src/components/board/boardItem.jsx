import { useNavigate } from "react-router-dom";

const BoardItem = ({ data }) => {
  const navigate = useNavigate();
  const dateNum = data.createdAt.split("T")[0];

  const handleClick = async () => {
    navigate(`/board/viewBoard/${data.id}`, { state: { data:data } });
  };
  return (
    <tr key={data.id}>
      <td onClick={handleClick}>{data.boardText}</td>
      <td>{data.u_id}</td>
      <td>{dateNum}</td>
      <td>0</td>
      <td>0</td>
    </tr>
  );
};

export default BoardItem;
