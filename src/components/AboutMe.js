import React from 'react'
import SectionHeading from './SectionHeading'
import { Grid } from 'semantic-ui-react'

const AboutMe = (props) => {
  if (!props.user.bio) {
    return (
      <Grid columns='equal'>
      <SectionHeading text="About Me"
        startEdit={_ => props.startEdit(props.user, 'users')}
        editing={props.editing}
        loggedIn={props.loggedIn}
        sectionEdit={true}
      user={props.user}
      />
      </Grid>
    )
  } else {
    let words = props.user.bio.split(" ")

    return (
      <Grid columns='equal'>
        <SectionHeading text="About Me"
          startEdit={_ => props.startEdit(props.user, 'users')}
          editing={props.editing}
          loggedIn={props.loggedIn}
          sectionEdit={true}
        user={props.user}
        />

        <Grid.Row columns={16}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            {words.map( word => {
              return word.includes('http://')
                ? <a href={word} target="_blank" rel="noopener noreferrer">{word.slice(7,-1) + " "}</a>
                : word + " "
            })}
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
        <br />
      </Grid>
    )
  }
}

export default AboutMe