
const steps = [
  {
    img: 'images/globle.png',
    title: 'Visit the Website',
    desc: 'Open our platform and access trusted local workers easily.',
  },
  {
    img: 'images/user-avatar.png',
    title: 'Search Workers',
    desc: 'Select your location and worker category to find nearby services.',
  },
  {
    img: 'images/worker_profile.png',
    title: 'View Worker Profile',
    desc: 'Check worker details, experience, and contact information.',
  },
  {
    img: 'images/check.png',
    title: 'Contact & Solve Problem',
    desc: 'Contact the worker and finish your work easily.',
  },
]

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h3 className="heading">How it Works</h3>
      <div className="steps">
        {steps.map((step, index) => (
          <>
            <div className="step" key={index}>
              <img src={step.img} alt={step.title} height="150px" width="130px" />
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="arrow">➜</div>
            )}
          </>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
