import { Button, Tooltip } from "@material-ui/core";
import { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import store from "../redux/store";
const state = store.getState();
export default function Task() {
  const [show, SetshowtaskFrom] = useState(false);

  const handleShowTaskForm = () => {
    SetshowtaskFrom((prevState) => !prevState);
  };
  return (
    <div className="task">
      <div className="taskHeader">
        <div>
          <p> Tasks {state.length}</p>
        </div>
        <div>
          <Tooltip title="New Task" placement="top">
            <Button onClick={handleShowTaskForm}>
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
      {console.log(show)}
      {show ? <AddTask /> : null}
      <TaskItem />
    </div>
  );
}
