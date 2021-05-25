import axios from 'axios';

const fetchEmployees = (searchQuery = '', currentPage = 1) => {
  const BASE_URL =
    'https://yalantis-react-school-api.yalantis.com/api/task0/users';

  const url = `${BASE_URL}`;

  return axios.get(url).then(response => response.data);
};

export default fetchEmployees;
