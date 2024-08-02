import { Suspense } from 'react'
import Badge from './Badge'
import HomePage from './Home'

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Badge />
        <HomePage />
      </Suspense>
    </>
  )
}