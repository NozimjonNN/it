import React from 'react';
import './Farruh.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const teamData = [
  {
    name: 'Торвальдс Линус',
    role: 'Программист',
    description: 'С 1997 по 2003 год Линус работал в компании Transmeta, с 2004 — в Open Source Development Labs, с 2007 — в The Linux Foundation (разработка ядра Linux).С февраля 1997 по июнь 2003 года работал в компании Transmeta, после чего перешёл в компанию Open Source Development Labs, основанную в 2000 году и вошедшую в 2007 году в The Linux Foundation.Один из «Законов Линуса», окончательно сформулированный американским хакером Эриком Реймондом, гласит: «При достаточном количестве глаз все ошибки лежат на поверхности». Глубокой ошибкой называется та, которую трудно найти. Однако, если достаточно много людей ищет ошибки, все они выходят на поверхность. Оба программиста разделяют идеологию открытого исходного кода, отчасти основанную на вере в этот закон.Однако их взгляды расходятся в том, что важнее: открытость кода или «свободность» программ, их распространения (сторонником последнего является Реймонд).',
    image: './src./pages/Farruh/IMAGES/Линус.jpg',
    projects: ['Ядро Linux'],
  },
  {
    name: 'Торвальдс Линус',
    role: 'Программист',
    description: 'С 1997 по 2003 год Линус работал в компании Transmeta, с 2004 — в Open Source Development Labs, с 2007 — в The Linux Foundation (разработка ядра Linux).С февраля 1997 по июнь 2003 года работал в компании Transmeta, после чего перешёл в компанию Open Source Development Labs, основанную в 2000 году и вошедшую в 2007 году в The Linux Foundation.Один из «Законов Линуса», окончательно сформулированный американским хакером Эриком Реймондом, гласит: «При достаточном количестве глаз все ошибки лежат на поверхности». Глубокой ошибкой называется та, которую трудно найти. Однако, если достаточно много людей ищет ошибки, все они выходят на поверхность. Оба программиста разделяют идеологию открытого исходного кода, отчасти основанную на вере в этот закон.Однако их взгляды расходятся в том, что важнее: открытость кода или «свободность» программ, их распространения (сторонником последнего является Реймонд).',
    image: './src./pages/Farruh/IMAGES/Линус.jpg',
    projects: ['Ядро Linux'],
  },
  {
    name: 'Торвальдс Линус',
    role: 'Программист',
    description: 'С 1997 по 2003 год Линус работал в компании Transmeta, с 2004 — в Open Source Development Labs, с 2007 — в The Linux Foundation (разработка ядра Linux).С февраля 1997 по июнь 2003 года работал в компании Transmeta, после чего перешёл в компанию Open Source Development Labs, основанную в 2000 году и вошедшую в 2007 году в The Linux Foundation.Один из «Законов Линуса», окончательно сформулированный американским хакером Эриком Реймондом, гласит: «При достаточном количестве глаз все ошибки лежат на поверхности». Глубокой ошибкой называется та, которую трудно найти. Однако, если достаточно много людей ищет ошибки, все они выходят на поверхность. Оба программиста разделяют идеологию открытого исходного кода, отчасти основанную на вере в этот закон.Однако их взгляды расходятся в том, что важнее: открытость кода или «свободность» программ, их распространения (сторонником последнего является Реймонд).',
    image: './src./pages/Farruh/IMAGES/Линус.jpg',
    projects: ['Ядро Linux'],
  },
  {
    name: 'Торвальдс Линус',
    role: 'Программист',
    description: 'С 1997 по 2003 год Линус работал в компании Transmeta, с 2004 — в Open Source Development Labs, с 2007 — в The Linux Foundation (разработка ядра Linux).С февраля 1997 по июнь 2003 года работал в компании Transmeta, после чего перешёл в компанию Open Source Development Labs, основанную в 2000 году и вошедшую в 2007 году в The Linux Foundation.Один из «Законов Линуса», окончательно сформулированный американским хакером Эриком Реймондом, гласит: «При достаточном количестве глаз все ошибки лежат на поверхности». Глубокой ошибкой называется та, которую трудно найти. Однако, если достаточно много людей ищет ошибки, все они выходят на поверхность. Оба программиста разделяют идеологию открытого исходного кода, отчасти основанную на вере в этот закон.Однако их взгляды расходятся в том, что важнее: открытость кода или «свободность» программ, их распространения (сторонником последнего является Реймонд).',
    image: './src./pages/Farruh/IMAGES/Линус.jpg',
    projects: ['Ядро Linux'],
  },
  {
    name: 'Торвальдс Линус',
    role: 'Программист',
    description: 'С 1997 по 2003 год Линус работал в компании Transmeta, с 2004 — в Open Source Development Labs, с 2007 — в The Linux Foundation (разработка ядра Linux).С февраля 1997 по июнь 2003 года работал в компании Transmeta, после чего перешёл в компанию Open Source Development Labs, основанную в 2000 году и вошедшую в 2007 году в The Linux Foundation.Один из «Законов Линуса», окончательно сформулированный американским хакером Эриком Реймондом, гласит: «При достаточном количестве глаз все ошибки лежат на поверхности». Глубокой ошибкой называется та, которую трудно найти. Однако, если достаточно много людей ищет ошибки, все они выходят на поверхность. Оба программиста разделяют идеологию открытого исходного кода, отчасти основанную на вере в этот закон.Однако их взгляды расходятся в том, что важнее: открытость кода или «свободность» программ, их распространения (сторонником последнего является Реймонд).',
    image: './src./pages/Farruh/IMAGES/Линус.jpg',
    projects: ['Ядро Linux'],
  },
];

