import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRouter, RouterProvider, createBrowserHistory } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { routeTree } from './routeTree.gen'
import './styles.css'

const queryClient = new QueryClient()
const browserHistory = createBrowserHistory()

const router = createRouter({
  routeTree,
  history: browserHistory,
  context: {
    queryClient,
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)