import React, { useContext, useEffect } from 'react';
import { postContext } from '../context/Post.context';
import { AuthContext } from '../context/Auth.context';
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SinglePost from '../components/posts/SinglePost';

const Dashboard = () => {

    // Context

    const { authState: { user: { username } } } = useContext(AuthContext)

    const { postState: { posts, postsLoading }, getPost } = useContext(postContext)

    // start: Get all posts
    useEffect(() => getPost(), [])

    let body = null

    if (postsLoading) {
        body = (
            <div className="spinner-container">
                <Spinner animation='border' variant='info' />
            </div>
        )
    } else if (posts.length === 0) {
        body = (
            <>
                <Card className="text-center mx-5 my-5">
                    <Card.Header as="h1">Hi {username}</Card.Header>
                    <Card.Body>
                        <Card.Title>WelCome to learnIt</Card.Title>
                        <Card.Text>
                            Click the button below to track your first skill to learn 
                        </Card.Text>
                        <Button variant="primary">LearnIt!</Button>
                    </Card.Body>
                </Card>
            </>
        )
    } else {
        body = (
            <>
                <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
                    {
                        posts.map(post => (
                            <Col key={post._id} className="my-2">
                                <SinglePost post={post} />
                            </Col>
                        ))
                    }
                </Row>
            </>
        )
    }

    return (
        <>
            {body}
        </>
    )
}

export default Dashboard
