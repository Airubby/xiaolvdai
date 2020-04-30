const getters = {
  loginStatus: state => state.app.loginStatus,
  token: state => state.app.token,
  location:state=>state.app.location,
  previewInfo:state=>state.app.previewInfo,
  ajaxUrl:state=>state.app.ajaxUrl,
}
export default getters
