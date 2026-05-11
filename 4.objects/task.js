class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  setSubject(subjectName) {
    this.subject = subjectName;
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0;
    }
    const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }
    const sumOfAverages = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);
    return sumOfAverages / subjects.length;
  }

  exclude(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}
