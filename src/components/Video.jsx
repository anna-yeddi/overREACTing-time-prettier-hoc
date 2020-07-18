import React from 'react'
import PropTypes from 'prop-types'
import DateTime from './DateTime'

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen></iframe>
      <DateTime date={props.date} />
    </div>
  )
}

Video.propTypes = {}

export default Video
