import React, { useState, useEffect } from "react";
import { Box, ThemeProvider, Grid, CircularProgress } from "@material-ui/core";
import theme from './theme/theme';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/Job/JobCard';
import NewJobNodal from './components/Job/NewJobModal';
import { firestore, app } from './firebase/config';

export default () => {
  const [ jobs, setJobs ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ newJobModal, setNewJobModal ] = useState(false);

  const fetchJobs = async () => {
    const req = await firestore
      .collection('jobs')
      .orderBy('postedOn', 'desc')
      .get();

      const tempJobs = req.docs.map((job) => ({...job.data(), id: job.id, postedOn: job.data().postedOn.toDate()}))
      setJobs(tempJobs);
      setTimeout(() => setLoading(false), 1000)

  }

  const postJob = async jobDetails => {
    await firestore.collection('jobs').add({
      ...jobDetails,
      postedOn: app.firestore.FieldValue.serverTimestamp()
    });
    fetchJobs();
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header openNewJobModal={() => setNewJobModal(true)} />
      <NewJobNodal closeModal={() => setNewJobModal(false)} newJobModal={newJobModal} postJob={postJob} />
      <Grid container justify='center'>
        <Grid item xs={10}>
          <SearchBar />
          {
            loading
            ? <Box display='flex' justifyContent='center'><CircularProgress /></Box>
            : jobs.map(job => <JobCard key={job.id} {...job} />)
          }
        </Grid>
      </Grid>
    </ThemeProvider>
  )
};
