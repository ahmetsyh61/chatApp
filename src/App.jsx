import Chat from "./compenents/chat/Chat";
import Detail from "./compenents/detail/Detail";
import List from "./compenents/list/List";


const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App