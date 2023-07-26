import { useMutation } from '@tanstack/react-query'
import { useManageDeletedPost } from 'hooks/useManageDeletedPost/useManageDeletedPost'
import { Post } from 'interfaces/post'
import { deletePostDetail } from 'services/deletePostDetail'

const useDeletePost = (id: number | string) => {
  const { setDeletedPost } = useManageDeletedPost(id)

  const { mutate: deletePost } = useMutation<Post, Error>(() => deletePostDetail(id), {
    onSuccess: () => {
      setDeletedPost()
    },
  })

  return { deletePost }
}

export { useDeletePost }
