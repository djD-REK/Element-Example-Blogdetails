export const getDataProps = (utils, props) => {
    return utils.client
      .request(`https://jsonplaceholder.typicode.com/posts/${props.blogId}`)
      .then(res => res.json())
      .catch(e => [])
  }