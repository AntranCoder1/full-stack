import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { postContext } from '../../context/Post.context'

const AddPostModal = () => {

    // context
    const { showAddPostModal, setShowAddPostModal } = useContext(postContext)

    const closeDialog = () => {
        setShowAddPostModal(false)
    }

    return (
        <Modal show={showAddPostModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>What do you want to learn?</Modal.Title>
			</Modal.Header>
			<Form>
				<Modal.Body>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Title'
							name='title'
							required
							aria-describedby='title-help'
						/>
						<Form.Text id='title-help' muted>
							Required
						</Form.Text>
					</Form.Group>
					<Form.Group style={{ marginBottom: '1rem' }}>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder='Description'
							name='description'
						/>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Tutorial URL'
							name='url'
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={closeDialog}>
						Cancel
					</Button>
					<Button variant='primary' type='submit'>
						LearnIt!
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
    )
}

export default AddPostModal
