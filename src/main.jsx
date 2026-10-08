import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  BrainCircuit,
  Check,
  ChevronDown,
  FileStack,
  Factory,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Network,
  Sparkles,
  X,
} from 'lucide-react';
import './styles.css';

const capabilities = [
  { icon: BrainCircuit, number: '01', title: 'Business AI', text: 'Company OS, quotation, dossier và các workflow có evidence, approval, audit.' },
  { icon: Network, number: '02', title: 'AI agents', text: 'Agent có tools, memory, policy và ranh giới rõ ràng để chạy trong thực tế.' },
  { icon: Factory, number: '03', title: 'Industrial systems', text: 'Đưa AI vào thiết bị, production cell, CAD, BOM và vận hành kỹ thuật.' },
  { icon: FileStack, number: '04', title: 'Data intelligence', text: 'Biến PDF, Excel, DOCX và dữ liệu rời rạc thành đầu vào có cấu trúc.' },
  { icon: Layers3, number: '05', title: 'ERP & operations', text: 'ERP, CRM, procurement và công cụ vận hành được thiết kế theo nghiệp vụ.' },
  { icon: Sparkles, number: '06', title: 'AI products', text: 'Từ giáo dục, media đến sản phẩm theo ngành, xây nhanh nhưng có nền tảng.' },
];

