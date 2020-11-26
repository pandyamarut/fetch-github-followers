import React, { useState } from 'react';
import Users from './components/users';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';

function App() {

  /**
   * below, use react hooks
   */
  const [userName, setUserName] = useState('');
  const [selectedUser, setSetectedUser] = useState(null);

  // const FetchGitFollower = () => {
  //   console.log('fetch for', userName);
  // };

  const handleUserChange = () => {
    setSetectedUser(userName);
  };

  return (
    <div className="App-header">
      <div className="App">
        <Container>
        <h1>Hi {selectedUser}, Your Github Followers</h1>
        <h3>Enter Github UserName</h3>
          <div className="user-banner">
            <div margin-left="100px" align="left">
              <label>
                <TextField
                 variant="filled"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="mt">
          <Button variant="contained" color="primary" onClick={() => handleUserChange()}>Show Followers</Button>
          </div>
          {selectedUser ? (
            <Users user={selectedUser} />
          ) : (
            <p>Check your popularity!</p>
          )}
        </Container>
      </div>
      </div>
  );
}
export default App;
