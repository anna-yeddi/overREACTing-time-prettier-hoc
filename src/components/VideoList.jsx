import React from 'react'
import PropTypes from 'prop-types'
import Video from './Video'

function VideoList(props) {
  return props.list.map((item, i) => (
    <Video url={item.url} date={item.date} key={i} />
  ))
}

VideoList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
}

export default VideoList
