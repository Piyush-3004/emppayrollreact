import React , { useState } from 'react'
import axios from 'axios'
import './Form.css'
import photo1 from './photo1.png'
import photo2 from './photo2.png'
import photo3 from './photo3.png'
import photo4 from './photo4.png'
import icon from './add.png'

function Form() {

        // const[name,setName] =useState("")
        // const[photo,setPhoto] =useState("")
        // const[gender,setGender] =useState("")
        // const[dept,setDept] =useState("")
        // const[day,setDay] =useState("")
        // const[month,setMonth] =useState("")
        // const[year,setYear] =useState("")
        // const[date ,setDate]=useState(day+"/"+month+"/"+year)
        // const[note,setNote] =useState("")
        const [emp, setEmp] = useState({
            
            name: '',
            photo: '',
            gender: '',
            dept:'',
            salary:'',
            day:'',
            month:'',
            year:'',
            note:''
            },[])
            // const { name, photo, gender, dept,day,month,year,note } = emp;
            const onInputChange = e => {
            setEmp({ ...emp, [e.target.name]: e.target.value })
        }
            const handle = (e)=>{

                e.preventDefault();
                
                axios.post('http://localhost:9090/emppayrollreact/create',emp )
    .then( (response) =>{console.log(response);},
    (error) => {console.log(error);} );
    }    
                

        // axios.post('/form',{name,photo,gender,dept,day,month,year,note})
        // .then(response =>{console.log(response)})
  return (
    <div>
        <header className='header-content header'>
            <div className='logo-content'>
                <img className='icon' src={icon} alt='photo' />
                <div>
                    <span className='emp-text'>EMPLOYEE</span>
                    <span className='emp-text emp-payroll'>PAYROLL</span>
                </div>
            </div>
        </header>
        <div className='form-content'>
            <form className='form' method='post' onSubmit={(e)=>handle(e)}>
                <div className='form-head'>Employee Payroll form</div>
                <div className='row-content'>
                    <label className='label text' for ='name'>Name</label>
                    {/* <input className='input' type='text' id='name' name='name' onChange={(e)=>setName(e.target.value)} placeholder='Your Name' /> */}
                    <input className='input' type='text' id='name' name='name' onChange={(e) => onInputChange(e)} placeholder='Your Name' />
                </div>
                <div className='row-content'>
                    <label className='label text' for='profile'>Profile image</label>
                    <div  className='profile-radio-content'>
                        <label>
                            <input type='radio' id='p1' name='photo' value='photo1' onChange={(e) => onInputChange(e)} />
                            <img className='profile' id='image2' src={photo1} />
                        </label>
                        <label>
                            <input type='radio' id='profile2' name='photo' value='photo2' onChange={(e) => onInputChange(e)}  />
                            <img className='profile' id='image2' src={photo2} />
                        </label>
                        <label>
                            <input type='radio' id='profile3' name='photo' value='photo3' onChange={(e)=> onInputChange(e)} />
                            <img className='profile' id='image3' src={photo3} />
                        </label>
                        <label>
                            <input type='radio' id='profile4' name='photo'  value='photo4' onChange={(e)=> onInputChange(e)}/>
                            <img className='profile' id='image4' src={photo4} />
                        </label>
                    </div>
                </div>
                    <div className='row-content'>
                        <label className='label text' for='gender'>Gender</label>
                       <div>
                            <input type='radio' id='male' name='gender' value='male' onChange={(e)=> onInputChange(e)}/>
                            <label className='text' for='male'>Male</label>
                            <input type='radio' id='female' name='gender' value='female' onChange={(e)=> onInputChange(e)} />
                            <label className='text' for='female'>Female</label>
                        </div>
                    </div>
                <div className='row-content'>
                    <label className='label text' for='department'>Department</label>
                    <div>
                        <input className='checkbox' type='checkbox' id='hr' name='dept' value='HR' onChange={(e)=> onInputChange(e)}/>
                        <label className='text' for='hr'>HR</label>
                        <input className='checkbox' type='checkbox' id='sales' name='dept' value='Sales' onChange={(e)=> onInputChange(e)}/>
                        <label className='text' for='sales'>Sales</label>
                        <input className='checkbox' type='checkbox' id='finance' name='dept' value='Finance' onChange={(e)=> onInputChange(e)}/>
                        <label className='text' for='finance'>Finance</label>
                        <input className='checkbox' type='checkbox' id='engineer' name='dept' value='Engineer' onChange={(e)=> onInputChange(e)}/>
                        <label className='text' for='engineer'>Engineer</label>
                        <input className='checkbox' type='checkbox' id='others' name='dept' value='Others' onChange={(e)=> onInputChange(e)}/>
                        <label className='text' for='others'>Others</label>
                    </div>
                </div>
                <div className='row-content'>
                    <label className='label text' for='salary'>Salary: </label>
                    <input className='input' type='text' name='salary'id='salary' onChange={(e)=> onInputChange(e)} />
                </div>
                <div className='row-content'>
                    <label className='label text' for='startDate'>Start Date</label>
                    <div>
                        <select id='day' name='day' onChange={(e)=> onInputChange(e)}>
                            <option value=''></option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                            <option value='18'>18</option>
                            <option value='19'>19</option>
                            <option value='20'>20</option>
                            <option value='21'>21</option>
                            <option value='22'>22</option>
                            <option value='23'>23</option>
                            <option value='24'>24</option>
                            <option value='25'>25</option>
                            <option value='26'>26</option>
                            <option value='27'>27</option>
                            <option value='28'>28</option>
                            <option value='29'>29</option>
                            <option value='30'>30</option>
                            <option value='31'>31</option>
                        </select>
                        <select id='month' name='month' onChange={(e)=> onInputChange(e)}>
                        <option value=''></option>
                            <option value='Jan'>January</option>
                            <option value='Feb'>February</option>
                            <option value='March'>March</option>
                            <option value='April'>April</option>
                            <option value='May'>May</option>
                            <option value='June'>June</option>
                            <option value='July'>July</option>
                            <option value='Aug'>August</option>
                            <option value='Sept'>September</option>
                            <option value='Oct'>October</option>
                            <option value='Nov'>November</option>
                            <option value='Dec'>December</option>
                        </select>
                        <select id='year' name='year' onChange={(e)=> onInputChange(e)}>
                        <option value=''></option>
                            <option value='2020'>2020</option>
                            <option value='2019'>2019</option>
                            <option value='2018'>2018</option>
                            <option value='2017'>2017</option>
                            <option value='2016'>2016</option>
                        </select>
                    </div>
                </div>
                <div className='row-content'>
                    <label className='label text' for='notes'>Notes</label>
                    {/* <textarea id='notes' className='input' name='Notes' style='height:100px' /> */}
                    <textarea id='notes' className='input' name='note' onChange={(e)=> onInputChange(e)} />
                </div>
                <div className='buttonParent'>
                    <a href='abcd.com' className='resetButton button cancelButton'>Cancel</a>
                    <div className='submit-reset'>
                        <button type='submit' className='button submitButton' id='submitButton'  >Submit</button>
                        <button type='reset' className='resetButton button'>Reset</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form

// localStorage.setItem("Username",name)
// localStorage.setItem("photo",photo)
// localStorage.setItem("Gender",gender)
// localStorage.setItem("Department",dept)
// localStorage.setItem("Date",day+month+year)
// localStorage.setItem("Note",note)

  // const submitHandler = async (e) => { 
        //     e.preventDefault();            
        //     try {
        //       const config = {
        //         headers: {
        //           "Content-type": "application/json",
        //         },
        //       }
        //       setLoading(true)
        
        //       const { data } = await axios.post(
        //         '/api/users/login',{email, password,},
        //         config);
        //       console.log(data);
        //       localStorage.setItem("userInfo", JSON.stringify(data));
        //       setLoading(false);
        //     } catch (error) {
        //       setError(error.response.data.message);
        //       }

          // try {
        //     const config = {headers: {"Content-type": "application/json",},}
        //     // setLoading(true)    
        //     const { data } =  axios.post(
        //       'https://jsonplaceholder.typicode.com/posts',{name, photo,},config)
        //     .then( console.log(data))
        //     localStorage.setItem("empInfo", JSON.stringify(data));
        //     // setLoading(false);
        //   } catch (error) {

        //     // setError(error.response.data.message);
        //     }