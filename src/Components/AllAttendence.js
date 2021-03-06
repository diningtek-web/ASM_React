import React, {useState,useMemo,useEffect}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import StudentAttendenceFilter from './StudentAttendenceFilter';
import Footer from './Footer';
import { fetchAllStudents } from '../Redux/AllStudents/AllStudentsActions';
import { fetchAllAllAttendence } from '../Redux/AllAttendence/AllAttendenceActions'

function AllAttendence(){
  const students = useSelector(state =>state.AllStudents)
  const all_attendence_data = useSelector(state =>state.AllAttendence)

  const dispatch = useDispatch()  // for accessing the redux function
  const [activestate,setActivestate] = useState('')
  const [studentAttendenceFilterInput,setStudentAttendenceFilterInput] = useState({role:'1',
                                                                                  classid:'',
                                                                                  sectionid:'',
                                                                                    studentId:'',
                                                                                    month:'',
                                                                                    date:''
                                                                                    })

console.log("studentAttendenceFilterInput",studentAttendenceFilterInput)
const [studentResult,setStudentResult] = useState([])
console.log("studentResult--",studentResult);
const [allStudentsInfo,setAllStudentsInfo] = useState([])
const [attendenceResult,setAttendenceResult] = useState([])
const [day,setDay] = useState(null)
console.log("attendenceResult--",attendenceResult);
// if(attendenceResult[0] && attendenceResult[0].Month){
//   console.log("attendenceResult--",(attendenceResult[0].Date).toLocaleString('default', { month: 'long' }));
// }

useMemo(() =>{
    dispatch(fetchAllStudents(studentAttendenceFilterInput))
    const all_attendence_info = {
      role:'2'
    }
    dispatch(fetchAllAllAttendence(all_attendence_info))
},[studentAttendenceFilterInput])
useMemo(()=>{
  if(students && students.all_students && students.all_students.result){
    setStudentResult(students.all_students.result)
  }
},[students.all_students.result])

useMemo(()=>{
  if(studentResult && studentResult.data){
        setAllStudentsInfo(studentResult.data)
  }
},[studentResult])

useMemo(()=>{
  if(all_attendence_data && all_attendence_data.all_attendence && all_attendence_data.all_attendence.result && all_attendence_data.all_attendence.success === true){
    setAttendenceResult(all_attendence_data.all_attendence.result)
  }
},[all_attendence_data.all_attendence.result])

useMemo(() =>{
  if(attendenceResult && attendenceResult[0] && attendenceResult[0].Month){
    if(attendenceResult[0].Month == "01" ){
      setDay("January")
    }
    else if (attendenceResult[0].Month == "02") {
      setDay("February")
    }
    else if (attendenceResult[0].Month == "03") {
      setDay("March")
    }
    else if (attendenceResult[0].Month == "04") {
      setDay("April")
    }
    else if (attendenceResult[0].Month == "05") {
      setDay("May")
    }
    else if (attendenceResult[0].Month == "06") {
      setDay("June")
    }
    else if (attendenceResult[0].Month == "07") {
      setDay("July")
    }
    else if (attendenceResult[0].Month == "08") {
      setDay("August")
    }
    else if (attendenceResult[0].Month == "09") {
      setDay("September")
    }
    else if (attendenceResult[0].Month == "10") {
      setDay("October")
    }
    else if (attendenceResult[0].Month == "11") {
      setDay("November")
    }
    else if (attendenceResult[0].Month == "12") {
      setDay("December")
    }
  }
},[attendenceResult])
  const callbackFunctionInput = (childInputData) =>{
    console.log("childInputData",childInputData);
    setStudentAttendenceFilterInput({
      role:childInputData.role,
      classId:childInputData.classId,
      sectionId:childInputData.sectionId,
        studentId:childInputData.studentId,
        month:childInputData.month,
        date:childInputData.date

    })
  }
  const callbackFunction = (childData) => {
    setActivestate(childData)
  }
        return (
            <div id="wrapper" className={activestate ? 'wrapper bg-ash sidebar-collapsed': 'wrapper bg-ash'}>
            {/* Header Menu Area Start Here */}
            <Header parentCallback = {() =>callbackFunction()}/>
            {/* Header Menu Area End Here */}
            {/* Page Area Start Here */}
            <div className="dashboard-page-one">
              {/* Sidebar Area Start Here */}
             <Sidebar />
              {/* Sidebar Area End Here */}
              <div className="dashboard-content-one">
                {/* Breadcubs Area Start Here */}
                <div className="breadcrumbs-area">
                  <h3>Student Attendence</h3>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Attendence</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                <div className="row">
                  {/* Student Attendence Search Area Start Here */}
                  <StudentAttendenceFilter parentCallbackInput = {callbackFunctionInput} />
                  {/* Student Attendence Search Area End Here */}
                  {/* Student Attendence Area Start Here */}
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Attendence Sheet of All Students {day !=null && attendenceResult && attendenceResult[0] && attendenceResult[0].Year ? ("("+day+ " , " +attendenceResult[0].Year+")") : null}</h3>
                          </div>
                          <div className="dropdown">
                            <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">...</a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                              <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                              <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive">
                          <table className="table bs-table table-striped table-bordered text-nowrap">
                            <thead>
                              <tr>
                                <th className="text-left">Students</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>11</th>
                                <th>12</th>
                                <th>13</th>
                                <th>14</th>
                                <th>15</th>
                                <th>16</th>
                                <th>17</th>
                                <th>18</th>
                                <th>19</th>
                                <th>20</th>
                                <th>21</th>
                                <th>22</th>
                                <th>23</th>
                                <th>24</th>
                                <th>25</th>
                                <th>26</th>
                                <th>27</th>
                                <th>28</th>
                                <th>29</th>
                                <th>30</th>
                                <th>31</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-left">Michele Johnson</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Richi Akon</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Amanda Kherr</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Michele Johnson</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Richi Akon</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Amanda Kherr</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Michele Johnson</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Richi Akon</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Amanda Kherr</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Michele Johnson</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Richi Akon</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Amanda Kherr</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Michele Johnson</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Richi Akon</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Amanda Kherr</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Michele Johnson</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Richi Akon</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="text-left">Amanda Kherr</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-times text-danger" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td><i className="fas fa-check text-success" /></td>
                                <td>-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Student Attendence Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );
}

export default AllAttendence;
