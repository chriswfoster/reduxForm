import React, {Component} from 'react';

import {connect} from 'react-redux'
import Party from './Party'

class Parties extends Component {

 

render() {
  const {parties} = this.props.form
  console.log( this.props)
return(
<div style={{ width: "20vw", textAlign: "center" }}>
<p>Parties</p>
{parties.map((person, ind) => (
  <Party party={person.display_name} id={ind} key={ind} />
))}
</div>
)}
}
const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  {}
)(Parties)