import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllAssignClasses
} from '../Redux/AllAssignClasses/AllAssignClassActions'

function AllParents() {
  const assignClasses = useSelector(state =>state.AllAssignClass)
  console.log("rooms",assignClasses);
  const dispatch = useDispatch()
    const [assignClassResult,setAssignClassResult] = useState([])
    console.log("assignClassResult",assignClassResult);
    const [allAssignClassInfo,setAllAssignClassInfo] = useState([])
    console.log("allAssignClassInfo",allAssignClassInfo);
    const [activestate,setActivestate] = useState('')
    useEffect(() =>{
      dispatch(fetchAllAssignClasses())
    },[dispatch])

    useMemo(()=>{
      if(assignClasses && assignClasses.all_assign_classes && assignClasses.all_assign_classes.result){
        setAssignClassResult(assignClasses.all_assign_classes.result)
      }
    },[assignClasses.all_assign_classes.result])

    useMemo(()=>{
      if(assignClassResult && assignClassResult.data){
            setAllAssignClassInfo(assignClassResult.data)
      }
    },[assignClassResult])


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
              <h3>Assign Class</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>All Assign Classes</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Teacher Table Area Start Here */}
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>All Assign Classes Data</h3>
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
                    <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                      <input type="text" placeholder="Search by ID ..." className="form-control" />
                    </div>
                    <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                      <input type="text" placeholder="Search by Name ..." className="form-control" />
                    </div>
                    <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                      <input type="text" placeholder="Search by Phone ..." className="form-control" />
                    </div>
                    <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
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
                            <label className="form-check-label">ID</label>
                          </div>
                        </th>
                        <th>ClassName</th>
                        <th>Total Section</th>
                        <th>Maximum Students</th>
                        <th>Medium Name</th>
                        <th>Section Name</th>
                        <th>Teacher Name</th>
                        <th>Profession Name</th>
                        <th>IsIncharge</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                    {allAssignClassInfo ? allAssignClassInfo.map((item,index) =>(
                      <tr key={index}>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#{item.id}</label>
                          </div>
                        </td>
                        <td>{item.ClassName}</td>
                        <td>{item.TotalSection}</td>
                        <td>{item.StudentLimitInClass}</td>
                        <td>{item.MediumName}</td>
                        <td>{item.SectionName}</td>
                        <td>{item.TeacherName}</td>
                        <td>{item.ProfessionName}</td>
                        <td>{item.IsIncharge}</td>
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
                    )):(
                      <h6>No data available in table</h6>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Teacher Table Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default AllParents;
