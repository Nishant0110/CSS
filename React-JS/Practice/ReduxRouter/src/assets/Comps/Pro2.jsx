import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Pro2() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/AllProduct");
    }, 3000);

    // Clear the timeout if the component unmounts before the timeout is reached
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div>
      <p>Product-2 page</p>
    </div>
  );
}
