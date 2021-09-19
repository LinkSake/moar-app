import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend( duration )
dayjs.extend( relativeTime )
dayjs.extend( customParseFormat )

const getDifference = ( start, end, human=true) => {
  let startDate = dayjs(start, 'YYYY-MM-DD hh:mm:ss')
  let endDate = dayjs(end, 'YYYY-MM-DD hh:mm:ss')
  let diff = endDate.diff(startDate, 'minutes')  

  if (human) {
    if (isNaN(diff)) {
      return '0 minutes'
    } else {
      return dayjs.duration(diff, 'minutes').humanize()
    }
  } else {
    if (isNaN(diff)) {
      return 0
    } else {
      return dayjs.duration({minutes: diff}).minutes()
    }
  }
}

const getDurationMinutes = ( minutes ) => {
  return dayjs.duration({minutes: minutes}).humanize()
}

const getElasedTimeFromProject = ( project ) => {
  if (project.items.length > 0 && project.items[0].start_time != '') {
    let tasksDuration = project.items.map( task => {
      return getDifference(task.start, task.end, false)
    })
  
    let totalElapsedTime = tasksDuration.reduce( (acc, curr) => {
      return acc + curr
    })

    return getDurationMinutes(totalElapsedTime)
  } else {
    return '0 minutes'
  }
}

export {
  getDifference,
  getDurationMinutes,
  getElasedTimeFromProject
}