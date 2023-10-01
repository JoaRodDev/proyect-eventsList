import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function SingupForm() {
const { register, handleSubmit, reset, formState: { errors }} = useForm();

    const handleClearClick = () => {
       reset();
    }

    const handleSubmitForm = (data) => {
        console.log(data);
        
    };

    console.log(errors)

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="">
            Name 
            <input {...register("name", {required: true})}/>
        </label>
        <br></br>
        <label htmlFor="">
            Age 
            <input {...register("age", {required: true})} />
        </label>
        <br></br>
        <label htmlFor="">
            Address
            <input {...register("address", {required: true})} />
        </label>
        <br></br>
        <label htmlFor="">
            Zipcode
            <input {...register("zipcode", {required: true})} />
        </label>
        <br></br>
        <label htmlFor="">
            Phone
            <input {...register("phone", {required: true})} />
        </label>
        <div>
            <button type="button" onClick={handleClearClick}>Clear</button>
            <button type='submit'>Submit</button>
        </div>
    </form>
  );
};

export default SingupForm