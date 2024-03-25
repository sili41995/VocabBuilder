import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectCategories } from '@/redux/words/selectors';
import { NewWord } from '@/types/types';
import { FC, useEffect, useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Ukraine from '@/icons/Ukraine.svg?react';
import {
  BtnList,
  CancelBtn,
  Form,
  Input,
  InputContainer,
  InputTitle,
  InputsList,
  Label,
  LabelsList,
  ListItem,
  Option,
  RadioBtn,
  RadioBtnContainer,
  RadioBtnTitle,
  RadioBtnWrap,
  Select,
  SelectWrap,
  SubmitBtn,
  Text,
  Title,
} from './AddWordForm.styled';
import { Messages, regExp } from '@/constants';
import UK from '@/icons/uk.svg?react';
import { IProps } from './AddWordForm.types';
import { toasts } from '@/utils';
import { createNewWord } from '@/redux/words/operations';

const AddWordForm: FC<IProps> = ({ setModalWinState }) => {
  const uaId = useId();
  const enId = useId();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    watch,
  } = useForm<NewWord>();
  const categories = useAppSelector(selectCategories);
  const category = watch('category') ?? categories[0];
  const isVerbCategory = category.toLowerCase() === 'verb';
  const dispatch = useAppDispatch();

  const handleFormSubmit: SubmitHandler<NewWord> = (data) => {
    if (!isVerbCategory) {
      delete data.isIrregular;
    }

    dispatch(createNewWord(data))
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.wordCreated);
        reset();
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  useEffect(() => {
    errors.category && toasts.errorToast(Messages.categoryReqErr);
    errors.isIrregular && toasts.errorToast(Messages.isIrregularReqErr);
    errors.ua &&
      toasts.errorToast(
        errors.ua.type === 'required' ? Messages.uaReqErr : Messages.uaRegExpErr
      );
    errors.en &&
      toasts.errorToast(
        errors.en.type === 'required' ? Messages.enReqErr : Messages.enRegExpErr
      );
  }, [errors, isSubmitting]);

  return (
    <>
      <Title>Add word</Title>
      <Text>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </Text>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <SelectWrap>
          <Select {...register('category', { required: true })}>
            {categories.map((category) => (
              <Option value={category.toLowerCase()} key={category}>
                {category}
              </Option>
            ))}
          </Select>
          {isVerbCategory && (
            <RadioBtnContainer>
              <RadioBtnWrap>
                <RadioBtn
                  type='radio'
                  {...register('isIrregular', { required: true })}
                  value='false'
                />
                <RadioBtnTitle>Regular</RadioBtnTitle>
              </RadioBtnWrap>
              <RadioBtnWrap>
                <RadioBtn
                  type='radio'
                  {...register('isIrregular')}
                  value='true'
                />
                <RadioBtnTitle>Irregular</RadioBtnTitle>
              </RadioBtnWrap>
            </RadioBtnContainer>
          )}
        </SelectWrap>
        <InputContainer>
          <InputsList>
            <Input
              id={uaId}
              type='text'
              {...register('ua', { required: true, pattern: regExp.uaWord })}
            />
            <Input
              id={enId}
              type='text'
              {...register('en', { required: true, pattern: regExp.enWord })}
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
            <SubmitBtn type='submit'>Add</SubmitBtn>
          </ListItem>
          <ListItem>
            <CancelBtn type='button' onClick={setModalWinState}>
              Cancel
            </CancelBtn>
          </ListItem>
        </BtnList>
      </Form>
    </>
  );
};

export default AddWordForm;
