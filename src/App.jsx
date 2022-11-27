import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthLayout from './layouts/Auth';
import MainRoutes from './MainRoutes';
import Authentication from './modules/Authentication';
import './App.css';

// Create a client
const queryClient = new QueryClient();

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index element={
            <AuthLayout>
              <Authentication />
            </AuthLayout>
          } />
          <Route path="admin/*" element={<MainRoutes />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
        </QueryClientProvider>
    </div>
  )
}

export default App;
