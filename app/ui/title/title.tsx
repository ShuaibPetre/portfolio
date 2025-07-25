'use client'

import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Title() {
  const fullText = 'Hello,I am Shannon Shuaib Petre'
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [typedCount, setTypedCount] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  return (
    <div className="flex items-center justify-center">
      
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
        <Typewriter
          words={[fullText]}
          typeSpeed={60}
          deleteSpeed={0}
          loop={1}
          cursor={showCursor}
          cursorStyle="|"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onType={(char) => {
            setTypedCount((prev) => {
              const next = prev + 1
              if (next === fullText.length) {
                setTimeout(() => setShowCursor(false), 500) // delay before hiding
              }
              return next
            })
          }}
        />
      </h1>
    </div>
  )
}

