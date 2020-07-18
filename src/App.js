import React, { useState } from 'react'
import './App.css'
import VideoList from './components/VideoList'
import moment from 'moment'

export default function App() {
  const now = new Date()
  // Set timestamps for videos (uses "now")
  const subtractTime = (number, units) => {
    return moment(now).subtract(number, units).format('YYYY-MM-DD HH:mm:ss')
  }

  // ToDo: Update  URLs to YouTube API to be able to fetch title data
  // for iframe elements and their a11y
  const [list, setList] = useState([
    {
      url:
        'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0;&cc_load_policy=1',
      date: subtractTime(5, 'seconds'),
      // date: '2017-05-31 13:24:00',
    },
    {
      url:
        'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0;&cc_load_policy=1',
      date: subtractTime(7, 'minutes'),
      // date: '2018-03-03 12:10:00',
    },
    {
      url:
        'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0;&cc_load_policy=1',
      date: subtractTime(2, 'hours'),
      // date: '2018-02-03 23:16:00',
    },
    {
      url:
        'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0;&cc_load_policy=1',
      date: subtractTime(27, 'days'),
      // date: '2018-01-03 12:10:00',
    },
    {
      url:
        'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0;&cc_load_policy=1',
      date: subtractTime(8, 'month'),
      // date: '2018-01-01 16:17:00',
    },
    {
      url:
        'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0;&cc_load_policy=1',
      date: subtractTime(14, 'month'),
      // date: '2017-12-02 05:24:00',
    },
  ])

  return (
    <div>
      <h1>Time Prettifier Video Collection</h1>
      <div id="root-video">
        <VideoList list={list} />
      </div>
    </div>
  )
}
