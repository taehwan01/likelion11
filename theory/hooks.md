# useState과 useEffect

본론에 앞서, React에서는 Hooks를 제공한다.

## Hook이 무엇인가?

> React가 기존의 클래스 컴포넌트에서 render() 함수 없이 컴포넌트 구현이 가능한 함수 컴포넌트 사용을 지원하게 되면서 컴포넌트 마운트 속도를 향상시키고, 가독성을 높일 수 있게 하였다.
>
> 이 때, 함수 컴포넌트도 클래스 컴포넌트처럼 state 관리<i>(ex: useState)</i>와 더 직관적인 라이프사이클 API<i>(ex: props, state, context, refs)</i>를 제공할 수 있도록 하기 위해 Hook이란 개념을 도입했다.

이 글에서 다룰 React의 Hook은 useState와 useEffect이다.

- ### useState

  useState는 컴포넌트에 상태 변수를 추가할 수 있는 React Hook이다.

  > <i>컴포넌트에 상태 변수가 필요한 이유?
  >
  > 해당 컴포넌트에서 사용한 변수의 값이 변경되었을 때, 사용자가 보는 화면에도 적용이 되어야하나 함수 컴포넌트에서는 재렌더링<sup>re-rendering</sup>이 되지 않는다.
  >
  > 즉, 상태 관리가 되지 못한 것이므로 이를 해결해주는 기능이 React의 useState Hook인 것이다.</i>

  useState는 다음 코드와 같이 활용할 수 있다.

  ```
  // 예제
  import {useState} from 'react';

  const MyComponent() = () => {
    const [name, setName] = useState('anonymous');
    const [age, setAge] = useState(0);

    return(
        <div>
            <p>Student {name} is currently {age} years old.</p>
            <button onClick=(() => {setAge(age + 1)})>Click!</button>
        </div>
    )
  }
  ```

  위 코드에서처럼 useState은

  ```
  const [변수명, set변수명] = useState(초기값);
  ```

  와 같이 활용한다.

  useState(초기값)을 선언한 후 이를 배열 구조 분해를 통해 사용할 변수와, 이 변수의 값을 변경할 set함수를 선언한다.

  여기서 사용자가 버튼을 클릭하면 setAge()를 통해 age의 값이 1 증가하게 되고, useState Hook을 통해 컴포넌트가 재렌더링되어 사용자에게 1만큼 증가된 나이가 출력된다.

- ### useEffect

  useEffect는 컴포넌트가 렌더링 될 때 특정 메소드를 수행할 수 있도록 하는 React Hook이다.

  > <i>필요한 이유?
  >
  > 함수 컴포넌트에서는 클래스 컴포넌트처럼 componentDidMount와 같은 라이프사이클 메소드를 사용할 수 없었으나, useEffect를 통해 대체가 가능해졌다. 이를 통해 컴포넌트가 Mount, Unmount, Update 됐을 때, 특정 메소드를 수행할 수 있게 된다.</i>

  useEffect는 다음 코드와 같이 활용할 수 있다.

  ```
  // 예제
  import { useEffect } from 'react';
  import { createConnection } from './chat.js';

  const ChatRoom({ roomId }) => {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [serverUrl, roomId]);
    // ...
  }
  ```

  위 코드에서처럼 useEffect는

  ```
  useEffect(() => {
    컴포넌트가 Mount, Unmount(return cleanup 함수), Update 될 때마다 실행할 메소드
  }, ['업데이트 시 의존할 변수명']);
  ```

  와 같이 활용한다.

  useEffect는 2개의 인자가 필요하다.

  이 때, 2번째 인자인 배열에는 특정 상태 변수(props, state 등)가 업데이트 될 때마다 useEffect의 1번째 인자인 메소드를 실행하도록 지정할 변수를 저장한다.

  이 코드에서는 컴포넌트가 처음 생성될 때, 또는 serverUrl 및 roomId의 값이 변경될 때마다 연결 요청을 수행하는 함수를 수행하게 된다.

  반대로 컴포넌트가 Unmount 될 때에는 useEffect Hook 안에 있는 return을 수행한다.

  이를 clean-up 함수라 하는데, 이는 재렌더링 시 지속되는 메모리 누수 방지, 라이브러리 인스턴스 제거, setInterval을 사용하여 등록한 작업 해제, 연결 해제 등을 목적으로 수행하게 된다.

<hr>

### 👀 되돌아보기

- Hook

  함수 컴포넌트에서 상태 관리, 라이프사이클 API 활용을 원활하게 하는 React 기능

- useState

  함수 컴포넌트에서 상태 변수의 값 변화에 따라 컴포넌트를 재렌더링하여 사용자에게 변경된 값을 출력해주는 React Hook

- useEffect

  함수 컴포넌트에서도 라이프사이클 메소드를 활용할 수 있도록 하는 React Hook으로, 컴포넌트가 처음 생성될 때<sup>Mount</sup>, 사라질 때<sup>Unmount</sup>, 업데이트될 때<sup>Update</sup> 특정 메소드를 수행할 수 있도록 한다.
