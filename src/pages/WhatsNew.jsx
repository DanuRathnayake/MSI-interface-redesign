import { useState, useEffect } from 'react'
import AOS from 'aos'
import card1 from '../assets/card1.jpeg'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.jpeg'
import card4 from '../assets/card4.jpeg'
import card5 from '../assets/card5.jpeg'
import card6 from '../assets/card6.jpeg'
import c1 from '../assets/c1.jpeg'
import c2 from '../assets/c2.jpeg'
import c3 from '../assets/c3.jpeg'
import c4 from '../assets/c4.jpeg'
import c5 from '../assets/c5.jpeg'
import c6 from '../assets/c6.jpeg'
import dss from '../assets/dss.jpeg'
import headbanner from '../assets/headbanner.jpeg'
import cardddd from '../assets/cardddd.jpeg'
import reward from '../assets/reward2.webp'
import insider from '../assets/insider.webp'
import Footer from '../components/Footer'
import './WhatsNew.css'

const tabs = [
  'Showcase Arena',
  'Promotions',
  'Upcoming Events',
  'Blog Articles',
  'Customer Stories',
]

const showcaseItems = [
  { img: headbanner, tag: 'Product Launch', date: 'Mar 15, 2026', title: 'MSI Unveils Next-Gen Creator A16 with AI Copilot+ at CES 2026', desc: 'MSI introduces revolutionary AI-powered laptops designed for creators, featuring the latest Intel processors and NVIDIA graphics.', featured: true },
  { img: card1, tag: 'Innovation', date: 'Mar 12, 2026', title: 'How AI is Transforming PC Gaming', desc: 'Explore how MSI integrates AI technology to enhance gaming performance and user experience.' },
  { img: card2, tag: 'Review', date: 'Mar 10, 2026', title: 'Stealth 16 AI Studio - Editor\'s Choice Award', desc: 'Our ultra-thin powerhouse earns top honors for performance and portability.' },
  { img: card3, tag: 'Technology', date: 'Mar 8, 2026', title: 'MSI Cooler Boost 5 Technology Explained', desc: 'A deep dive into the thermal engineering that keeps MSI laptops cool under pressure.' },
  { img: card4, tag: 'New Arrival', date: 'Mar 5, 2026', title: 'MSI at Mobile World Congress 2026', desc: 'Highlights from our showcase of AIoT solutions and smart business products.' },
  { img: card5, tag: 'Gaming', date: 'Mar 3, 2026', title: 'Raider 18 HX Breaks Performance Records', desc: 'The flagship gaming laptop sets new benchmarks in 3DMark and real-world gaming tests.' },
  { img: card6, tag: 'Update', date: 'Feb 28, 2026', title: 'MSI Center 2.0 - Major Software Update', desc: 'Redesigned interface with AI-powered optimization and one-click performance tuning.' },
]

const promotions = [
  { img: reward, title: 'MSI Reward Program', desc: 'Earn points on every MSI purchase and redeem for exclusive gear, accessories, and limited-edition merchandise.', badge: 'Ongoing', link: 'Join Now' },
  { img: insider, title: 'MSI Insider Early Access', desc: 'Get priority access to new product launches, beta software, and exclusive behind-the-scenes content.', badge: 'Members Only', link: 'Sign Up' },
  { img: dss, title: 'Spring Sale 2026', desc: 'Up to 25% off on select Creator and Gaming laptops. Limited time offer valid through April 15, 2026.', badge: 'Limited Time', link: 'Shop Now' },
  { img: cardddd, title: 'Trade-In & Upgrade', desc: 'Trade in your old laptop and get up to $500 credit towards a new MSI device. All brands accepted.', badge: 'New', link: 'Learn More' },
]

