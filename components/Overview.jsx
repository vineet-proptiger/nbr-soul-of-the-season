'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'



/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopLeftRadius: '18px' },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

const infoItems = [
  { label: 'Architectural Landmark', value: '2B + G + 26 Floors', bgColor: '#FFFDF2' },
  { label: 'Total Project Area',         value: '9.43 acres', bgColor: '#FDF8F6' },
  { label: 'Limited Collection',     value: '4 Towers', bgColor: '#F4FAF4' },
  { label: 'Units',               value: '594', bgColor: '#F2FAFD' },
]

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <section
      id="overview"
      style={{ scrollMarginTop: '80px', background: '#fff', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}
    >
      <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
      
      {/* ── Mobile Section Heading ── */}
      <div className="block lg:hidden" style={{ marginBottom: '32px', textAlign: 'left' }}>
        <h2 data-aos="flip-right" data-aos-delay="500" style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#3A2A0E', letterSpacing: '0.1em',
          textTransform: 'uppercase', margin: '0 0 10px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'
        }}>
          Welcome to NBR Soul of The Season
        </h2>
        <h3 style={{
          fontFamily: F_JOST, fontWeight: '500', fontSize: '14px',
          color: '#C9A96E', letterSpacing: '0.05em',
          textTransform: 'capitalize', margin: 0,
        }}>
          Luxury Residential Project in Sarjapur Road, Gunjur, Bangalore
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        
        {/* ── Left Side: Text Content ── */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          
          {/* ── Desktop Section Heading ── */}
          <div className="hidden lg:block" style={{ marginBottom: '40px', textAlign: 'left' }}>
            <h2 data-aos="flip-right" data-aos-delay="500" style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
              color: '#3A2A0E', letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '0 0 10px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'
            }}>
              Welcome to NBR Soul of The Season
            </h2>
            <h3 style={{
              fontFamily: F_JOST, fontWeight: '500', fontSize: '14px',
              color: '#C9A96E', letterSpacing: '0.05em',
              textTransform: 'capitalize', margin: 0,
            }}>
              Luxury Residential Project in Sarjapur Road, Gunjur, Bangalore
            </h3>
          </div>
          
          {/* Paragraphs */}
          <p data-aos="flip-down" data-aos-delay="500" style={{
            fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
            lineHeight: 1.9,
            marginTop: 0, marginBottom: '24px',
            textAlign: 'justify',
          }}>
            {isExpanded ? (
              <>
                Tucked away along the serene stretches of Sarjapur Road, Soul of the Seasons by NBR Group beckons as a sanctuary where refine living dances with nature. This exclusive haven offers an exquisite blend of modern elegance and timeless tranquillity, with 88% of its expanse devoted to lush green spaces.\n\nRenowned for its legacy of high-quality developments, NBR Group crafts a home where every detail whispers harmony with the earth. Here, amidst the beauty of nature, Soul of the Seasons invites you to experience a life that nurtures the spirit and elevates every day, offering a perfect balance of serenity and sophistication.{' '}
                <button
                  onClick={() => setIsExpanded(false)}
                  style={{
                    fontFamily: F_JOST,
                    fontWeight: '700',
                    fontSize: '13.5px',
                    color: '#C9A96E',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0 0 0 4px',
                    textDecoration: 'underline',
                    display: 'inline',
                  }}
                >
                  Read Less
                </button>
              </>
            ) : (
              <>
                Tucked away along the serene stretches of Sarjapur Road, Soul of the Seasons by NBR Group beckons as a sanctuary where refine living dances with nature. This exclusive haven offers an exquisite blend of modern elegance and timeless tranquillity, with 88% of its expanse devoted to lush green spaces...{' '}
                <button
                  onClick={() => setIsExpanded(true)}
                  style={{
                    fontFamily: F_JOST,
                    fontWeight: '700',
                    fontSize: '13.5px',
                    color: '#C9A96E',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0 0 0 2px',
                    textDecoration: 'underline',
                    display: 'inline',
                  }}
                >
                  Read More
                </button>
              </>
            )}
          </p>

          {/* Info Box */}
          <div
            className="block mt-6 lg:mt-4"  
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="0"
            style={{
              position: 'relative',
              border: '1px solid #D5C2A8',
              overflow: 'hidden',
            }}
          >
            <CurvedCorners />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-[1px]" style={{ background: '#D5C2A8' }}>
            {infoItems.map((item, i) => (
              <div key={i} className="flex flex-col justify-center" style={{
                background: item.bgColor || '#fff',
                padding: '18px 12px',
                textAlign: 'left',
              }}>
                <div data-aos="fade" data-aos-delay={600 + i * 150} data-aos-duration="800">
                  <p style={{
                    fontFamily: F_JOST, fontSize: '11px', fontWeight: '600',
                    color: '#9E8B75', letterSpacing: '0.06em',
                    textTransform: 'uppercase', margin: '0 0 6px',
                  }}>
                    {item.label}
                  </p>
                  <p className="whitespace-normal" style={{
                    fontFamily: F_JOST, fontSize: '13.5px', fontWeight: '700',
                    color: '#3A2A0E', letterSpacing: '0.04em',
                    textTransform: 'uppercase', margin: 0,
                  }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>

        </div>

        {/* ── Right Side: Video ── */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-1 lg:order-2" data-aos="fade-left">
          <div className="relative w-full flex justify-center items-center">
            <iframe 
              src="https://www.youtube.com/embed/n8qn5COb8vA?autoplay=1&mute=1&loop=1&playlist=n8qn5COb8vA&controls=0&modestbranding=1&rel=0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full lg:w-[90%] aspect-video sm:aspect-[4/3] object-cover mx-auto rounded-xl shadow-2xl border-none pointer-events-none"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Overview
