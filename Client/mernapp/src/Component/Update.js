import { React, useEffect, useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
// import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Update = () => {
  const [update, setupdate] = useState([]);
  const classes = useStyles();
  let name = Object.values(update)
  const { id } = useParams();
  console.log(name)
  let name1=name[0]
  
  const [Name, setname] = useState(name1);
  console.log(Name)
  const [Email, setemail] = useState("");
  const [Department, setdepartment] = useState("");
  const [City, setcity] = useState("");
  useEffect(() => {
    Axios.get(`http://127.0.0.1:3001/read/${id}`).then((response) => {
      setupdate(response.data);
    });
  }, []);
  function updateData(id) {
    console.log(Name, Email, Department, City);
    console.log(id);
    Axios.put("http://127.0.0.1:3001/updatedata", {
      id,
      Name,
      Email,
      Department,
      City,
    });
  }
  return (
    <>
      <h1>CRUD OPERATION</h1>
      <h2>UPDATE DATA</h2>
      <form className={classes.root} noValidate autoComplete="off">
      <label>Name</label>
        <input
          id="standard-basic"
          // label="Name"
          defaultValue={Object.values(update)[1]}
          onChange={(e) => {
            setname(e.target.value);}
          }
        />
        <label>Email</label>
        <input
          id="standard-basic"
          // label="Email"
          defaultValue={Object.values(update)[2]}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <label>Department</label>
        <input
          id="standard-basic"
          // label="Department"
          defaultValue={Object.values(update)[3]}
          onChange={(e) => {
            setdepartment(e.target.value);
          }}
        />
        <label>City</label>
        <input
          id="standard-basic"
          defaultValue={Object.values(update)[4]}
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={() => {
              updateData(Object.values(update)[0]);
            }}
          >
            UPDATE
          </Button>
        </Link>
      </form>
    </>
  );
};

export default Update;
