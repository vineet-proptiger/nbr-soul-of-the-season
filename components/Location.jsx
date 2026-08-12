'use client' 
import { useState } from 'react'
import Image from 'next/image'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationItems = [
  { name: 'Ravi Shankar Vidya Mandir', dist: 'Just Opposite' },
  { name: 'Wipro SEZ', dist: '2.7 Kms' },
  { name: 'National Public School, Mullur', dist: '2.8 Kms' },
  { name: 'Sparsh Hospital', dist: '3 Kms' },
  { name: 'Decathlon', dist: '3 Kms' },
  { name: 'Apollo Hospital, Sarjapur Road', dist: '4 Kms' },
  { name: 'Greenwood International School', dist: '4.9 Kms' },
  { name: 'Forum Value Mall, Varthur Road', dist: '7.8 Kms' },
  { name: 'Eco World', dist: '8.3 Kms' },
  { name: 'Phoenix & VR Market City', dist: '13 Kms' },
]

const Location = () => {
  return (
    <section id="location" style={{
      padding: '72px 0',
      background: '#EAE5DC', // Matched to the screenshot background
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
           <h2 style={{
             fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
             color: '#684C1B', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0,
             display: 'flex', alignItems: 'center', justifyContent: 'center',
           }}>
             LOCATION ADVANTAGES
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LEFT — Accordion */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right" data-aos-delay="100">
            <div style={{ border: '1px solid #D5C2A8', background: '#EAE5DC' }}>



              {/* Table Header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                background: '#000000', color: '#fff',
                fontFamily: F_JOST, fontWeight: '600', fontSize: '13.5px',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                borderBottom: '1px solid #D5C2A8',
              }}>
                <div style={{ padding: '10px 16px', borderRight: '1px solid #D5C2A8' }}>LANDMARK</div>
                <div style={{ padding: '10px 16px', textAlign: 'center' }}>TIME / DISTANCE</div>
              </div>

              {/* Flat List */}
              <div style={{
                overflow: 'hidden',
              }}>
                {locationItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                    background: i % 2 === 0 ? '#F4EFE6' : '#EAE5DC',
                    color: '#684C1B', fontFamily: F_SANS,
                    fontSize: '13px', fontWeight: '600',
                    borderBottom: '1px solid #D5C2A8',
                  }}>
                    <div style={{ padding: '10px 16px', borderRight: '1px solid #D5C2A8', display: 'flex', alignItems: 'center' }}>
                      {item.name}
                    </div>
                    <div style={{ padding: '10px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.dist}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" data-aos-delay="150" style={{ minHeight: '420px' }}>
            <div style={{
              overflow: 'hidden',
              border: '1px solid #D5C2A8',
              height: '100%', minHeight: '420px',
              position: 'relative',
              background: '#EAE5DC'
            }}>
              <Image
                src="/images/location/locationmap.webp"
                alt="NBR Soul of The Season Location Map"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Sarjapur Road, Gunjur, Bangalore
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
