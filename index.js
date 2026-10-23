const readline = require("node:readline");
const process = require("node:process");

const createReadline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pageMain = "HOMEPAGE";
let pageOne = "COURSES";
let pageTwo = "PAYMENT";
let pageThree = "COURSE FEES";
let pageBack = "BACK";
let pageExit = "EXIT";
let pageNext = "NEXT PAGE";


/*
*********************************************************
>>>>>>>>>>>>>>>>> COURSE ENROLLMENT DB <<<<<<<<<<<<<<<<<<
*********************************************************
The role of these databases is to store data of the
courses, course fees, and student information from every
courses.

Legends:

classesDetail   - contains all courses
paymentDetail   - contains all course fees
classDatabase   - contains all course's enrolled students
*/

const classesDetail = [
    { classId: "PM-101", classTitle: "Become a Pokemon Master"},
    { classId: "CK-250", classTitle: "The History of Captain Kirk"},
    { classId: "DC-130", classTitle: "JavaTheHut Studio Dance Class 130"}
]

const paymentDetail = [
    { classId: "PM-101", subjectFee: 15000},
    { classId: "CK-250", subjectFee: 200},
    { classId: "DC-130", subjectFee: 1900},
]

const classDatabase = {
    pokemonClass: [
        { studentId: 1, name: "Ash", age: 27 },
        { studentId: 2, name: "Gary", age: 33 },
        { studentId: 3, name: "Oak", age: 35 },
        { studentId: 4, name: "Dawn", age: 32 },
        { studentId: 5, name: "Jesse", age: 22 },
        { studentId: 6, name: "James", age: 24 }
    ],
    historyClass: [
        { studentId: 1, name: "Jay", age: 44 },
        { studentId: 2, name: "Bae", age: 23 },
        { studentId: 3, name: "Grae", age: 41 }
    ],
    danceClass: [
        { studentId: 1, name: "Wren", age: 29 },
        { studentId: 2, name: "Crisologo", age: 25 },
        { studentId: 3, name: "Jaba", age: 19 },
        { studentId: 4, name: "Wokiz", age: 28 }
    ]
}


/*
*********************************************************
>>>>>>>>>>>>>>>>> USER INTERFACE PAGES <<<<<<<<<<<<<<<<<<
*********************************************************
The role of these variables is to simulate different 
webpages in a console application.

Legends:

homePage                - Main Page of the system

classPage               - Page of list of classes available
pokemonClassPage        - Pokemon course description page interface
historyClassPage        - History course description page interface
danceClassPage          - Dance course description page interface

paymentPage             - Page overview all courses and their fees
formPokemonPaymentPage  - Pokemon course payment page interface
formHistoryPaymentPage  - History course payment page interface
formDancePaymentPage    - Dance course payment page interface

formPokemonCourseFeePage - Page overview of Pokemon course fee
formHistoryCourseFeePage - Page overview of History course fee
formDanceCourseFeePage   - Page overview of Dance course fee
*/


const homePage = `
*********************************************************
>>>>>>>>>>>>>>> COURSE ENROLLMENT SYSTEM <<<<<<<<<<<<<<<<
*********************************************************

                        WELCOME!

To navigate, please enter the number corresponding to the
page you wish to access.

[1] ${pageOne}
[2] ${pageThree}
[3] ${pageExit}
`;

//CLASS PAGE INTERFACE
const classPage = `
*********************************************************
>>>>>>>>>>>>>>> COURSE ENROLLMENT SYSTEM <<<<<<<<<<<<<<<<
*********************************************************

                        CLASSES

The following classes are currently available for
enrollment this semester:

[1] ${classesDetail[0].classId} - ${classesDetail[0].classTitle}
[2] ${classesDetail[1].classId} - ${classesDetail[1].classTitle}
[3] ${classesDetail[2].classId} - ${classesDetail[2].classTitle}

[4] ${pageBack}
[5] ${pageExit}

If you want to enroll, kindly enter the
number of the class you wish to enroll.
`;

//Pokemon Course Description
const pokemonClassPage = `
*********************************************************
>>>>>>>>>>>>>>> COURSE ENROLLMENT SYSTEM <<<<<<<<<<<<<<<<
*********************************************************

                    COURSE DESCRIPTION

[o] ${classesDetail[0].classId} - ${classesDetail[0].classTitle}

Course Descrption: Learn the art of Pokémon training,
from catching and battling strategies to team building.
Perfect for aspiring trainers looking to become Champions!

[1] ${pageNext}
[2] ${pageBack}
[3] ${pageExit}

If you want to enroll, proceed to next page.
`;

