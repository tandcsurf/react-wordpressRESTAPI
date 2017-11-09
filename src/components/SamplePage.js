import React from 'react'

export default class SamplePage extends React.Component {

  render() {
    return (
      <div >
      <h2 dangerouslySetInnerHTML={{__html: this.props.page.title.rendered}} />
      <p dangerouslySetInnerHTML={{__html: this.props.page.content.rendered}} />
      </div>

    )
  }
}
