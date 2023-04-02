
import TaskCard from "@components/molecules/TaskCard/TaskCard"
import * as S from './Home.style'
import { useAppDispatch, useAppSelector } from "@src/hooks/useRedux"
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { handleActionGetAllTask, handleActionSelectTask } from "@src/store/redux/task/taskActions";
import { ITask } from "@src/models";
import navigationService from "@services/navigationService";

interface IItem {
  index: number,
  item: ITask
}

export const Home = () => {
  const dispatch = useAppDispatch();
  const { task: { allTask, selectedTask } } = useAppSelector()

  useFocusEffect(
    React.useCallback(() => {
      dispatch(handleActionGetAllTask())

    }, [])
  );

  const handleSubmit = (taskId: string) => {

    const selected = allTask?.find((task) => task.id === taskId)
    if (selected) {
      dispatch(handleActionSelectTask(selected))
      navigationService.navigate('TaskDetail')
    }
  }

  return (
    <S.Container>
      <S.List
        data={allTask}
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
      />
    </S.Container>
  )
}