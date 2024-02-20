import { Button } from './ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteJobAction } from '@/utils/actions'
import { useToast } from '@/components/ui/use-toast'

const DeleteJobBtn = ({ id }: { id: string }) => {
  const { toast } = useToast()
  const queryClient = useQueryClient()

  return <h1 className='text-4xl'>DeleteJobBtn</h1>
}
export default DeleteJobBtn
