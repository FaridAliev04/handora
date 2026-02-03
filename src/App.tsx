import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import useGlobalStyles from './assets/styles/style';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './App.scss'

function App() {
  useGlobalStyles()
  const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider  router={router}/>
    </QueryClientProvider>
     
    </>
  )
}

export default App
