import React from 'react'
import { Card, Badge } from 'react-bootstrap'
import './Breaking.css'
const BreakingList = ({posts,length}) => {
    console.log(length)
    return (
    
        <div className="all_image my-3">
         <Card className="image_list p-2">
         <Card.Img variant="top" src={posts.img}  style={{width:'300px',height:'300px'}}/>
         <Card.Body>
         <Card.Title>{posts.name}</Card.Title> 

         <Card.Text>Date of Birth:
        <Badge variant="primary">
        {posts.birthday}</Badge>{' '}
        </Card.Text>

        <Card.Text>Status:
        <Badge variant="primary">
        {posts.status}</Badge>{' '}
        </Card.Text>

        <Card.Text>NickName:
        <Badge variant="primary">
        {posts.nickname}</Badge>{' '}
        </Card.Text>

        <Card.Text>portrays:
        <Badge variant="primary">
        {posts.portrayed}</Badge>{' '}

        </Card.Text>
         <Card.Text>Occupation:
        {posts.occupation.map((id, index)=>
        <Badge pill variant="success" key={index}> {id}
      </Badge>
        )}
        </Card.Text>

         </Card.Body>
         </Card>
        </div>
    )
}

export default BreakingList
