import React from 'react';

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature : XXX</p>
    </header>
    // Code for Header
    // <Header />
  );
}

function Content() {
  return (
    <main>
      <Temperature />
    </main>
    // Code for Content
    // <Content />
  );
}

function Temperature() {
  const temperature = 50
  return (
    <div id="temperature">
      <span>{ temperature } Oc</span>
    </div>
    // Code for Temperature
    // <Temperature />
  );
}

function Footer() {
  return (
    <footer>
      <button>Up</button>
      <button>Down</button>
    </footer>
    // Code for Footer
    // <Footer />
  );
}

export default App;
