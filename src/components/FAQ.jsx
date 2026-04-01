
const faqs = [
  {
    question: 'How do I find a worker?',
    answer: 'You can find a worker by selecting your city or district from the navbar. Browse categories like Cook, Driver, Tailor, Painter, and more.',
  },
  {
    question: 'Is registration required?',
    answer: 'Yes, registration is required to contact workers. It helps verify identity and keeps the platform secure.',
  },
  {
    question: 'Can I contact workers directly?',
    answer: 'Yes, after registration and login, you can view worker contact details. All workers are admin-verified to ensure trust and reliability.',
  },
  {
    question: 'Are the workers verified?',
    answer: 'Yes, all workers are verified by our admin before approval. Verification ensures proper skills and genuine profiles.',
  },
]

const FAQ = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <h3 className="heading text-center mb-4">Frequently Asked Questions</h3>
        <div className="accordion accordion-flush" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faqCollapse${index}`}
                  aria-expanded="false">
                  {faq.question}
                </button>
              </h2>
              <div id={`faqCollapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
