import React, { useState } from 'react';
import { Header, User } from './components/Header';
import { SkipNav } from './components/SkipNav';
import { Footer } from './components/Footer';

import { user as sampleUser } from './sample-data';

function App() {
  const [user, setUser] = useState<User>(null);

  function onLogin() {
    setUser(sampleUser);
  }

  function onLogout() {
    setUser(null);
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <SkipNav contentId="main-content"> Skip to Content</SkipNav>

      <Header user={user} onLogin={onLogin} onLogout={onLogout} />
      <main className="container mx-auto p-4 flex-1">
        <div id="main-content">
          <h1 className="text-4xl my-4 font-medium">Tailwind Playground</h1>
          <p>Make a change to this page and watch it instantly relobbbad.</p>
        </div>
      </main>
      <Footer>
        <p className="text-white text-medium leading-5 text-base">
          My site 2020
        </p>
      </Footer>
    </div>
  );
}

export default App;
