import { createStyles, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { withRouter } from 'react-router';
import Form from '../components/interpolation/Form';
import InrerpolationPlot from '../components/interpolation/InterpolationPlot';
import Title from '../components/Title';
import { useStore } from '../stores/RootContext';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(6),
    },
  })
);

const Interpolation = observer(function InterpolationComponent() {
  const classes = useStyles();
  const { interpStore } = useStore();

  return (
    <div className={classes.root}>
      <Title title="Интерполирование" />
      <Form />
      {interpStore.status === 'done' && <InrerpolationPlot />}
    </div>
  );
});

export default withRouter(Interpolation);
