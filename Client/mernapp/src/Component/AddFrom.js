import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const AddFrom = () => {
  const classes = useStyles();
  const [Name, setname] = useState("");
  const [Email, setemail] = useState("");
  const [Department, setdepartment] = useState("");
  const [City, setcity] = useState("");
//   console.log(name, email, department, city);
  function addData(){
    Axios.post("http://127.0.0.1:3001/insert" ,{Name,Email,Department,City})
  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Name"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        label="Email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        label="Department"
        onChange={(e) => {
          setdepartment(e.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        label="City"
        onChange={(e) => {
          setcity(e.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={()=>{addData()}}
      >
        SAVE
      </Button>
    </form>
  );
};

export default AddFrom;
