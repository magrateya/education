import { useState, useEffect } from 'react';
import fetchEmployees from './services/employees-api';
import AlphabethList from './components/AlphabethList/AlphabethList';
import Container from './components/Container/Container';
import Aside from './components/Aside/Aside';

function App() {
  const [employees, setEmployees] = useState([]);

  const initialRadioState = employees.reduce((acc, { id }) => {
    if (!acc.hasOwnProperty(id)) {
      acc[id] = 'notActive';
    }
    return acc;
  }, {});
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  const [radio, setRadio] = useState(() => initialRadioState);

  console.log(radio);

  useEffect(() => {
    setIsLoading(true);
    fetchEmployees()
      .then(employees => {
        setEmployees(state => [...employees]);
      })
      .catch(error => {
        setError({ error });
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onRadioBtnChange = e => {
    const { name, value } = e.currentTarget;

    setRadio({ ...radio, [name]: value });
  };
  return (
    <Container>
      <AlphabethList
        list={employees}
        radio={radio}
        onChange={onRadioBtnChange}
      />
      <Aside />
    </Container>
  );
}

export default App;
