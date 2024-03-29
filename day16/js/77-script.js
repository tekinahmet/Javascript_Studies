import { students } from "../../day15/data/students.js";

document.querySelector("#btnShow").addEventListener("click", () => {
	
  let pointEl = document.querySelectorAll(
    "#tblStudents  tbody tr td:nth-child(3)"
  );
  //console.log(pointEl)

  pointEl.forEach((point, index) => {
	 
    let pointText = point.innerText;
	
    if (pointText < 45) {
		
      /* document
				.querySelector(`#tblStudents  tbody tr:nth-child(${index + 1})`)
				.classList.add("table-danger"); */
      point.closest("tr").classList.add("table-danger");
    } else if (pointText < 70) {
      point.closest("tr").classList.add("table-warning");
    } else {
      /*  document
				.querySelector(`#tblStudents  tbody tr:nth-child(${index + 1})`)
				.classList.add("table-success"); */

      point.closest("tr").classList.add("table-success");
    }
	
  });
  alert("red => 0 - 45, yellow => 45 - 70, green => 70 - 100");
});

const loadData = () => {
  let listEl = "";
  students.forEach((student, index) => {
    listEl += `    <tr>
    <td>${index + 1}</td>
    <td>${student.name}</td>
    <td>${student.point}</td>
    <td><button class="btn btn-danger" id="btnDelete" >🗑️</button> </td>
</tr>`;
  });

  document.querySelector("#tblStudents tbody").innerHTML = listEl;
};

const deleteStudents = () => {
  document.querySelectorAll("#btnDelete").forEach((item) => {
    item.addEventListener("click", (e) => {
      let name = e.target.closest("tr").children[1].innerText;
      //console.log(name)

      const result = confirm(`Are you sure you want to delete ${name}?`);

      //TODO
      /* 	if(result){

		}
 */
    });
  });
};

loadData();
deleteStudents();
