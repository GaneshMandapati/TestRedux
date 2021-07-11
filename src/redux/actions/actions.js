import { ADD_TASK, FETCH_TASK, FETCH_TASK_ERROR } from "./actionTypes";
import axios from "axios";

const config = {
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjU4ODY5NzMsIm5iZiI6MTYyNTg4Njk3MywianRpIjoiNGIxYzk3ZmYtZjk2Yi00MjRiLTg5YTQtMDlkYTk4ZDVkZGVkIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.-eN6bCHhA3wq41wTyecN-LcJiDylUSxB5AuzE00yZCk`,
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

export const fetchTasksRequest = () => {
  return (dispatch) => {
    axios
      .get(
        "https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",
        config
      )
      .then((response) => {
        const tasks = response.data.results;
        console.log(tasks, "Hi");
        dispatch({ type: FETCH_TASK }, tasks);
      })
      .catch((error) => {
        //console.log(error.message);
      });
  };
};
export const addTaskRequest = (payload) => {
  return (dispatch) => {
    axios
      .post(
        "https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",
        payload,
        config
      )
      .then((response) => {
        dispatch({ type: ADD_TASK }, response.data);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };
};

export const fetchTask = () => {
  return {
    type: FETCH_TASK
  };
};

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask
  };
};
