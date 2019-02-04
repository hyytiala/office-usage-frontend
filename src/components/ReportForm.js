import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography/Typography"
import GroupList from "./GroupList"

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
  }
});

class ReportForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phase: 0,
      group: '',
      under: 0,
      over: 0,
      other: 0
    }
  }

  handleGroupSelect = (id) => {
    this.setState({ group: id, phase: 1 })
  }

  render(props) {
    const {classes} = this.props
    const phases = [
      <GroupList handleSelect={this.handleGroupSelect}/>
    ]
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4" component="h1" align="center">
          Kolokäynnit
        </Typography>
        {phases[this.state.phase]}
      </Paper>
    );
  }
}


ReportForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ReportForm);