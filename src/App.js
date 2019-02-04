import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import ReportForm from "./components/ReportForm"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    maxWidth: 700,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  card: {
    margin: 'auto',
    marginTop: 25,
    width: '50%'
  },
  button: {
    width: '100%',
    padding: 10
  }
});

function PaperSheet(props) {
  return (
    <div>
      <ReportForm/>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
