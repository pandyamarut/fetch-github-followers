import React, { useState } from 'react';
import Users from './components/users';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [selectedUser, setSetectedUser] = useState(null);

  const FetchGitFollower = () => {
    console.log('fetch for', userName);
  };

  const handleUserChange = () => {
    setSetectedUser(userName);
  };

  return (
    <>
      <div className="App">
        <Container>
        <h1>Hi {selectedUser}, Your Github Followers</h1>
          <div className="user-banner">
            <div margin-left="100px" align="left">
              <label>
                GithuB username:
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
            </div>
          </div>
          <Button variant="contained" color="primary" onClick={() => handleUserChange()}>Followers</Button>
          {selectedUser ? (
            <Users user={selectedUser} />
          ) : (
            <p>Please give username</p>
          )}
        </Container>
      </div>
    </>
  );
}
export default App;
