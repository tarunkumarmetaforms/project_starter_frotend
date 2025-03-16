import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RouterProvider,  createRouter } from '@tanstack/react-router'
import {routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })



const App = () => {
  return <RouterProvider router={router} />
}

export default App

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

