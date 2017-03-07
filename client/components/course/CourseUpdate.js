import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourseActions from '../../actions/actionCreators';
import { browserHistory } from 'react-router';
import { Button, Modal } from 'react-bootstrap';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

class CourseUpdate extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false
        };
    }

    updateCourse() {
        this.props.dispatch(CourseActions.updateCourseAsync(this.props.course));
        this.setState({show: !this.state.show});
    }

    updateValue(value, key, course) {
        this.props.dispatch(CourseActions.updateFormCourseValue(value, key, course));
    }

    render() {
        let open = () => this.setState({ show: true });
        let close = () => this.setState({ show: false });

        return (

            <div>
                <a href='#'
                    onClick={() => this.setState({ show: true })} >
                    Edit
                </a>
                <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"   >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Course</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div >
                            <form >
                                <fieldset>
                                    <TextInput
                                        name="title"
                                        label="TITLE"
                                        onChange={(e) => this.updateValue(e.target.value, 'title', this.props.course)}                                      
                                        placeholder="course"
                                        value={this.props.course.get('title')} 
                                        />

                                    <SelectInput
                                        name="authorId"
                                        label="Author"
                                        defaultOption="Select Author"
                                        options={this.props.authors.get('authorList')}
                                        value={this.props.course.get('authorId')}
                                        //onChange={() => this.props.authors.get('Id')} 
                                        onChange={(e) => this.updateValue(e.target.value, 'authorId', this.props.course)} 
                                        /> 

                                    <TextInput
                                        name="category"
                                        label="CATEGORY"
                                        onChange={(e) => this.updateValue(e.target.value, 'category', this.props.course)}
                                        placeholder="e.g. computer science"
                                        value={this.props.course.get('category')} />

                                    <TextInput
                                        name="length"
                                        label="LENGTH"
                                        onChange={(e) => this.updateValue(e.target.value, 'length', this.props.course)}
                                        placeholder="HH:MM"
                                        value={this.props.course.get('length')} />

                                    <input
                                        type="button"
                                        disabled={this.saving}
                                        value= 'Update'
                                        //value='Save'
                                        className="btn btn-primary"
                                        onClick={() => this.updateCourse()}
                                    />
                                </fieldset>
                            </form>
                        </div>

                    </Modal.Body>
                    {/*
                    <Modal.Footer>
                        <Button bsSize="xsmall" onClick={() => (this.onDeleteClick())} bsStyle="primary">Yes</Button>
                        <Button bsSize="xsmall" onClick={close}>No</Button>
                    </Modal.Footer>
                    */}
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authors: state.authors
    };
}

export default connect(mapStateToProps)(CourseUpdate);