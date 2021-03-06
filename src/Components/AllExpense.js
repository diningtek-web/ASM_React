import React, {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function AllExpense(){
  const [activestate,setActivestate] = useState('')
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
              <h3>Accounts</h3>
              <ul>
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>All Expense</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Expanse Table Area Start Here */}
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>All Expenses</h3>
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
                      <input type="text" placeholder="Search by Phone" className="form-control" />
                    </div>
                    <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                      <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                    </div>
                  </div>
                </form>
                <div className="table-responsive">
                  <table className="table data-table text-nowrap">
                    <thead>
                      <tr>
                        <th>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input checkAll" />
                            <label className="form-check-label">ID</label>
                          </div>
                        </th>
                        <th>Name</th>
                        <th>Expense Type</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Date</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0021</label>
                          </div>
                        </td>
                        <td>Mark Willy</td>
                        <td>Salary</td>
                        <td>$2,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0022</label>
                          </div>
                        </td>
                        <td>Jesseual</td>
                        <td>Transport</td>
                        <td>$5,0000.00</td>
                        <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0023</label>
                          </div>
                        </td>
                        <td>Maria Jones</td>
                        <td>Utilities</td>
                        <td>$1,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0024</label>
                          </div>
                        </td>
                        <td>Mark Willy</td>
                        <td>Salary</td>
                        <td>$2,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0025</label>
                          </div>
                        </td>
                        <td>Jesseual</td>
                        <td>Transport</td>
                        <td>$5,0000.00</td>
                        <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0026</label>
                          </div>
                        </td>
                        <td>Maria Jones</td>
                        <td>Utilities</td>
                        <td>$1,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0027</label>
                          </div>
                        </td>
                        <td>Mark Willy</td>
                        <td>Salary</td>
                        <td>$2,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0028</label>
                          </div>
                        </td>
                        <td>Jesseual</td>
                        <td>Transport</td>
                        <td>$5,0000.00</td>
                        <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0029</label>
                          </div>
                        </td>
                        <td>Maria Jones</td>
                        <td>Utilities</td>
                        <td>$1,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0030</label>
                          </div>
                        </td>
                        <td>Mark Willy</td>
                        <td>Salary</td>
                        <td>$2,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0031</label>
                          </div>
                        </td>
                        <td>Jesseual</td>
                        <td>Transport</td>
                        <td>$5,0000.00</td>
                        <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0032</label>
                          </div>
                        </td>
                        <td>Mark Willy</td>
                        <td>Salary</td>
                        <td>$2,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0033</label>
                          </div>
                        </td>
                        <td>Jesseual</td>
                        <td>Transport</td>
                        <td>$5,0000.00</td>
                        <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0034</label>
                          </div>
                        </td>
                        <td>Mark Willy</td>
                        <td>Salary</td>
                        <td>$2,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0035</label>
                          </div>
                        </td>
                        <td>Jesseual</td>
                        <td>Transport</td>
                        <td>$5,0000.00</td>
                        <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0036</label>
                          </div>
                        </td>
                        <td>Mark Willy</td>
                        <td>Salary</td>
                        <td>$2,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0037</label>
                          </div>
                        </td>
                        <td>Jesseual</td>
                        <td>Transport</td>
                        <td>$5,0000.00</td>
                        <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0038</label>
                          </div>
                        </td>
                        <td>Mark Willy</td>
                        <td>Salary</td>
                        <td>$2,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0039</label>
                          </div>
                        </td>
                        <td>Jesseual</td>
                        <td>Transport</td>
                        <td>$5,0000.00</td>
                        <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0040</label>
                          </div>
                        </td>
                        <td>Mark Willy</td>
                        <td>Salary</td>
                        <td>$2,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0041</label>
                          </div>
                        </td>
                        <td>Jesseual</td>
                        <td>Transport</td>
                        <td>$5,0000.00</td>
                        <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0042</label>
                          </div>
                        </td>
                        <td>Mark Willy</td>
                        <td>Salary</td>
                        <td>$2,0000.00</td>
                        <td className="badge badge-pill badge-success d-block mg-t-8">Paid</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0043</label>
                          </div>
                        </td>
                        <td>Jesseual</td>
                        <td>Transport</td>
                        <td>$5,0000.00</td>
                        <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                      <tr>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#0044</label>
                          </div>
                        </td>
                        <td>Jesseual</td>
                        <td>Transport</td>
                        <td>$5,0000.00</td>
                        <td className="badge badge-pill badge-danger d-block mg-t-8">Due</td>
                        <td>+ 123 9988568</td>
                        <td>kazifahim93@gmail.com</td>
                        <td>02/02/2019</td>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Expanse Table Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default AllExpense;
