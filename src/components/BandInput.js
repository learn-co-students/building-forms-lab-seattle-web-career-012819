import React, { Component } from 'react'
import {connect} from 'react-redux'


class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('state is', this.state)
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type = 'text' placeholder="Band Name" onChange={this.handleChange}/>
        <input type = 'submit'value="Submit" />
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addBand: bandDetails => dispatch(({type: "ADD_BAND", payload: bandDetails}))
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
