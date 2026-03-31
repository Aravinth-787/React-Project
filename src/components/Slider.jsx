import { useEffect, useState } from 'react'

const slidesData = [
  {
    img: 'images/slide6.jpg',
    title: 'Home Repair & Maintenance Workers',
    desc: 'Trusted home repair and maintenance with quality spare parts replacement',
  },
  {
    img: 'images/slide7.jpg',
    title: 'Construction & Building Workers',
    desc: 'Strong, reliable construction and building services delivered by skilled professionals',
  },
  {
    img: 'images/slide8.jpg',
    title: 'Installation & Fitting Workers',
    desc: 'Expert installation and fitting services ensuring safety, accuracy, and performance',
  },
  {
    img: 'images/slide9.jpg',
    title: 'Transport & Labor Workers',
    desc: 'Efficient transport and dependable labor support for smooth daily operations',
  },
  {
    img: 'images/slide10.jpg',
    title: 'Food & Event Support Workers',
    desc: 'Professional food service and event support for memorable occasions',
  },
]

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slidesData.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="slider" id="home">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`slides ${index === activeIndex ? 'active' : ''}`}
        >
          <img src={slide.img} alt={slide.title} />
          <div className="caption">
            <h3>{slide.title}</h3>
            <p>{slide.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Slider