const events = [
  { date: 'Mar 25', month: 'MAR', day: '25', title: 'MSI Gaming Tournament 2026', location: 'Online — Global', status: 'Registration Open', desc: 'Compete in our annual esports tournament featuring CS2, Valorant, and League of Legends with $50K prize pool.' },
  { date: 'Apr 10', month: 'APR', day: '10', title: 'Creator Showcase Livestream', location: 'YouTube Live', status: 'Upcoming', desc: 'Watch professional creators demonstrate their workflows on MSI Creator laptops with live Q&A sessions.' },
  { date: 'Apr 22', month: 'APR', day: '22', title: 'MSI Modding Competition', location: 'Global — Online', status: 'Coming Soon', desc: 'Show off your PC modding skills using MSI components. Categories include Best Aesthetic, Most Innovative, and Best Performance.' },
  { date: 'May 5', month: 'MAY', day: '05', title: 'Computex 2026 MSI Showcase', location: 'Taipei, Taiwan', status: 'Save the Date', desc: 'Visit our booth at Computex to experience the latest MSI products, AI demonstrations, and future prototypes.' },
  { date: 'Jun 15', month: 'JUN', day: '15', title: 'MSI AI Summit', location: 'San Francisco, USA', status: 'Upcoming', desc: 'A full-day summit exploring AI integration in consumer electronics, edge computing, and smart workspace solutions.' },
]

const blogArticles = [
  { img: c1, tag: 'Guide', date: 'Mar 14, 2026', title: '10 Tips to Optimize Your Gaming Laptop Performance', desc: 'From thermal management to software tweaks — maximize every frame with these expert tips for MSI gaming laptops.' },
  { img: c2, tag: 'Deep Dive', date: 'Mar 11, 2026', title: 'Understanding AI Copilot+ on MSI Laptops', desc: 'How NPU-powered AI features are transforming the way creators and professionals interact with their devices.' },
  { img: c3, tag: 'Comparison', date: 'Mar 7, 2026', title: 'Creator vs Gaming Laptops: Which One Is Right for You?', desc: 'A comprehensive breakdown of specs, use cases, and value to help you choose the perfect MSI laptop.' },
  { img: c4, tag: 'Tutorial', date: 'Mar 2, 2026', title: 'Building the Ultimate Streaming Setup with MSI', desc: 'Step-by-step guide to setting up a professional streaming station using MSI hardware and software.' },
  { img: c5, tag: 'Industry', date: 'Feb 25, 2026', title: 'The Rise of Edge Computing in Enterprise', desc: 'How MSI AIoT solutions are enabling real-time data processing at the edge for manufacturing and logistics.' },
  { img: c6, tag: 'Opinion', date: 'Feb 20, 2026', title: 'Why Modular Design Is the Future of Computing', desc: 'Exploring the shift toward upgradeable, repairable hardware and what it means for the next decade of PCs.' },
]

const customerStories = [
  { img: card1, name: 'Sarah Chen', role: 'Freelance Video Editor', product: 'Creator A16 AI Copilot+', quote: 'The AI-powered noise reduction and auto-color grading have cut my editing time in half. This laptop pays for itself.', rating: 5 },
  { img: card3, name: 'Marcus Weber', role: 'Esports Team Manager', product: 'Titan 18 HX', quote: 'Our entire roster switched to MSI. The performance consistency during tournaments is unmatched — zero frame drops under pressure.', rating: 5 },
  { img: card5, name: 'Priya Patel', role: 'Architecture Studio Owner', product: 'Prestige 16 AI Evo', quote: 'Running Revit, Lumion, and Photoshop simultaneously without lag. The 16:10 display is perfect for architectural drawings.', rating: 4 },
  { img: card2, name: 'Alex Rodriguez', role: 'Game Developer', product: 'Stealth 16 AI Studio', quote: 'Compiling Unreal Engine projects on the go without carrying a brick. The balance of power and portability is incredible.', rating: 5 },
]

function StarRating({ count }) {
  return (
    <div className="storyStars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? 'starFilled' : 'starEmpty'}>&#9733;</span>
      ))}
    </div>
  )
}

