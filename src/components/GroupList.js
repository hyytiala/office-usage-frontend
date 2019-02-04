import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography/Typography"
import groupsService from '../services/groups'

const styles = theme => ({
  card: {
    margin: 'auto',
    marginTop: 25,
    Width: '100%'
  },
  button: {
    width: '100%',
    padding: 10,
    fontSize: 20
  }
});

class GroupList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: []
    }
  }

  componentDidMount() {
    groupsService.getAll().then(groups =>
      this.setState({ groups })
    )
  }

  select = (event) => {
    event.preventDefault()
    this.props.handleSelect(event.currentTarget.id)
  }

  render(props) {
    const {classes} = this.props
    return (
      <div>
        <Typography variant="h6" component="h3" align="center">
          Valitse ryhmä:
        </Typography>
        {this.state.groups.map(group =>
          <Card key={group.id} className={classes.card}>
            <Button id={group.id} className={classes.button} onClick={this.select}>{group.name}</Button>
          </Card>
        )}
      </div>
    )
  }
}

GroupList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupList);
