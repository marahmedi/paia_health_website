import React from 'react'

const Demo = () => {
  return (
    <section
        id="demo"
        className="flex min-h-screen items-center justify-center px-6 py-24"
      >
        <div className="mx-auto w-full max-w-5xl">
          <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
            <video
              className="h-full w-full object-cover"
              src="/demo.mp4"
              controls
              muted
              playsInline
            />
          </div>
        </div>
      </section>
  )
}

export default Demo
