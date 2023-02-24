import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Employees from './Components/Employees'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
import EmployeeForm from './Components/EmployeeForm';
import DeleteEmployee from './Components/DeleteEmployee';
import EmployeeDetails from './Components/EmployeeDetails';


const App = () => {
  return (
    <>
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/services" component={Services} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/employees" component={Employees} />
			<Route exact path="/search" component={EmployeeDetails} />
			<Route exact path="/create" component={EmployeeForm}/>
			<Route exact path="/delete" component={DeleteEmployee} />
			<Redirect to="/" />
		</Switch>
		
    </>
  )
}

export default App
