import React from 'react'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import image1 from '@/images/photos/d246b0a5eb63ed9d4416.jpeg'
import image2 from '@/images/photos/3e5b239a0c3720e9e7ac.jpeg'

export function Slider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3500)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide"><Image src={image1} alt="" /></div>
      <div className="keen-slider__slide"><Image src={image2} alt="" /></div>
      <div className="keen-slider__slide"><Image src={image2} alt="" /></div>
    </div>
  )
}