//History Course Description
const historyClassPage = `
*********************************************************
>>>>>>>>>>>>>>> COURSE ENROLLMENT SYSTEM <<<<<<<<<<<<<<<<
*********************************************************

                    COURSE DESCRIPTION

[o] ${classesDetail[1].classId} - ${classesDetail[1].classTitle}

Course Descrption: Explore the legacy of Starfleet's most
iconic Captain! From his early missions aboard the USS
enterprise to his lasting influence on space exploration.

[1] ${pageNext}
[2] ${pageBack}
[3] ${pageExit}

If you want to enroll, proceed to next page.
`;

//Dance Course Description
const danceClassPage = `
*********************************************************
>>>>>>>>>>>>>>> COURSE ENROLLMENT SYSTEM <<<<<<<<<<<<<<<<
*********************************************************

                    COURSE DESCRIPTION

[o] ${classesDetail[2].classId} - ${classesDetail[2].classTitle}

Course Descrption: An introductory dance course of
JavaTheHut signature moves. It covers JavaTheHut's basics
foundational moves, rythm, and choreo.

[1] ${pageNext}
[2] ${pageBack}
[3] ${pageExit}

If you want to enroll, proceed to next page.
`;

//Payment Page Interface
const paymentPage = `
*********************************************************
>>>>>>>>>>>>>>> COURSE ENROLLMENT SYSTEM <<<<<<<<<<<<<<<<
*********************************************************

                        PAYMENT

Below are the fees for each classes:

[1] ${paymentDetail[0].classId} - $${paymentDetail[0].subjectFee}
[2] ${paymentDetail[1].classId} - $${paymentDetail[1].subjectFee}
[3] ${paymentDetail[2].classId} - $${paymentDetail[2].subjectFee}

[4] ${pageBack}
[5] ${pageExit}

If you want to enroll, proceed with the course payment.
`;

//Form Pokemon Payment Page
const formPokemonPaymentPage = `
*********************************************************
>>>>>>>>>>>>>>> COURSE ENROLLMENT SYSTEM <<<<<<<<<<<<<<<<
*********************************************************

                        PAYMENT

Course Fee:
${paymentDetail[0].classId} - $${paymentDetail[0].subjectFee}

Kindly fill up the following to complete the payment.
`;

//Form History Payment Page
const formHistoryPaymentPage = `
*********************************************************
>>>>>>>>>>>>>>> COURSE ENROLLMENT SYSTEM <<<<<<<<<<<<<<<<
*********************************************************

                        PAYMENT

Course Fee:
${paymentDetail[1].classId} - $${paymentDetail[1].subjectFee}

Kindly fill up the following to complete the payment.
`;

//Form Dance Payment Page
const formDancePaymentPage = `
*********************************************************
>>>>>>>>>>>>>>> COURSE ENROLLMENT SYSTEM <<<<<<<<<<<<<<<<
*********************************************************

                        PAYMENT

Course Fee:
${paymentDetail[2].classId} - $${paymentDetail[2].subjectFee}

Kindly fill up the following to complete the payment.
`;

//Form Pokemon Course Fee Page
const formPokemonCourseFeePage = `
*********************************************************
>>>>>>>>>>>>>>> COURSE ENROLLMENT SYSTEM <<<<<<<<<<<<<<<<
*********************************************************

                        COURSE FEE

Please settle the amount below to complete enrollment.


Course Fee:
${paymentDetail[0].classId} - $${paymentDetail[0].subjectFee}

[1] ${pageNext}
[2] ${pageBack}
[3] ${pageExit}
`;

//Form History Course Fee Page
const formHistoryCourseFeePage = `
*********************************************************
>>>>>>>>>>>>>>> COURSE ENROLLMENT SYSTEM <<<<<<<<<<<<<<<<
*********************************************************

                        COURSE FEE

Please settle the amount below to complete enrollment.

Course Fee:
${paymentDetail[1].classId} - $${paymentDetail[1].subjectFee}

[1] ${pageNext}
[2] ${pageBack}
[3] ${pageExit}
`;

