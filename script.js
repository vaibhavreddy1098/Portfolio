const { useState, useEffect, useRef } = React;

// --- Data ---
const projectsdata = [
    {
        id: 'llm-research',
        title: 'Research on Energy Efficient LLMs',
        category: 'Machine Learning',
        summary: 'Trace analysis of LLMs to identify GPU idle intervals and implement power-saving DVFS strategies.',
        tags: ['PyTorch Profiler','DVFS', 'Python'],
        github: 'https://github.com/vaibhav-reddy1',
        content: `
            <p class="fw-semibold text-dark">Situation:</p>
            <p>Large Language Models (LLMs) are computationally expensive, and their inference operations consume significant amounts of energy. A key opportunity for optimization lies in the periods where the GPU is idle or underutilized.</p>
            <p class="fw-semibold text-dark mt-4">Task:</p>
            <p>To conduct a detailed trace analysis of various LLM architectures to precisely identify GPU idle intervals and implement Dynamic Voltage and Frequency Scaling (DVFS) strategies to reduce power consumption without impacting performance.</p>
            <p class="fw-semibold text-dark mt-4">Action:</p>
            <p>I utilized the PyTorch Profiler to perform an in-depth trace analysis, visualizing the execution timeline to pinpoint operations causing GPU idle states. Based on this, I designed DVFS strategies that dynamically lowered the GPU's voltage and frequency during these idle periods. Our team with the help of our professor Devashree Tripaty, we will implement it.</p>
            <p class="fw-semibold text-dark mt-4">Result:</p>
            <p>In Theory, These strategies achieved up to 50% in power savings during LLM inference with no measurable degradation in model performance. The chart below illustrates the significant reduction in relative energy consumption.</p>
        `
    },
    {
        id: 'portfolio-website',
        title: 'Interactive Portfolio Website',
        category: 'Web Development',
        summary: 'Designed and developed a personal portfolio from scratch using React.js and Bootstrap to showcase projects and skills.',
        tags: ['React.js', 'Bootstrap 5', 'JavaScript', 'HTML5', 'CSS3'],
        github: 'https://github.com/vaibhav-reddy1/portfolio',
        liveDemo: '#',
        content: `
            <p class="fw-semibold text-dark">Situation:</p>
            <p>A static resume is insufficient to fully demonstrate technical skills. A dynamic, interactive web portfolio was needed to create a compelling professional narrative using modern technologies like React.</p>
            <p class="fw-semibold text-dark mt-4">Task:</p>
            <p>To build the portfolio as a React-based single-page application, styled with Bootstrap 5. Key requirements included professional design, purposeful animations, and detailed, interactive project case studies managed by React state.</p>
            <p class="fw-semibold text-dark mt-4">Action:</p>
            <p>I architected this website using React's component-based structure. State is managed with React Hooks (useState, useEffect) to handle navigation. Styling was implemented with Bootstrap 5. For data visualization, I integrated Chart.js within a dedicated React component.</p>
            <p class="fw-semibold text-dark mt-4">Result:</p>
            <p>The final product is the website you are currently viewing. It's a professional, high-performance digital portfolio that effectively showcases my capabilities in front-end development using React and modern user experience design.</p>
        `
    },
    {
        id: 'ludo-game',
        title: 'LUDO Game Simulator',
        category: 'Software Dev',
        summary: 'A fully functional, user-friendly Ludo game simulation developed from scratch in C language.',
        tags: ['C'],
        github: 'https://github.com/vaibhav-reddy1',
        content: `
            <p class="fw-semibold text-dark">Situation:</p>
            <p>The objective was to build a complete Ludo game simulation purely in C, demonstrating foundational programming skills and application state management in a terminal-based environment.</p>
            <p class="fw-semibold text-dark mt-4">Task:</p>
            <p>To develop a fully functional Ludo game where users can select players, read rules, and play a complete match, enforcing all traditional Ludo rules.</p>
            <p class="fw-semibold text-dark mt-4">Action:</p>
            <p>I designed the game logic and data structures from the ground up in C. This included creating the board representation, implementing the dice roll, and managing player movement according to Ludo's rules.</p>
            <p class="fw-semibold text-dark mt-4">Result:</p>
            <p>The final product is a robust, playable Ludo game simulator in the command line, showcasing solid C programming, algorithmic thinking, and attention to user experience within terminal constraints.</p>
        `
    }
];
const skillsdata = [
    { category: 'Languages', skills: ['C++', 'Python', 'JavaScript', 'HTML5', 'CSS3'] },
    { category: 'Web & Databases', skills: ['Node.js', 'React.js', 'Bootstrap 5'] },
    { category: 'Machine Learning & AI', skills: ['Supervised Learning', 'Unsupervised Learning', 'Transformers', 'NLP', 'Pandas', 'Numpy', 'Scikit-learn', 'TensorFlow', 'Matplotlib', 'Pytorch'] },
    { category: 'Tools & Platforms', skills: ['Git', 'GitHub', 'VS Code', 'Linux'] }
];
const responsibilitiesdata = [
  {
    role: 'Core Team & Publicity Lead',
    event: 'IIT Bhubaneswar\'s Annual Fest',
    description: 'Selected as a Core Team Member for the merged annual fest, leading the Publicity Team to promote the event.'
  },
  {
    role: 'Core Team & Publicity Lead',
    event: 'Wissenaire (Techno-Management Fest)',
    description: 'Promoted to the Core Team and entrusted with leading the Publicity Team for the university\'s largest techno-management festival.'
  },
  {
    role: 'Senior Member, Alumni Cell',
    event: 'IIT Bhubaneswar',
    description: 'Facilitated communication between alumni and the institute, leveraging networking skills to strengthen relations and organize initiatives.'
  }
];
const sociallinks = [
    { name: 'GitHub', url: 'https://github.com/vaibhavreddy1098', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>` },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/vaibhavreddy01', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor"><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm-8-88a8 8 0 0 1 8-8h15.34a28 28 0 0 0 26-17.77a8 8 0 1 1 15.32 4.41a44 44 0 0 1-41.29 27.36H128a8 8 0 0 1-8-8Zm50.66 40.23a8 8 0 1 1-10.32-11.83a28 28 0 0 0-14-34.83a8 8 0 0 1 8-13.86a44 44 0 0 1 22.06 54.38Z"/></svg>` },
    { name: 'Striver', url: 'https://takeuforward.org/plus/profile/vaibhavreddy2006', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1.23 15.06c-1.42 0-2.6-1.15-2.6-2.63s1.18-2.63 2.6-2.63c.6 0 1.15.2 1.58.5l-1-1.72c-.22-.38-.04-.88.34-1.1l3.52-2.03c.38-.22.88-.04 1.1.34l1.01 1.74c.43-.3.98-.5 1.58-.5c1.42 0 2.6 1.15 2.6 2.63s-1.18 2.63-2.6 2.63c-.6 0-1.15-.2-1.58-.5l-1 1.72c-.22.38-.72.56-1.1.34l-3.52-2.03c-.38-.22-.56-.72-.34-1.1l1.01-1.74c-.43.3-.98.5-1.58.5z"/></svg>`}
];

// --- Components ---

const PowerSavingsChart = () => {
    const chartref = useRef(null);
    useEffect(() => {
        let chartinstance;
        if (chartref.current && window.Chart) {
            const ctx = chartref.current.getContext('2d');
            chartinstance = new window.Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Relative Energy Consumption'],
                    datasets: [
                        { label: 'Baseline', data: [100], backgroundColor: 'rgba(108, 117, 125, 0.5)', borderColor: 'rgba(108, 117, 125, 1)', borderWidth: 1 },
                        { label: 'With DVFS Optimization', data: [50], backgroundColor: 'rgba(13, 110, 253, 0.5)', borderColor: 'rgba(13, 110, 253, 1)', borderWidth: 1 }
                    ]
                },
                options: {
                    indexAxis: 'y', responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { position: 'top' }, title: { display: true, text: 'Energy Savings with DVFS' }, tooltip: { callbacks: { label: (c) => `${c.dataset.label || ''}: ${c.parsed.x}%` } } },
                    scales: { x: { beginAtZero: true, max: 110, ticks: { callback: (v) => v + '%' } } }
                }
            });
        }
        return () => { if (chartinstance) chartinstance.destroy(); };
    }, []);
    return <div style={{ position: 'relative', height: '300px', maxWidth: '600px', margin: 'auto' }}><canvas ref={chartref}></canvas></div>;
};

