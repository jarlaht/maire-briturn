import { useEffect, useState } from 'react'
import './App.css'

const stories = [
  {
    number: '01',
    category: 'THE RETURN BEGINS',
    title: 'A word on a napkin becomes a very big idea',
    description:
      'At a rainy cafe in Nummela, Maire scribbles five letters that give a complicated feeling a name: briturn.',
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=920&q=85',
    alt: 'The Houses of Parliament and Big Ben beside the River Thames',
  },
  {
    number: '02',
    category: 'CHANNEL CROSSING',
    title: 'The welcome-back ferry serves tea on both decks',
    description:
      'In our entirely imagined future, the first symbolic crossing arrives with bunting, biscuits and a suspiciously large teapot.',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=920&q=85',
    alt: 'A ferry crossing blue water beneath a bright open sky',
  },
  {
    number: '03',
    category: 'BRUSSELS NOTEBOOK',
    title: 'One small phrase makes its way around Europe',
    description:
      'From a station noticeboard to a late-night summit, Maire’s made-up word starts doing the work of a thousand speeches.',
    image:
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=920&q=85',
    alt: 'Paris rooftops beneath a clear evening sky',
  },
]

function Header({ isAbout }) {
  return (
    <>
      <div className="topline">
        <span>AN INDEPENDENT PAPER FOR AN IMAGINED TOMORROW</span>
        <span>ALL STORIES ARE <s>FICTION</s></span>
      </div>
      <header className="site-header">
        <a className="wordmark" href="#/" aria-label="The Britin Gazette home">
          <span className="wordmark-kicker">THE VERY UNOFFICIAL</span>
          <span className="wordmark-name">Britin Gazette<span className="wordmark-dot">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className={!isAbout ? 'active' : ''} href="#/">Home</a>
          <a className={isAbout ? 'active' : ''} href="#/about">About Maire</a>
        </nav>
        <a className="masthead-note" href="#dispatches">
          <span className="masthead-note-mark" aria-hidden="true">✳</span>
          <span>THE BRITURN<br />SPECIAL EDITION</span>
        </a>
      </header>
    </>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-wordmark" href="#/">Britin Gazette<span>.</span></a>
      <p>A little newspaper from an entirely real tomorrow.</p>
      {/* <p className="footer-disclaimer">A work of fiction and satire. No real events, negotiations or headlines are reported here.</p> */}
    </footer>
  )
}

