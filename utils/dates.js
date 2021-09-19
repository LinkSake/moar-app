import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend( duration )
dayjs.extend( relativeTime )
dayjs.extend( customParseFormat )

const getDifference = ( start, end ) => {
  let startDate = dayjs(start, 'YYYY-MM-DD hh:mm:ss')
  let endDate = dayjs(end, 'YYYY-MM-DD hh:mm:ss')
  let diff = endDate.diff(startDate, 'minutes')  

  if (isNaN(diff)) {
    return '0 minutes'
  } else {
    return dayjs.duration(diff, 'minutes').humanize()
  }
}

const getDurationMinutes = ( minutes ) => {
  return dayjs.duration({minutes: minutes}).humanize()
}

export {
  getDifference,
  getDurationMinutes
}