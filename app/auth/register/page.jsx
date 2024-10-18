import React from 'react';

export default function RegisterPage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-sky-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-sky-800 mb-6 text-center">Registro</h1>
                <p className="text-center text-slate-600">
                    Please fill in the form below to create an account.
                </p>
                <p className="mt-4 text-center text-sm text-slate-600">
                    Did you have an account?{' '}
                    <a href="/auth/login" className="text-sky-600 hover:text-sky-800">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}