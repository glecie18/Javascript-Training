class Student {
    constructor(gpa, credits) {
        this.gpa = gpa;
        this.credits = credits;
        this._major = ''; 
    }

    stringGPA() {
        return this.gpa.toString();
    }

    get level() {
        if (this.credits > 90) {
            return 'Senior';
        } else if (this.credits >= 61) {
            return 'Junior';
        } else if (this.credits >= 31) {
            return 'Sophomore';
        } else {
            return 'Freshman';
        }
    }

    set major(newMajor) {
        if (this.level === 'Junior' || this.level === 'Senior') {
            this._major = newMajor; 
        } else {
            this._major = 'None'; 
        }
    }

    
    get major() {
        return this._major;
    }
}

const student = new Student(3.9, 120);
student.major = 'Computer Science'; 
console.log(student.major); 
console.log(student.level); 

const freshman = new Student(3.8, 25);
freshman.major = 'Biology'; 
console.log(freshman.major); 
console.log(freshman.level); 