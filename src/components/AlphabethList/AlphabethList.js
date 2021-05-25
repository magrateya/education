import s from './AlphabethList.module.css';
import alphabethArr from '../../helpers/alphabethArr';
import Title from '../Title/Title';

export default function AlphabethList({ list, radio, onChange }) {
  const employeesSortedArr = list.sort(function (a, b) {
    const nameA = a.lastName.slice(0, 1).toLowerCase(),
      nameB = b.lastName.slice(0, 1).toLowerCase();
    if (nameA < nameB)
      //сортируем строки по возрастанию
      return -1;
    if (nameA > nameB) return 1;
    return 0; // Никакой сортировки
  });
  // console.log(radio);

  return (
    <>
      <div className={s.listBox}>
        <Title titleText={'Employees'} />
        <ul className={s.list}>
          {alphabethArr.map(letter => (
            <li key={letter} className={s.listItem}>
              <h3>{letter.toUpperCase()}</h3>
              <ul>
                {employeesSortedArr.map(
                  item =>
                    item.lastName.slice(0, 1).toLowerCase() === letter && (
                      <li key={item.id}>
                        <h3>
                          {item.lastName} {item.firstName}
                        </h3>
                        <div className={s.radio}>
                          <label>
                            <input
                              type="radio"
                              name={item.id}
                              value="notActive"
                              onChange={onChange}
                              checked={
                                radio[item.id] === 'notActive' ||
                                Object.keys(radio).length === 0
                              }
                            ></input>
                            not active
                          </label>
                          <label>
                            <input
                              type="radio"
                              name={item.id}
                              value="active"
                              onChange={onChange}
                              checked={radio[item.id] === 'active'}
                            ></input>
                            active
                          </label>
                        </div>
                      </li>
                    ),
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
