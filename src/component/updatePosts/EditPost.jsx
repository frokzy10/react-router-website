import { useActionData, useLoaderData, useNavigation, /*useParams*/ } from 'react-router-dom'
import UpdatePosts from "./ui/UpdatePosts";

const EditPost = () => {
    const data = useActionData()
    const { post} = useLoaderData()
    const navigation = useNavigation()

    return (
        <div>
            {data?.message && <div style={{color: 'blue'}}>{data.message}</div>}
            <h1>Edit post {post.title}</h1>
            <UpdatePosts {...post} submitting={navigation.state === 'submitting'} />
        </div>
    )
}

const updatePost = async (post) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
        method: 'PUT',
        body: post
    })
    return res.json()
}

const updatePostAction = async ({request}) => {
    const formData = await request.formData();

    if (!formData.get('title') || !formData.get('body')) {
        return {message: 'Ввдедите все поле ввода'}
    }

    const updatedPost = await updatePost(formData)

    return { message: `Post ${updatedPost.id} was successfully updated` }
}

export { EditPost, updatePostAction }