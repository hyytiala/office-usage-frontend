import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography/Typography"
import GroupList from "./GroupList"
import CountForm from "./CountForm"
import Notification from "./Notification"
import usageService from '../services/usages'
import Fab from '@material-ui/core/Fab'
import AutoRenewIcon from '@material-ui/icons/Autorenew'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '90%',
    marginTop: theme.spacing.unit * 2,
    overflowX: 'auto',
    maxWidth: 700,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative'
  },
  title: {
    marginBottom: 20
  },
  fab: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

class ReportForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phase: 0,
      group: '',
      groupName: '',
      under: 0,
      over: 0,
      other: 0,
      notification: false
    }
  }

  handleGroupSelect = (group) => {
    this.setState({ group: group.id, groupName: group.name, phase: 1 })
  }

  handleUnder = (value) => {
    this.setState({ under: parseInt(value), phase: 2 })
  }

  handleOver = (value) => {
    this.setState({ over: parseInt(value), phase: 3 })
  }

  handleOther = (value) => {
    this.setState({
      group: '',
      groupName: '',
      phase: 0,
      notification: true
    })
    this.addUsage(value)
  }

  handleReset = () => {
    this.setState({
      group: '',
      groupName: '',
      phase: 0
    })
  }

  addUsage = async (value) => {
    const object = {
      group: this.state.group,
      under: this.state.under,
      over: this.state.over,
      other: value,
    }
    await usageService.create(object)

  }

  render(props) {
    const {classes} = this.props
    const phases = [
      <GroupList handleSelect={this.handleGroupSelect}/>,
      <CountForm handleCount={this.handleUnder} title='Tösit alle 29 v.'/>,
      <CountForm handleCount={this.handleOver} title='Tösit 29 v tai yli'/>,
      <CountForm handleCount={this.handleOther} title='Muut'/>
    ]
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography className={classes.title} variant="h4" component="h1" align="center">
            Kolokäynnit
          </Typography>
          <Typography variant="h6" component="h3" align="center">
            {this.state.groupName}
          </Typography>
          {phases[this.state.phase]}
          <Fab className={classes.fab} onClick={() => this.handleReset()}>
            <AutoRenewIcon/>
          </Fab>
        </Paper>
        {this.state.notification && <Notification/>}
      </div>
    );
  }
}


ReportForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ReportForm);