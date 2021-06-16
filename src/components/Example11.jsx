import PersonContext from '../contexts/PersonContext';
import { useContext } from 'react';

export default function Example11() {
  const persons = useContext(PersonContext);
  return (
    <ul>
      {persons.map(person => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}
