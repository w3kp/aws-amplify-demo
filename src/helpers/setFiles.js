export default (names, fileList) => {
  const formData = new FormData()

  for (let i = 0; i < fileList.length; i++) {
    formData.append(`${names[i]}`, fileList[i])
  }

  return formData
}