const AnimatedSection = ({ children, id, className = '' }) => {
    const sectionref = useRef(null);
    useEffect(() => {
        const section = sectionref.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add('is-visible');
                    observer.unobserve(section);
                }
            });
        }, { threshold: 0.1 });
        if (section) observer.observe(section);
        return () => { if (section) observer.unobserve(section); };
    }, []);
    return <section id={id} className={`fade-in-section ${className}`} ref={sectionref}>{children}</section>;
};

const Header = () => (
    <nav className="navbar navbar-expand-md navbar-light bg-light bg-opacity-75 fixed-top shadow-sm">
        <div className="container"><a className="navbar-brand fw-bold" href="#">Vaibhav Reddy</a><button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span className="navbar-toggler-icon"></span></button><div className="collapse navbar-collapse" id="navbarNav"><ul className="navbar-nav ms-auto"><li className="nav-item"><a className="nav-link" href="#about">About</a></li><li className="nav-item"><a className="nav-link" href="#responsibilities">Responsibilities</a></li><li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li><li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li><li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li></ul></div></div>
    </nav>
);

const Home = () => (
    <section id="home" className="d-flex align-items-center justify-content-center vh-100 text-center">
        <div className="container">
            <img src="profile1.jpg" alt="Vaibhav Reddy" className="rounded-circle mx-auto mb-4 border border-4 border-white shadow-lg" style={{width: '200px', height: '200px'}}/>
            <h1 className="display-3 fw-bold">Vaibhav Reddy</h1>
            <p className="lead fs-4 text-muted mb-4">A B.Tech CSE student at IIT Bhubaneswar</p>
            <div><a href="#contact" className="btn btn-primary btn-lg me-3">Get In Touch</a><a href="#projects" className="btn btn-outline-secondary btn-lg">View My Work</a></div>
        </div>
    </section>
);

