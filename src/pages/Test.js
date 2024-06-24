// Test.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Test = () => {
    const { id } = useParams();
    return (
        <div>Test{id}</div>
    );
};

export default Test;
