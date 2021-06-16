import PersonContext from '../contexts/PersonContext';

export default function Example9() {
  return (
    <PersonContext.Consumer>
      {value => (
        <ul>
          {value.map(person => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      )}
    </PersonContext.Consumer>
  );
}