const projects = [
  { index: '01', tag: 'BUSINESS SYSTEMS', title: 'CNB ERP / CRM', text: 'Không gian làm việc hợp nhất cho bán hàng, cơ hội, khách hàng và vận hành doanh nghiệp.', tone: 'mint', meta: 'CRM · Workflow · Operations', image: '/media/cnb-sales-workflow.jpg' },
  { index: '02', tag: 'OPERATIONS AI', title: 'Workflow & governance', text: 'Biến kế hoạch, công việc và nhịp báo cáo thành một hệ thống rõ việc, rõ tiến độ.', tone: 'amber', meta: 'Roadmap · Task board · Reporting', image: '/media/cnb-roadmap.jpg' },
  { index: '03', tag: 'INDUSTRIAL SOFTWARE', title: 'Engineering delivery', text: 'Dự toán, BOQ và dữ liệu kỹ thuật được kết nối để đội ngũ triển khai nhanh và kiểm soát tốt hơn.', tone: 'blue', meta: 'BOQ · Procurement · Evidence', image: '/media/cnb-estimate.jpg' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CNB Next AI - về đầu trang" onClick={closeMenu}>
          <span className="brand-mark">CNB</span>
          <span className="brand-divider" />
          <span className="brand-name">NEXT AI</span>
        </a>
        <button className="menu-button" type="button" aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Điều hướng chính">
          <a href="#capabilities" onClick={closeMenu}>Năng lực</a>
          <a href="#work" onClick={closeMenu}>Case study</a>
          <a href="#process" onClick={closeMenu}>Cách làm</a>
          <a href="#contact" onClick={closeMenu}>Liên hệ</a>
          <a className="nav-cta" href="mailto:anhlq@cnbnextai.com">Trao đổi <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> AI SYSTEMS / HANOI / EST. 2025</p>
            <h1>Xây hệ thống AI <em>vận hành được.</em></h1>
            <p className="hero-lede">CNB Next AI xây phần mềm và nền tảng kết hợp AI, dữ liệu và quy trình cho những bài toán thật của doanh nghiệp.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Đặt bài toán <ArrowRight size={17} /></a>
              <a className="text-link" href="#capabilities">Xem năng lực <ArrowDownIcon /></a>
            </div>
            <div className="hero-proof">
              <div><strong>01</strong><span>Ý tưởng<br />đến hệ thống</span></div>
              <div><strong>06</strong><span>Năng lực<br />AI & software</span></div>
              <div><strong>∞</strong><span>Không gian<br />để mở rộng</span></div>
            </div>
          </div>

          <SystemVisual />
        </section>

        <div className="ticker" aria-label="Năng lực chính">
          <div className="ticker-track">
            <span>AI SYSTEMS</span><i aria-hidden="true">✳</i><span>SOFTWARE ENGINEERING</span><i aria-hidden="true">✳</i><span>INDUSTRIAL INTELLIGENCE</span><i aria-hidden="true">✳</i><span>DATA &amp; WORKFLOW</span>
          </div>
        </div>

        <section className="section-wrap section-block" id="capabilities">
          <SectionIntro kicker="WHAT WE BUILD" title={<>Một lớp công nghệ mới<br /><span>cho cách doanh nghiệp vận hành.</span></>} text="Không bắt đầu từ một mô hình. Chúng tôi bắt đầu từ quy trình, dữ liệu và quyết định cần được làm tốt hơn." />
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, number, title, text }) => (
              <article className="capability-card" key={title}>
                <div className="card-top"><span className="card-number">{number}</span><Icon size={21} strokeWidth={1.6} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="card-arrow"><ArrowUpRight size={17} /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap section-block">
            <SectionIntro kicker="SELECTED WORK" title={<>Từ research đến<br /><span>thứ có thể chạy.</span></>} text="Một vài hướng chúng tôi đang biến thành sản phẩm, nền tảng và năng lực triển khai." light />
            <div className="project-list">
              {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
            </div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="section-wrap section-block process-layout">
            <SectionIntro kicker="HOW WE WORK" title={<>Rõ bài toán.<br /><span>Chắc hệ thống.</span></>} text="AI chỉ có giá trị khi được đặt đúng chỗ trong một hệ thống có thể hiểu, kiểm tra và cải tiến." />
            <div className="process-list">
              {[
                ['01', 'Understand', 'Nghiệp vụ, dữ liệu, ràng buộc và rủi ro.'],
                ['02', 'Model', 'Domain model, workflow và contract rõ ràng.'],
                ['03', 'Build', 'Một slice chạy được, có AI boundary và guardrails.'],
                ['04', 'Prove', 'Test, trace và review trên luồng dùng đại diện.'],
              ].map(([number, title, text]) => (
                <div className="process-row" key={number}>
                  <span className="process-number">{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <Check size={18} className="process-check" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <p className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> LET&apos;S BUILD THE NEXT LAYER</p>
              <h2>Có một quy trình<br /><em>cần thành hệ thống?</em></h2>
            </div>
            <div className="contact-side">
              <p>Hãy kể cho chúng tôi điều đang làm chậm đội ngũ của bạn. Một email đủ để bắt đầu.</p>
              <a className="contact-email" href="mailto:anhlq@cnbnextai.com">anhlq@cnbnextai.com <ArrowUpRight size={20} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-grid">
          <div className="footer-brand"><span className="brand-mark">CNB</span><span className="brand-divider" /><span className="brand-name">NEXT AI</span><p>AI, phần mềm và hệ thống<br />cho những bài toán thật.</p></div>
          <div className="footer-meta"><p><MapPin size={15} /> Số 7 ngách 86/48, Nghĩa Lộ, Hà Nội</p><a href="mailto:anhlq@cnbnextai.com"><Mail size={15} /> anhlq@cnbnextai.com</a></div>
          <div className="footer-note"><span>EST. 2025</span><span>© {new Date().getFullYear()} CNB Next AI</span></div>
        </div>
      </footer>
    </div>
  );
}

function ArrowDownIcon() {
  return <ChevronDown size={16} />;
}

function SectionIntro({ kicker, title, text, light = false }) {
  return <div className={`section-intro ${light ? 'section-intro-light' : ''}`}><div><p className="section-kicker">{kicker}</p><h2>{title}</h2></div><p className="section-intro-text">{text}</p></div>;
}

function ProjectCard({ index, tag, title, text, tone, meta, image }) {
  return <article className={`project-card project-${tone}`}><div className="project-visual"><img className="project-image" src={image} alt={`${title} - giao diện sản phẩm CNB Next AI`} loading="lazy" /><span className="project-index">{index}</span><div className="project-chip"><Boxes size={15} /> {tag}</div></div><div className="project-copy"><p className="project-tag">{tag}</p><h3>{title}</h3><p>{text}</p><div className="project-meta"><span>{meta}</span><ArrowUpRight size={17} /></div></div></article>;
}

function SystemVisual() {
  return <figure className="system-visual" aria-label="Hạ tầng phần mềm và dữ liệu cho hệ thống AI">
    <div className="visual-label visual-label-top"><span>AI / SOFTWARE / SYSTEMS</span><span>CNB NEXT AI</span></div>
    <div className="visual-photo">
      <img src="/media/cnb-dashboard.jpg" alt="Dashboard CNB ERP với các chỉ số cơ hội, dự án và công việc" />
      <div className="visual-photo-shade" />
      <div className="visual-photo-caption"><span className="visual-photo-index">01 / 03</span><div><strong>Systems that work in context.</strong><span>Business data / AI layer / human decisions</span></div></div>
    </div>
    <figcaption className="visual-label visual-label-bottom"><span>BUILT FOR REAL WORK</span><span>HANOI, VIETNAM</span></figcaption>
  </figure>;
}

createRoot(document.getElementById('root')).render(<App />);
