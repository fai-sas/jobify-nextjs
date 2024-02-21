import { Button } from './ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteJobAction } from '@/utils/actions'
import { useToast } from '@/components/ui/use-toast'

const DeleteJobBtn = ({ id }: { id: string }) => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: (data) => {
      if (!data) {
        toast({
          description: 'there was an error',
        })
        return
      }
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
      queryClient.invalidateQueries({ queryKey: ['stats'] })
      queryClient.invalidateQueries({ queryKey: ['charts'] })

      toast({ description: 'job removed' })
    },
  })

  return <h1 className='text-4xl'>DeleteJobBtn</h1>
}
export default DeleteJobBtn
