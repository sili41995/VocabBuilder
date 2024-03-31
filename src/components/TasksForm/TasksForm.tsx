import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectTasks } from '@/redux/words/selectors';
import { FC, useEffect, useId, useState } from 'react';
import UK from '@/icons/uk.svg?react';
import Ukraine from '@/icons/Ukraine.svg?react';
import { FaArrowRight } from 'react-icons/fa';
import {
  BtnList,
  CancelBtn,
  Form,
  Input,
  InputTitle,
  InputWrap,
  InputsContainer,
  Label,
  ListItem,
  NextBtn,
  NextBtnTitle,
  SubmitBtn,
} from './TasksForm.styled';
import { Answers, IAnswer, ITask } from '@/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Messages, regExp } from '@/constants';
import { toasts } from '@/utils';
import { sendAnswers } from '@/redux/words/operations';

const TasksForm: FC = () => {
  const [taskNumber, setTaskNumber] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>([]);
  const tasks = useAppSelector(selectTasks);
  const isLastTask = tasks.length - 1 === taskNumber;
  const { task, en, ua, _id } = tasks[taskNumber];
  const isEnTask = task === 'en';
  const taskValue = isEnTask ? ua : en;
  const uaId = useId();
  const enId = useId();
  const uaLabel = (
    <Label htmlFor={uaId}>
      <Ukraine />
      <InputTitle>Ukrainian</InputTitle>
    </Label>
  );
  const enLabel = (
    <Label htmlFor={enId}>
      <UK />
      <InputTitle>English</InputTitle>
    </Label>
  );
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    watch,
  } = useForm<ITask>();
  const answerInputName = !isEnTask ? 'ua' : 'en';
  const answer = watch(answerInputName);
  const dispatch = useAppDispatch();

  useEffect(() => {
    errors.ua &&
      toasts.errorToast(
        errors.ua.type === 'required' ? Messages.uaReqErr : Messages.uaRegExpErr
      );
    errors.en &&
      toasts.errorToast(
        errors.en.type === 'required' ? Messages.enReqErr : Messages.enRegExpErr
      );
  }, [errors, isSubmitting]);

  const onNextBtnClick = () => {
    const data: IAnswer = { _id, task, ua: null, en: null };

    data.en = isEnTask ? null : String(en);
    data.ua = isEnTask ? String(ua) : null;

    setAnswers((prevState) => [...prevState, data]);
    reset();
    setTaskNumber((prevState) => (prevState += 1));
  };

  const handleFormSubmit: SubmitHandler<ITask> = (data) => {
    dispatch(sendAnswers(answers));
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputsContainer>
        <InputWrap>
          {!isEnTask ? uaLabel : enLabel}
          <Input
            placeholder='Введіть переклад'
            id={!isEnTask ? uaId : enId}
            {...register(answerInputName, {
              required: true,
              pattern: !isEnTask ? regExp.uaWord : regExp.enWord,
            })}
          ></Input>
          {!isLastTask && (
            <NextBtn type='button' onClick={onNextBtnClick}>
              <NextBtnTitle>Next</NextBtnTitle>
              <FaArrowRight size={20} />
            </NextBtn>
          )}
        </InputWrap>
        <InputWrap>
          {isEnTask ? uaLabel : enLabel}
          <Input
            {...register(isEnTask ? 'ua' : 'en', { required: true })}
            value={taskValue}
            disabled
          ></Input>
        </InputWrap>
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
