import { Zap, Ship, Disc, Link } from 'lucide-react';
import { BackgroundMesh } from './components/BackgroundMesh';
import { GameCard } from './components/GameCard';
import './App.css';

const GAMES = [
  {
    id: 'math-boat',
    title: 'Math Boat',
    category: 'Math Logic',
    url: 'https://math-boat.netlify.app/',
    accentColor: '#00F5D4', // Cyan
    icon: <Ship size={32} />,
  },
  {
    id: 'wheel-of-fortune',
    title: 'Wheel of Fortune',
    category: 'Word Puzzle',
    url: 'https://wheel-of-fortune-game.netlify.app/',
    accentColor: '#FBCB43', // Yellow
    icon: <Disc size={32} />,
  },
  {
    id: 'lexilink',
    title: 'LexiLink',
    category: 'Word Association',
    url: 'https://lexilinkgame.netlify.app/',
    accentColor: '#FF6B6B', // Coral
    icon: <Link size={32} />,
  },
];

function App() {
  return (
    <div className="app-container">
      <BackgroundMesh />

      <main className="main-content">

        {/* Header / Logo */}
        <header className="app-header">
          <div className="logo-icon-wrapper">
            <div className="logo-layer logo-layer-1"></div>
            <div className="logo-layer logo-layer-2"></div>
            <div className="logo-layer logo-layer-3">
              <Zap size={24} fill="white" color="white" />
            </div>
          </div>
          <h1 className="app-title">
            <span style={{ color: 'white' }}>SMART</span>
            <span className="title-highlight">STACK</span>
          </h1>
          <p className="app-subtitle">
            Your intelligent hub for modern puzzling.
          </p>
        </header>

        {/* Game Stack Grid */}
        <div className="games-grid">
          {GAMES.map((game, index) => (
            <GameCard
              key={game.id}
              {...game}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="app-footer">
          © {new Date().getFullYear()} Smart Stack. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
