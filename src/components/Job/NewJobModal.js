import React from 'react';
import { Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogAction } from '@material-ui/core';

export default (props) => {
  return (
    <Dialog open={true} fullWidth>
      <DialogTitle>Post Jobs</DialogTitle>
      <DialogContent>
        <Grid spacing={2} container>
          <Grid item xs={6}>
            <FilledInput fullWidth placeholder='Job title' disableUnderline />
          </Grid>
          <Grid item xs={6}>
            <Select fullWidth variant='filled' disableUnderline defaultValue='Full time'>
              <MenuItem value='Full time'>Full time</MenuItem>
              <MenuItem value='Part time'>Part time</MenuItem>
              <MenuItem value='Contact'>Contact</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput fullWidth placeholder='Company name' disableUnderline />
          </Grid>
          <Grid item xs={6}>
            <FilledInput fullWidth placeholder='Company URL' disableUnderline />
          </Grid>
          <Grid item xs={6}>
            <Select fullWidth variant='filled' disableUnderline defaultValue='Remote'>
              <MenuItem value='Remote'>Remote</MenuItem>
              <MenuItem value='In-office'>In-office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput fullWidth placeholder='Job Link' disableUnderline />
          </Grid>
          <Grid item xs={12}>
            <FilledInput fullWidth placeholder='Job description' disableUnderline multiline rows={3} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
