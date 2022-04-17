import { useDispatch } from "react-redux"
import {deleteGoal} from '../features/goals/goalSlice'
import { FaCheck } from 'react-icons/fa'

function GoalItem({goal}) {

    const dispatch = useDispatch()

  return (
    <div className="goal">
        <div className="timestamp">
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
        <h2 className="goal-text">{goal.text}</h2>
        <button onClick={() => dispatch(deleteGoal(goal._id))} className="close"><FaCheck /></button>
    </div>
  )
}

export default GoalItem