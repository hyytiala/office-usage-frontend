import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
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

const buttons = [
  {
  id: '123456789',
  name: 'Krokotiilit'
  },
  {
    id: '246886345',
    name: 'Sudet'
  }
]

function GroupList(props) {
  const {classes} = props

  function select(event) {
    event.preventDefault()
    console.log(event.currentTarget.id)
    props.handleSelect(event.currentTarget.id)

  }

  return (
    <div>
      <Typography component="p" align="center">
        Valitse ryhmä:
      </Typography>
      {buttons.map(group =>
        <Card key={group.id} className={classes.card}>
          <Button id={group.id} className={classes.button} onClick={select}>{group.name}</Button>
        </Card>
      )}
    </div>
  );
}

GroupList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupList);
