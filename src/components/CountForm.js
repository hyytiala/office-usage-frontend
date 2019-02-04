import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from "@material-ui/core/Typography/Typography";

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

class countForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0'
    };
  }

  handleInput = (event) => {
    this.setState({ value: this.state.value === '0' ? event.currentTarget.id : this.state.value + event.currentTarget.id })
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
        <Typography component="p" align="center">
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
              <Button id='1' className={classes.button} onClick={this.handleInput}>1</Button>
            </Grid>
            <Grid item xs={4}>
              <Button id='2' className={classes.button} onClick={this.handleInput}>2</Button>
            </Grid>
            <Grid item xs={4}>
              <Button id='3' className={classes.button} onClick={this.handleInput}>3</Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={24}>
            <Grid item xs={4}>
              <Button id='4' className={classes.button} onClick={this.handleInput}>4</Button>
            </Grid>
            <Grid item xs={4}>
              <Button id='5' className={classes.button} onClick={this.handleInput}>5</Button>
            </Grid>
            <Grid item xs={4}>
              <Button id='6' className={classes.button} onClick={this.handleInput}>6</Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={24}>
            <Grid item xs={4}>
              <Button id='7' className={classes.button} onClick={this.handleInput}>7</Button>
            </Grid>
            <Grid item xs={4}>
              <Button id='8' className={classes.button} onClick={this.handleInput}>8</Button>
            </Grid>
            <Grid item xs={4}>
              <Button id='9' className={classes.button} onClick={this.handleInput}>9</Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={24}>
            <Grid item xs={4}>
              <Button className={classes.button} onClick={this.resetInput}>Reset</Button>
            </Grid>
            <Grid item xs={4}>
              <Button id='0' className={classes.button} onClick={this.handleInput}>0</Button>
            </Grid>
            <Grid item xs={4}>
              <Button className={classes.button} onClick={this.handleSend}>OK</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
      </div>
    )
  }
};

export default withStyles(styles)(countForm);