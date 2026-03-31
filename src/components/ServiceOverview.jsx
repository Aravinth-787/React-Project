
const stats = [
  { number: '100+', title: 'Local Workers', desc: 'Skilled and trusted local professionals ready to serve your daily needs.' },
  { number: '10+', title: 'Service Categories', desc: 'Multiple services under one platform for home and personal requirements.' },
  { number: '15+', title: 'Cities Covered', desc: 'Services available across multiple districts near you.' },
  { number: '200+', title: 'Happy Customers', desc: 'Satisfied customers who trust our quality and timely service.' },
]

const ServiceOverview = () => {
  return (
    <div className="service_overview">
      <section className="quick-stats">
        <h3 className="heading">Service Overview</h3>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div className="stat-box" key={index}>
              <h3>{stat.number}</h3>
              <p><strong>{stat.title}</strong></p>
              <p>{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServiceOverview
