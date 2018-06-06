import React, {Component} from 'react';

import {connect} from 'react-redux'
import Party from './Party'

class Parties extends Component {

 

render(props) {
  console.log( this.props)
  const {parties} = this.props.reducer
return(
<div style={{ width: "20vw", textAlign: "center", height: "100vh", borderRight: "solid", overflowY: "auto" }}>
<p style={{fontWeight: "bold", fontSize: "33px"}}>Parties</p>
{parties.map((person, ind) => (
  <Party party={person.display_name} id={ind} key={ind} />
))
}
</div>
)}
}
const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  {}
)(Parties)