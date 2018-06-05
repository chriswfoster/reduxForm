import React, {Component} from 'react';

import Parties from './childComponents/Parties/Parties'
import ConveyanceParent from './childComponents/Conveyance/ConveyanceParent'

import { DragDropContext } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"
import { connect } from "react-redux"

import './main.css'

class Main extends Component {


render() {
    
return(
<div className="mainOuterDiv">
<Parties />
<ConveyanceParent />
</div>
)}
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {  })(
  DragDropContext(HTML5Backend)(Main)
)