const About = () => (
    <AnimatedSection id="about" className="py-5 bg-white">
        <div className="container">
            <div className="text-center mb-5"><h2 className="fw-bold">About Me</h2><p className="lead text-muted">A blend of academic rigor and hands-on leadership.</p></div>
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <p className="mb-3">I am a passionate and driven Computer Science student at IIT Bhubaneswar, fascinated by the power of machine learning to solve complex problems. My current research focuses on making Large Language Models more energy-efficient, a challenge that combines deep technical analysis with real-world impact.</p>
                    <p>As a dedicated problem solver, I have successfully solved over <strong className="text-primary">200+ DSA problems</strong> on Striver's A-Z DSA Sheet, strengthening my grasp of core algorithms and data structures. My goal is to leverage these skills to build products that are not only intelligent but also scalable, user-friendly, and efficient.</p>
                </div>
                <div className="col-lg-5">
                    <div className="card text-center p-3 mb-3 shadow-sm"><h3 className="h5 mb-1">JEE Advanced 2023</h3><p className="display-5 fw-bold text-primary">AIR 2243</p><p className="text-muted small mb-0">out of ~200,000 students</p></div>
                    <div className="card text-center p-3 shadow-sm"><h3 className="h5 mb-1">JEE Mains 2023</h3><p className="display-5 fw-bold text-primary">AIR 1480</p><p className="text-muted small mb-0">out of ~1.5 million students</p></div>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const Responsibilities = () => (
    <AnimatedSection id="responsibilities" className="py-5">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Positions of Responsibility</h2>
                <p className="lead text-muted">Leadership and teamwork in action.</p>
            </div>
            <div className="row g-4 justify-content-center">
                {responsibilitiesdata.map((item, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                        <div className="card h-100 text-center shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{item.role}</h5>
                                <h6 className="card-subtitle mb-2 text-primary">{item.event}</h6>
                                <p className="card-text text-muted small">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const Projects = ({ onviewproject }) => (
    <AnimatedSection id="projects" className="py-5 bg-white">
        <div className="container">
            <div className="text-center mb-5"><h2 className="fw-bold">Projects</h2><p className="lead text-muted">A selection of my work, from research to software development.</p></div>
            <div className="row g-4">{projectsdata.map(project => (<div className="col-lg-4 col-md-6" key={project.id}><div className="card h-100 shadow-sm project-card" onClick={() => onviewproject(project.id)} style={{ cursor: 'pointer' }}><div className="card-body d-flex flex-column"><h5 className="card-subtitle mb-2 text-primary text-uppercase small fw-bold">{project.category}</h5><h4 className="card-title fw-bold">{project.title}</h4><p className="card-text text-muted">{project.summary}</p><div className="mt-auto pt-3"><button className="btn btn-sm btn-outline-primary">View Case Study</button></div></div></div></div>))}</div>
        </div>
    </AnimatedSection>
);

const Skills = () => (
    <AnimatedSection id="skills" className="py-5">
        <div className="container">
            <div className="text-center mb-5"><h2 className="fw-bold">My Toolkit</h2><p className="lead text-muted">The technologies and tools I use to bring ideas to life.</p></div>
            <div className="row">{skillsdata.map(cat => (<div className="col-lg-6 mb-4" key={cat.category}><h3 className="h5 fw-bold mb-3">{cat.category}</h3><div className="d-flex flex-wrap gap-2">{cat.skills.map(skill => (<span key={skill} className="badge bg-light text-dark p-2 skill-badge">{skill}</span>))}</div></div>))}</div>
        </div>
    </AnimatedSection>
);

const Contact = () => (
    <AnimatedSection id="contact" className="py-5 bg-white">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className="fw-bold">Get In Touch</h2><p className="lead text-muted my-4">Feel free to reach out.</p>
                    <a href="mailto:vaibhavreddy1098@gmail.com" className="h3 text-decoration-none text-primary">vaibhavreddy1098@gmail.com</a>
                    <p className="text-muted mt-3">Phone: +91 9121690613</p>
                    <div className="mt-4 d-flex justify-content-center gap-3">
                        {sociallinks.map(link => (
                            <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" className="d-inline-block text-decoration-none text-dark social-icon" title={link.name}>
                                <div dangerouslySetInnerHTML={{ __html: link.icon }} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

const Footer = () => (
    <footer className></footer>
);

const ProjectDetail = ({ projectid, onback }) => {
    const project = projectsdata.find(p => p.id === projectid);
    useEffect(() => { window.scrollTo(0, 0); }, []);
    if (!project) return null;
    return <div className="container py-5"><button onClick={onback} className="btn btn-link text-decoration-none text-muted mb-4">&larr; Back to Projects</button><h1 className="display-4 fw-bold">{project.title}</h1><div className="my-4 d-flex align-items-center flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="badge bg-secondary">{tag}</span>)}<a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm ms-auto">View on GitHub</a>{project.liveDemo && <a href={project.liveDemo} className="btn btn-primary btn-sm">Live Demo</a>}</div><div dangerouslySetInnerHTML={{ __html: project.content }} />{project.id === 'llm-research' && <div className="mt-4"><PowerSavingsChart /></div>}</div>;
};

function App() {
    const [activeproject, setactiveproject] = useState(null);
    const handleviewproject = (projectid) => setactiveproject(projectid);
    const handlebacktoprojects = () => setactiveproject(null);

    if (activeproject) {
        return <ProjectDetail projectid={activeproject} onback={handlebacktoprojects} />;
    }

    return (
        <React.Fragment>
            <Header />
            <main>
                <Home />
                <About />
                <Responsibilities />
                <Projects onviewproject={handleviewproject} />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </React.Fragment>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

