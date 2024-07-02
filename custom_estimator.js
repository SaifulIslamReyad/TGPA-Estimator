let subjectCount = 0;

function addSubjectField() {
    subjectCount++;
    const form = document.getElementById('customCgpaForm');
    const calculateButton = document.getElementById('customCalcu');
    const addSubButton = document.getElementById('addSub');

    const div = document.createElement('div');
    div.classList.add('subject');
    div.innerHTML = `
        <label for="customSubject${subjectCount}"></label>
        <input style="width:30%" type="text" placeholder="Subject name" id="customSubject${subjectCount}" required>
        <label for="customCredit${subjectCount}"></label>
        <input style="width:30%" type="number" step="0.01" placeholder="Credit" id="customCredit${subjectCount}" required>
        <label for="customMark${subjectCount}"></label>
        <input style="width:30%" type="number" placeholder="Estimated marks" id="customMark${subjectCount}" required>
    `;

    form.insertBefore(div, addSubButton); 
}



document.getElementById('customCalcu').addEventListener('click', function() {
    calculateCGPA();
});

function getGradePoint(mark) {
    if (mark >= 80) return 4.00;
    if (mark >= 75) return 3.75;
    if (mark >= 70) return 3.50;
    if (mark >= 65) return 3.25;
    if (mark >= 60) return 3.00;
    if (mark >= 55) return 2.75;
    if (mark >= 50) return 2.50;
    if (mark >= 45) return 2.25;
    if (mark >= 40) return 2.00;
    return 0.00;
}

function calculateCGPA() {
    let totalCredits = 0;
    let weightedSum = 0;

    const subjects = document.querySelectorAll('.subject');
    subjects.forEach((subject, index) => {
        const credit = parseFloat(document.getElementById(`customCredit${index + 1}`).value);
        const mark = parseFloat(document.getElementById(`customMark${index + 1}`).value);

        if (!isNaN(credit) && !isNaN(mark)) {
            const gradePoint = getGradePoint(mark);
            weightedSum += gradePoint * credit;
            totalCredits += credit;
        }
    });

    const tgpa = totalCredits > 0 ? weightedSum / totalCredits : 0;
    document.getElementById('result').innerText = `Estimated TGPA is ${tgpa.toFixed(2)}`;
}

