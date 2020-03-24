import React from 'react';
import marked from 'marked'

export const Previewer = ({ input }) => {
  const markedOutput = { __html: marked(input) };
  return (
      <div
        id="preview"
        dangerouslySetInnerHTML={markedOutput}
      ></div>
  );
};
