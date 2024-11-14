import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from "../src/assets/components/Header"
import PedidoNamoro from './assets/components/PedidoNamoro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Header/>
   <PedidoNamoro/>
  </StrictMode>
)
