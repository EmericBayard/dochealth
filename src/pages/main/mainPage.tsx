import React from 'react';
import logo from '../../assets/img/logo.svg';
import '../../core-ui/MainPage.css';
import Welcome from '../../components/Welcome/Welcome';
import WorkContent from '../../components/WorkContent/WorkContent';
import Aboutme from '../../components/Aboutme/Aboutme';

function MainPage() {
  return (
    <div className="MainPage">
        <Welcome />
        <WorkContent />
        <Aboutme />
    </div>
  );
}

export default MainPage;
