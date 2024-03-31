import EmptyTasksListMessage from '@/components/EmptyTasksListMessage';
import MainSection from '@/components/MainSection';
import TasksForm from '@/components/TasksForm';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getTasks } from '@/redux/words/operations';
import { selectTasks } from '@/redux/words/selectors';
import { FC, useEffect } from 'react';

const TrainingPage: FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const showTasksFrom = Boolean(tasks.length);

  useEffect(() => {
    const promise = dispatch(getTasks());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <MainSection>
      {showTasksFrom ? <TasksForm /> : <EmptyTasksListMessage />}
    </MainSection>
  );
};

export default TrainingPage;
