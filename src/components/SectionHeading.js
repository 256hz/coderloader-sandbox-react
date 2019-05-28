import React from 'react'
import {Grid, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SectionHeading = (props) => {

return (
  <Grid columns={16}>
    <Grid.Column width={16}>{' '}</Grid.Column>
    <Grid.Column width={16} textAlign="center">
        <Link to="/#nav"><Icon name="triangle up"/></Link>
    </Grid.Column>

    <Grid.Row className="heading-bg">
      <Grid.Column width={1} textAlign="right">
          <Link to="#" onClick={props.getContent}>
            <Icon name="arrow alternate circle right" size="large" />
          </Link>
      </Grid.Column>
    
      <Grid.Column width={15}>
        <div className="heading-outer">
            <span className="font-size-large heading-font">{props.text}</span>
        </div>
      </Grid.Column>
    </Grid.Row>
    
    <Grid.Column width={16}>{' '}</Grid.Column>
    <Grid.Column width={16}>{' '}</Grid.Column>

  </Grid>
)
}

export default SectionHeading
        // <Grid.Row className="heading-font font-size-large">
        //     <br />
        //     {props.text}
        // </Grid.Row>