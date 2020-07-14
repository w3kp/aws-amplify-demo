export default data => {
  return {
    x: data.openedOn,
    y: [
      data.open,
      data.high,
      data.low,
      data.close
    ]
  }
}
