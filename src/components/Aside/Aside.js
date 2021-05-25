import Title from '../Title/Title';

export default function Aside() {
  const date = new Date();
  const options = {
    month: 'long',
  };
  const mounth = date.toLocaleString('en-US', options);

  return (
    <div>
      <Title titleText={'Employees birthday'} />
      <h3>{mounth}</h3>
    </div>
  );
}
