import mainStyles from './mainStyles.module.scss'
import PostRequest from './Components/PostRequest';

function App() {
  
  return (
    <div className={mainStyles.container}>
      <PostRequest />
    </div>
  );
}

export default App;
