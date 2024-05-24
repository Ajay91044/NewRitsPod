import React, { useState } from 'react';

function TaggingSystem() {
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState([]);

    const handleInputChange = (event) => {
        setTagInput(event.target.value);
    };

    const handleTagClick = (skill) => {
        setTags([...tags, skill]);
        setTagInput('');
    };

    const handleRemoveTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    const handleSkillClick = (skill) => {
        setTagInput(skill);
        setTags([...tags, skill]);
    };

    return (
        <div>
            <input
                type="text"
                value={tagInput}
                onChange={handleInputChange}
                placeholder="Type a skill..."
            />
            <ul>
                {['HTML', 'CSS', 'JavaScript', 'Python'].map((skill, index) => (
                    <li key={index} onClick={() => handleSkillClick(skill)}>
                        {skill}
                    </li>
                ))}
            </ul>
            <div style={{ marginTop: '10px' }}>
                {tags.map((tag, index) => (
                    <div key={index} className="tag">
                        {tag}
                        <span className="remove-tag" onClick={() => handleRemoveTag(index)}>&#10006;</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaggingSystem;
