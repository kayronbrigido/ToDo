import * as S from './TaskDetail.style';
import AdvancedButton from "@components/molecules/AdvancedButton/AdvancedButton";
import { translator } from "@services/translator";
import { useAppDispatch, useAppSelector } from "@src/hooks/useRedux";
import Text from '@components/elements/Text/Text';
import { TaskStatus } from '@src/models/enum';
import { handleActionTaskDelete, handleActionTaskUpdate } from '@src/store/redux/task/taskActions';
import navigationService from '@services/navigationService';


export const TaskDetail = () => {
  const { task: { selectedTask } } = useAppSelector()
  const dispatch = useAppDispatch()


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
          textColor={selectedTask?.status === TaskStatus.DONE ? '#00D9FF' : '#FF0000'}
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
          text={translator('GENERAL.DELETE')}
          onSubmit={handleSubmit} />
      </S.ButtonContainer>
    </S.Container>
  )
}