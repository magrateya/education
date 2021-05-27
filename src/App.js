import { useState, useEffect } from 'react';
import fetchEmployees from './services/employees-api';
import AlphabethList from './components/AlphabethList/AlphabethList';
import Container from './components/Container/Container';
import Aside from './components/Aside/Aside';

function App() {
  const initialRadioState = () => {
    return employees.reduce((acc, { id, firstName, lastName, dob }) => {
      if (!acc.hasOwnProperty(id)) {
        acc[id] = 'notActive';
      }
      if (dob.toString().includes(currentMounth)) {
        acc[id] = 'active';
      }
      return acc;
    }, {});
  };

  const [employees, setEmployees] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  const [radio, setRadio] = useState(() => initialRadioState());

  const date = new Date();
  const options = {
    month: 'long',
  };
  const mounth = date.toLocaleString('en-US', options);

  const dateNowToCompare = date.toISOString();
  const currentMounth = dateNowToCompare.slice(4, 8).toString();

  const birthEmployeesArr = employees.filter(employee =>
    employee.dob.toString().includes(currentMounth),
  );

  // console.log(initialRadioState());
  console.log(radio);
  // console.log(employees);

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
      <Aside birthEmployeesArr={birthEmployeesArr} mounth={mounth} />
    </Container>
  );
}

export default App;
