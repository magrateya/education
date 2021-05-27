import Title from '../Title/Title';

export default function Aside({ birthEmployeesArr, mounth }) {
  return (
    <div>
      <Title titleText={'Employees birthday'} />
      <h3>{mounth}</h3>
      {birthEmployeesArr.map(item => (
        <li key={item.id}>
          {item.firstName} {item.lastName} -{' '}
          {new Date(item.dob).toLocaleString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}{' '}
          year
        </li>
      ))}
    </div>
  );
}
