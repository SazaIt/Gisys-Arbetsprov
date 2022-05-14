interface Employee {
    id: Number;
    employee_name: String;
    employee_salary: Number;
    employee_age: Number;
    profile_image: String;
}

type GetEmployeeListResponse = {
    data: Employee[];
  };
  
  type GetEmployeeResponse = {
    data: Employee;
  };

  async function getEmployees() {
    try {

        const inputElement = <HTMLInputElement> document.getElementById("emp-id");
        let defaultUrl = "http://dummy.restapiexample.com/api/v1/employees";
        if(inputElement.value.length != 0){
            defaultUrl = "http://dummy.restapiexample.com/api/v1/employee/"+inputElement.value;
        }

        const response = await fetch(defaultUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
  
      let mbody: HTMLDivElement = <HTMLDivElement> document.getElementById("main-body");
      mbody.innerHTML = "";
      if (!response.ok || response.status != 200) {

        mbody.innerHTML = "<div class'error-number'>Error: "+ response.status+ "</div><div class='error-msg'>"+ response.statusText + "</div>"
        console.log(response);
        throw new Error(`Error! status: ${response.status}`);
    
      }
      
      let table: HTMLTableElement = <HTMLTableElement> document.getElementById("result-table");
      
      table.innerHTML ="";
  

      if(inputElement.value.length === 0){
        
        let thead = table.createTHead();
        let header_row = thead.insertRow();
        header_row.innerHTML = "<th width='10%'></th> <th width='5%'>ID</th><th width='40%'>Name</th><th width='15%'>Salary</th><th width='10%'>Age</th>";
        const result = (await response.json()) as GetEmployeeListResponse;
        if(result.data === null){
            mbody.innerHTML = "No record found";
            return;
        }
        let listEmployees = result.data;
        for (let element of listEmployees) {
            let row = table.insertRow();
    
            let cell_image = row.insertCell();
            let cell_id = row.insertCell();
            let cell_name = row.insertCell();
            let cell_salary = row.insertCell();
            let cell_age = row.insertCell();
    
            let img = document.createElement("img");
            if(element.profile_image.toString().length == 0)
                img.src = "noimg.png";
            else
                img.src = element.profile_image.toString();
    
            img.width = 80;
            img.height = 80;
            cell_image.appendChild(img);
            cell_id.appendChild(document.createTextNode(element.id.toString()));
            cell_name.appendChild(document.createTextNode(element.employee_name.toString()));
            cell_salary.appendChild(document.createTextNode(element.employee_salary.toString()));
            cell_age.appendChild(document.createTextNode(element.employee_age.toString()));
    
    
          }

    } else {
        const result = (await response.json()) as GetEmployeeResponse;
        if(result.data === null){
            mbody.innerHTML = "No record found";
            return;
        }

        let employee = result.data;
        let imageUrl = "noimg.png" ;
        if(employee.profile_image.length > 0){
            imageUrl = employee.profile_image.toString();
        }

        mbody.innerHTML = "<center><img src='"+ imageUrl+ "' width='150px' height='200px'></center>";

        let row_id = table.insertRow();
        row_id.innerHTML = "<td style=''50%''>ID:</td><td>"+ employee.id +"</td>";
        
        let row_name = table.insertRow();
        row_name.innerHTML = "<td>Name:</td><td>"+ employee.employee_name +"</td>";
        
        let row_salary = table.insertRow();
        row_salary.innerHTML = "<td>Salary:</td><td>"+ employee.employee_salary +"</td>";
        
        let row_age = table.insertRow();
        row_age.innerHTML = "<td>Age:</td><td>"+ employee.employee_age +"</td>";
        

    }
      
      return 0;
    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
  
  getEmployees();


