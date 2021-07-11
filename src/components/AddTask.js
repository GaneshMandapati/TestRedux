import { TextField, InputLabel, Input, Grid, Button } from "@material-ui/core";
import { useState } from "react";
import { connect } from "react-redux";
import { addTaskRequest } from "../redux/actions/actions";

function AddTask({ addTaskRequest }, props) {
  const today = new Date();
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskAssigne, setTaskAssigne] = useState("");
  const [show, SetshowtaskFrom] = useState(props);
  var newTask;
  const config = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjU4ODY5NzMsIm5iZiI6MTYyNTg4Njk3MywianRpIjoiNGIxYzk3ZmYtZjk2Yi00MjRiLTg5YTQtMDlkYTk4ZDVkZGVkIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.-eN6bCHhA3wq41wTyecN-LcJiDylUSxB5AuzE00yZCk`,
      Accept: "application/json"
    }
  };

  function handleTaskSubmit(e) {
    e.preventDefault();
    handleShowTaskForm();
    newTask = {
      assigned_user: "user_6beec459915f4507a8d2520e60e03c3e",
      task_date: taskDate,
      task_time: 1625924164333,
      is_completed: 0,
      time_zone: 1625924164333,
      task_msg: taskDescription
    };

    addTaskRequest(newTask);
  }

  const handleShowTaskForm = () => {
    SetshowtaskFrom((prevState) => !prevState);
  };
  return show ? (
    <div className="addTask">
      <Grid container spacing={4}>
        <Grid container item xs={12} direction="column">
          <InputLabel htmlFor="my-input">Task Description</InputLabel>
          <Input
            name="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </Grid>

        <Grid container item xs={6} direction="column">
          <TextField
            name="taskDate"
            label="Date"
            type="date"
            defaultValue="2021-07-12"
            InputLabelProps={{
              shrink: true
            }}
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
          />
        </Grid>
        <Grid container item xs={6} direction="column">
          <TextField
            label="Time"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300
            }}
            name="taskTime"
            value={taskTime}
            onChange={(e) => setTaskTime(e.target.value)}
          />
        </Grid>
        <Grid container item xs={12} direction="column">
          <InputLabel id="demo-simple-select-helper-label">
            Assign User
          </InputLabel>
          <select
            name="taskAssigne"
            value={taskAssigne}
            onChange={(e) => setTaskAssigne(e.target.value)}
          >
            <option value="Assigne 1">Assigne 1</option>
            <option value="Assigne 2">Assigne 2</option>
            <option value="Assigne 3">Assigne 3</option>
            <option value="Assigne 4">Assigne 4</option>
          </select>
        </Grid>
        <Grid container item xs={6} direction="column"></Grid>
        <Grid container item xs={6} direction="column">
          <Grid container spacing={4} m={2}>
            <Grid container item xs={6} onClick={handleShowTaskForm}>
              <Button style={{ backgroundColor: "white" }}>cancel</Button>
            </Grid>
            <Grid container item xs={6}>
              <Button
                style={{ backgroundColor: "#088647", color: "white" }}
                onClick={handleTaskSubmit}
              >
                save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <br />
    </div>
  ) : null;
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTaskRequest: () => dispatch(addTaskRequest())
  };
};

export default connect(null, mapDispatchToProps)(AddTask);
