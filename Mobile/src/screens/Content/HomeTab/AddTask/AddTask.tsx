import * as S from './AddTask.style';
import AdvancedTextInput from "@components/molecules/AdvancedTextInput/AdvancedTextInput";
import AdvancedButton from "@components/molecules/AdvancedButton/AdvancedButton";
import { translator } from "@services/translator";
import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { handleActionCreateTask } from "@src/store/redux/task/taskActions";
import { ICreateTask } from "@src/models";
import { useAppDispatch } from "@src/hooks/useRedux";

export const AddTask = () => {
  const [form, setForm] = useState<ICreateTask>({
    title: '',
    description: '',
    status: 0
  });

  const [showButton, setShowButton] = useState(true);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setShowButton(false);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setShowButton(true);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);


  const handleSubmit = () => {


    dispatch(handleActionCreateTask(form, err => {
      if (err) {
        console.error(err)
      }
    }))
  }

  return (
    <S.Container>
      <AdvancedTextInput
        text={form?.title}
        onChange={(e: string) => setForm({ ...form, title: e })}
        placeholder={translator('SCREEN.ADD_TASK.TITLE')}
      />
      <AdvancedTextInput
        text={form?.description}
        onChange={(e: string) => setForm({ ...form, description: e })}
        placeholder={translator('SCREEN.ADD_TASK.DESCRIPTION')}
      />
      <AdvancedButton
        text={translator('GENERAL.CREATE')}
        onSubmit={handleSubmit} />
    </S.Container>
  )
}