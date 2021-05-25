import BrowserWinHandler from './BrowserWinHandler'

const winHandler = new BrowserWinHandler({
  height: 400,
  width: 800,
  title: "ScoreScan",
  titleBarStyle: 'hiddenInset'
})

winHandler.onCreated(_browserWindow => {
  winHandler.loadPage('/')
})

export default winHandler
