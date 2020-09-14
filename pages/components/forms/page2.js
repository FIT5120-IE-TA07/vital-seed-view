import Link from 'next/link'
import { useCount, useDispatchCount } from './counter'

const Page2 = () => {
  const count = useCount()
  const dispatch = useDispatchCount()

  const handleIncrease = (event) =>
    dispatch({
      type: 'INCREASE',
    })
  const handleIncrease15 = (event) =>
    dispatch({
      type: 'INCREASE_BY',
      payload: 15,
    })

  return (
    <>
      <h1>PAGE2</h1>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button>
      <p>
        <Link href="/components/forms/page1">
          <a>Page 1</a>
        </Link>
      </p>
    </>
  )
}

export default Page2