//Form Dance Payment Page
const formDanceCourseFeePage = `
*********************************************************
>>>>>>>>>>>>>>> COURSE ENROLLMENT SYSTEM <<<<<<<<<<<<<<<<
*********************************************************

                        COURSE FEE

Please settle the amount below to complete enrollment.


Course Fee:
${paymentDetail[2].classId} - $${paymentDetail[2].subjectFee}

[1] ${pageNext}
[2] ${pageBack}
[3] ${pageExit}
`;

/*
*********************************************************
>>>>>>>>>>>>>>>>>>> PROMPT FUNCTIONS <<<<<<<<<<<<<<<<<<<<
*********************************************************
The role of these functions is to capture the user's 
input and then proceed to the next action based on that
input.

Legends:

mainPageProceed             - Prompt for home page

classEnrollmentProceed      - Prompt when in all courses page
promptPokemonDescProceed    - Prompt when in Pokemon course desc page
promptHistoryDescProceed    - Prompt when in History course desc page
promptDanceDescProceed      - Prompt when in Dance course desc page

promptPaymentProceed        - Prompt when in all courses fee page
promptPokemonPaymentProceed - Prompt when in Pokemon course fee page
promptHistoryPaymentProceed - Prompt when in History course fee page
promptDancePaymentProceed   - Prompt when in Dance course fee page

promptFormNameProceed           - Prompt asking for Name of enrollee
promptFormAgeProceed            - Prompt asking for the Age of enrollee
promptCourseFeePaymentProceed   - Prompt asking for payment of the chosen course and pushing the newly enrolled students in the database

promptExitConsoleApp        - Prompt to exit console after enrolling
*/

const promptMainPageProceed = () => {
    createReadline.question(">>> ", (myAnswer) => {
        const intAnswer = parseInt(myAnswer);
        mainSection(intAnswer);
    });
}

const promptClassEnrollmentProceed = () => {
    createReadline.question(">>> ", (myClass) => {
        const intClass = parseInt(myClass);
        clearSecDelay();
        setTimeout ( () => {
            classDescriptionDelay(intClass);
        }, 800);
    });
}

const promptPokemonDescProceed = () => {
    createReadline.question(">>> ", (numPrompt) => {
        const intPokeDescPrompt = parseInt(numPrompt);
        coursePokemonFeeDelay(intPokeDescPrompt);
    });
}

const promptHistoryDescProceed = () => {
    createReadline.question(">>> ", (numPrompt) => {
        const intHistDescPrompt = parseInt(numPrompt);
        courseHistoryFeeDelay(intHistDescPrompt);
    });
}

const promptDanceDescProceed = () => {
    createReadline.question(">>> ", (numPrompt) => {
        const intDansDescPrompt = parseInt(numPrompt);
        courseDanceFeeDelay(intDansDescPrompt);
    });
}

const promptPaymentProceed = () => {
    createReadline.question(">>> ", (numPrompt) => {
        const intClassPrompt = parseInt(numPrompt);
        paymentChoiceDelay(intClassPrompt);
    });
}

const promptPokemonPaymentProceed = () => {
    createReadline.question(">>> ", (numPrompt) => {
        const intPaymentPrompt = parseInt(numPrompt);
        coursePokemonPaymentDelay(intPaymentPrompt);
    });
}

const promptHistoryPaymentProceed = () => {
    createReadline.question(">>> ", (numPrompt) => {
        const intPaymentPrompt = parseInt(numPrompt);
        courseHistoryPaymentDelay(intPaymentPrompt);
    });
}

const promptDancePaymentProceed = () => {
    createReadline.question(">>> ", (numPrompt) => {
        const intPaymentPrompt = parseInt(numPrompt);
        courseDancePaymentDelay(intPaymentPrompt);
    });
}

const promptFormNameProceed = (classDb, courseId) => {
    createReadline.question("Name: ", (strName) => {
        const strNamePrompt = String(strName);
        promptFormAgeProceed(classDb, courseId, strName);
    });
}

const promptFormAgeProceed = (classDb, courseId, studentName) => {
    createReadline.question("Age: ", (intAge) => {
        const intAgePrompt = parseInt(intAge);
        const studentAgeValid = ageValid(intAgePrompt);

        if (studentAgeValid) {
            promptCourseFeePaymentProceed(classDb, courseId, studentName, studentAgeValid);
        } else {
            promptFormAgeProceed(classDb, courseId, studentName);
        }        
    });
}

