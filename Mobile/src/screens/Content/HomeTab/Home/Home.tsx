
import TaskCard from "@components/molecules/TaskCard/TaskCard"
import * as S from './Home.style'
import { useAppDispatch, useAppSelector } from "@src/hooks/useRedux"
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { handleActionGetAllTask, handleActionSelectTask } from "@src/store/redux/task/taskActions";
import { ITask } from "@src/models";
import navigationService from "@services/navigationService";
import FilterIcon from '@assets/icons/ic_filter.svg'
import CloseIcon from '@assets/icons/ic_close.svg'
import theme from "@config/theme";
import AdvancedButton from "@components/molecules/AdvancedButton/AdvancedButton";
import Text from "@components/elements/Text/Text";
import { translator } from "@services/translator";
import { TaskStatus } from "@src/models/enum";

interface IItem {
  index: number,
  item: ITask
}

export const Home = () => {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false)
  const [tasks, setTasks] = useState<ITask[]>();
  const { task: { allTask } } = useAppSelector()

  useFocusEffect(
    React.useCallback(() => {
      dispatch(handleActionGetAllTask())
    }, [])
  );

  const handleFilterTask = (filter: number) => {

    if (filter === TaskStatus.DONE) {
      const filtered = allTask?.filter((task) => task.status === TaskStatus.DONE)
      return setTasks(filtered)
    }

    if (filter === TaskStatus.PENDING) {
      const filtered = allTask?.filter((task) => task.status === TaskStatus.PENDING)
      return setTasks(filtered)
    }

    return setTasks([])
  }

  const handleSubmit = (taskId: string) => {

    const selected = allTask?.find((task) => task.id === taskId)
    if (selected) {
      dispatch(handleActionSelectTask(selected))
      navigationService.navigate('TaskDetail')
    }
  }

  return (
    <S.Container>
      <S.Touch onPress={() => setModalVisible(true)}>
        <FilterIcon fill={theme.iconFill} />
      </S.Touch>

      <S.Modal
        transparent
        visible={modalVisible}
      >
        <S.ModalContainer>
          <S.ModalBox>
            <S.Touch onPress={() => {
              handleFilterTask(3);
              setModalVisible(false);
            }}>
              <CloseIcon fill={theme.iconFill} stroke={theme.iconFill} />
            </S.Touch>
            <Text text={translator("GENERAL.FILTER_BY")}
              fontWeight='bold'
              fontSize={18}
              marginTop={5}
              marginBottom={5}
            />
            <S.RowSpace>
              <AdvancedButton text={translator("GENERAL.DONE")} onSubmit={() => {
                handleFilterTask(TaskStatus.DONE);
                setModalVisible(false);
              }} />
              <AdvancedButton text={translator("GENERAL.PENDING")} onSubmit={() => {
                handleFilterTask(TaskStatus.PENDING);
                setModalVisible(false);
              }} />
            </S.RowSpace>
          </S.ModalBox>
        </S.ModalContainer>
      </S.Modal>
      {allTask?.length < 1 ?
        <S.BoxCentered>
          <S.Touch onPress={() => navigationService.navigate('AddTask')}>
            <Text
              fontSize={18}
              fontWeight='bold'
              text="Você não possui tarefas"
              textAlign="center"
            />
            <Text
              fontSize={14}
              text="Clique aqui aqui para adicionar um tarefa"
              textAlign="center"
            />
          </S.Touch>
        </S.BoxCentered>
        :
        <S.List
        showsVerticalScrollIndicator={false}
          data={tasks?.length > 0 ? tasks : allTask}
          renderItem={({ item }: IItem) =>
            <TaskCard
              id={item.id}
              title={item.title}
              description={item.description}
              status={item.status}
              onPress={(task: ITask) => handleSubmit(task.id)}
            />
          }
          keyExtractor={(item: ITask) => item.id}
        />}
    </S.Container>
  )
}