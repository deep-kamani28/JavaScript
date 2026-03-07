import {ProjectList} from './App/ProjectList.js';
import * as A from '../scripts/Utility/Analytics.js';

globalThis.Max_Value='MAX';

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");

    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList),
    );

    finishedProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList),
    );

    document.getElementById('stop-analytics-btn').addEventListener('click',()=>{
      clearInterval(A.intervalId);
    });
  }

  // static startAnalytics(){
  //   const analyticsScript=document.createElement('script');
  //   analyticsScript.src='assets/scripts/Utility/Analytics.js';
  //   analyticsScript.defer=true;
  //   document.head.append(analyticsScript);
  // }
}

App.init();
