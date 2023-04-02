import * as S from './TaskDetail.style';
import AdvancedButton from "@components/molecules/AdvancedButton/AdvancedButton";
import { translator } from "@services/translator";
import { useAppDispatch, useAppSelector } from "@src/hooks/useRedux";
import Text from '@components/elements/Text/Text';
import { TaskStatus } from '@src/models/enum';
import { handleActionTaskDelete, handleActionTaskUpdate } from '@src/store/redux/task/taskActions';
import navigationService from '@services/navigationService';
import theme from '@config/theme';
import { useEffect, useState } from 'react';
import AdvancedTextInput from '@components/molecules/AdvancedTextInput/AdvancedTextInput';
import { ICreateTask } from '@src/models';

export const TaskDetail = () => {
  const { task: { selectedTask } } = useAppSelector()
  const [form, setForm] = useState<ICreateTask>({
    title: '',
    description: '',
    status: 0
  });
  const [editModalVisible, setEditModalVisible] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setForm({
      title: selectedTask?.title ?? '',
      description: selectedTask?.description ?? '',
      status: selectedTask?.status ?? 0
    })
  }, [])

  const handleSubmit = () => {
    dispatch(handleActionTaskDelete(selectedTask?.id, err => {
      if (err) {
        return console.error(err)
      } else {
        navigationService.back()
      }
    }))
  }

  const handleDone = () => {
    dispatch(handleActionTaskUpdate(
      { ...selectedTask, status: TaskStatus.DONE }, err => {
        if (err) {
          return console.error(err)
        } else {
          navigationService.back()
        }
      }))
  }

  const handleUndone = () => {
    dispatch(handleActionTaskUpdate(
      { ...selectedTask, status: TaskStatus.PENDING }, err => {
        if (err) {
          return console.error(err)
        } else {
          navigationService.back()
        }
      }))
  }

  const handleUpdate = () => {
    dispatch(handleActionTaskUpdate(
      {
        ...selectedTask,
        title: form.title,
        description: form.description
      }, err => {
        if (err) {
          return console.error(err)
        } else {
          navigationService.back()
        }
      }))
  }

  return (
    <S.Container>


      <Text
        text={selectedTask?.title ?? ''}
        fontSize={24}
        fontWeight='bold'
        marginBottom={5}
      />
      <Text
        text={selectedTask?.description ?? ''}
        fontSize={16}
        marginBottom={5}
      />
      <S.Row>
        <Text
          text='Status'
          fontSize={16}
          marginBottom={5}
        />
        <Text
          fontSize={16}
          fontWeight='bold'
          textColor={selectedTask?.status === TaskStatus.DONE ? theme.doneTextColor : theme.pendingTextColor}
          text={(selectedTask?.status) && (selectedTask?.status === TaskStatus.DONE) ?
            translator('GENERAL.DONE') :
            translator('GENERAL.PENDING')}
        />
      </S.Row>

      <S.ButtonContainer>
        {selectedTask?.status === TaskStatus.PENDING ?
          <AdvancedButton
            text={translator('GENERAL.MARK_DONE')}
            onSubmit={handleDone} /> :
          <AdvancedButton
            text={translator('GENERAL.MARK_UNDONE')}
            onSubmit={handleUndone} />
        }
        <AdvancedButton
          text={translator('GENERAL.EDIT')}
          onSubmit={() => setEditModalVisible(true)} />
        <AdvancedButton
          text={translator('GENERAL.DELETE')}
          onSubmit={handleSubmit} />
      </S.ButtonContainer>


      <S.Modal
        visible={editModalVisible}
        transparent

      >
        <S.ModalContainer>
          <S.ModalBox>
            <Text text='Editar' />
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
              text={translator('GENERAL.UPDATE')}
              onSubmit={handleUpdate} />
          </S.ModalBox>

        </S.ModalContainer>
      </S.Modal>
    </S.Container>
  )
}