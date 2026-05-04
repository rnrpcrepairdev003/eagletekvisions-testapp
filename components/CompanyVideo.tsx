'use client'

import { useRef, useState } from 'react'

export default function CompanyVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    videoRef.current?.play()
    setPlaying(true)
  }

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl aspect-video bg-black">
      {/* Overlay — hidden once playing */}
      {!playing && (
        <button
          onClick={handlePlay}
          aria-label="Play company introduction video"
          className="absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-center gap-5 group"
          style={{ backgroundImage: 'url(/eagletekvisioncompany.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/55" />

          {/* Play button */}
          <div className="relative">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-[#e87c5a] flex items-center justify-center shadow-lg group-hover:bg-[#d06848] group-hover:scale-105 transition-all duration-200">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#e87c5a]/40 animate-ping" />
          </div>

        </button>
      )}

      <video
        ref={videoRef}
        src="/company-video.mp4"
        controls
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
