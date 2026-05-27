import { useContext } from 'react'
import { AppContext } from '../App'

const ARTICLES = [
  {
    href: 'https://dev.to/m4rri4nne/building-a-database-performance-testing-tool-with-ai-the-honest-breakdown-3c0c',
    badge: 'badge-devto',
    badgeLabel: '◆ Dev.to',
    title: 'Building a Database Performance Testing Tool With AI: The Honest Breakdown',
    desc: 'It still feels a little strange to have AI writing practically all the code — but I decided to give it a real shot and document everything.',
    date: '2026 · 05 · 21',
  },
  {
    href: 'https://dev.to/he4rt/o-que-uma-usina-nuclear-tem-a-ver-com-o-seu-processo-de-qa-103j',
    badge: 'badge-devto',
    badgeLabel: '◆ Dev.to',
    title: 'O que uma usina nuclear tem a ver com o seu processo de QA?',
    desc: 'A gente sabe que testar e validar um software antes de ir para produção é importante. Mas você já parou pra pensar por quê?',
    date: '2026 · 04 · 05',
  },
  {
    href: 'https://dev.to/m4rri4nne/your-swagger-doc-is-more-than-documentation-its-a-test-suite-waiting-to-happen-gm8',
    badge: 'badge-devto',
    badgeLabel: '◆ Dev.to',
    title: "Your Swagger Doc Is More Than Documentation — It's a Test Suite Waiting to Happen",
    desc: 'How to use Swagger and AI to generate test cases automatically from your OpenAPI specification.',
    date: '2026 · 02 · 19',
  },
  {
    href: 'https://dev.to/he4rt/api-vs-event-streaming-o-que-muda-para-quem-testa-1f1h',
    badge: 'badge-devto',
    badgeLabel: '◆ Dev.to',
    title: 'API vs Event Streaming: O Que Muda Para Quem Testa?',
    desc: 'Pensando em como contribuir para a comunidade de QA e entender diferenças práticas entre API e Event Streaming.',
    date: '2026 · 02 · 12',
  },
  {
    href: 'https://dev.to/m4rri4nne/rewriting-my-first-nunit-api-tests-cleaner-faster-better-24fa',
    badge: 'badge-devto',
    badgeLabel: '◆ Dev.to',
    title: 'Rewriting My First NUnit API Tests: Cleaner, Faster, Better',
    desc: 'Have you ever caught yourself thinking: "What am I even doing?" That\'s exactly how I feel about my old API tests.',
    date: '2026 · 01 · 26',
  },
]

export default function Articles() {
  const { t } = useContext(AppContext)

  return (
    <section id="articles">
      <div className="s-inner">
        <div className="s-head">
          <p className="s-eyebrow">{t['art.eyebrow']}</p>
          <h2 className="s-title">{t['art.title']}</h2>
        </div>
        <div className="articles-grid">
          {ARTICLES.map(article => (
            <a key={article.href} className="a-card" href={article.href} target="_blank" rel="noopener noreferrer">
              <span className={`a-badge ${article.badge}`}>{article.badgeLabel}</span>
              <div className="a-title">{article.title}</div>
              <div className="a-desc">{article.desc}</div>
              <div className="a-date">{article.date}</div>
            </a>
          ))}
          <a className="a-card" href="https://community.aws/u/m4rri4nne" target="_blank" rel="noopener noreferrer">
            <span className="a-badge badge-aws">◆ AWS Builder</span>
            <div className="a-title">{t['art.awsTitle']}</div>
            <div className="a-desc">{t['art.awsDesc']}</div>
            <div className="a-date">community.aws</div>
          </a>
        </div>
      </div>
    </section>
  )
}
