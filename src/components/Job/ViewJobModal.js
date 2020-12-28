import React from 'react';
import {
  CircularProgress,
  Button,
  IconButton,
  makeStyles,
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography } from '@material-ui/core';
  import { Close as CloseIcon } from '@material-ui/icons';

  export default props => (
    <Dialog open={true} fullWidth>
      <DialogTitle>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          Post Job
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
