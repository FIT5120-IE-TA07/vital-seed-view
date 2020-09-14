import Link from 'next/link'
import { useCount, useDispatchCount } from './counter'

const Page1 = () => {
  const count = useCount()
  const dispatch = useDispatchCount()

  const handleIncrease = (event) =>
    dispatch({
      type: 'INCREASE',
    })
  const handleDecrease = (event) =>
    dispatch({
      type: 'DECREASE',
    })

  return (
    <>
      <h1>PAGE 1</h1>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <p>
        <Link href="/components/forms/page2">
          <a>Page 2</a>
        </Link>
      </p>
    </>
  )
}

export default Page1