export default function WhatsNew() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    AOS.refresh()
  }, [activeTab])

  return (
    <div className="whatsNewPage">
      <div className="whatsNewHero">
        <h1 data-aos="fade-down">What's New</h1>
        <p data-aos="fade-up" data-aos-delay="100">Latest news, product launches, and stories from MSI</p>
      </div>

      <nav className="wnTabs" data-aos="fade-up" data-aos-delay="200">
        <div className="wnTabList">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`wnTab${activeTab === i ? ' wnTabActive' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      <div className="wnTabContent">

        {/* Showcase Arena */}
        {activeTab === 0 && (
          <section className="showcaseSection">
            {showcaseItems.filter(s => s.featured).map((news, i) => (
              <div className="heroArticleCard" key={i} data-aos="fade-up">
                <img src={news.img} alt={news.title} />
                <div className="heroArticleOverlay">
                  <span className="articleTag">{news.tag}</span>
                  <h2>{news.title}</h2>
                  <p>{news.desc}</p>
                  <span className="articleDate">{news.date}</span>
                </div>
              </div>
            ))}
            <div className="articlesGrid">
              {showcaseItems.filter(s => !s.featured).map((article, i) => (
                <div className="articleCard" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="articleImgWrap">
                    <img src={article.img} alt={article.title} />
                    <span className="articleTag">{article.tag}</span>
                  </div>
                  <div className="articleInfo">
                    <span className="articleDate">{article.date}</span>
                    <h3>{article.title}</h3>
                    <p>{article.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Promotions */}
        {activeTab === 1 && (
          <section className="promosSection">
            <div className="promosGrid">
              {promotions.map((promo, i) => (
                <div className="promoCard" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="promoImgWrap">
                    <img src={promo.img} alt={promo.title} />
                    <span className="promoBadge">{promo.badge}</span>
                  </div>
                  <div className="promoInfo">
                    <h3>{promo.title}</h3>
                    <p>{promo.desc}</p>
                    <button className="promoBtn">{promo.link}</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Upcoming Events */}
        {activeTab === 2 && (
          <section className="eventsSection">
            <div className="eventsList">
              {events.map((event, i) => (
                <div className="wnEventCard" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="eventDateBlock">
                    <span className="eventMonth">{event.month}</span>
                    <span className="eventDay">{event.day}</span>
                  </div>
                  <div className="eventBody">
                    <div className="eventTop">
                      <h3>{event.title}</h3>
                      <span className={`eventBadge eventBadge--${event.status.replace(/\s+/g, '').toLowerCase()}`}>{event.status}</span>
                    </div>
                    <p className="eventDesc">{event.desc}</p>
                    <span className="eventLocation">{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Blog Articles */}
        {activeTab === 3 && (
          <section className="blogSection">
            <div className="articlesGrid">
              {blogArticles.map((article, i) => (
                <div className="articleCard" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="articleImgWrap">
                    <img src={article.img} alt={article.title} />
                    <span className="articleTag">{article.tag}</span>
                  </div>
                  <div className="articleInfo">
                    <span className="articleDate">{article.date}</span>
                    <h3>{article.title}</h3>
                    <p>{article.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Customer Stories */}
        {activeTab === 4 && (
          <section className="storiesSection">
            <div className="storiesGrid">
              {customerStories.map((story, i) => (
                <div className="storyCard" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="storyHeader">
                    <img src={story.img} alt={story.name} className="storyAvatar" />
                    <div>
                      <h4 className="storyName">{story.name}</h4>
                      <span className="storyRole">{story.role}</span>
                    </div>
                  </div>
                  <blockquote className="storyQuote">"{story.quote}"</blockquote>
                  <div className="storyFooter">
                    <span className="storyProduct">{story.product}</span>
                    <StarRating count={story.rating} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      <Footer />
    </div>
  )
}
