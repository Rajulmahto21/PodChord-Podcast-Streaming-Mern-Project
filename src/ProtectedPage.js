import { UserButton } from '@clerk/clerk-react';
import React, { useEffect } from 'react';

function ProtectedPage() {
  useEffect(() => {
    // Set a timeout to redirect after 1 second
    const redirectTimeout = setTimeout(() => {
      window.location.href = 'https://podcastupdatednew-839knky29-rajul-mahtos-projects.vercel.app/';
    }, 1000);

    // Clear the timeout to prevent the redirection if the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <>
      <UserButton />
    </>
  );
}

export default ProtectedPage;





