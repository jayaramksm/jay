import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

 function DatePickers(props) {
     var abc ;
  const classes = useStyles();
 const Changehandlar=(e)=>{
console.log(e.target.value)
abc = e.target.value
  }
//   props.inputs(abc)
//   console.log(props.name)
 
  return (
    <form className={classes.container} noValidate>
      <TextField
      
      onChange={Changehandlar}
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <span onClick={()=>{props.inputs(abc)}}>ok</span>
    </form>

  );
  
}


export default DatePickers;