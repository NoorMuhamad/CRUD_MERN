import './App.css';
import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TableData from './Component/Table';
import AddFrom from './Component/AddFrom';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: 200,
  },
}));
function App() {
  const [Show, setShow] = React.useState(false)
  const classes = useStyles();
  const onClicked=()=>{
    setShow(true)
  }
  return (
    <div className="App">
      <h1>CRUD OPERATION</h1>
      <Button variant="contained" color="primary" className={classes.button} onClick={onClicked}>
        ADD DATA
      </Button>
      { Show ? <AddFrom /> : null  }
      <TableData />
    </div>
  );
}
export default App;
