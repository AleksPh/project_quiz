"use client";
import React, { useState } from 'react';

const SelectionForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='selling-form'>
      <div className={`form-block ${selectedOption === '3-Month Plan' ? 'active' : ''}`}>
        <label className='form-block_label custom-radio'>
          <div className='input'>
            <input 
              type="radio" 
              value="3-Month Plan" 
              checked={selectedOption === '3-Month Plan'} 
              onChange={handleOptionChange} 
            />
            <span className="radio-custom"></span>
          </div>

          <div className='plan'>
            <p className='month-plan'>3-Month Plan</p>
            <p className='month-price'><span className='line-through'>$59.99</span> $29.99</p>
          </div>

          <div className='price'>
            <div className="block1">$1.99</div>
            <div className="block2">$</div>
            <div className="block3">0</div>
            <div className="block4">
              <p>33</p>
              <p className='small'>per day</p>
            </div>
          </div>
        </label>
      </div>

      <div className={`marg-top custom form-block ${selectedOption === '1-Month Plan' ? 'active' : ''}`}>
        <div className="head">Most Popular</div>
        <label className='form-block_label custom-radio'>
          <div className='input'>
            <input 
              type="radio" 
              value="1-Month Plan" 
              checked={selectedOption === '1-Month Plan'} 
              onChange={handleOptionChange} 
            />
            <span className="radio-custom"></span>
          </div>
          <div className='plan'>
            <p className='month-plan'>1-Month Plan</p>
            <p className='month-price'><span className='line-through'>$39.99</span> $19.99</p>
          </div>
          <div className='price'>
            <div className="block1">$1.33</div>
            <div className="block2">$</div>
            <div className="block3">0</div>
            <div className="block4">
              <p>67</p>
              <p className='small'>per day</p>
            </div>
          </div>
        </label>
      </div>

      <div className={`form-block ${selectedOption === '6-Month Plan' ? 'active' : ''}`}>
        <label className='form-block_label custom-radio'>
          <div className='input'>
            <input 
              type="radio" 
              value="6-Month Plan" 
              checked={selectedOption === '6-Month Plan'} 
              onChange={handleOptionChange} 
            />
            <span className="radio-custom"></span>
          </div>
          <div className='plan'>
            <p className='month-plan'>6-Month Plan</p>
            <p className='month-price'><span className='line-through'>$79.99</span> $39.99</p>
          </div>
          <div className='price'>
            <div className="block1">$0.44</div>
            <div className="block2">$</div>
            <div className="block3">0</div>
            <div className="block4">
              <p>22</p>
              <p className='small'>per day</p>
            </div>
          </div>
        </label>
      </div>
    </form>
  );
};

export default SelectionForm;
