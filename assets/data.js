new Vue({
    el: '#app',
    data: {
      fullName: 'Dzubayyan Ahmad',
      jobTitle: 'System Administrator',
      email: 'hello@masdzub.com',
      phoneNumber: '+62 881 08 000 81 80',
      website: 'https://masdzub.com',
      gravatarURL: 'https://www.gravatar.com/avatar/509d3b6019d078eb39f42d51e7024abc?s=300',
      description: 'System Administrator based in Bali, Indonesia',
      
      skillsData: {
        basic: [
          'Linux Server',
          'CMS Wordpress',
          'Networking',
          'Webserver',
          'cPanel & WHM'
        ],
        automation: [
          'Ansible',
          'Bash',
          'Python',
          'assh'
        ],
        extra: [
          'Word Office',
          'Docker',
          'PHP',
          'NodeJS',
          'NuxtJS'
        ]
      },
      experiences: [
        {
          title: 'System Administrator',
          company: '@World Host Group',
          companyLink: 'https://worldhost.group/',
          startDate: '2022/10',
          endDate: 'present',
          descriptionItems: [
            'Monitored system and procedural processes encompassing Abuse, SSL, migration, cPanel license, and other issues.',
            'Maintain a high level of customer service and support for all technical issues, including troubleshooting and problem resolution.',
            'Migrate account hosting to balancing resource and migration from outside into our server and new server.',
            'Diagnose and troubleshoot errors and technical glitches in client applications or systems. Effectively fixing issues to ensure client satisfaction and minimal downtime.',
            'Implemented rigorous security measures, including screening for domain and hosting abuse such as fraud, phishing, spamming, and other illicit activities, ensuring a secure hosting environment for clients.',
          ],
          employmentStatus: "Contract",
          workStatus: "On-Site" 
        },
        {
          title: 'Sr. Technical Support Specialist',
          company: '@DomaiNesia',
          companyLink: 'https://domainesia.com',
          startDate: '2022/10',
          endDate: '2024/01',
          descriptionItems: [
            'Developed and implemented technical support processes and procedures to enhance efficiency and effectiveness.',
            'Monitored system and procedural processes encompassing Abuse, SSL, migration, cPanel license, and other issues.',
            'Collaborate with cross-functional teams, including infrastructure and product management (sales), to identify and resolve technical issues.',
            'Analyze and resolve complex technical issues, utilizing resources such as documentation and internal systems.',
            'Maintain a high level of customer service and support for all technical issues, including troubleshooting and problem resolution.',
            'Migrate account hosting to balancing resource and migration from outside into our server and new server.',
            'Mentor technical support staff on technical troubleshooting and problem-solving techniques.',
            'Coordinate with third parties to resolve problem issues in the event of an error.',
            'Assist the manager in recruiting new staff and training new staff.',
            'Handled customer inquiries and technical issues through ticketing systems, and phone, providing prompt and accurate solutions to customer problems.',
            'Diagnose and troubleshoot errors and technical glitches in client applications or systems. Effectively fixing issues to ensure client satisfaction and minimal downtime.',
            'Articulate technical product details to new customers clearly and understandably helping customers grasp the value and functionality of our services.',
            'Provide pre-sales support to prospective clients, address technical inquiries and concerns, and assist potential customers in making informed decisions about our hosting services.',
            'Implemented rigorous security measures, including screening for domain and hosting abuse such as fraud, phishing, spamming, and other illicit activities, ensuring a secure hosting environment for clients.',
          ],
          employmentStatus: "Permanent",
          workStatus: "Hybrid" 
        },
        {
          title: 'Technical Support Specialist',
          company: '@DomaiNesia',
          companyLink: 'https://domainesia.com',
          startDate: '2019/03',
          endDate: '2022/10',
          descriptionItems: [
            'Handled customer inquiries and technical issues through ticketing systems, live chat, and phone, providing prompt and accurate solutions to customer problems.',
            'Diagnose and troubleshoot errors and technical glitches in client applications or systems. Effectively fixing issues to ensure client satisfaction and minimal downtime.',
            'Articulate technical product details to new customers clearly and understandably helping customers grasp the value and functionality of our services.',
            'Provide pre-sales support to prospective clients, address technical inquiries and concerns, and assist potential customers in making informed decisions about our hosting services.',
          ],
          employmentStatus: "Permanent",
          workStatus: "On-Site" 
        },
        {
          title: 'System Administrator',
          company: '@Manage Server Indonesia',
          companyLink: '#',
          startDate: '2020/04',
          endDate: '2021/13',
          descriptionItems: [
            'Deployed, managed, and maintained dozens of production servers, ensuring optimal performance and stability.',
            'Implemented robust server monitoring systems to proactively track the health and performance of all production servers, thereby ensuring uninterrupted service and guaranteeing minimal downtime.',
            'Enhanced our server services by automating routine tasks and deploying new features with automation tools, improving operational efficiency.',
          ],
          employmentStatus: "Self-Employee",
          workStatus: "Hybrid" 
        },
        {
          title: 'Linux System Administrator',
          company: '@Teras Code Digital',
          companyLink: 'https://terascode.com',
          startDate: '2018/07',
          endDate: '2019/06',
          descriptionItems: [
            'Deployed, managed, and maintained dozens of production servers, ensuring optimal performance and stability.',
            'Implemented robust server monitoring systems to proactively track the health and performance of all production servers, thereby ensuring uninterrupted service and guaranteeing minimal downtime.',
            'Enhanced our server services by automating routine tasks and deploying new features with automation tools, improving operational efficiency.',
          ],
          employmentStatus: "Permanent",
          workStatus: "Hybrid" 
        },
        {
          title: 'Training Development Staff',
          company: '@Teras Code Digital',
          companyLink: 'https://terascode.com',
          startDate: '2018/04',
          endDate: '2019/16',
          descriptionItems: [
            'Develop training materials, modules, and curriculum based on identified needs, learning objectives, and organizational goals. This involves creating content, presentations, manuals, and other educational materials.',
            'Identify and assess the training needs of the organization or specific departments through surveys, interviews, or analysis of performance data.',
            'Work closely with subject matter experts, trainers, and other stakeholders to gather information and ensure accuracy and relevance of training materials.',
            'Stay updated with industry trends, best practices, and new technologies in training and development to enhance the quality and effectiveness of training programs.',
          ],
          employmentStatus: "Permanent",
          workStatus: "Hybrid" 
        },
        {
          title: 'Assistant Lecture',
          company: '@Amikom University Of Yogyakarta',
          companyLink: 'https://amikom.ac.id',
          startDate: '2017/09',
          endDate: '2018/07',
          descriptionItems: [
            'Supporting lecturers in preparing and delivering lectures, seminars, and tutorials. This includes aiding in creating lesson plans, presentations, and teaching materials.',
            'Providing assistance to students by conducting consultation hours, offering guidance on coursework, assignments, and projects, and addressing their academic queries.',
            'Offering guidance and support to students regarding academic goals, career paths, and program requirements. Acting as a mentor to students, providing advice and encouragement',
            'Engaging in ongoing professional development opportunities, such as attending workshops, conferences, or pursuing advanced degrees to enhance teaching skills and subject knowledge.',
            'Supporting research activities by conducting literature reviews, gathering data, organizing research materials, or assisting in experiments, depending on the academic field.',
            'Assisting in grading assignments, exams, and other academic assessments. Ensuring fairness and consistency in assessment practices based on established guidelines.',
          ],
          employmentStatus: "Contract",
          workStatus: "On-Site" 
        },
        {
          title: 'Photographer',
          company: '@Albatros Photography',
          companyLink: '#',
          startDate: '2016/04',
          endDate: '2016/09',
          descriptionItems: [
            'Conducting various photography sessions including portrait, product, fashion, or commercial shoots within the studio.',
            'Setting up and adjusting studio lighting equipment to achieve the desired mood, ambiance, and effects for each shoot.',
            'Operating and maintaining photography equipment including cameras, lenses, tripods, and other accessories.',
            'Collaborating with clients to understand their specific needs, providing guidance on poses, themes, and styles for the shoot.',
            'Organizing and managing photography sessions, maintaining an efficient workflow, and meeting deadlines.',
            'Ensuring proper care, maintenance, and cleanliness of photography equipment and studio spaces.',

          ],
          employmentStatus: "Contract",
          workStatus: "On-Site" 
        },
        // Add other experiences as needed...
      ],
      certifications: [
        {
          title: 'cPanel Professional Certification (CPP)',
          validationLink: 'https://university.cpanel.net/certificate/290f-0d9e-c6ab-4dad',
          startDate: '2020',
          endDate: 'Now',
          description: 'cPanel University'
        },
        {
          title: 'cPanel & WHM Sales Professional (CPSP)',
          validationLink: 'https://university.cpanel.net/certificate/c886-aa62-89f1-53e1',
          startDate: '2021',
          endDate: 'Now',
          description: 'cPanel University'
        },
        {
          title: 'cPanel & WHM Administrator Certification (CWA)',
          validationLink: 'https://university.cpanel.net/certificate/dc80-bac7-81fa-28e9',
          startDate: '2020',
          endDate: 'Now',
          description: 'cPanel University'
        },
        {
          title: 'cPanel & WHM System Administrator I (CWSA-1)',
          validationLink: 'https://university.cpanel.net/certificate/091d-3432-a27e-47c6',
          startDate: '2020',
          endDate: 'Now',
          description: 'cPanel University'
        },
        {
          title: 'cPanel & WHM Sales Professional (CPSP)',
          validationLink: 'https://university.cpanel.net/certificate/c886-aa62-89f1-53e1',
          startDate: '2021',
          endDate: 'Now',
          description: 'cPanel University'
        },
        {
          title: 'cPanel & WHM Sales Professional (CPSP)',
          validationLink: 'https://university.cpanel.net/certificate/c886-aa62-89f1-53e1',
          startDate: '2021',
          endDate: 'Now',
          description: 'cPanel University'
        },
        {
          title: 'cPanel & WHM System Administrator II (CWSA-2)',
          validationLink: 'https://university.cpanel.net/certificate/ce77-1003-fc3c-f92c',
          startDate: '2020',
          endDate: 'Now',
          description: 'cPanel University'
        },
        {
          title: 'LiteSpeed Certification',
          validationLink: 'https://university.cpanel.net/certificate/c552-b77a-6697-ddcd',
          startDate: '2021',
          endDate: 'Now',
          description: 'cPanel University'
        },
        {
          title: 'Imunify360 Certification',
          validationLink: 'https://university.cpanel.net/certificate/c026-abac-3df2-2f95',
          startDate: '2023',
          endDate: 'Now'
        },
        {
          title: 'JetBackup 4 Certification',
          validationLink: 'https://university.cpanel.net/certificate/042d-7426-83dd-2ccf',
          startDate: '2023',
          endDate: 'Now',
          description: 'cPanel University'
        },
        {
          title: 'JetBackup 5 Certification',
          validationLink: 'https://university.cpanel.net/certificate/0e8c-2ac3-ae9b-a1ea',
          startDate: '2023',
          endDate: 'Now',
          description: 'cPanel University'
        },
        {
          title: 'cPanel Certified Partner Accreditation (CPCP)',
          validationLink: 'https://university.cpanel.net/certificate/1ddf-2e94-4bdf-3673',
          startDate: '2023',
          endDate: 'Now',
          description: 'cPanel University'
        },
        // Add other certifications as needed...
      ],
      educations: [
        {
          field: 'Informatics Engineering',
          institution: 'University of Amikom Yogyakarta',
          startDate: '2016',
          endDate: '2019'
        },
        {
          field: 'Computer and Network Engineering',
          institution: 'SMK Negeri 1 Boyolali',
          startDate: '2013',
          endDate: '2016'
        },
        // Add other education items as needed...
      ],
      interests: [
        'Music',
        'Podcast',
        'Kdrama',
        'Anime',
        'Video Games',
        'Blogging',
        'Reading'
      ],
      interestClass: 'inline-flex mr-2 text-xs font-semibold text-opacity-70 text-black border px-1 rounded border-purple-100 bg-purple-50 dark:border-gray-900 dark:bg-gray-600'
    },
    
    methods: {
      getInterestClasses(index) {
        return {
          [this.interestClass]: true
        };
      },
    }
  });
  
  