import { UpdatedWord } from '@/types/types';
import { FC, useEffect, useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IProps } from './EditWordForm.types';
import {
  BtnList,
  Form,
  Input,
  InputContainer,
  InputTitle,
  InputsList,
  Label,
  LabelsList,
  ListItem,
} from './EditWordForm.styled';
import { Messages, regExp } from '@/constants';
import Ukraine from '@/icons/Ukraine.svg?react';
import UK from '@/icons/uk.svg?react';
import SubmitBtn from '../SubmitBtn';
import CancelBtn from '../CancelBtn';
import { toasts } from '@/utils';
import { useAppDispatch } from '@/hooks/redux';
import { updateWord } from '@/redux/words/operations';

const EditWordForm: FC<IProps> = ({ setModalWinState, word }) => {
  const uaId = useId();
  const enId = useId();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<UpdatedWord>();
  const dispatch = useAppDispatch();
  const { _id, en, ua, ...wordData } = word;

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

  const handleFormSubmit: SubmitHandler<UpdatedWord> = (data) => {
    delete wordData.owner;
    delete wordData.progress;

    dispatch(updateWord({ id: _id, data: { ...wordData, ...data } }))
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.wordCreated);
        setModalWinState();
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputContainer>
        <InputsList>
          <Input
            id={uaId}
            type='text'
            {...register('ua', { required: true, pattern: regExp.uaWord })}
            defaultValue={ua}
          />
          <Input
            id={enId}
            type='text'
            {...register('en', { required: true, pattern: regExp.enWord })}
            defaultValue={en}
          />
        </InputsList>
        <LabelsList>
          <Label htmlFor={uaId}>
            <Ukraine />
            <InputTitle>Ukrainian</InputTitle>
          </Label>
          <Label htmlFor={enId}>
            <UK />
            <InputTitle>English</InputTitle>
          </Label>
        </LabelsList>
      </InputContainer>
      <BtnList>
        <ListItem>
          <SubmitBtn title='Save' />
        </ListItem>
        <ListItem>
          <CancelBtn onClick={setModalWinState} title='Cancel' />
        </ListItem>
      </BtnList>
    </Form>
  );
};

export default EditWordForm;
