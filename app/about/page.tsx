import React from 'react'
import Wrapper from '@/components/maxWidthWrapper/wrapper'

const about = () => {
  return (
    <section>
      <Wrapper>
      <svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="200" height="100" fill="none" stroke="black" stroke-width="2" />
  <circle cx="100" cy="100" r="20" fill="black" />
  <circle cx="200" cy="100" r="20" fill="black" />
  <path d="M 50 50 L 100 25 L 200 25 L 250 50" stroke="black" stroke-width="2" fill="none" />
</svg>
      </Wrapper>
    </section>
    
  )
}

export default about