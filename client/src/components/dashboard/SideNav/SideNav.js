import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom"; // Link
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

import "./SideNav.scss";

class SideNav extends Component {
  onLogoutClick = e => {
    this.props.logoutUser(this.props.history);
    window.location.href = "/";
  };

  // Hide Side Nav
  toggleMenu = e => {
    let sideNav = document.querySelector(".side");
    sideNav.classList.add("invisibile");

    let hamburger = document.querySelector(".hamburger-top-menu");
    hamburger.classList.add("hamburger-visible");

    let rightSide = document.querySelector(".right");
    rightSide.classList.add("no-side");

    let rightSideRight = document.querySelector(".right-top");
    rightSideRight.classList.add("right-top-visibile");
  };

  render() {
    //const { projects } = this.props.projects;
    //let projectData = projects.sort().map(project => (
    //  <li className="project-listing" key={project._id}>
    //    <Link to={`/projects/${project._id}`}>{project.name}</Link>
    //  </li>
    //));

    return (
      <nav className="side">
        <ul className="top">
          <li>
            <i
              onClick={this.toggleMenu}
              className="material-icons hamburger-side-menu"
            >
              menu
            </i>
          </li>
          <div className="side-logo"></div>
          <NavLink exact activeClassName="active-page" to="/dashboard">
            <li>
              <i className="side-logo__menu4 icon"></i>Операции
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/about">
            <li>
              <i className="side-logo__main icon"></i>О нас
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/account">
            <li>
              <i className="side-logo__account icon"></i>Учетная запись
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/sales">
            <li>
              <i className="side-logo__menu3 icon"></i>Cкидки
            </li>
          </NavLink>
          {/*
          <NavLink exact activeClassName="active-page" to="/operations">
            <li>
              <i className="side-logo__menu4 icon"></i>Операции
            </li>
          </NavLink>
          */}
          <NavLink exact activeClassName="active-page" to="/price-list">
            <li>
              <i className="side-logo__menu5 icon"></i>Прайс-Лист
            </li>
          </NavLink>
          <NavLink exact activeClassName="active-page" to="/control">
            <li>
              <i className="side-logo__menu6 icon"></i>Управление
            </li>
          </NavLink>
          {/*
          <NavLink exact activeClassName="active-page" to="/tasks">
            <li>
              <i className="material-icons icon">check_circle</i>My Tasks
            </li>
          </NavLink>
          */}
          {/*
          <div className="sign-out" onClick={this.onLogoutClick}>
            <li>
              <i className="material-icons icon">arrow_back</i>Sign Out
            </li>
          </div>
          */}
        </ul>
        {/*
        <ul className="bottom">
          <li>
            <h4 className="side-projects-header">Операции</h4>
          </li>
          <div className="project-listings">{projectData}</div>
        </ul>
        */}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(withRouter(SideNav))
);
