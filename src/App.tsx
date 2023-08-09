import Render from "./components/Render"

const App = (): JSX.Element => {
  return (
    <>
      <div className="container w-full h-screen mx-auto">
        <h1 className="italic text-2xl font-bold px-4">FlowView</h1>

        <Render />
      </div>
    </>
  )
}

export default App