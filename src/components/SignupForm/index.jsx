import React, { useState } from 'react'

function SingupForm() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [phone, setPhone] = useState("");

    const handleClearClick = () => {
        setName("");
        setAge("");
        setAddress("");
        setZipcode("");
        setPhone("");
    }

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        console.log("submit", {
            name,
            age,
            zipcode,
            phone,
            address
        });
    };

  return (
    <form onSubmit={handleSubmitForm}>
        <label htmlFor="">
            Name 
            <input value={name} onChange={(evt) => setName(evt.target.value)} required/>
        </label>
        <br></br>
        <label htmlFor="">
            Age 
            <input value={age} onChange={(evt) => setAge(evt.target.value)} required/>
        </label>
        <br></br>
        <label htmlFor="">
            Address
            <input value={address} onChange={(evt) => setAddress(evt.target.value)} required/>
        </label>
        <br></br>
        <label htmlFor="">
            Zipcode
            <input value={zipcode} onChange={(evt) => setZipcode(evt.target.value)} required/>
        </label>
        <br></br>
        <label htmlFor="">
            Phone
            <input value={phone} onChange={(evt) => setPhone(evt.target.value)} required/>
        </label>
        <div>
            <button type="button" onClick={handleClearClick}>Clear</button>
            <button type='submit'>Submit</button>
        </div>
    </form>
  );
};

export default SingupForm