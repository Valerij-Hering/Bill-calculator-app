// App.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {
    const [bill, setBill] = useState('');
    const [people, setPeople] = useState('');
    const [tip, setTip] = useState(0);
    const [amountPerPerson, setAmountPerPerson] = useState(0);
    const [tipPerPerson, setTipPerPerson] = useState(0);
    const [totalSum, setTotalSum] = useState(0);

    const calculateAmount = (e) => {
        e.preventDefault();

        if (!bill || !people) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter your information!',
            });
            return;
        }

        const billValue = parseFloat(bill);
        const peopleValue = parseInt(people, 10);

        const calculatedAmountPerPerson = billValue / peopleValue;
        const calculatedTipPerPerson = (billValue * tip) / peopleValue;
        const calculatedTotalSum = calculatedAmountPerPerson + calculatedTipPerPerson;

        setAmountPerPerson(calculatedAmountPerPerson.toFixed(2));
        setTipPerPerson(calculatedTipPerPerson.toFixed(2));
        setTotalSum(calculatedTotalSum.toFixed(2));
        setBill('');
        setPeople('');
        setTip(0);
    };

    return (
        <div id="container">
            <h1>Let's Split Our Bill!</h1>
            <input
              type="number"
              min="0"
              placeholder="Bill"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
            <input
              type="number"
              min="0"
              placeholder="How many people?"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
            <p className='container-tips_header'>Did you like our service?</p>
            <br/>
            <div className='container-tips_btns'>
              <i className={tip === 0 ? 'far	fa-frown tips-btn-active' : 'far	fa-frown tips-btn'} onClick={() => setTip(0)}><span className="toolTipText">No tip!</span></i>
              <i className={tip === 0.1 ? 'far	fa-meh tips-btn-active' : 'far	fa-meh tips-btn'} onClick={() => setTip(0.1)}><span className="toolTipText">It was OK (10%)</span></i>
              <i className={tip === 0.2 ? 'far	fa-smile tips-btn-active' : 'far	fa-smile tips-btn'} onClick={() => setTip(0.2)}><span className="toolTipText">Good service (20%)</span></i>
              <i className={tip === 0.3 ? 'far	fa-smile-beam tips-btn-active' : 'far	fa-smile-beam tips-btn'} onClick={() => setTip(0.3)}><span className="toolTipText">Wow (30%)</span></i>
            </div>
            <br/>
            <br/>
            <button id="btn" onClick={calculateAmount}>CALCULATE</button>
            <div id="showTotalAmountToPay">
                <div className="billSplit">
                  <p className="parBillAndTip">Bill</p>
                  <span>$</span>
                  <span className='bill-result'> {amountPerPerson}</span>
                  <span> per person</span>
                </div>
                <div className="totalTip">
                  <p className="parBillAndTip">Tip</p>
                  <span>$</span>
                  <span className='bill-result'> {tipPerPerson}</span>
                  <span> per person</span>
                </div>
                <div className="totalAmount">
                  <p className="parBillAndTip">Total</p>
                  <span>$</span>
                  <span className='bill-result'> {totalSum}</span>
                  <span> per person</span>
                </div>
            </div>
        </div>
    );
}

export default App;
