import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BreakingList from './BreakingList'
import Pagitation from './Pagitation'
const Breaking = () => {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage]=useState(1)
    // eslint-disable-next-line
    const [postsPerPage, setPostsPerPage]= useState(10)
    useEffect(()=>{
        const fetchData= async () =>{
            const res =await axios.get('https://www.breakingbadapi.com/api/characters')
            //console.log(res.data)
            setPosts(res.data)
        }
        fetchData();
    },[])
   	// Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

   // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div>
        {currentPosts.map(item =>
        <BreakingList posts={item} key={item.char_id} length={item.length} />
            )}
         
         <Pagitation postsPerPage={postsPerPage} 
         totalPosts={posts.length} paginate={paginate} />
        </div>
    )
}

export default Breaking
