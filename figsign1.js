function validateInputs() {
    const sub1Input = document.getElementById('sub1');
    const sub2Input = document.getElementById('sub2');
    const sub3Input = document.getElementById('sub3');
    const sub4Input = document.getElementById('sub4');
    const sub5Input = document.getElementById('sub5');
    const sub6Input=document.getElementById('sub6');

    const sub1Value = sub1Input.value.split('/');
    const sub2Value = sub2Input.value.split('/');
    const sub3Value = sub3Input.value.split('/');
    const sub4Value = sub4Input.value.split('/');
    const sub5Value = sub5Input.value.split('/');
    const sub6Value = sub5Input.value.split('/');

    const sub1Attended = parseInt(sub1Value[0]);
    const sub1Total = parseInt(sub1Value[1]);

    const sub2Attended = parseInt(sub2Value[0]);
    const sub2Total = parseInt(sub2Value[1]);

    const sub3Attended = parseInt(sub3Value[0]);
    const sub3Total = parseInt(sub3Value[1]);

    const sub4Attended = parseInt(sub4Value[0]);
    const sub4Total = parseInt(sub4Value[1]);

    const sub5Attended = parseInt(sub5Value[0]);
    const sub5Total = parseInt(sub5Value[1]);

    const sub6Attended = parseInt(sub6Value[0]);
    const sub6Total = parseInt(sub6Value[1]);

    if (sub1Attended > sub1Total || sub2Attended > sub2Total || sub3Attended > sub3Total || sub4Attended > sub4Total || sub5Attended > sub5Total || sub6Attended > sub6Total ) {
      alert('The number of attended classes cannot be greater than the total classes.');
      return false;
    }

    return true;
  }

  document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateInputs()) {
      event.preventDefault();
    }
  });