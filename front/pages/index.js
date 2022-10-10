import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import BoardList from "./board/boardList"

export default function Home() { 
  return (
    <div>
      <BoardList />
    </div>
  )
}
