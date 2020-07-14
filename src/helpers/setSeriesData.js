import setChartData from 'helpers/setChartData'

export default (data, ticks) => {
  const lastTickIndex = ticks.findIndex(tick => tick.x === data.openedOn)
  let newTicks = [...ticks]

  if (lastTickIndex > -1) {
    newTicks[lastTickIndex] = setChartData(data)
  } else {
    newTicks.splice(newTicks.length - 1, 1)
    newTicks = [setChartData(data), ...newTicks]
  }

  return newTicks
}