const promptCourseFeePaymentProceed = (classDb, courseId, studentName, studentAge) => {
    createReadline.question("Payment: ", (intCourseFee) => {
        const intCourseFeePrompt = parseInt(intCourseFee);
        const coursePaymentValid = courseFeePayment(courseId, intCourseFeePrompt);

        if (coursePaymentValid) {
            enrollNewStudent(classDb, studentName, studentAge);
            promptExitConsoleApp();
        } else {
            console.log(`\nPayment did not match the required fee.\nKindly pay only the required amount.\n`)
            promptCourseFeePaymentProceed(classDb, courseId, studentName, studentAge);
        }
    });
}

const promptExitConsoleApp = () => {
    createReadline.question(`\n[1] HOMEPAGE          [2] EXIT\n>>> `, (intExit) => {
        const intExitPrompt = parseInt(intExit);
        exitAppDelay(intExitPrompt);
    });
}

/*
*********************************************************
>>>>>>>>>>>>>>>>>>> DELAY FUNCTIONS <<<<<<<<<<<<<<<<<<<<<
*********************************************************
The role of these functions is to handle delays or
timeouts to simulate waiting time when loading pages.

Legend:

clearSecDelay  - console clear with delay
exitAppDelay   - exit app or go to home page function used only after enrolling
mainExitApp    - exit app
*/

const clearSecDelay = () => {
    setTimeout ( () => {
        console.clear();
    }, 500);
}

const exitAppDelay = (exit) => {
    if (exit === 1) {
        console.log("\nReturning to Home Page...")
        setTimeout ( () => {
            previousHomePage();
        }, 500);
    } else if (exit === 2) {
        console.log("\nExiting...");
        setTimeout ( () => {
            process.exit(0);
        }, 500);
    } else {
        console.error("\nPage does not exist...\n");
        promptExitConsoleApp();
    }
}

const mainExitApp = () => {
    console.log("\nExiting...");
    setTimeout ( () => {
        process.exit(0);
    }, 500);
}

/*
*********************************************************
>>>>>>>>>>> ENROLLING NEW STUDENT FUNCTIONS <<<<<<<<<<<<<
*********************************************************
The role of this function is to push the new enrolled
students information to the chosen class database.

Legend:

enrollNewStudent    - adding students inputted information to db and showing it in table
ageValid            - validation if enrolling student is of age
*/

const ageValid = (ageInfo) => {
    if (isNaN(ageInfo)) {
        console.log(`\nPlease enter a valid number.\n`);
    } else if (ageInfo < 12) {
        console.log(`\nYou are too young to enroll on this course!\n`);
    } else if (ageInfo > 80) {
        console.log(`\nYou're way too old to be studying!\n`);
    } else {
        return true;
    }
}

const enrollNewStudent = (classDb, studentName, studentAge) => {
    const newStudentId = classDb.length + 1;

    classDb.push({
        studentId: newStudentId,
        name: studentName,
        age: studentAge
    });

    console.log(`\n\n${studentName} has been enrolled!`);
    console.log("\nStudents Currently Enrolled:");
    console.table(classDb);
}

/*
*********************************************************
>>>>>>>>>>>>> VALIDATION PAYMENT FUNCTIONS <<<<<<<<<<<<<<
*********************************************************
The role of this function is to serve as validation if
the payment is correct or not.

Legend:

courseFeePayment    - Validation whether the course fee is correctly paid or not
*/

const courseFeePayment = (courseId, courseFee) => {
    const courseIdInfo = paymentDetail.find((findCourseId) => findCourseId.classId === courseId);
    const classIdInfo = classesDetail.find((findClassId) => findClassId.classId === courseId);

    if (courseIdInfo && courseFee === courseIdInfo.subjectFee) {
        console.log(`\nYou have fully paid for ${classIdInfo.classId} - ${classIdInfo.classTitle}`);
        return true;
    } else {
        return false;
    }
}

/*
*********************************************************
>>>>>>>>>>>>>>> PREVIOUS PAGE FUNCTIONS <<<<<<<<<<<<<<<<<
*********************************************************
The role of these functions is to simulate navigating back
to previous pages.

Legend:

previousHomePage    - Navigating back to home page
previousPage        - Navigating back to previous page
*/