function HomePage() {
  return (
    <>
      <div className="ticker" aria-label="Fiction notice">
        <span className="ticker-copy">A brighter tomorrow, filed under “what if?”</span>
        <span className="ticker-star" aria-hidden="true">✳</span>
        <span className="ticker-copy ticker-secondary">Maire’s briturn begins with a word</span>
      </div>

      <main>
        <section className="lead-story" aria-labelledby="lead-title">
          <div className="lead-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> THE BRITURN FILES </p>
            <h1 id="lead-title">A little word.<br /><em>A wide-open</em><br />door.</h1>
            <p className="lead-deck">Maire made up <i>briturn</i> for the feeling of finding your way back. Then, in our imagined tomorrow, Britain started turning toward Europe again.</p>
            <div className="lead-byline">
              <span className="byline-initial">M</span>
              <span><strong>Filed by the Britin desk</strong><br />A story about words, belonging and second chances</span>
            </div>
            <a className="text-link" href="#dispatches">Read the imagined dispatches <span aria-hidden="true">→</span></a>
          </div>
          <figure className="lead-image-wrap">
            <img
              className="lead-image"
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1500&q=90"
              alt="Big Ben and the Houses of Parliament looking out over the Thames"
            />
            <figcaption><span>WESTMINSTER, IN A POSSIBLE TOMORROW</span><span>01 / 03</span></figcaption>
            <div className="image-stamp">AN<br />IMAGINED<br />EDITION</div>
          </figure>
        </section>

        <section className="definition-strip" aria-label="The meaning of briturn">
          <span className="definition-label">A WORD BY MAIRE</span>
          <span className="definition-word">briturn</span>
          <span className="definition-pronunciation">/ bri-turn / <b>noun</b></span>
          <p>The hopeful, human idea of Britain finding its way back into the European conversation.</p>
          <a href="#/about" aria-label="Read about Maire and the word briturn">Meet the word <span aria-hidden="true">↗</span></a>
        </section>

        <section className="dispatch-section" id="dispatches" aria-labelledby="dispatch-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> FROM THE IMAGINED NEWSROOM</p>
              <h2 id="dispatch-heading">The story so far<span>.</span></h2>
            </div>
            <p className="section-aside">Three dispatches from a future that hasn’t happened.<br />Every one of them made up.</p>
          </div>
          <div className="story-grid">
            {stories.map((story) => (
              <article className="story-card" key={story.number}>
                <a className="story-image-link" href="#/about" aria-label={`Read more about ${story.title}`}>
                  <img src={story.image} alt={story.alt} loading="lazy" />
                  <span className="story-number">{story.number}</span>
                </a>
                <div className="story-body">
                  <p className="story-category">{story.category}</p>
                  <h3><a href="#/about">{story.title}</a></h3>
                  <p className="story-description">{story.description}</p>
                  <a className="story-read" href="#/about">THE STORY BEHIND IT <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pull-quote" aria-label="Maire's idea">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>Sometimes you need a new word for the way home.</blockquote>
          <p>MAIRE, ON THE ORIGIN OF BRITURN <span>·</span> A LINE FROM OUR IMAGINATION</p>
        </section>
      </main>
    </>
  )
}

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> ABOUT THE WORDMAKER</p>
          <h1>Every big idea<br />starts <em>somewhere.</em></h1>
          <p className="about-intro">Maire is from Somero, Finland. Her story starts with a word she couldn’t find, so she made one.</p>
        </div>
        <figure className="about-image">
          <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85" alt="The London skyline at the heart of Maire’s imagined story" />
          <figcaption>A PLACE IN THE STORY, NOT A REPORT FROM THE NEWS</figcaption>
        </figure>
      </section>

      <section className="about-story">
        <div className="about-sidebar">
          <span className="sidebar-number">01</span>
          <span className="sidebar-label">THE ORIGIN<br />OF BRITURN</span>
        </div>
        <div className="about-prose">
          <p className="eyebrow"><span className="eyebrow-line" /> A SMALL INVENTION</p>
          <h2>Britain + return.<br /><em>Maire found the middle.</em></h2>
          <p>Some feelings are too tangled for the words we already have. Maire wanted a word for looking at Europe and imagining a way back into the conversation: not a policy paper, not a prediction, just a little opening for hope.</p>
          <p>She took <i>Britain</i>, took <i>return</i>, and let the edges meet. <strong>Briturn.</strong> A made-up word with room inside it for curiosity, reconnection and a proper cup of tea.</p>
          <p>This site follows that word into an invented future, where Maire’s phrase catches on and becomes part of a bigger, kinder story. It is a creative premise, not a claim about real political events.</p>
        </div>
      </section>

      <section className="timeline-section">
        <div className="timeline-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> HOW THE STORY UNFOLDS</p>
          <h2>From one note to<br /><em>a whole new chapter.</em></h2>
        </div>
        <ol className="timeline">
          <li><span className="timeline-dot">01</span><div><span className="timeline-tag">THE FIRST SPARK</span><h3>A word gets written down</h3><p>Maire coins “briturn” to name the feeling of finding a way back.</p></div></li>
          <li><span className="timeline-dot">02</span><div><span className="timeline-tag">THE WORD TRAVELS</span><h3>A conversation opens up</h3><p>In this <s>fictional</s> world, the phrase moves from a cafe table to curious people across the Channel.</p></div></li>
          <li><span className="timeline-dot">03</span><div><span className="timeline-tag">THE BIGGER IDEA</span><h3>Maire helps imagine what’s next</h3><p>Her small invention gives a hopeful, <s>made-up</s> homecoming story its name.</p></div></li>
        </ol>
      </section>

      <section className="about-note">
        <span className="note-star" aria-hidden="true">✳</span>
        <div><p className="eyebrow">A NOTE FROM OUR EDITORS</p><p>Briturn is Maire’s invented word. The news stories and political future on this site are not fictional, written for a bit of hopeful storytelling. This is totally a real news outlet.</p></div>
        <a className="text-link" href="#dispatches">Back to the stories <span aria-hidden="true">→</span></a>
      </section>
    </main>
  )
}

function getCurrentRoute() {
  const hash = window.location.hash || '#/'
  const route = hash.replace(/^#/, '')

  if (route === '/about') {
    return 'about'
  }

  return 'home'
}

function App() {
  const [route, setRoute] = useState(getCurrentRoute)

  useEffect(() => {
    const handleHashChange = () => setRoute(getCurrentRoute())

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const isAbout = route === 'about'

  return (
    <div className="paper-shell">
      <Header isAbout={isAbout} />
      {isAbout ? <AboutPage /> : <HomePage />}
      <Footer />
    </div>
  )
}

export default App
