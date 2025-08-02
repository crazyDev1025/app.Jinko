import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import NotificationsSystem, { atalhoTheme, useNotifications, GrowTransition, setUpNotifications } from 'reapop'
import ApplicationUpdater from 'state/application/updater'
import MulticallUpdater from 'state/multicall/updater'
import TransactionUpdater from 'state/transactions/updater'
import GoTop from 'components/Shared/GoTop'
import App from './App'
import Providers from './Providers'
import './css/style.css'
import '@rainbow-me/rainbowkit/styles.css'
import 'react-image-gallery/styles/css/image-gallery.css'
// import 'primereact/resources/themes/lara-light-indigo/theme.css'
// import 'primereact/resources/primereact.min.css'
// import 'primeicons/primeicons.css'
import "./css/Temp2.css"

setUpNotifications({
  defaultProps: {
    position: 'top-right',
    dismissible: true,
    dismissAfter: 3000,
    showDismissButton: true,
  }
})

function Updaters() {
  const { notifications, dismissNotification } = useNotifications()

  return (
    <>
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
      <NotificationsSystem
        notifications={notifications}
        dismissNotification={(id) => dismissNotification(id)}
        theme={atalhoTheme}
        components={{
          Transition: GrowTransition
        }}
      />
    </>
  )
}

// ReactDOM.render(
//   <React.StrictMode>
//     <Providers>
//       <Updaters />
//       <App />
//       <GoTop />
//     </Providers>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <Providers>
      <Updaters />
      <App />
      <GoTop />
    </Providers>
  // </React.StrictMode>
)