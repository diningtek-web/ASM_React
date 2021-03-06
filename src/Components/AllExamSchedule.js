import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllExams} from '../Redux/AllExams/AllExamsActions'

function AllExamSchedule() {
  // store data access start
const exams = useSelector(state =>state.AllExams)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [examsResult,setExamsResult] = useState([])
  const [allExamsInfo,setExamsInfo] = useState([])
  console.log("allExamsInfo",allExamsInfo)
  // component all states define End

   //hooks start
   // fetch allexams api hook start
   useEffect(() =>{
     dispatch(fetchAllExams())
   },[dispatch])
// fetch allexams api hook End

// add data of allexams api into constant,hook start
   useMemo(() =>{
     if(exams && exams.all_exams && exams.all_exams.result && exams.all_exams.success === true){
       setExamsResult(exams.all_exams.result)
     }
   },[exams])
// add data of allexams api into constant,hook End

// when examsResult change add data into classInfo,hook start
   useMemo(()=>{
     if(examsResult && examsResult.data){
           setExamsInfo(examsResult.data)
     }
   },[examsResult])
// when examsResult change add data into classInfo,hook End

   //hooks end
        return (
            <div className="col-8-xxxl col-12">
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>All Exam Schedule</h3>
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
                    <form className="mg-b-20">
                      <div className="row gutters-8">
                        <div className="col-lg-4 col-12 form-group">
                          <input type="text" placeholder="Search by Exam ..." className="form-control" />
                        </div>
                        <div className="col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by Subject ..." className="form-control" />
                        </div>
                        <div className="col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by Date ..." className="form-control" />
                        </div>
                        <div className="col-lg-2 col-12 form-group">
                          <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                        </div>
                      </div>
                    </form>
                    <div className="table-responsive">
                      <table className="table display data-table text-nowrap">
                        <thead>
                          <tr>
                            <th>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input checkAll" />
                                <label className="form-check-label">Exam Name</label>
                              </div>
                            </th>
                            <th>Subject</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th />
                          </tr>
                        </thead>
                        {exams.all_exams_loading === false ? allExamsInfo && allExamsInfo.length == 0 ? (
                        <tbody>
                         {allExamsInfo.map((item,index) =>(
                          <tr key={index}>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">{item.ExamName}</label>
                              </div>
                            </td>
                            <td>{item.SubjectName}</td>
                            <td>{item.ClassName}</td>
                            <td>{item.SectionName}</td>
                            <td>{item.ExamTime}</td>
                            <td>{item.ExamDate}</td>
                            <td>
                              <div className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                  <span className="flaticon-more-button-of-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                  <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                        </tbody>
                      ):
                      (<tr><td colspan="7"><h6 className="text-center">No Data Avaiable</h6></td></tr>)
                    :(<tr>
                      <td colspan="7">
                    <Loader
                    className = "student-detail-loader"
                  type="MutatingDots"
                  color="#fea801"
                  height={100}
                  width={100}

                    />
                    </td>
                    </tr>)}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
        );
}

export default AllExamSchedule;
