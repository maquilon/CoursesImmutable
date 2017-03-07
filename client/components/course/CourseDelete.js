import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourseActions from '../../actions/actionCreators';
import { browserHistory } from 'react-router';
import { Button, Modal } from 'react-bootstrap';

class CourseDelete extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false
        };
    }

    // getInitialState() {
    //     return { show: false };
    // }

    onDeleteClick() {
        this.props.dispatch(CourseActions.deleteCourseAsync(this.props.course.get('Id')));
        this.setState({ show: false });
    }

    render() {
        let open = () => this.setState({ show: true });
        let close = () => this.setState({ show: false });
        return (
            <div>
                <a href='#'
                    onClick={() => this.setState({ show: true })} >
                    Delete
                </a>
                <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"   >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Courses Manager</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this course ?
                     </Modal.Body>
                    <Modal.Footer>
                        <Button bsSize="xsmall" onClick={() => (this.onDeleteClick())} bsStyle="primary">Yes</Button>
                        <Button bsSize="xsmall" onClick={close}>No</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default connect()(CourseDelete);