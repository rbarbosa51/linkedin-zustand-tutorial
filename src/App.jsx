import useStore from './store/store'

function App() {
  const {count, increment, decrement} = useStore();
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-300 text-center text-purple-950/70">
      <h1 className='text-5xl font-extrabold '>Zustand Tutorial</h1>
      <div className='flex flex-col mt-8'>
        <p className='text-3xl'>Count</p>
        <p className='text-2xl'>{count}</p>
        <div className='flex justify-center mt-4 gap-8'>
          <button className='ring-2 ring-purple-950/70 rounded-md p-1 hover:bg-purple-950/40'
          onClick={() => increment(5)}
          >Increment</button>
          <button className='ring-2 ring-purple-950/70 rounded-md p-1 hover:bg-purple-950/40'
          onClick={() => decrement(3)}
          >Decrement</button>
        </div>
      </div>
    </div>
  )
}
export default App