const previousHomePage = () => {
    console.log("\nReturning...")
    clearSecDelay();
    setTimeout ( () => {
        runCourseEnrSysApp();
    }, 800);
}


const previousPage = (page, promptFunction) => {
    setTimeout ( () => {
        console.log("\nReturning...");
        clearSecDelay();
        setTimeout ( () => {
            console.log(page);
            promptFunction();
        }, 1000)
    }, 500);
}

/*
*********************************************************
>>>>>>>>>>> PER-COURSE DESCRIPTION FUNCTIONS <<<<<<<<<<<<
*********************************************************
The role of these functions is to handle navigation from 
the class page to the corresponding course description page.

Legend:

coursePokeDescPage  - Navigating towards Pokemon desc page
courseHistDescPage  - Navigating towards History desc page
courseDansDescPage  - Navigating towards Dance desc page
*/

const coursePokeDescPage = () => {
    setTimeout ( () => {
        console.log(`\nProceeding to ${classesDetail[0].classId}...`);
        clearSecDelay();
        setTimeout ( () => {
            console.log(pokemonClassPage);
            promptPokemonDescProceed();
        }, 1000);
    }, 500);
}

const courseHistDescPage = () => {
    setTimeout ( () => {
        console.log(`\nProceeding to ${classesDetail[1].classId}...`);
        clearSecDelay();
        setTimeout ( () => {
            console.log(historyClassPage);
            promptHistoryDescProceed();
        }, 1000);
    }, 500);
}

const courseDansDescPage = () => {
    setTimeout ( () => {
        console.log(`\nProceeding to ${classesDetail[2].classId}...`);
        clearSecDelay();
        setTimeout ( () => {
            console.log(danceClassPage);
            promptDanceDescProceed();
        }, 1000);
    }, 500);
}

/*
*********************************************************
>>>>>>>>>>>>> PER-COURSE FEE PAGE FUNCTIONS <<<<<<<<<<<<<
*********************************************************
The role of these functions is to handle navigation from 
the the corresponding course desc page to the 
corresponding course fee page.

Legend:

currentPokemonClassPage  - Navigating towards Pokemon course fee page
currentHistoryClassPage  - Navigating towards History course fee page
currentDanceClassPage    - Navigating towards Dance course fee page
*/

const currentPokemonClassPage = () => {
    setTimeout ( () => {
        console.log(`\nProceeding to ${classesDetail[0].classId} course fee...`);
        clearSecDelay();
        setTimeout ( () => {
            console.log(formPokemonCourseFeePage);
            promptPokemonPaymentProceed();
        }, 1000);
    }, 500);
}

const currentHistoryClassPage = () => {
    setTimeout ( () => {
        console.log(`\nProceeding to ${classesDetail[1].classId} course fee...`);
        clearSecDelay();
        setTimeout ( () => {
            console.log(formHistoryCourseFeePage);
            promptHistoryPaymentProceed();
        }, 1000);
    }, 500);
}

const currentDanceClassPage = () => {
    setTimeout ( () => {
        console.log(`\nProceeding to ${classesDetail[2].classId} course fee...`);
        clearSecDelay();
        setTimeout ( () => {
            console.log(formDanceCourseFeePage);
            promptDancePaymentProceed();
        }, 1000);
    }, 500);
}

/*
*********************************************************
>>>>>>>>>> PER-COURSE PAYMENT PAGE FUNCTIONS <<<<<<<<<<<<
*********************************************************
The role of these functions is to handle navigation from 
the the corresponding course fee page to the 
corresponding course payment page.

Legend:

descriptionPokemonPage  - Navigating towards Pokemon payment page
descriptionHistoryPage  - Navigating towards History payment page
descriptionDancePage    - Navigating towards Dance payment page
*/

const descriptionPokemonPage = () => {
    setTimeout ( () => {
        console.log(`\nProceeding to ${pageTwo} details...`);
        clearSecDelay();
        setTimeout ( () => {
            console.log(formPokemonPaymentPage);
            promptFormNameProceed(classDatabase.pokemonClass, paymentDetail[0].classId);
        }, 700);
    }, 600);
}

