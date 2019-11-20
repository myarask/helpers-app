import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Box, ButtonBase, Typography, Checkbox } from '@material-ui/core';
import { RadioButtonUnchecked, CheckCircle } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  teaser: {
    background: theme.palette.primary.main,
  },
  teal: {
    color: theme.palette.primary.main,
  },
}));

const ServicesOption = props => {
  const classes = useStyles();
  return (
    <Paper>
      <ButtonBase onClick={props.onClick}>
        <Box display="flex">
          <Box className={classes.teaser}>
            <img src={props.src} alt={props.name} />
          </Box>
          <Box p={2}>
            <Typography variant="h2" component="h3" gutterBottom align="left">
              {props.name}
            </Typography>
            <Typography gutterBottom align="left">
              {props.description}
            </Typography>
            <Typography align="left" className={classes.teal}>
              <b>${props.flatFee.toFixed(2)}</b>
            </Typography>
          </Box>

          <Checkbox
            disabled
            checked={props.checked}
            checkedIcon={<CheckCircle className={classes.teal} />}
            icon={<RadioButtonUnchecked className={classes.teal} />}
          />
        </Box>
      </ButtonBase>
    </Paper>
  );
};

export default ServicesOption;
