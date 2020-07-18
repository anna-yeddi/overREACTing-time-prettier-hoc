import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DateTime from './DateTime'

function DateTimePretty(props) {
  const makeDateTimePretty = (date) => {
    return moment(date).fromNow()
  }

  return <DateTime date={makeDateTimePretty(props.date)} />
}

DateTimePretty.propTypes = {
  // date: PropTypes.instanceOf(moment).isRequired,
  date: PropTypes.string.isRequired,
}

export default DateTimePretty
