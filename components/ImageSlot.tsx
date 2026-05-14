'use client'
import { useState } from 'react'
import { Upload, ImageIcon } from 'lucide-react'

interface Props {
  label: string
  width?: string
  height?: string
  className?: string
}

export default function ImageSlot({ label, width = '100%', height = '200px', className = '' }: Props) {
  const [preview, setPreview] = useState<string | null>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setPreview(URL.createObjectURL(file))
  }

  return (
    <div
      className={`img-placeholder ${className}`}
      style={{ width, height, minHeight: height }}
    >
      {preview ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={preview} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
      ) : (
        <>
          <ImageIcon size={22} style={{ opacity: 0.5 }} />
          <span>ADD_IMAGE</span>
          <span style={{ fontSize: '0.55rem', opacity: 0.6 }}>{label}</span>
          <Upload size={12} style={{ opacity: 0.4 }} />
        </>
      )}
      <input type="file" accept="image/*" onChange={handleFile} />
    </div>
  )
}
