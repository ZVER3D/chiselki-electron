import { createStyles, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { withRouter } from 'react-router';
import Form from '../components/koshy/Form';
import Solution from '../components/koshy/Solution';
import Plot from '../components/Plot';
import Title from '../components/Title';
import { useStore } from '../stores/RootContext';

interface IProps {}

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

const Koshy = observer<IProps>(function KoshyComponent() {
  const classes = useStyles({});
  const { koshyStore } = useStore();

  return (
    <div className={classes.root}>
      <Title title="Решение задачи Коши" />
      <Form />
      {koshyStore.status === 'done' && koshyStore.data!.solution === 'table' ? (
        <Solution />
      ) : (
        <Plot title="Решения на графике" data={koshyStore.plotData} />
      )}
    </div>
  );
});

export default withRouter(Koshy);
