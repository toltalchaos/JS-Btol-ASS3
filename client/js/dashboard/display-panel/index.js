// import the Event Manager Dispatch Event for update create read etc.
import managerView from "../widgets/manager";
import employeeView from "../widgets/employee"

// buttons scripted for events.
// create manager obj.
// create employee obj.
// create a header obj as well of the name display.

const DisplayPanel = () => {
  const view = document.querySelector("#panel");
  // display panel Snippet #2
  //capture data
  const viewHeading = document.querySelector('#widget-heading');

  //any widget containers init avlue
  let managers = null;
  let employees = null;
  

  const init = (data) => {
    viewHeading.textContent = `${data[0].department} department`
    managers =  view.appendChild(managerView(data))
    employees = view.appendChild(employeeView(data))
  };

  const updateDisplay = (data) => {
    // display panel Snippet #3
    //strip display and update
    view.removeChild(managers)
    view.removeChild(employees)
    //call init to update
      init(data)


  };

  return { updateDisplay, view, init };
};

export default DisplayPanel;
