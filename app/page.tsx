const projects = [
  {n:"01", type:"SERVICE-ORIENTED PLATFORM", title:"GardenLink", image:"/gardenlink-project.webp", desc:"A home-garden marketplace connecting growers and consumers through two loosely coupled backend systems, event-driven communication and a modern frontend.", tech:["React","Spring Boot","Node.js","PostgreSQL","MongoDB","RabbitMQ","Docker","Jenkins","Kubernetes"]},
  {n:"02", type:"PHARMACY MANAGEMENT SYSTEM", title:"MedCare", image:"/medcare-project.webp", desc:"Inventory, order and invoice management with role-based access and a securely designed relational data layer.", tech:["PHP","MySQL","Role-based Access"]},
  {n:"03", type:"OBJECT-ORIENTED SYSTEM", title:"Online Food Ordering", image:"/food-ordering-project.webp", desc:"A Java ordering system with menu management, billing, priority ordering, undo operations and daily aggregation.", tech:["Java","OOP","SQLite","Data Structures"]}
];
const toolbox = [
  {category:'Languages', items:[{name:'C', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg'}, {name:'C++', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg'}, {name:'Java', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'}, {name:'JavaScript', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'}, {name:'TypeScript', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'}, {name:'Python', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'}, {name:'PHP', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'}, {name:'R', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg'}]},
  {category:'Web & Backend', items:[{name:'React', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'}, {name:'Node.js', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'}, {name:'NestJS', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg'}, {name:'Spring', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'}, {name:'Maven', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg'}, {name:'Nginx', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg'}]},
  {category:'Data', items:[{name:'PostgreSQL', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'}, {name:'MySQL', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'}, {name:'MongoDB', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'}, {name:'Redis', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg'}, {name:'Supabase', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg'}, {name:'Elasticsearch', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg'}]},
  {category:'Cloud & DevOps', items:[{name:'AWS', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'}, {name:'Vercel', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg'}, {name:'Cloudflare', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg'}, {name:'Docker', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'}, {name:'Kubernetes', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg'}, {name:'Jenkins', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg'}, {name:'GitHub', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'}]},
  {category:'Data & ML', items:[{name:'scikit-learn', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg'}, {name:'NumPy', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg'}, {name:'Pandas', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg'}, {name:'Matplotlib', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg'}]},
  {category:'Tools', items:[{name:'Postman', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg'}, {name:'Figma', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'}, {name:'Windows Terminal', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg'}]},
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
  <section className="content workV10" id="work"><header><small>01 / SELECTED WORK</small><h2>Things I&apos;ve <em>built.</em></h2></header><div className="projects">{projects.map(p=><article className="project" key={p.n}><div className="projectVisual"><img src={p.image} alt={`${p.title} conceptual project artwork`} loading="lazy"/><span className="projectVisualNumber">{p.n} / 03</span></div><div className="projectBody"><small>{p.type}</small><h3>{p.title}</h3><p>{p.desc}</p><div className="projectTech">{p.tech.map(t=>{const icons:Record<string,string>={"React":"react/react-original.svg","Spring Boot":"spring/spring-original.svg","Node.js":"nodejs/nodejs-original.svg","PostgreSQL":"postgresql/postgresql-original.svg","MongoDB":"mongodb/mongodb-original.svg","RabbitMQ":"rabbitmq/rabbitmq-original.svg","Docker":"docker/docker-original.svg","Jenkins":"jenkins/jenkins-original.svg","Kubernetes":"kubernetes/kubernetes-original.svg","PHP":"php/php-original.svg","MySQL":"mysql/mysql-original.svg","Java":"java/java-original.svg","SQLite":"sqlite/sqlite-original.svg"};return <span className="projectTechTag" key={`${p.n}-${t}`}>{icons[t]?<img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icons[t]}`} alt="" loading="lazy"/>:<span className="projectTechGlyph" aria-hidden="true">◆</span>}<span>{t}</span></span>})}</div></div></article>)}</div></section>
  <section className="content about aboutV7" id="about">
    <div className="aboutIntro"><small>02 / ABOUT</small><h2>Curiosity,<br/><em>engineered.</em></h2><p className="lead">Computer Science undergraduate at the University of Sri Jayewardenepura, interested in turning abstract ideas into systems that solve real problems.</p><p className="aboutSecondary">My background spans computer science, applied mathematics and physical sciences. I enjoy moving between software architecture, cloud infrastructure, data and the reasoning underneath them.</p></div>
    <div className="educationPanel"><div className="educationHeading"><span>EDUCATION</span><small>A JOURNEY OF LEARNING AND GROWTH</small></div><ol className="educationTimeline">
      <li className="educationItem"><div className="educationLogo"><img src="/usj-logo.png" alt="University of Sri Jayewardenepura emblem" /></div><div className="educationDetails"><h3>University of Sri Jayewardenepura</h3><p>B.Sc. (Hons) in Computer Science</p><time>Apr 2024 — Oct 2028</time></div><span className="educationPlace">NUGEGODA<br/>SRI LANKA</span></li>
      <li className="educationItem"><div className="educationLogo"><img src="/ananda-logo.png" alt="Ananda College crest" /></div><div className="educationDetails"><h3>Ananda College</h3><p>Combined Mathematics, Physics &amp; Chemistry</p><time>2020 — 2023</time></div><span className="educationPlace">COLOMBO 10<br/>SRI LANKA</span></li>
      <li className="educationItem"><div className="educationLogo"><img src="/mahanama-logo.png" alt="Mahanama College crest" /></div><div className="educationDetails"><h3>Mahanama College Colombo</h3><time>2014 — 2020</time></div><span className="educationPlace">COLOMBO 03<br/>SRI LANKA</span></li>
      <li className="educationItem"><div className="educationLogo"><img src="/somaweera-logo.png" alt="Somaweera Chandrasiri Vidyalaya emblem" /></div><div className="educationDetails"><h3>Somaweera Chandrasiri Vidyalaya, Piliyandala</h3><time>2009 — 2014</time></div><span className="educationPlace">PILIYANDALA<br/>SRI LANKA</span></li>
    </ol></div>
  </section>
  <section className="content" id="stack"><header><small>03 / TOOLBOX</small><h2>Tech I work <em>with.</em></h2></header><div className="toolbox toolboxV8">{toolbox.map(group=><article className="toolboxGroup" key={group.category}><h3>{group.category}</h3><div className="techGrid">{group.items.map(tool=><div className="techTile" key={tool.name} title={tool.name}><div className="techIcon"><img src={tool.icon} alt="" loading="lazy" /></div><span>{tool.name}</span></div>)}</div></article>)}</div></section>
  <section className="content achievementsSection" id="achievements">
    <header><small>04 / BEYOND CODE</small><h2>Credentials & <em>range.</em></h2></header>
    <div className="achievementGrid">
      <article className="achievementCard awsCard">
        <div className="achievementTop"><span>01 / AWS ACADEMY</span><span className="achievementYear">2026</span></div>
        <div className="achievementIdentity"><div className="achievementMark awsMark">aws<span>academy</span></div><div><h3>Cloud &amp; Security</h3><p>Four AWS Academy graduate training badges, covering cloud infrastructure, security and microservices delivery.</p></div></div>
        <div className="badgeGrid">
          {[
            {name:"Cloud Security Builder",date:"AUG 2026",src:"https://images.credly.com/images/cceb6e0f-55f4-45d5-aec6-0e4435f488c6/blob"},
            {name:"Cloud Security Foundations",date:"JUL 2026",src:"https://images.credly.com/images/7f7ea828-a10d-44f8-8baa-58a9c1af7671/twitter_thumb_201604_blob"},
            {name:"Microservices & CI/CD Pipeline Builder",date:"JUL 2026",src:"https://images.credly.com/images/6ff76b93-852c-4f9e-a73a-fc10424a1007/twitter_thumb_201604_blob"},
            {name:"Cloud Foundations",date:"JUN 2026",src:"https://images.credly.com/images/e3541a0c-dd4a-4820-8052-5001006efc85/twitter_thumb_201604_blob"}
          ].map(b=><div className="badgeItem" key={b.name}><div className="badgeImage"><img src={b.src} alt={`AWS Academy ${b.name} training badge`} loading="lazy" /></div><div><strong>{b.name}</strong><small>{b.date}</small></div></div>)}
        </div>
        <p className="badgeDisclaimer">Official badge artwork · Individual verification links can be added later.</p>
      </article>
      <article className="achievementCard chessCard">
        <div className="achievementTop"><span>02 / COMPETITIVE CHESS</span><span className="achievementYear">2012 — 2013</span></div>
        <div className="achievementArtwork chessArtwork" aria-hidden="true"><span>♞</span><i>STRATEGY / LEADERSHIP</i></div>
        <h3>Championships</h3>
        <div className="achievementEntries">
          <div><strong>National Inter-School Team Chess Championship</strong><small>DIVISION C · CHAMPIONS · 2013</small><p>Team leader; helped bring the school's first chess championship.</p></div>
          <div><strong>Western Province Schools — Under 11</strong><small>KCA 10TH ANNIVERSARY · CHAMPIONS · 2012</small><p>Led the winning Under-11 Boys team.</p></div>
        </div>
      </article>
      <article className="achievementCard researchCard">
        <div className="achievementTop"><span>03 / ACADEMIC WORK</span><span className="achievementYear">2025</span></div>
        <div className="achievementArtwork researchArtwork" aria-hidden="true"><span>∑</span><i>ANALYZE / MODEL / EXPLORE</i></div>
        <h3>Research mindset</h3>
        <div className="achievementEntries">
          <div><strong>Analysis of Linear Regression</strong><small>MAY — AUG 2025</small><p>Research into regression methods, mathematical writing and LaTeX.</p></div>
          <div><strong>Mathematical Modelling for Mechanical Vibration</strong><small>JAN — MAY 2025</small><p>Spring–mass systems, damping and mathematical modelling.</p></div>
        </div>
      </article>
      <article className="achievementCard writingCard">
        <div className="achievementTop"><span>04 / CREATIVE WRITING</span><span className="achievementYear">2017</span></div>
        <div className="achievementArtwork writingArtwork" aria-hidden="true"><span>✒</span><i>CREATIVITY / EXPRESSION</i></div>
        <h3>Beyond the technical</h3>
        <div className="achievementEntries">
          <div><strong>Creative Writing — First Place</strong><small>NATIONAL LITERATURE CEREMONY · 2017</small><p>Recognized for creative writing by the Department of Cultural Affairs.</p></div>
          <div><strong>Divisional &amp; Provincial Recognition</strong><small>1ST DIVISIONAL · 3RD PROVINCIAL</small><p>Associated with Mahanama College Colombo.</p></div>
        </div>
      </article>
    </div>
  </section>
  <footer><p>HAVE AN IDEA? LET&apos;S MAKE IT REAL.</p><h2>LET&apos;S <em>BUILD.</em></h2><div><span>© 2026 CHARUTHA PALIHAWADANA</span><aside><a href="https://github.com/pRaharshAxi">GitHub ↗</a><a href="https://www.linkedin.com/in/charutha-palihawadana-7b8aa92a3">LinkedIn ↗</a><a href="mailto:palihawadanacharutha@gmail.com">Email ↗</a></aside></div></footer>
</main>}
