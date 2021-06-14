import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(56),
      height: theme.spacing(6),
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
  },
  item: {
    marginLeft: theme.spacing(2),
  }
}));

export default function PaginationBar(props) {
  const [page, setPage] = useState(props.page);
  const classes = useStyles();

  const handleChange = (event, value) =>{
    setPage(value);
  }

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Pagination count={props.count} page={page} shape="rounded" color="secondary" onChange={handleChange}/>
        <Typography color="secondary" className={classes.item}>Page: {page}</Typography>
      </Paper>
    </div>
  );
}
