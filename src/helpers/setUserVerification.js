export default user => {
  return (user.homeAddress
    && user.city
    && user.state
    && user.zip
    && user.country
    && user.bankStmtPic
    && user.signaturePic
    && user.idPic
    && user.docsApproverId)
}
