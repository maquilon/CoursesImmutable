import React from 'react';
import CourseListRow from './CourseListRow';
import { browserHistory, Link } from 'react-router';
import { Button, Modal } from 'react-bootstrap';

const CourseList = ({courses, authors}) => {
    function onCourseAdd() {
        browserHistory.push('/CourseContainer');
    }

    return (
        <div>
            <a style={{ float: 'right' }} href="#" onClick={() => onCourseAdd()} className="btn btn-primary btn-sm">Add Course</a>
            <div className="page-header">
                <h4>Course Manager</h4>
            </div>

            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>LENGTH</th>
                        <th>CATEGORY</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {courses.get('coursesList').map((c, i) => <CourseListRow key={i} course={c} authors={authors} /> )}
                </tbody>
            </table>
        </div>
    );
};

export default CourseList;