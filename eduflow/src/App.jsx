import "./App.css";

import heroImg from "./assets/hero.jpg";
import teacher1 from "./assets/teacher-1.jpg";
import teacher2 from "./assets/teacher-2.jpg";
import teacher3 from "./assets/teacher-3.jpg";
import classroomImg from "./assets/classroom.jpg";
import sportsImg from "./assets/sports.jpg";
import stemImg from "./assets/stem.jpg";
import technologyImg from "./assets/technology.jpg";
import studentsImg from "./assets/students.jpg";
import libraryImg from "./assets/library.jpg";
import artsImg from "./assets/arts.jpg";
import achievementImg from "./assets/achievement.jpg";
import advanceImg from "./assets/advance.jpg";
import carrerImg from "./assets/carrer.jpg";
import computerscienceImg from "./assets/computerscience.jpg";
import foundationImg from "./assets/foundation.jpg";
import languagesImg from "./assets/languages.jpg";
import mathameticsImg from "./assets/mathametics.jpg";
import scienceImg from "./assets/science.jpg";


function App() {
  const programs = [
  {
    number: "01",
    image: foundationImg,
    icon: "◈",
    title: "Foundation Program",
    text: "A strong academic foundation designed to build confidence, curiosity and essential learning skills.",
    tag: "CORE LEARNING",
  },
  {
    number: "02",
    image: advanceImg,
    icon: "⌁",
    title: "Advanced Studies",
    text: "Focused academic preparation with deeper subject understanding and structured learning.",
    tag: "ADVANCED",
  },
  {
    number: "03",
    image: carrerImg,
    icon: "✦",
    title: "Career Preparation",
    text: "Practical knowledge, critical thinking and professional skills for the next stage.",
    tag: "FUTURE READY",
  },
];

  const fields = [
  {
    number: "01",
    image: stemImg,
    title: "Science & Technology",
    text: "Explore scientific thinking, technology and modern problem solving.",
  },
  {
    number: "02",
    image: technologyImg,
    title: "Business & Commerce",
    text: "Build practical understanding of business, finance and entrepreneurship.",
  },
  {
    number: "03",
    image: artsImg,
    title: "Arts & Humanities",
    text: "Develop creativity, communication and a deeper understanding of society.",
  },
];

  const subjects = [
  {
    number: "01",
    image: mathameticsImg,
    icon: "∑",
    title: "Mathematics",
    text: "Build logical thinking, problem-solving and analytical skills.",
  },
  {
    number: "02",
    image: scienceImg,
    icon: "⚗",
    title: "Science",
    text: "Understand the world through experiments, observation and discovery.",
  },
  {
    number: "03",
    image: computerscienceImg,
    icon: "⌘",
    title: "Computer Science",
    text: "Learn technology, digital thinking and modern computing concepts.",
  },
  {
    number: "04",
    image: languagesImg,
    icon: "Aa",
    title: "Languages",
    text: "Improve communication, writing and confident expression.",
  },
];
  const facilities = [
  {
    number: "01",
    image: classroomImg,
    title: "Modern Classrooms",
    text: "Comfortable learning spaces designed for focused academic growth.",
  },
  {
    number: "02",
    image: stemImg,
    title: "Science Laboratory",
    text: "Hands-on practical learning supported by dedicated laboratory facilities.",
  },
  {
    number: "03",
    image: technologyImg,
    title: "Digital Learning",
    text: "Technology-enabled resources that make learning more engaging.",
  },
];

  const studentLife = [
  {
    image: studentsImg,
    title: "Clubs & Societies",
    text: "Discover interests, develop confidence and connect with fellow students.",
  },
  {
    image: sportsImg,
    title: "Sports",
    text: "Stay active while building teamwork, discipline and leadership.",
  },
  {
    image: artsImg,
    title: "Creative Activities",
    text: "Express ideas through art, design, performance and creative projects.",
  },
  {
    image: libraryImg,
    title: "Leadership",
    text: "Develop communication and leadership skills through real responsibilities.",
  },
];

  const achievements = [
    { value: "95%", label: "Student Satisfaction" },
    { value: "25+", label: "Expert Educators" },
    { value: "12+", label: "Academic Programs" },
    { value: "10K+", label: "Learning Hours" },
  ];

  const teachers = [
    {
      image: teacher1,
      role: "MATHEMATICS",
      name: "Dr. Ahmed Yousaf",
      description: "Mathematics & Analytical Studies",
    },
    {
      image: teacher2,
      role: "SCIENCE",
      name: "Mr. Daniel Khan",
      description: "Science & Technology",
    },
    {
      image: teacher3,
      role: "LANGUAGES",
      name: "Ms. Ayesha Malik",
      description: "English & Communication",
    },
  ];

  const whyEduflow = [
    {
      number: "01",
      title: "Personalized Learning",
      text: "Students receive focused guidance designed around their individual learning journey.",
    },
    {
      number: "02",
      title: "Expert Faculty",
      text: "Experienced educators combine academic knowledge with practical teaching methods.",
    },
    {
      number: "03",
      title: "Future Focused",
      text: "Our approach prepares students with skills that remain valuable beyond the classroom.",
    },
    {
      number: "04",
      title: "Complete Development",
      text: "Academic performance is supported by confidence, creativity, communication and leadership.",
    },
  ];

  return (
    <div className="app">
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#home" className="logo">
            <div className="logo-mark">E</div>

            <div className="logo-text">
              <strong>EDUFLOW</strong>
              <small>ACADEMY</small>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#faculty">Faculty</a>
            <a href="#campus">Campus</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#admission" className="nav-button">
            <span>✦</span>
            Admissions
          </a>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}
      <main>
        <section className="hero" id="home">
          <div className="hero-grid"></div>

          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow">
                <span></span>
                PREMIUM EDUCATION
              </div>

              <h1>
                Learn with
                <span>purpose.</span>
              </h1>

              <p>
                Eduflow Academy creates a modern learning environment where
                students build knowledge, confidence and the skills to shape
                their future.
              </p>

              <div className="hero-buttons">
                <a href="#programs" className="primary-button">
                  Explore Programs
                  <span>→</span>
                </a>

                <a href="#about" className="secondary-button">
                  Discover Eduflow
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-avatars">
                  <span>SA</span>
                  <span>DK</span>
                  <span>AM</span>
                  <span>+</span>
                </div>

                <div>
                  <strong>Trusted by students</strong>
                  <small>Growing every academic year</small>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-orbit"></div>

              <div className="hero-card">
                
  <div className="hero-card-visual">
    <img src={heroImg} alt="Eduflow Academy students learning" />
  </div>

  <div className="hero-card-overlay">
    <span>EDUFLOW ACADEMY</span>

    <strong>
      Learn.
      <br />
      Build.
      <br />
      Lead.
    </strong>

    <small>PREMIUM EDUCATION</small>
  </div>
</div>

              <div className="floating-card floating-top">
                <div className="floating-icon">✦</div>

                <div>
                  <strong>Expert Faculty</strong>
                  <small>Experienced educators</small>
                </div>
              </div>

              <div className="floating-card floating-bottom">
                <div>
                  <strong>10K+</strong>
                  <small>Learning Hours</small>
                </div>

                <div className="floating-divider"></div>

                <div className="floating-icon">↗</div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            SCROLL TO EXPLORE
            <i>↓</i>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}
        <section className="intro-section" id="about">
          <div className="container intro-grid">
            <div>
              <div className="section-label">
                <span></span>
                ABOUT EDUFLOW
              </div>
            </div>

            <div>
              <h2>
                Education that
                <span>moves you forward.</span>
              </h2>

              <p>
                Eduflow Academy is built around one simple idea: education
                should do more than prepare students for exams. It should
                develop curiosity, confidence, discipline and the ability to
                think independently.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROGRAMS
        ===================================================== */}
        <section className="program-section" id="programs">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">
                <span></span>
                OUR PROGRAMS
              </div>

              <h2>
                Designed for
                <span>real growth.</span>
              </h2>

              <p className="section-description">
                Structured academic programs designed to help students build
                strong foundations and prepare confidently for the future.
              </p>
            </div>

            <div className="program-grid">
  {programs.map((program) => (
    <article
      className={`program-card ${
        program.number === "02" ? "program-featured" : ""
      }`}
      key={program.number}
    >
      <div className="program-image">
        <img src={program.image} alt={program.title} />
      </div>

      <div className="program-content">
        <span className="program-number">{program.number}</span>

        <div className="program-icon">{program.icon}</div>

        <h3>{program.title}</h3>

        <p>{program.text}</p>

        <span className="program-tag">{program.tag}</span>
      </div>
    </article>
  ))}
