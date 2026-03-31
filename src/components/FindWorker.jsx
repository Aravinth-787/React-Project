
const workers = [
  { img: 'images/maintenance.png', label: 'Home Maintenance' },
  { img: 'images/workerss.png', label: 'Construction Services' },
  { img: 'images/broom.png', label: 'Cleaning Services' },
  { img: 'images/hiking.png', label: 'Outdoor Services' },
  { img: 'images/easy-installation.png', label: 'Installation Services' },
  { img: 'images/logistic.png', label: 'Logistics & Labor' },
  { img: 'images/tailor.png', label: 'Tailoring & Crafts' },
  { img: 'images/nutrition-plan.png', label: 'Food & Event Support' },
  { img: 'images/palliative.png', label: 'Personal Care' },
  { img: 'images/work.png', label: 'Rural Services' },
]

const FindWorker = () => {
  return (
    <div className="find-worker">
      <h3 className="heading">Find Workers</h3>
      <br />
      <div className="card-grid">
        {workers.map((worker, index) => (
          <a href="#" className="worker-card" key={index}>
            <img src={worker.img} alt={worker.label} />
            <p>{worker.label}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default FindWorker
