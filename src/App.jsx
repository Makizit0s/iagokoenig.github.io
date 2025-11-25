import React, { useRef } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Section from './components/Section';
import AboutMe from './components/AboutMe';
import Career from './components/Career';
import Skills from './components/Skills';
import ExperienceList from './components/ExperienceList';
import ProjectList from './components/ProjectList';
import Summary from './components/Summary';
import Footer from './components/Footer';
import PdfButton from './components/PdfButton';

function App() {
  const contentRef = useRef(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 transition-colors">
        <div className="max-w-6xl mx-auto">
          <Header />

          <div className="flex justify-center mb-8 no-print">
            <PdfButton contentRef={contentRef} />
          </div>

          <div ref={contentRef} className="space-y-8">
            <ProfileCard photoSrc="/1736621807561.jpg" />

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
              <Section title="Perfil Profissional" delay={0.3}>
                <AboutMe />
              </Section>

              <Section title="Carreira Profissional" delay={0.4}>
                <Career />
              </Section>

              <Section title="Habilidades Técnicas" delay={0.5}>
                <Skills />
              </Section>

              <Section title="Experiências Profissionais" delay={0.6}>
                <ExperienceList />
              </Section>

              <Section title="Projetos" delay={0.7}>
                <ProjectList />
              </Section>

              <Section title="Resumo Profissional" delay={0.8}>
                <Summary />
              </Section>

              <Section title="Educação" delay={0.9}>
                <div className="space-y-3">
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border-l-4 border-primary-600">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      🎓 Engenharia de Software
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Graduação em andamento com foco em desenvolvimento de sistemas e arquitetura de software
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      📊 Análise de Dados com Python
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Especialização em ciência de dados, visualização e análise estatística
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-600">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      ☕ Desenvolvimento Back-End com Java
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Especialização em desenvolvimento server-side, APIs e arquitetura back-end
                    </p>
                  </div>
                </div>
              </Section>

              <Section title="Contato" delay={1.0}>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-gray-900 dark:text-white">📧 Email:</span>{' '}
                    <a
                      href="mailto:blasiuskoenigiagobraian@gmail.com"
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      blasiuskoenigiagobraian@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900 dark:text-white">💻 GitHub:</span>{' '}
                    <a
                      href="https://github.com/Makizit0s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      @Makizit0s
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-3">
                    📍 Santa Catarina, Brasil
                  </p>
                </div>
              </Section>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
