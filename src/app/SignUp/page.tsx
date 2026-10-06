import React from 'react';

const signUpPage = () => {
    return (
        <div className='flex justify-center my-7 '>
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    

                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name="password" type="password" className="input" placeholder="Password" />

                    <label className="label">User Name </label>
                    <input name="username" type="text" className="input" placeholder="Mr. X" />

                    <button className="btn text-white bg-red-500 btn-neutral mt-4">Sign Up</button>
                </fieldset>
            </form>
        </div>
    );
};

export default signUpPage;