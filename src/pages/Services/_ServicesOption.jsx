import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Box, Typography, Checkbox } from '@material-ui/core';
import { RadioButtonUnchecked, CheckCircle } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  teaser: {
    background: theme.palette.primary.main,
  },
  icons: {
    color: theme.palette.primary.main,
  },
  price: {
    color: theme.palette.primary.main,
  },
}));

const ServicesOption = props => {
  const classes = useStyles();
  return (
    <Paper>
      <Box display="flex">
        <Box className={classes.teaser}>
          <img src={props.src} alt={props.name} />
        </Box>
        <Box p={2}>
          <Typography variant="h2" gutterBottom>
            <b>{props.name}</b>
          </Typography>
          <Typography gutterBottom>{props.description}</Typography>
          <Typography className={classes.price}>
            <b>${props.flatFee.toFixed(2)}</b>
          </Typography>
        </Box>

        <Checkbox
          icon={<CheckCircle className={classes.icons} />}
          checkedIcon={<RadioButtonUnchecked className={classes.icons} />}
        />
      </Box>
    </Paper>
  );
};

export default ServicesOption;
