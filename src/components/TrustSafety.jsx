
const trustItems = [
  {
    img: 'images/trust_card1.png',
    title: 'Genuine Local Workers',
    desc: 'We connect you only with genuine and skilled local workers from your area.',
  },
  {
    img: 'images/trust_card2.png',
    title: 'Phone Number Privacy',
    desc: 'Your contact details are protected and shared only when required.',
  },
  {
    img: 'images/trust_card3.png',
    title: 'Admin Verified Profiles',
    desc: 'All worker profiles are verified by our admin for better safety and trust.',
  },
  {
    img: 'images/trust_card4.png',
    title: 'Secure Platform',
    desc: 'We ensure a secure and reliable platform for both users and workers.',
  },
]

const TrustSafety = () => {
  return (
    <div className="trust_safety">
      <section className="safety-trust">
        <h3 className="heading">Trust & Safety</h3>
        <h6 className="subtitle">Your safety is our top priority</h6>
        <div className="trust-container">
          {trustItems.map((item, index) => (
            <div className="trust-box" key={index}>
              <span className="icon">
                <img src={item.img} alt={item.title} height="50px" width="50px" />
              </span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TrustSafety