const descriptionHistoryPage = () => {
    setTimeout ( () => {
        console.log(`\nProceeding to ${pageTwo} details...`);
        clearSecDelay();
        setTimeout ( () => {
            console.log(formHistoryPaymentPage);
            promptFormNameProceed(classDatabase.historyClass, paymentDetail[1].classId);
        }, 700);
    }, 600);
}

const descriptionDancePage = () => {
    setTimeout ( () => {
        console.log(`\nProceeding to ${pageTwo} details...`);
        clearSecDelay();
        setTimeout ( () => {
            console.log(formDancePaymentPage);
            promptFormNameProceed(classDatabase.danceClass, paymentDetail[2].classId);
        }, 700);
    }, 600);
}

/*
*********************************************************
>>>>>>>>>>>>>>>>> MAIN PAGE FUNCTIONS <<<<<<<<<<<<<<<<<<<
*********************************************************
The role of these functions is to handle navigation from
home page to class or payment page.

Legend:

classSecDelay  - navigating to class page
paySecDelay    - navigating to payment page
*/

const classSecDelay = (nextPage) => {
    setTimeout ( () => {
        console.log(`\nProceeding to ${pageOne}...`);
        clearSecDelay();
        setTimeout ( () => {
            console.log(classPage);
            setTimeout ( () => {
                promptClassEnrollmentProceed();
            }, 400);
        }, 700);
    }, 600);
}

const paySecDelay = (nextPage) => {
    setTimeout ( () => {
        console.log(`\nProceeding to ${pageTwo}...`);
        clearSecDelay();
        setTimeout ( () => {
            console.log(paymentPage);
            promptPaymentProceed();
        }, 700);
    }, 600);
}

/*
*********************************************************
>>>>>>>> VALIDATION DESCRIPTION PAGE FUNCTIONS <<<<<<<<<<
*********************************************************
The role of these functions is to validate whether the
user wants to proceed from the description page to the
course fee page.

Legend:

coursePokemonFeeDelay   - validation for pokemon desc (next, back, exit)
courseHistoryFeeDelay   - validation for history desc (next, back, exit)
courseDanceFeeDelay     - validation for dance desc (next, back, exit)
*/

const coursePokemonFeeDelay = (nextPage) => {
    if (nextPage === 1) {
        currentPokemonClassPage();
    } else if (nextPage === 2) {
        previousPage(classPage, promptClassEnrollmentProceed);
    } else if (nextPage === 3) {
        mainExitApp();
    } else {
        setTimeout ( () => {
            console.error("\nPage does not exist!");
            clearSecDelay();
            setTimeout ( () => {
                console.log(pokemonClassPage);
                promptPokemonDescProceed();
            }, 1500);
        }, 1000);
    }
}

const courseHistoryFeeDelay = (nextPage) => {
    if (nextPage === 1) {
        currentHistoryClassPage();
    } else if (nextPage === 2) {
        previousPage(classPage, promptClassEnrollmentProceed);
    } else if (nextPage === 3) {
        mainExitApp();
    } else {
        setTimeout ( () => {
            console.error("\nPage does not exist!");
            clearSecDelay();
            setTimeout ( () => {
                console.log(historyClassPage);
                promptHistoryDescProceed();
            }, 1500);
        }, 1000);
    }
}

const courseDanceFeeDelay = (nextPage) => {
    if (nextPage === 1) {
        currentDanceClassPage();
    } else if (nextPage === 2) {
        previousPage(classPage, promptClassEnrollmentProceed);
    } else if (nextPage === 3) {
        mainExitApp();
    } else {
        setTimeout ( () => {
            console.error("\nPage does not exist!");
            clearSecDelay();
            setTimeout ( () => {
                console.log(danceClassPage);
                promptDanceDescProceed();
            }, 1500);
        }, 1000);
    }
}

/*
*********************************************************
>>>>>>>>> VALIDATION COURSE FEE PAGE FUNCTIONS <<<<<<<<<<
*********************************************************
The role of these functions is to validate whether the
user wants to proceed from the course fee page to the
course payment page.

Legend:

coursePokemonFeeDelay   - validation for pokemon fee page (next, back, exit)
courseHistoryFeeDelay   - validation for history fee page (next, back, exit)
courseDanceFeeDelay     - validation for dance fee page (next, back, exit)
*/

