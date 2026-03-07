// import {Tooltip} from './Tooltip.js';
import { DOMHelper } from '../Utility/DOMHepler.js';

export class ProjectItem {
    hasActiveTooltip=false;
  constructor(id,updateProjectListFunction,type) {
    this.id = id;
    this.updateProjectListHandler=updateProjectListFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
    this.connectDrag();
  }

  showMoreInfoHandler(){
    if(this.hasActiveTooltip){
        return;
    }
    const projectElement=document.getElementById(this.id);
    const tooltipText=projectElement.dataset.extraInfo;

    import('./Tooltip.js').then(module=>{
        const tooltip=new Tooltip(()=>{this.hasActiveTooltip=false;}, tooltipText, this.id);
        tooltip.show();
        this.hasActiveTooltip=true;
    });
  }

  connectDrag(){
    document.getElementById(this.id).addEventListener('dragstart',event=>{
      event.dataTransfer.setData('text/plain',this.id);
      event.dataTransfer.effectAllowed='move';
    });
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn=projectItemElement.querySelector('button:first-of-type');
    moreInfoBtn.addEventListener('click',this.showMoreInfoHandler.bind(this));
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn=DOMHelper.clearEventListener(switchBtn);
    switchBtn.textContent=type==='active' ? 'finished':'active';
    switchBtn.addEventListener('click',this.updateProjectListHandler.bind(null,this.id));
  }

  update(updateProjectFn,type){
    this.updateProjectListHandler=updateProjectFn;
    this.connectSwitchButton(type);
  }
}