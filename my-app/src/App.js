import { useState } from 'react';
import TodosHome from './Components/todos/todo-home';
import Counter from './Components/pages/counter';
import Navigation from './Components/navigation';
import Theme from './Components/theme'
import './App.css';




function App() {
  const [page, setPage] = useState({
    todoHome: false,
    Counter : true,
  })



  const [currentPage, setCurrentPage] = useState("Counter")
  const onPageChange = (pageKey) => {
    const updates = { ...page };
    let newCurrentPage = "";
    Object.keys(updates).forEach((key) => {
      if (key === pageKey) {
        updates[pageKey] = true;
        newCurrentPage = pageKey;
      } else {
        updates[key]=false;
      }
    });
    setCurrentPage(newCurrentPage);
    setPage(updates);
  };


  
  return (
    <div className="container">
      <Navigation onPageChange = {onPageChange} pages={page}/>
      <Theme page={currentPage}> 
        {page.todoHome && <TodosHome/>}
        {page.Counter && <Counter/>}  
      </Theme>
      
    </div>
  );
}

export default App;
