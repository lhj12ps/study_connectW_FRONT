import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CreateBoard = () => {

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(e.target)
    const result = await axios.post("http://localhost:4001/board/createBoard",{user:"hello"})
  }

  return (
    <div>
      <form>
        <ul>
          <li>
            <label htmlFor="boardTitle"></label>
            <input
              id="boardTitle"
              className="boardTitle"
              type="text"
              placeholder="제목을 작성해주세요"
            />
          </li>
          <li>
            <label htmlFor="boardBody"></label>
            <input
              id="boardBody"
              className="boardBody"
              type="text"
              placeholder="본문을 작성해주세요"
            />
          </li>
        </ul>
        <input type="submit" value="작성완료" onClick={handleSubmit}/>
      </form>
    </div>
  );
};

export default CreateBoard;
