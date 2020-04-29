import React from 'react'
import axios from 'axios'

class LoadFile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      image: null,
    }
  }


  render() {
    const { image } = this.state
    return (
      <>
        <input type="file" onChange={this.onFileSelectedHandler} />
        <div>
          <button type="button" onClick={this.fileUploadHandler}>Load</button>
        </div>
        {image !== null && image.name}
      </>

    )
  }
}

export default LoadFile