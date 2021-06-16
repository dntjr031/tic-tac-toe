import { useHistory } from 'react-router-dom';

export default function LoginButton() {
  const history = useHistory();
  function login() {
    setTimeout(() => {
      history.push('/');
    }, 1000);
  }
  return <button onClick={login}>로그인 하기</button>;
}
