import "../styles.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTasksRequest } from "../redux/actions/actions";

function TaskItem({ taskData, fetchTasksRequest }) {
  useEffect(() => {
    fetchTasksRequest();
  }, []);

  return (
    <div className="taskItem">
      {taskData &&
        taskData.map((task, index) => (
          <div key={index}>
            <div className="taskDesc">
              <p className="taskMsg">{task.task_msg}</p>
              <p className="taskDate">{task.task_date}</p>
              <p className="taskId">{task.id}</p>
            </div>
            <div className="taskItemControls"></div>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    taskData: state.tasks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasksRequest: () => dispatch(fetchTasksRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
