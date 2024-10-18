import React from 'react';
import LoginForm from '../../../components/LoginForm';

export default function LoginPage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-sky-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-sky-800 mb-6 text-center">Login</h1>
                <LoginForm />
                <p className="mt-4 text-center text-sm text-slate-600">
                    Did you not have an account?{' '}
                    <a href="/auth/register" className="text-sky-600 hover:text-sky-800">
                        Sing up
                    </a>
                </p>
            </div>
        </div>
    );
}