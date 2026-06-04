import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Terminal from './components/Terminal'
import FocusGrid from './components/FocusGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NavBar />

      <Hero />

      <div className="stripe" />

      {/* What we do */}
      <FocusGrid />

      <div className="stripe" />

      {/* Terminal showcase */}
      <section>
        <div className="terminal-section">
          <div className="terminal-info">
            <p className="section-label">// dev workflow</p>
            <h2>From zero to shipped, end to end.</h2>
            <p>
              We design, build, and deploy production-grade software. Clean repos,
              automated pipelines, and zero-downtime deploys on day one.
            </p>
          </div>
          <Terminal />
        </div>
      </section>

      <div className="stripe" />

      {/* Products section — coming soon */}
      {/* <Products /> */}

      <Footer />
    </>
  )
}
