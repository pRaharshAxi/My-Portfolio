const projects = [
  {n:"01", type:"SERVICE-ORIENTED PLATFORM", title:"GardenLink", desc:"A home-garden marketplace connecting growers and consumers through two loosely coupled backend systems, event-driven communication and a modern frontend.", tech:["React","Spring Boot","Node.js","PostgreSQL","MongoDB","RabbitMQ","Docker","Jenkins","Kubernetes"]},
  {n:"02", type:"PHARMACY MANAGEMENT SYSTEM", title:"MedCare", desc:"Inventory, order and invoice management with role-based access and a securely designed relational data layer.", tech:["PHP","MySQL","Role-based Access"]},
  {n:"03", type:"OBJECT-ORIENTED SYSTEM", title:"Online Food Ordering", desc:"A Java ordering system with menu management, billing, priority ordering, undo operations and daily aggregation.", tech:["Java","OOP","SQLite","Data Structures"]}
];
const toolbox = [
  ["Languages","C · C++ · Java · JavaScript · TypeScript · Python · PHP · R"],
  ["Web & Backend","React · Node.js · NestJS · Spring · Maven · Nginx"],
  ["Data","PostgreSQL · MySQL · MongoDB · Redis · Supabase · Elasticsearch"],
  ["Cloud & DevOps","AWS · Vercel · Cloudflare · Docker · Kubernetes · Jenkins · GitHub"],
  ["Data & ML","scikit-learn · NumPy · Pandas · Matplotlib"],
  ["Tools","Postman · Figma · Windows Terminal"]
];
export default function Home(){return <main>
  <nav className="nav"><a className="logo" href="#top">CP<span>.</span></a><div className="navLinks"><a href="#work">Work</a><a href="#about">About</a><a href="#stack">Stack</a></div><a className="talk" href="mailto:palihawadanacharutha@gmail.com">LET&apos;S TALK ↗</a></nav>
  <section className="hero" id="top">
    <div className="grid"></div><div className="glow"></div><div className="ring"></div><div className="ringSquare s1"></div><div className="ringSquare s2"></div><div className="ringSquare s3"></div>
    <div className="heroLeft">
      <div className="availability"><i></i>COLOMBO, SRI LANKA · AVAILABLE FOR OPPORTUNITIES</div>
      <h1><strong>CHARUTHA</strong><span>PALIHAWADANA</span></h1>
      <p>I build software at the intersection of<br/><b>systems, cloud, data</b> and a mathematical<br/>way of thinking.</p>
      <div className="heroButtons"><a className="cta" href="#work">VIEW MY WORK ↗</a><a className="ghost" href="#about">ABOUT ME</a></div>
    </div>
    <div className="portraitAura"></div><img className="portrait" src="/charutha-themed.png" alt="Charutha Palihawadana" />
    <div className="verticalLabel">COMPUTER SCIENCE</div>
    <div className="roles"><b></b><span>SOFTWARE ENGINEERING</span><span>CLOUD & DEVOPS</span><span>DATA & ANALYTICS</span><span>MATHEMATICAL THINKING</span></div>
    <div className="skillBar">
      <div><i>&lt;/&gt;</i><section><b>Full Stack</b><small>WEB · MOBILE · APIS</small></section></div>
      <div><i>☁</i><section><b>Cloud & DevOps</b><small>AWS · DOCKER · K8S</small></section></div>
      <div><i>▣</i><section><b>Data & ML</b><small>PYTHON · R · ANALYTICS</small></section></div>
      <div><i>∑</i><section><b>Mathematics</b><small>MODELLING · STATISTICS</small></section></div>
    </div><a className="scroll" href="#work">SCROLL TO EXPLORE ↓</a>
  </section>
  <section className="content" id="work"><header><small>01 / SELECTED WORK</small><h2>Things I&apos;ve <em>built.</em></h2></header><div className="projects">{projects.map(p=><article className="project" key={p.n}><span className="number">{p.n}</span><small>{p.type}</small><h3>{p.title}</h3><p>{p.desc}</p><div className="chips">{p.tech.map(t=><span key={`${p.n}-${t}`}>{t}</span>)}</div></article>)}</div></section>
  <section className="content about aboutV7" id="about">
    <div className="aboutIntro"><small>02 / ABOUT</small><h2>Curiosity,<br/><em>engineered.</em></h2><p className="lead">Computer Science undergraduate at the University of Sri Jayewardenepura, interested in turning abstract ideas into systems that solve real problems.</p><p className="aboutSecondary">My background spans computer science, applied mathematics and physical sciences. I enjoy moving between software architecture, cloud infrastructure, data and the reasoning underneath them.</p></div>
    <div className="educationPanel"><div className="educationHeading"><span>EDUCATION</span><small>A JOURNEY OF LEARNING AND GROWTH</small></div><ol className="educationTimeline">
      <li className="educationItem"><div className="educationLogo"><img src="/usj-logo.png" alt="University of Sri Jayewardenepura emblem" /></div><div className="educationDetails"><h3>University of Sri Jayewardenepura</h3><p>B.Sc. (Hons) in Computer Science</p><time>Apr 2024 — Oct 2028</time></div><span className="educationPlace">NUGEGODA<br/>SRI LANKA</span></li>
      <li className="educationItem"><div className="educationLogo"><img src="/ananda-logo.png" alt="Ananda College crest" /></div><div className="educationDetails"><h3>Ananda College</h3><p>Combined Mathematics, Physics &amp; Chemistry</p><time>2020 — 2023</time></div><span className="educationPlace">COLOMBO 10<br/>SRI LANKA</span></li>
      <li className="educationItem"><div className="educationLogo"><img src="/mahanama-logo.png" alt="Mahanama College crest" /></div><div className="educationDetails"><h3>Mahanama College Colombo</h3><time>2014 — 2020</time></div><span className="educationPlace">COLOMBO 03<br/>SRI LANKA</span></li>
      <li className="educationItem"><div className="educationLogo"><img src="/somaweera-logo.png" alt="Somaweera Chandrasiri Vidyalaya emblem" /></div><div className="educationDetails"><h3>Somaweera Chandrasiri Vidyalaya, Piliyandala</h3><time>2009 — 2014</time></div><span className="educationPlace">PILIYANDALA<br/>SRI LANKA</span></li>
    </ol></div>
  </section>
  <section className="content" id="stack"><header><small>03 / TOOLBOX</small><h2>Tech I work <em>with.</em></h2></header><div className="toolbox">{toolbox.map(([a,b])=><article key={a}><b>{a}</b><p>{b}</p></article>)}</div></section>
  <section className="content"><header><small>04 / BEYOND CODE</small><h2>Credentials & <em>range.</em></h2></header><div className="beyond"><article><small>AWS ACADEMY</small><h3>Cloud & Security</h3><p>Cloud Foundations · Microservices & CI/CD Pipeline Builder · Cloud Security Foundations · Cloud Security Builder</p></article><article><small>COMPETITIVE CHESS</small><h3>Championships</h3><p>Sri Lanka Inter School Team Chess Championship — Division C · Western Province Schools U11</p></article><article><small>ACADEMIC WORK</small><h3>Research mindset</h3><p>Analysis of Linear Regression · Mathematical Modelling for Mechanical Vibration</p></article></div></section>
  <footer><p>HAVE AN IDEA? LET&apos;S MAKE IT REAL.</p><h2>LET&apos;S <em>BUILD.</em></h2><div><span>© 2026 CHARUTHA PALIHAWADANA</span><aside><a href="https://github.com/pRaharshAxi">GitHub ↗</a><a href="https://www.linkedin.com/in/charutha-palihawadana-7b8aa92a3">LinkedIn ↗</a><a href="mailto:palihawadanacharutha@gmail.com">Email ↗</a></aside></div></footer>
</main>}
