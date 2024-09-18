"use client";

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError((prev) => ({ ...prev, email: 'Email is required' }));
    }
    if (!password) {
      setError((prev) => ({ ...prev, password: 'Password is required' }));
    }

    // Add login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h3 className="text-2xl font-semibold text-center mb-6">Welcome back</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="session-email-input" className="block text-sm font-medium text-gray-700">
              Email address*
            </label>
            <input
              type="email"
              placeholder="e.g example@email.com"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="session-email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <div className="text-red-500 text-sm mt-1">{error.email}</div>}
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-center">
              <label htmlFor="session-password-input" className="block text-sm font-medium text-gray-700">
                Password*
              </label>
              <a role="button" tabIndex={0} className="text-xs font-bold text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="session-password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <div className="text-red-500 text-sm mt-1">{error.password}</div>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
          >
            Sign in
          </button>

          <p className="text-center text-sm mt-4">
            Don't have an account?{' '}
            <a className="font-bold text-indigo-600 hover:underline" href="/onboarding">
              Sign up
            </a>
          </p>

          <p className="text-center text-sm mt-3">
            Want to sign in as talent instead?{' '}
            <a className="font-bold text-indigo-600 hover:underline" href="https://talent.andela.com/">
              Sign in here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

