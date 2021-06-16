export default function About(props) {
  const { search } = props.location;
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get('name');
  return <div>About 페이지 입니다.{name && <p>이름은 {name}입니다.</p>}</div>;
}