const Farruh = () => {
  return (
    <div className="team-page">
      <nav className="navbar">
        <ul>
          <li><a href="#ai">AI</a></li>
          <li><a href="#about">About Company</a></li>
          <li><a href="#building">Building</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#relax">Relax</a></li>
          <li><a href="#global">Global</a></li>
        </ul>
      </nav>

      <header className="team-header">
        <img src="./src/pages/Farruh/IMAGES/logo.jpg" alt="Logo" className="team-logo" />
        <h1>Торвальдс Линус</h1>
        <p>«При достаточном количестве глаз все ошибки лежат на поверхности»</p>
      </header>

      <section className="team-section">
        {teamData.map((member, index) => (
          <div
            className={`team-member ${index % 2 === 0 ? 'normal-layout' : 'reversed-layout'}`}
            key={index}
          >
            <div className="member-photo">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h2>{member.name}</h2>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
              <div className="team-projects">
                <h3>Проекты:</h3>
                <ul>
                  {member.projects.map((project, idx) => (
                    <li key={idx}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

<footer className="footer">
  <div className="footer-top">
    <p>Наши соц-сети</p>
    <div className="social-icons">
      <a href="#"><i className="fab fa-facebook"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-google"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
      <a href="#"><i className="fab fa-github"></i></a>
    </div>
  </div>

  <div className="footer-content">
    <div className="footer-column">
      <h4>Торвальдс Линус</h4>
      <p>«При достаточном количестве глаз все ошибки лежат на поверхности»</p>
    </div>
    <div className="footer-column">
      <h4>Проекты</h4>
      <ul>
        <li><a href="#">Ядро Linux</a></li>
        <li><a href="#">Ядро Linux</a></li>
        <li><a href="#">Ядро Linux</a></li>
        <li><a href="#">Ядро Linux</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Полезные ссылки</h4>
      <ul>
        <li><a href="#">AI</a></li>
        <li><a href="#">Building</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Relax</a></li>
        <li><a href="#">Global</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Свяжитесь с нами</h4>
      <ul>
        <li>Tashkent</li>
        <li>sadullayevfarruh528@gmail.com</li>
        <li>+998 90 818 51 51</li>
        <li>+998 90 818 51 51</li>
      </ul>
    </div>
  </div>

 
</footer>

    </div>
  );
};

export default Farruh;
