import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/ScheduleDemoPage.css'

function ScheduleDemo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !phone || !company || !jobTitle || !additionalInfo || !selectedTime) {
      alert("Please enter all the required data");
    } else {
      // Call API to schedule demo
      console.log('Scheduling demo...');
    }
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="schedule-demo-container">
      <h1>Schedule a Demo</h1>
      <p>Get a personalized tour of our product and see how it can help your business.</p>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Enter your phone number"
          />
        </label>

        <label>
          Company:
          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Enter your company name"
          />
        </label>

        <label>
          Job Title:
          <input
            type="text"
            value={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
            placeholder="Enter your job title"
          />
        </label>

        <label>
          Additional Information:
          <textarea
            value={additionalInfo}
            onChange={(event) => setAdditionalInfo(event.target.value)}
            placeholder="Enter any additional information"
          />
        </label>


        <label>
          Select a Time:
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">Select a time</option>
            <option value="monday-10am">Monday at 10:00 AM EST</option>
            <option value="tuesday-2pm">Tuesday at 2:00 PM EST</option>
            <option value="wednesday-11am">Wednesday at 11:00 AM EST</option>
            <option value="thursday-3pm">Thursday at 3:00 PM EST</option>
            <option value="friday-10am">Friday at 10:00 AM EST</option>
          </select>
        </label>

        <div className="actions" style={{ float: 'right', marginRight: 20 }}>
          <button type="submit" style={{
            backgroundColor: 'rgb(76, 175, 80)',
            color: '#fff',
            padding: 10,
            borderRadius: 5,
            border: 'none',
            cursor: 'pointer',
            fontSize: 16,
            fontWeight: 'bold',
            
          }}>Schedule Demo</button>
          
        </div>

      </form>
    </div>
  );
}

export default ScheduleDemo;