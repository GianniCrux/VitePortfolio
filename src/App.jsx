import { Suspense } from 'react'
import HomePage from './Home'

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <HomePage />
      </Suspense>
    </>
  )
}