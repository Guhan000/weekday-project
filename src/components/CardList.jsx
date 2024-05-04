import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../app/slice/jobs";

const CardList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  console.log(state)


  return (
    <div>
      <ul>
      </ul>
    </div>
  );
};

export default CardList;
