"use strict";
let form = document.getElementById("form");
let username = document.getElementById("name");
let profession = document.getElementById("Profession");
let email = document.getElementById("email");
let address = document.getElementById("add");
let usercontact = document.getElementById("contact");
let aboutme = document.getElementById("aboutme");
let Pic = document.getElementById("pic");
let degree1 = document.getElementById("deg1");
let institue1 = document.getElementById("inst1");
let start_year1 = document.getElementById("start");
let deg_info1 = document.getElementById("deginfo1");
let degree2 = document.getElementById("deg2");
let institue2 = document.getElementById("inst2");
let start_year2 = document.getElementById("start-year");
let deg_info2 = document.getElementById("deginfo2");
let job_name1 = document.getElementById("job-name1");
let company1 = document.getElementById("company1");
let job_start_year1 = document.getElementById("job-s-y1");
let job_info1 = document.getElementById("jobinfo1");
let job_name2 = document.getElementById("job-name2");
let company2 = document.getElementById("company2");
let job_start_year2 = document.getElementById("job-s-y2");
let job_info2 = document.getElementById("jobinfo2");
let skill1 = document.getElementById("skill1");
let skill2 = document.getElementById("skill2");
let skill3 = document.getElementById("skill3");
let skill4 = document.getElementById("skill4");
let skill5 = document.getElementById("skill5");
let skill6 = document.getElementById("skill6");
let skill7 = document.getElementById("skill7");
let lang1 = document.getElementById("lang1");
let lang2 = document.getElementById("lang2");
let lang3 = document.getElementById("lang3");
let lang4 = document.getElementById("lang4");
let awa_year1 = document.getElementById("awa-year1");
let comp_name1 = document.getElementById("comp-name1");
let title1 = document.getElementById("title1");
let awa_year2 = document.getElementById("awa-year2");
let comp_name2 = document.getElementById("comp-name2");
let title2 = document.getElementById("title2");
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("name", username.value);
    localStorage.setItem("profession", profession.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("contact", usercontact.value);
    localStorage.setItem("aboutme", aboutme.value);
    localStorage.setItem("degree1", degree1.value);
    localStorage.setItem("institue1", institue1.value);
    localStorage.setItem("start_year1", start_year1.value);
    localStorage.setItem("deginfo1", deg_info1.value);
    localStorage.setItem("degree2", degree2.value);
    localStorage.setItem("institue2", institue2.value);
    localStorage.setItem("start_year2", start_year2.value);
    localStorage.setItem("deginfo2", deg_info2.value);
    localStorage.setItem("job_name1", job_name1.value);
    localStorage.setItem("company1", company1.value);
    localStorage.setItem("job_start_year1", job_start_year1.value);
    localStorage.setItem("job_info1", job_info1.value);
    localStorage.setItem("job_name2", job_name2.value);
    localStorage.setItem("company2", company2.value);
    localStorage.setItem("job_start_year2", job_start_year2.value);
    localStorage.setItem("job_info2", job_info2.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    localStorage.setItem("skill4", skill4.value);
    localStorage.setItem("skill5", skill5.value);
    localStorage.setItem("skill6", skill6.value);
    localStorage.setItem("skill7", skill7.value);
    localStorage.setItem("lang1", lang1.value);
    localStorage.setItem("lang2", lang2.value);
    localStorage.setItem("lang3", lang3.value);
    localStorage.setItem("lang4", lang4.value);
    localStorage.setItem("awa_year1", awa_year1.value);
    localStorage.setItem("comp_name1", comp_name1.value);
    localStorage.setItem("title1", title1.value);
    localStorage.setItem("awa_year2", awa_year2.value);
    localStorage.setItem("comp_name2", comp_name2.value);
    localStorage.setItem("title2", title2.value);
    if (Pic.files && Pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textimg = reader.result;
            localStorage.setItem("profile", textimg);
        });
        reader.readAsDataURL(Pic.files[0]);
    }
    window.location.href = "/Milestone-03/Resume/index.html";
});