</div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ===================================================== */}
        <section className="stats-section">
          <div className="container stats-grid">
            <div>
              <strong>10K+</strong>
              <span>Learning Hours</span>
            </div>

            <div>
              <strong>25+</strong>
              <span>Expert Educators</span>
            </div>

            <div>
              <strong>12+</strong>
              <span>Programs</span>
            </div>

            <div>
              <strong>95%</strong>
              <span>Student Satisfaction</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            ACADEMIC FIELDS
        ===================================================== */}
        <section className="fields-section">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">
                <span></span>
                ACADEMIC FIELDS
              </div>

              <h2>
                Explore your
                <span>potential.</span>
              </h2>
            </div>

            <div className="fields-grid">
              {fields.map((field) => (
  <article className="field-card" key={field.number}>
    <div className="field-image">
      <img src={field.image} alt={field.title} />
    </div>

    <span>{field.number}</span>

    <h3>{field.title}</h3>

    <p>{field.text}</p>

    <a href="#contact">Explore Field →</a>
  </article>
))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT WE TEACH
        ===================================================== */}
        <section className="teaching-section">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">
                <span></span>
                WHAT WE TEACH
              </div>

              <h2>
                Knowledge that
                <span>creates possibilities.</span>
              </h2>
            </div>

            <div className="subjects-grid">
  {subjects.map((subject) => (
    <article className="subject-card" key={subject.number}>
      <div className="subject-image">
        <img src={subject.image} alt={subject.title} />
      </div>

      <div className="subject-content">
        <span className="subject-number">{subject.number}</span>

        <div className="subject-icon">{subject.icon}</div>

        <h3>{subject.title}</h3>

        <p>{subject.text}</p>
      </div>
    </article>
  ))}
