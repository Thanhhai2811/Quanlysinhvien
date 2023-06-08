// localStorage.setItem('students', 'nguyen van b');
// console.log(localStorage.getItem('students')) 
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/; 
  return re.test(email);
}


function save() {
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let addrees = document.getElementById('address').value;

    let gender = '';
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('famale').checked) {
        gender = document.getElementById('famale').value;
    }

  if (_.isEmpty(fullname)) {
    fullname = '';
        document.getElementById('fullname-error').innerHTML = 'Vui lòng nhập họ và tên';
  } else if(fullname.trim().length <= 2) {
    fullname = '';
    document.getElementById('fullname-error').innerHTML = ' không được nhỏ hơn 2 kí tự';
  } else if(fullname.trim().length > 50) {
    fullname = '';
    document.getElementById('fullname-error').innerHTML = ' không được lớn hơn 50 kí tự';
  
   } else {
    document.getElementById('fullname-error').innerHTML = '';
  }

 if (_.isEmpty(email)) {
  email = '';
  document.getElementById('email-error').innerHTML = 'Vui lòng xác nhập email của bạn';

 } else if (!validateEmail(email)) {
  email = '';
  document.getElementById('email-error').innerHTML = 'email không đúng định dạng';

 } else {
  document.getElementById('email-error').innerHTML = '';
 }

 if (_.isEmpty(phone)) {
  phone = '';
  document.getElementById('phone-error').innerHTML = 'Nhập số điện thoại';

 } else if(phone.trim().length > 10) {
  email = '';
  document.getElementById('phone-error').innerHTML = 'Số điện thoại không đúng';
 } else {
  document.getElementById('phone-error').innerHTML = '';
 } 

 if (_.isEmpty(addrees)) {
 addrees = '';
  document.getElementById('address-error').innerHTML = 'Vui lòng nhập địa chỉ ';
 } else {
  document.getElementById('address-error').innerHTML = '';
 }

 if (_.isEmpty(gender)) {
  gender = '';
  document.getElementById('gender-error').innerHTML = 'Vui lòng nhập giới tính'
 } else {
  document.getElementById('gender-error').innerHTML = '';
 }
 if (fullname && email && phone && addrees && gender) {

  // Lưu vào trong danh sách sinh viên
  let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [] ;

 students.push({
  fullname : fullname,
  email : email,
  phone : phone,
  addrees : addrees,
  gender : gender,
    });

    localStorage.setItem('students', JSON.stringify(students));

    this.renderListStudent();
  }

}


function renderListStudent()
{
  let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [] ;
   
    if (students.length === 0) {
      document.getElementById('list-student').style.display = 'none';
      return false; 
    } 

    document.getElementById('list-student').style.display = 'block';

  let tableContent = ` <tr>
  <td width='20'>#</td>
  <td>Họ và tên</td>
  <td>Email</td>
  <td>Điện thoại</td>
  <td>Giới tính</td>
  <td>Địa chỉ</td>
  <td>Hành động</td></tr>`;

  students.forEach((student, index) => {
    let studentsId = index;
    let genderLabel = parseInt (student.gender) === 1 ? 'nam' : 'Nữ';
    index++;
    tableContent += ` <tr>
    <td>${index}</td>
    <td>${student.fullname}</td>
    <td>${student.email}</td>
    <td>${student.phone}</td>
    <td>${genderLabel}</td>
    <td>${student.addrees}</td>
    <td>
    <a href='#'>Sửa</a> | <a href='#' onclick='deleteStudent(${studentsId})'>Xóa</a>
    </td>
  </tr>`;
  })
  
    document.getElementById('grid-students').innerHTML = tableContent;
}


function deleteStudent(id) {
  let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [] ;
  students.splice(id, 1);           //  Hàm .splice dùng để xóa
  localStorage.setItem('students', JSON.stringify(students));
  renderListStudent();
}



function editStudent() {
  
}







