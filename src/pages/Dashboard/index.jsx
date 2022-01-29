import { Dashboard, TodoHeader } from './style';
import { H3 } from '../../components/style/elements/Typography/style';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import NewTaskForm from '../../components/NewTodoForm'
import TodoList from '../../components/TodoList'
import AutoScrollContainer from '../../components/autoScrollContainer'
import { TaskListProvider } from '../../context/todoContext';
import PropTypes from 'prop-types'

function index({themeCb}) {
  return <Dashboard>
      <TaskListProvider>
        <TodoHeader>
            <H3>Todo</H3>
            <ThemeSwitcher cb={themeCb} />
        </TodoHeader>
        <AutoScrollContainer>
          <TodoList/>
        </AutoScrollContainer>
        <NewTaskForm/>
      </TaskListProvider>
  </Dashboard>;
}

index.propTypes = {
  themeCb: PropTypes.func.isRequired
}

export default index