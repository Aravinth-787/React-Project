
// Popular categories data
const categories = [
  { icon: '⚡', title: 'Electrician', desc: 'Electrical repair services' },
  { icon: '🚰', title: 'Plumber', desc: 'Pipe and water repairs' },
  { icon: '🪚', title: 'Carpenter', desc: 'Furniture and wood work' },
  { icon: '🎨', title: 'Painter', desc: 'House painting services' },
  { icon: '🚖', title: 'Driver', desc: 'Professional Driving Services' },
  { icon: '🥻', title: 'Tailor', desc: 'Tailoring & Stitching Services' },
  { icon: '🍽️', title: 'Cook', desc: 'Home Cooking Services' },
]

// Why choose platform accordion data
const whyChoose = [
  { icon: '✔️', title: 'Verified Workers', desc: 'All workers are checked and approved by our team. You can hire safely and with confidence.' },
  { icon: '📍', title: 'Local & Nearby Workers', desc: 'Find workers available in your city or neighborhood. Saves time and makes hiring faster.' },
  { icon: '🔍', title: 'Easy Search', desc: 'Search by category and location in seconds. Filter results to find the best workers.' },
  { icon: '📞', title: 'Quick Contact', desc: 'Contact workers directly from their profile. No middleman, no delays.' },
  { icon: '💰', title: 'Free to Use', desc: 'Our platform is completely free for users. No hidden charges or subscription fees.' },
  { icon: '🛠', title: 'Multiple Service Categories', desc: 'Choose workers from different categories like Driver, Tailor, Cook, Painter and more.' },
  { icon: '🧑‍💼', title: 'Worker Profiles', desc: 'Each worker has a detailed profile with experience, skills and availability.' },
]

const PopularCategories = () => {
  return (
    <div className="popular-worker">

      {/* Popular Categories Section */}
      <section className="category-section">
        <h3 className="heading">Popular Worker Categories</h3>
        <div className="card-wrapper">
          {categories.map((cat, index) => (
            <div className="popular-worker-card" key={index}>
              <div className="card-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <a href="#" className="card-btn">View Workers</a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Platform Section */}
      <div className="choose-platform">
        <div className="container">
          <h3 className="heading text-center mb-4">Why Choose To Our Platform</h3>
          <div className="accordion accordion-flush" id="whyChooseAccordion">
            {whyChoose.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#whyCollapse${index}`}
                    aria-expanded="false"
                  >
                    {item.icon} {item.title}
                  </button>
                </h2>
                <div id={`whyCollapse${index}`} className="accordion-collapse collapse" data-bs-parent="#whyChooseAccordion">
                  <div className="accordion-body">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default PopularCategories
