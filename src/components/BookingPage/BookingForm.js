import React, { useState } from 'react'

const BookingForm = () => {

    const [value, setValue] = useState(""); 
   
    const handleChange = (e) => { 
      setValue(e.target.value) 
    } 

    const handleSubmit = (e) => { 
      e.preventDefault(); 
    } 

  return (

    <form style="display: grid; max-width: 200px; gap: 20px" onSubmit={handleSubmit}>

        <label for="res-date">Choose date</label>
        <input type="date" id="res-date" value={value}  onChange={handleChange} />

        <label for="res-time">Choose time</label>
        <select id="res-time ">
           <option>17:00</option>
           <option>18:00</option>
           <option>19:00</option>
           <option>20:00</option>
           <option>21:00</option>
           <option>22:00</option>
        </select>

        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={value}  onChange={handleChange}/>

        <label for="occasion">Occasion</label>
        <select id="occasion">
           <option>Birthday</option>
           <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation"/>

</form>
  )
}

export default BookingForm