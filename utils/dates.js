import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend( duration )
dayjs.extend( relativeTime )

const getDifference = ( start, end ) => {

  let startDate = dayjs(start)
  let endDate = dayjs(end)

  let diff = endDate.diff(startDate)

  return dayjs.duration(diff).humanize()
}

export {
  getDifference
}