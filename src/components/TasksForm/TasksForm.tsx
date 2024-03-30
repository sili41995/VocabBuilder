import { useAppSelector } from '@/hooks/redux';
import { selectTasks } from '@/redux/words/selectors';
import { FC, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import {
  BtnList,
  CancelBtn,
  Form,
  Input,
  InputWrap,
  InputsContainer,
  ListItem,
  NextBtn,
  NextBtnTitle,
  SubmitBtn,
} from './TasksForm.styled';

const TasksForm: FC = () => {
  const [taskNumber, setTaskNumber] = useState(0);
  const [answers, setAnswers] = useState([]);
  const tasks = useAppSelector(selectTasks);
  const isLastTask = tasks.length - 1 === taskNumber;
  const { task, en, ua } = tasks[taskNumber];
  const isEnTask = task === 'en';
  const taskValue = isEnTask ? ua : en;

  const onNextBtnClick = () => {
    setTaskNumber((prevState) => (prevState += 1));
  };

  return (
    <Form>
      <InputsContainer>
        <InputWrap>
          <Input></Input>
          <NextBtn type='button'>
            <NextBtnTitle>Next</NextBtnTitle>
            <FaArrowRight size={20} />
          </NextBtn>
        </InputWrap>
        <Input disabled>{taskValue}</Input>
      </InputsContainer>
      <BtnList>
        <ListItem>
          <SubmitBtn type='submit'>Save</SubmitBtn>
        </ListItem>
        <ListItem>
          <CancelBtn type='button'>Cancel</CancelBtn>
        </ListItem>
      </BtnList>
    </Form>
  );
};

export default TasksForm;
