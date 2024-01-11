import { useContext } from 'react';
import { StepContext } from '../providers/StepProvider';

export default function useStep() {
  return useContext(StepContext)
}
