document.getElementById('calcu').addEventListener('click', function() {
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
        const credit = parseFloat(subject.querySelector('.num').innerText);
        const mark = parseFloat(document.getElementById(`mark${index + 1}`).value);
        const gradePoint = getGradePoint(mark);
        weightedSum += gradePoint * credit;
        totalCredits += credit;
    });

    const cgpa = weightedSum / totalCredits;
    document.getElementById('result').innerText = `Estimated TGPA is ${cgpa.toFixed(2)}`;
}
