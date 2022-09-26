import React, { Component } from 'react'
import './Home.css'
import axios from 'axios'
import deleteIcon from './delete.png'
import editIcon from './edit.png'
import addIcon from './add.png'
import { Link, Route } from 'react-router-dom';
import icon from './add.png'
import photo1 from './photo1.png';
import photo2 from './photo2.png';
import photo3 from './photo3.png';
import photo4 from './photo4.png';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      search:''
    }
  }


  getData() {
    axios.get('http://localhost:9090/emppayrollreact/read').then((response) => {
      console.log(response.data);
      var data = response.data
      this.setState({ data: data })


    })
  }

  componentDidMount() {
    this.getData()
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
};

  handleDelete = (id) => {
    axios.delete('http://localhost:9090/emppayrollreact/delete/' + id).then(res => {
      this.setState({ data: this.state.data.filter(emp => emp.empId !== emp.empId) })
      this.getData();
    });
  }
  handleSearch = (e) => {
    axios.get('http://localhost:9090/emppayrollreact/getbyname/Dan1') 
    .then(result => result.data)
    .then(result =>{console.log(result); this.setState({ data : result }) } )

  }

  //  this.getData()


  // editEmp=(id)=>{
  //   axios.update('http://localhost:9090/emppayrollreact/read').then( res =>{
  //     this.setState({data:this.state.data.filter(emp => emp.empId == id)})});
  //     console.log(this.state.data)
  // }

  getImg = (p) => {
    if (p == 'photo1') {
      return (`${photo1}`)
    }
    if (p == 'photo2') {
      return (`${photo2}`)
    }
    if (p == 'photo3') {
      return (`${photo3}`)
    }
    if (p == 'photo4') {
      return (`${photo4}`)
    }
  };

  // for (let index = 0; index < array.length; index++) {

  //   const element = array[index];

  // }
  render() {
    return (
      <body>
        <header class="header-content header">
          <div className='logo-content'>
            <div className='left'>
              <img className='logo' src={icon} alt='abc' />
              <span className='emp-text'>EMPLOYEE</ span>
              <span className='emp-text emp-payroll'>PAYROLL</span>
            </div>
          </div>
        </header>
        <div className='main-content'>
          <div className='header-content'>
            <div className='emp-detail-text'>
              Employee Details <div className='emp-count'>10</div>
            </div>
            <div className='searchdiv'>
              <input className='input' type='text' id='content' name='content' placeholder='Search by name' onChange={this.onInputChange} />
              <button className='searchbtn' onClick={this.handleSearch}> Search </button> &nbsp;&nbsp;
            </div>

            <a href='/form' className='add-button'>
              <img class='add-img' src={addIcon} alt='icon' /> &nbsp;&nbsp;Add User
            </a>
          </div>
        </div>
        <table id='display' className='table'>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
          </tr>
          {/* allEmpData.map() */}

          {this.state.data.map(d => (
            <tr>
              <td key={d.empId}><img src={this.getImg(d.photo)} className='profile' alt='Nf' /></td>
              <td key={d.empId}>{d.name}</td>
              <td key={d.empId}>{d.gender}</td>
              <td><div className='dept-label' key={d.empId}>{d.dept}</div></td>
              <td key={d.empId}>{d.salary} </td>
              <td>{d.day}&nbsp;{d.month}&nbsp;{d.year}</td>
              <td>
                <img src={deleteIcon} onClick={() => this.handleDelete(d.empId)} alt='delete' />
                <Link to={`/edituser/${d.empId}`}><img src={editIcon} onClick={() => console.log(d.empId)} alt='edit' /></Link>
              </td>
            </tr>
          ))}
        </table>
      </body>
    )
  }
}

export default Home