import React, { useState } from 'react';
import { Header, User } from './components/Header';
import { Dropdown } from './components/Dropdown/';
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
    <div>
      <Header user={user} onLogin={onLogin} onLogout={onLogout} />
      <main className="container mx-auto p-4">
        <Dropdown title="Select an option" />
      </main>
    </div>
  );
}

export default App;