const coursePokemonPaymentDelay = (nextPage) => {
    if (nextPage === 1) {
        descriptionPokemonPage();
    } else if (nextPage === 2) {
        previousPage(classPage, promptClassEnrollmentProceed);
    } else if (nextPage === 3) {
        mainExitApp();
    } else {
        setTimeout ( () => {
            console.error("\nPage does not exist!");
            clearSecDelay();
            setTimeout ( () => {
                console.log(formPokemonCourseFeePage);
                promptPokemonPaymentProceed();
            }, 1500);
        }, 1000);
    }
}

const courseHistoryPaymentDelay = (nextPage) => {
    if (nextPage === 1) {
        descriptionHistoryPage();
    } else if (nextPage === 2) {
        previousPage(classPage, promptClassEnrollmentProceed);
    } else if (nextPage === 3) {
        mainExitApp();
    } else {
        setTimeout ( () => {
            console.error("\nPage does not exist!");
            clearSecDelay();
            setTimeout ( () => {
                console.log(formHistoryCourseFeePage);
                promptHistoryPaymentProceed();
            }, 1500);
        }, 1000);
    }
}

const courseDancePaymentDelay = (nextPage) => {
    if (nextPage === 1) {
        descriptionDancePage();
    } else if (nextPage === 2) {
        previousPage(classPage, promptClassEnrollmentProceed);
    } else if (nextPage === 3) {
        mainExitApp();
    } else {
        setTimeout ( () => {
            console.error("\nPage does not exist!");
            clearSecDelay();
            setTimeout ( () => {
                console.log(formDanceCourseFeePage);
                promptDancePaymentProceed();
            }, 1500);
        }, 1000);
    }
}

/*
*********************************************************
>>>> VALIDATION FOR CLASS AND PAYMENT PAGE FUNCTIONS <<<<
*********************************************************
The role of these functions is to validate whether the
user wants to proceed from the course fee page to the
course payment page.

Legend:

paymentChoiceDelay      - validation for main payment page (next, back, exit)
classDescriptionDelay   - validation for main class page (next, back, exit)
*/

const paymentChoiceDelay = (nextPage) => {
    if (nextPage === 1) {
        descriptionPokemonPage();
    } else if (nextPage === 2) {
        descriptionHistoryPage();
    } else if (nextPage === 3) {
        descriptionDancePage();
    } else if (nextPage === 4) {
        previousHomePage();
    } else if (nextPage === 5) {
        mainExitApp();
    } else {
        setTimeout ( () => {
            console.error("\nPage does not exist!");
            previousPage(paymentPage, promptPaymentProceed);
        }, 600);
    }
}

const classDescriptionDelay = (descriptionPage) => {
    if (descriptionPage === 1) {
        coursePokeDescPage();
    } else if (descriptionPage === 2) {
        courseHistDescPage();
    } else if (descriptionPage === 3) {
        courseDansDescPage();
    } else if (descriptionPage === 4) {
        previousHomePage();
    } else if (descriptionPage === 5) {
        mainExitApp();
    } else {
        setTimeout ( () => {
            console.error("\nPage does not exist!");
            previousPage(classPage, promptClassEnrollmentProceed);
        }, 600);
    }
}

/*
*********************************************************
>>>>>>>>>>>>>>>>>>>> CORE FUNCTIONS <<<<<<<<<<<<<<<<<<<<<
*********************************************************
The role of these functions is to initiate the application
and route the user to the correct section based on their
choices.

Legend:

runCourseEnrSysApp      - calls the application; shows home page and prompt for home page
mainSection             - navigation to either class page, payment page, or exit application
*/

const runCourseEnrSysApp = () => {
    clearSecDelay();
    setTimeout ( () => {
        console.log(homePage);
        promptMainPageProceed();
    }, 800);  
}

const mainSection = (section) => {
    if (section === 1) {
        classSecDelay(section);
    } else if (section === 2) {
        paySecDelay(section);
    } else if (section === 3) {
        mainExitApp();
    } else {
        setTimeout ( () => {
            console.error("\nPage does not exist!");
            setTimeout ( () => {
                previousHomePage();
            }, 800);
        }, 500);
    };
}

/*
*********************************************************
>>>>>>>>>>>>>>>>>> APPLICATION CALLER <<<<<<<<<<<<<<<<<<<
*********************************************************
*/

runCourseEnrSysApp();

