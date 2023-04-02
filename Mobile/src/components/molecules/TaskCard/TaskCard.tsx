import Text from '@components/elements/Text/Text'
import * as S from './TaskCard.style'
import TrashIcon from '@assets/icons/ic_trash.svg';
import { TaskStatus } from '@src/models/enum';
import { translator } from '@services/translator';

interface IProps {
  id?: string
  title?: string,
  description?: string
  status?: number
  onPress: any
}



const TaskCard = (props: IProps) => {

  const handlePress = () => {
    props.onPress(props)
  }

  return (
    <S.Container onPress={() => handlePress()}>
      <Text
        text={props.title ?? ''}
        fontWeight='bold'
        fontSize={16}
        marginBottom={2}
      />
      <Text
        marginBottom={2}
        text={props.description ?? ''}
      />
        <S.Row>
          <Text
            text='Status: '
          />
          <Text
            text={
              props.status && (props.status === TaskStatus.DONE) ? translator('GENERAL.DONE') : 
            translator('GENERAL.PENDING')
            }
          />
        </S.Row>
    </S.Container>
  )
}

export default TaskCard