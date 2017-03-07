import React from 'react';
import CourseDelete from './CourseDelete';
import CourseUpdate from './CourseUpdate';
import Immutable from 'immutable';

const CourseListRow = ({course, authors}) => {

    function showAuthorDetails(id, authors) {
        let details = authors.get('authorList').map((author) => 
            (author.get('Id') === id) ? `${author.get('firstName')} ${author.get('lastName')}` : ''
        );
        return details;
    }

    return (
        <tr>
            <td>{course.get('Id')}</td>
            <td>{course.get('title')}</td>
            {/*<td>{course.get('authorName')}</td>*/}
            <td>{showAuthorDetails(course.get('authorId'), authors)}</td>
            <td>{course.get('length')}</td>
            <td>{course.get('category')}</td>
            <td><CourseUpdate course={course} authors={authors} /></td>
            <td><CourseDelete course={course} /></td>
        </tr>
    );
};

export default CourseListRow;
