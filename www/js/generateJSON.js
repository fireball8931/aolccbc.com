console.log(window.location.search);

function getDataFromHTMLFiles(htmlfile) {

    fetch(htmlfile)
        .then(function(response) {\
            //console.log(response);
            return response.json()
        })
        .then(function(data) {\
            //console.log(data)
            return data
        })

}



var JSONData = `

{
    "admitreq": {
        "paragraphs": [
            {${getDataFromHTMLFiles('admitreq.html')}}

        ]
    },
    "programhighlights": {
        "paragraphs": [
            { "style": "p", "content": "This entry-level program will prepare the candidate for three industry-recognized certifications. The popular A+ Certification (by CompTIA) is highly recognized for excellence in hardware repair and maintenance, and operating system installation and support. The CompTIA Network+ certification assures the ability to install and maintain a network. In addition, the candidate will prepare for Microsoft Certified Solutions Associate (MCSA) Windows certification exams. The MCSA Windows certification demonstrates knowledge and skills in working with Windows client operating system and validates ability to support end users and maintain systems and mobile devices that run Windows. * Not all programs are offered at each location." }

        ]
    },
    "careeropp": {
        "paragraphs": [
            { "style": "p", "content": "With further studies the graduate may pursue a career as:" },
            { "ul_start": "true" },
            { "style": "li", "li_title": "Internet Web site technician" },
            { "style": "li", "li_title": "LAN (local area network) administrator" },
            { "style": "li", "li_title": "LAN (local area network) technician, Web technician" },
            { "style": "li", "li_title": "Computer network technician" },
            { "style": "li", "li_title": "Computer network technician supervisor" },
            { "style": "li", "li_title": "Data centre operator" },
            { "style": "li", "li_title": "Network/System administrator" },
            { "style": "li", "li_title": "Network support technician" },
            { "ul_end": "true" }

        ]
    },
    "corecourses": {
        "paragraphs": [
            
            { "ul_start": "true" },
            { "style": "li", "li_title": "Keyboarding", "content": "Minimum 25 words per minute (WPM)." },
            { "style": "li", "li_title": "Operating Systems", "content": "Intermediate level of proficiency with Windows OS" },
            { "style": "li", "li_title": "Software Development Industry", "content": "Computer and Technology Basics for Developers, Overview of Software Development" },
            { "style": "li", "li_title": "Software and Web Development Skills", "content": "Version Control, HTML, CSS and Bootstrap, JavaScript, Visual Studio, C#, .NET Framework" },
            { "style": "li", "li_title": "Database Skills", "content": "Intermediate level of proficiency in Microsoft Access, Database and SQL" },
            { "style": "li", "li_title": "Presentations", "content": "Basic level of proficiency in Microsoft PowerPoint" },
            { "style": "li", "li_title": "Word Processing and Spreadsheets", "content": "Basic level of proficiency in Microsoft Word and Microsoft Excel" },
            { "style": "li", "li_title": "Office Skills", "content": "Personal Computer Fundamentals, basic level of proficiency in Microsoft Outlook and Internet Fundamentals" },
            { "style": "li", "li_title": "Business Skills", "content": "Customer Service, Project Management" },
            { "ul_end": "true" }
        ]
    },
    "programtype": "Diploma",
    "salarystart": 36400,
    "salaryend": 90000,
    "programhours": 591,
    "programduration": 29,
    "domestic_fees": [{
        "tuition": 10774,
        "application": 250,
        "assessment": 100,
        "other": 104
    }],
    "syllabuslink": "aolcc_-_web_developer_diploma_-_program_outline_bc.pdf",
    "prog_video": "https://www.youtube.com/embed/4gNpKQt5mJY"
}

`;

document.write(JSONData);