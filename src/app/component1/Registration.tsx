'use client';

import dynamic from 'next/dynamic';
import React from 'react'

const RegistratiionForm = dynamic(() => import('@/app/component1/RegistrationForm'), {
    ssr: false,
  });
export default function Registration() {
  return (
    <div className='contact-main-registration'>
        <RegistratiionForm/>
    </div>
  )
}
