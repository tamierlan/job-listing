import React from 'react';
import { Button, IconButton, makeStyles, Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: '14.5px',
    borderRadius: '5px',
    fontWeight: 600,
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: '#fff'
    }
  }
}))
export default (props) => {
  const classes = useStyles();
  const skills = [
    'JavaScript',
    'React',
    'Node',
    'Vue',
    'Firebase',
    'MongoDB',
    'SQL'
  ]
  return (
    <Dialog open={true} fullWidth>
      <DialogTitle>
        <Box>
          Post Job
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
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
        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box display='flex'>
            {skills.map(skill => (
              <Box className={classes.skillChip} key={skill}>{skill}</Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box color='red' width='100%' display='flex' alignItems='center' justifyContent='space-between'>
          <Typography variant='caption'>Required fields</Typography>
          <Button variant='contained' disableElevation color='primary'>
            Post job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}
