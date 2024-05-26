// // src/Components/DynamicComponentLoader.jsx
// import React, { useState, useEffect, lazy, Suspense } from 'react';

// const DynamicComponentLoader = ({ componentPath }) => {
//   const [Component, setComponent] = useState(null);

//   useEffect(() => {
//     const loadComponent = async () => {
//       try {
//         const { default: LoadedComponent } = await import(`../${componentPath}`);
//         setComponent(() => LoadedComponent);
//       } catch (error) {
//         console.error('Error loading component:', error);
//       }
//     };

//     loadComponent();
//   }, [componentPath]);

//   if (!Component) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Component />
//     </Suspense>
//   );
// }; 

// export default DynamicComponentLoader;
