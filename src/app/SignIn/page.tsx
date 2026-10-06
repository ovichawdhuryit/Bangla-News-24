import React from 'react';

const signInPage = () => {
    return (
        <div className='flex justify-center mt-7 mb-1.5'>
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                  

                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <button className="btn bg-blue-500 btn-neutral mt-4">Sign In</button>
                </fieldset>
            </form>
        </div>
    );
};

export default signInPage;