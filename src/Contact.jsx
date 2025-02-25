import React, { useState } from 'react'

// import {Card} from 'react-bootstrap/Card'
const Contact = () => {

    const [contacts, setContacts] = useState([
        {
          id:1,
          firstName: "Chidi",
          lastName: "Anagonye",
          phone: "555-366-8987",
          address: "St.John's University, Sydney, Australia"
        },
        {
          id:2,
          firstName: "Eleanor",
          lastName: "Shellstrop",
          phone: "555-483-1457",
          address: "335 Avalon St, Apt 2C, Pheonix, Arizona"
        },
        {
          id:3,
          firstName: "Tahani",
          lastName: "Al-Jamil",
          phone: "555-276-7991",
          address: "1 Lancaster Terract, London, Endland"
        },
        {
          id:4,
          firstName: "Jason",
          lastName: "Mendoza",
          phone: "555-113-8388",
          address: "779 Wiliam St, Miami, Florida"
        },
      ])


      const handleDeleteOne = (contactId) => {
        var contactsClone = contacts;
        // contactsClone.filter(item => item.id !== contactId)
        setContacts(contactsClone.filter(item => item.id !== contactId));
      }
    
      const handleDeleteAll = () => {
        setContacts([]);
      }

    
  return (
    <div>
        <div className='card-container d-flex justify-content-center'>

        
      {contacts.map((item) => (
        <div key={item.id} className='card m-2 py-0 px-0 text-start'>
            <div className='border-bottom py-2 w-100 px-3'>
                <h1>
                    {item.firstName}
                </h1>
                <p className='text-secondary'>
                    {item.lastName}
                </p>
            </div>
            <div className='border-bottom w-100 px-3'>
                <p>
                    Phone: <b>{item.phone}</b>
                </p>
            </div>
            <div className='border-bottom w-100 px-3'>
                <p>
                    Address: <b>{item.address}</b>
                </p>
            </div>
            <div className='d-flex py-2 align-items-center justify-content-end px-3'>
                <button className='btn btn-danger' onClick={() => {handleDeleteOne(item.id)}}>
                    Delete
                </button>
            </div>
        </div>
      ))}
      </div>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-danger mt-3' onClick={() => {handleDeleteAll()}}>
                        Delete   
        </button>
      </div>
    </div>
  )
}

export default Contact
