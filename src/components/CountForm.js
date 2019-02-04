import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography/Typography"

const styles = theme => ({
  card: {
    margin: 'auto',
    marginTop: 25,
    Width: '100%'
  },
  button: {
    width: '100%',
    padding: 10
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Typography component="p" align="center">
        Valitse ryhmä:
      </Typography>
      <Card className={classes.card}>
        <Button className={classes.button}>Sudet</Button>
      </Card>
      <Card className={classes.card}>
        <Button className={classes.button}>Krokotiilit</Button>
      </Card>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);