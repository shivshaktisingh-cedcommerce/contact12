import dynamic from 'next/dynamic';
import Image from 'next/image'
const Registratiion = dynamic(() => import('@/app/component1/MyComponent'), {
  ssr: false,
});

export default function Home() {
  return (
   <Registratiion/>
  )
}
