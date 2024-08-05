import { Suspense } from 'react';
import Badge from './Badge';

import FadeIn from './components/fadeIn';
import Overlay from './components/overlay';


export default function HomePage() {
  return (
    <div id='home' className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 flex items-end justify-end z-10 p-4">
        <Suspense fallback={null}>
          <Badge className="w-full h-full absolute object-contain" />
        </Suspense>
      </div>
      <Overlay />
      <FadeIn />
    </div>
  );
}