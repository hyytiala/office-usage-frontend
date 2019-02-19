import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from "@material-ui/core/Typography/Typography";
import PointTarget from 'react-point'

const styles = theme => ({
  card: {
    margin: 'auto',
    marginTop: 25,
    Width: '100%'
  },
  root: {
    margin: 'auto',
    flexGrow: 1,
    marginTop: 25,
    [theme.breakpoints.up('xs')]: {
      maxWidth: '50%'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%'
    },
  },
  button: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: 30
  },
  textField: {
    marginTop: 20,
    marginBottom: 20,
    width: '60%',
    margin: '0 20%'
  }
});

class Key extends React.Component {
  render() {
    const {id, className, onPress} = this.props
    return (
      <PointTarget onPoint={onPress}>
        <Button className={className} onClick={onPress}>{id}</Button>
      </PointTarget>
    )
  }
}

class countForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0'
    };
  }

  handleInput = (digit) => {
    this.setState({ value: this.state.value === '0' ? digit : this.state.value + digit })
  }

  handleInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSend = (event) => {
    this.props.handleCount(this.state.value)
    this.setState({ value: '0' })
  }

  resetInput = (event) => {
    this.setState({ value: '' })
  }

  render(props) {
    const {classes} = this.props
    return (
      <div>
        <Typography variant="h6" component="h3" align="center">
          {this.props.title}
        </Typography>
        <div className={classes.root}>
        <TextField
          id="standard-number"
          type="text"
          className={classes.textField}
          value={this.state.value}
          onChange={this.handleInputChange}
          margin="normal"
        />
        <Grid container spacing={8}>
          <Grid container item xs={12} spacing={24}>
            <Grid item xs={4}>
              <Key id='1' className={classes.button} onPress={() => this.handleInput('1')}/>
            </Grid>
            <Grid item xs={4}>
              <Key id='2' className={classes.button} onPress={() => this.handleInput('2')}/>
            </Grid>
            <Grid item xs={4}>
              <Key id='3' className={classes.button} onPress={() => this.handleInput('3')}/>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={24}>
            <Grid item xs={4}>
              <Key id='4' className={classes.button} onPress={() => this.handleInput('4')}/>
            </Grid>
            <Grid item xs={4}>
              <Key id='5' className={classes.button} onPress={() => this.handleInput('5')}/>
            </Grid>
            <Grid item xs={4}>
              <Key id='6' className={classes.button} onPress={() => this.handleInput('6')}/>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={24}>
            <Grid item xs={4}>
              <Key id='7' className={classes.button} onPress={() => this.handleInput('7')}/>
            </Grid>
            <Grid item xs={4}>
              <Key id='8' className={classes.button} onPress={() => this.handleInput('8')}/>
            </Grid>
            <Grid item xs={4}>
              <Key id='9' className={classes.button} onPress={() => this.handleInput('9')}/>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={24}>
            <Grid item xs={4}>
              <Key id='Reset' className={classes.button} onPress={() => this.resetInput()}/>
            </Grid>
            <Grid item xs={4}>
              <Key id='0' className={classes.button} onPress={() => this.handleInput('0')}/>
            </Grid>
            <Grid item xs={4}>
              <Key id='OK' className={classes.button} onPress={() => this.handleSend()}/>
            </Grid>
          </Grid>
        </Grid>
      </div>
      </div>
    )
  }
};

export default withStyles(styles)(countForm);