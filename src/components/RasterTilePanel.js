import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider, withStyles, makeStyles } from "@material-ui/core/styles";
import { theme } from '../styles/theme'


const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    zIndex: 10,
    padding: '4px 10px',
    margin: theme.spacing(2),

    color: theme.palette.primary.main,
    background: theme.palette.primary.background,
    opacity: theme.palette.primary.opacity,

    borderRadius: '8px'
  },
  checkbox: {
    color: theme.palette.primary.main,
  },
}));

function RasterTilePanel(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <FormControlLabel
          control={
            <Checkbox className={classes.checkbox}
              checked={props.isEnableBasemap}
              onChange={e => { props.handleChangeEnableBasemap(e.target.checked); }}
            />
          }
          label="ラスタータイルを重ねる"
        />
      </Box>
    </ThemeProvider>
  );
}

export default RasterTilePanel;
