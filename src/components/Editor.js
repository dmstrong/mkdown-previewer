import React from 'react'

export const Editor = ({placeholder, handleInput, input}) => {
    return (
        <textarea
          name="editor"
          id="editor"
          cols="50"
          rows="27"
          onInput={handleInput}
          value={input}
          defaultValue={placeholder}
        ></textarea>
    );
}
