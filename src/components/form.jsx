import React, {useState} from 'react';
import axios from 'axios'

const Form = () => {
    const [customerName, setCustomerName] = useState("");
    const [customerAge, setCustomerAge] = useState(0);
    const [serviceOfficerName, setserviceOfficerName] = useState("");
    const [NRIC, setNRIC] = useState("");
    const [branchCode, setBranchCode] = useState("")
    const [image, setImage] = useState("")

    const [customerNameError, setCustomerNameError] = useState(false);
    const [customerAgeError, setCustomerAgeError] = useState(false);
    const [serviceOfficerNameError, setserviceOfficerNameError] = useState(false);
    const [NRICError, setNRICError] = useState(false);
    const [branchCodeError, setBranchCodeError] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageUpload = () => {
      let fileInput = document.getElementById("image");
      let filePath = fileInput.value;
      let allowedExtensions = /(\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(filePath)) {
        alert("Invalid file type");
        fileInput.value = "";
        setImageError(true);
        return false;
      } else {
        if (fileInput.files[0].size > 2097152) {
          alert("File is too big!");
          fileInput.value = "";
          setImageError(true);
          return false;
        }
        setImage(fileInput.files[0]);
        setImageError(false);
      }
    }
    
    return (
       <div class="container">
         <form>
            <div>
                <label htmlFor="customerName">Customer Name:</label>
                <input type="text"
                autocomplete="off"
                id = "customerName"
                name = "customerName"
                onChange = {(e)=>{
                  setCustomerName(e.target.value)
                  if (customerName.length >= 65) {
                    setCustomerNameError(true)
                  } else {
                    setCustomerNameError(false)
                  }
                }}/>
                  {customerNameError &&
                    <div className = "generic-error">
                  <p>Customer Name must not exceed 64 characters</p>
                  </div>
                  }
                
            </div>
          
            <div>
                <label htmlFor="customerAge">Customer Age:</label>
                <input type="number"
                autocomplete="off"
                id = "customerAge"
                name = "customerAge"
                onChange = {(e)=>{
                    setCustomerAge(e.target.value)

                    if (Number(e.target.value) >= 18) {
                      setCustomerAgeError(false);
                    } else {
                      setCustomerAgeError(true);
                    }
                }}/>
    
                  {customerAgeError &&
                  <div className = "generic-error">
                    <p>Customers must be at least 18 years of age</p>
                  </div>
                  }
  
            </div>
            <div>
                <label htmlFor="serviceOfficerName">Service Officer Name:</label>
                <input type="text"
                autocomplete="off"
                id = "serviceOfficerName"
                name = "serviceOfficerName"
                onChange = {(e)=>{
                  setserviceOfficerName(e.target.value)
                  if (serviceOfficerName.length >= 65) {
                    setserviceOfficerNameError(true)
                  } else {
                    setserviceOfficerNameError(false)
                  }
                }}/>
              
                  {serviceOfficerNameError &&
                  <div className = "generic-error">
                  <p>Service Officer Name must not exceed 64 characters.</p>
                  </div>
                  }
              
            </div>
            <div>
                <label htmlFor="NRIC">NRIC:</label>
                <input type="text"
                autocomplete="off"
                id = "NRIC"
                name = "NRIC"
                onChange = {(e)=>{
                  setNRIC(e.target.value)
                  if (!e.target.value.match(/^[A-Z]\d{7}[A-Z]$/)) {
                    setNRICError(true);
                  } else {
                    setNRICError(false);
                  }
                }}/>
                
                  {NRICError &&
                    <div className = "generic-error">
                  <p>NRIC must be in uppercase and only have 7 numeric
numbers.
</p>
                    </div>
                  }
            </div>
            <div>
                <label htmlFor="branchCode">Branch Code:</label>
                <input type="number"
                autocomplete="off"
                id = "branchCode"
                name = "branchCode"
                onChange = {(e)=>{
                  setBranchCode(e.target.value)
                  if (e.target.value.match(/^\d{3}$/)) {
                    setBranchCodeError(false);
                  } else {
                    setBranchCodeError(true);
                  }
                }}/>
                
                  {branchCodeError &&
                  <div className = "generic-error">
                  <p>Must be a valid branch code number</p>
                  </div>
                  }
                
            </div>
            <div>
                <label htmlFor="image">Image Upload:</label>
                <input type="file"
                accept=".jpeg,.png"
                autocomplete="off"
                id = "image"
                name = "image"
                onChange={handleImageUpload}/>
                  {imageError &&
                  <div className = "generic-error">
                  <p>Image attached should be JPEG/PNG format, and
should not exceed 2 megabytes.
</p>
                  </div>
                  }
               
            </div>
            <div>
                <label htmlFor="productType">Product Type:</label>
                <select id = "productType">
                  <option value = "137">Investor</option>
                  <option value = "070">Insurance</option>
                  <option value = "291">Loans</option>
                  <option value = "969">Savings</option>
                  <option value = "555">Credit Cards</option>
                </select>
            </div>
            <button>Submit</button>
         </form>
       </div>
      
    )
}

export default Form;