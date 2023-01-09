import * as React from "react";
import logo from './logo.svg';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  var jsonData = {
    "userName": "string", 
    "password": "string"
  }

  const requestOptions = {
    method: 'POST',

    headers: new Headers({
      "Content-Type":'application/json; charset=utf-8'
    }),
    mode: 'cors',
    body: JSON.stringify(jsonData)
};

  React.useEffect(() => {
    fetch("https://localhost:7138/Auth/login", {
      method: requestOptions.method,
      headers: requestOptions.headers,
      body: requestOptions.body,
      mode: requestOptions.mode,
    })
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });

 function LoginFunction() {

  fetch("https://localhost:7138/Auth/login", {
      method: requestOptions.method,
      headers: requestOptions.headers,
      body: requestOptions.body,
      mode: requestOptions.mode,
    })
      .then((res) => res.json())
      .then((data) => setData(data.message));
 }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        
      </header>
      <body>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      noValidate
      autoComplete="off"
      >
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Login</InputLabel>
          <OutlinedInput
            id="userLogin"
            type={true ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
              </InputAdornment>
            }
            label="login"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Hasło</InputLabel>
          <OutlinedInput
            id='userPassword'
            type={false ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
        
      <Button variant="contained" onClick={() => LoginFunction()}>Zaloguj</Button>
      </body>
    </div>
  );
}

export default App;