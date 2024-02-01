'use client';
import React from 'react';

function RevealContent({ children }) {
  const [isSnippetShown, setSnippetShown] = React.useState(false);

  function handleReveal() {
    setSnippetShown(true);
  }

  return (
    <>
      {isSnippetShown ? (
        children
      ) : (
        <div className={'reveal'}>
          <button onClick={handleReveal}>Reveal Content</button>
        </div>
      )}
    </>
  );
}

export default RevealContent;
