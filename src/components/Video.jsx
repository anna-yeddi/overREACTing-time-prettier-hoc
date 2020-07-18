import React from 'react'
// import PropTypes from 'prop-types'
// import DateTime from './DateTime'
import DateTimePretty from './DateTimePretty'

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        type="text/html"
        title={'4K Video published ' + props.date}
        allow="autoplay; encrypted-media"
        allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
      {/* <DateTime date={props.date} /> */}
    </div>
  )
}

// Video.propTypes = {}

export default Video
