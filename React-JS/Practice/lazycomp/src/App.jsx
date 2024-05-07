import react, { Suspense } from 'react';
import ErrorBoundry1 from './assets/Component/ErrorBoundry';

const LazyComp1 = react.lazy(() => import("../src/assets/Component/LazyComp"));

export default function App() {
  return (
    <ErrorBoundry1>
      <Suspense fallback={<p>Loading</p>}>
        <LazyComp1 />
      </Suspense>
    </ErrorBoundry1>
  )
}