</div>
          </div>
        </section>

        {/* =====================================================
            WHY EDUFLOW
        ===================================================== */}
        <section className="why-section">
          <div className="container why-grid">
            <div className="section-heading">
              <div className="section-label">
                <span></span>
                WHY EDUFLOW
              </div>

              <h2>
                More than
                <span>a classroom.</span>
              </h2>

              <p className="section-description">
                We combine strong academics with a learning culture that
                encourages students to become confident, independent thinkers.
              </p>
            </div>

            <div className="why-list">
              {whyEduflow.map((item) => (
                <article className="why-item" key={item.number}>
                  <span>{item.number}</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FACULTY
        ===================================================== */}
        <section className="faculty-section" id="faculty">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">
                <span></span>
                OUR FACULTY
              </div>

              <h2>
                Learn from
                <span>people who care.</span>
              </h2>

              <p className="section-description">
                Our educators bring experience, patience and a genuine
                commitment to helping every student progress.
              </p>
            </div>

            <div className="faculty-grid">
              {teachers.map((teacher) => (
                <article className="faculty-card" key={teacher.name}>
                  <div className="faculty-avatar">
                    <img src={teacher.image} alt={teacher.name} />
                  </div>

                  <span>{teacher.role}</span>

                  <h3>{teacher.name}</h3>

                  <p>{teacher.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CAMPUS
        ===================================================== */}
        <section className="campus-section" id="campus">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">
                <span></span>
                CAMPUS & FACILITIES
              </div>

              <h2>
                Built for
                <span>better learning.</span>
              </h2>

              <p className="section-description">
                A focused environment with modern facilities that support
                academic performance and student wellbeing.
              </p>
            </div>

            <div className="facility-grid">
              {facilities.map((facility) => (
  <article className="facility-card" key={facility.number}>
    <div className="facility-image">
      <img src={facility.image} alt={facility.title} />
    </div>

    <span>{facility.number}</span>

    <h3>{facility.title}</h3>

    <p>{facility.text}</p>
  </article>
))}
            </div>
          </div>
        </section>

        {/* =====================================================
            STUDENT LIFE
        ===================================================== */}
        <section className="student-life-section">
          <div className="container student-life-grid">
            <div className="section-heading">
              <div className="section-label">
                <span></span>
                STUDENT LIFE
              </div>

              <h2>
                Grow beyond
                <span>the classroom.</span>
              </h2>

              <p className="section-description">
                Education becomes meaningful when students have opportunities
                to explore, collaborate, create and lead.
              </p>
            </div>

            <div className="life-grid">
              {studentLife.map((life) => (
  <article className="life-card" key={life.title}>
    <div className="life-image">
      <img src={life.image} alt={life.title} />
    </div>

    <span>{life.title}</span>

    <p>{life.text}</p>
  </article>
))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ACHIEVEMENTS
        ===================================================== */}
        <section className="achievement-section">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">
                <span></span>
                OUR IMPACT
              </div>

              <h2>
                Numbers that
                <span>tell a story.</span>
              </h2>
            </div>

            <div className="achievement-grid">
              {achievements.map((achievement) => (
                <article className="achievement-card" key={achievement.label}>
                  <strong>{achievement.value}</strong>
                  <span>{achievement.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ADMISSION
        ===================================================== */}
        <section className="admission-section" id="admission">
          <div className="container">
            <div className="admission-card">
              <div>
                <div className="section-label">
                  <span></span>
                  ADMISSIONS OPEN
                </div>

                <h2>
                  Start your
                  <span>next chapter.</span>
                </h2>

                <p>
                  Take the first step toward a stronger academic future.
                  Connect with Eduflow Academy and discover the right path for
                  you.
                </p>

                <a href="#contact" className="primary-button">
                  Apply Now
                  <span>→</span>
                </a>
              </div>

              <div className="admission-year">
                <small>ACADEMIC YEAR</small>
                <strong>26</strong>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}
        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <div className="section-label">
                <span></span>
                GET IN TOUCH
              </div>

              <h2>
                Let's build your
                <span>future together.</span>
              </h2>

              <p>
                Have questions about programs, admissions or campus life?
                Send us a message and our team will get back to you.
              </p>
            </div>

            <form className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your name"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Tell us how we can help..."
              ></textarea>

              <button type="submit" className="primary-button">
                Send Message
                <span>→</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Eduflow Academy. All rights reserved.</p>

          <span>LEARN • BUILD • LEAD</span>
        </div>
      </footer>
    </div>
  );
}

export default App;