

// script.js
new Vue({
    el: '#app',
    data: {
      fullName: 'Dzubayyan Ahmad',
      jobTitle: 'Senior Technical Support Specialist',
      email: 'hello@masdzub.com',
      phoneNumber: '+62 881 08 000 81 80',
      website: 'https://masdzub.com',
      gravatarURL: 'https://www.gravatar.com/avatar/509d3b6019d078eb39f42d51e7024abc?s=300',
      description: 'Technical Support Specialist, Half Sysadmin based in Yogyakarta, Indonesia',
      
      skillsData: {
        basic: [
          'Linux Server',
          'CMS Wordpress',
          'Networking',
          'Webserver',
          'cPanel & WHM'
        ],
        automationAndScripting: [
          'Ansible',
          'Bash',
          'Python',
          'Docker',
          'PHP',
          'NodeJS',
          'NuxtJS'
        ],
        extra: [
          'Photoshop',
          'Word Office',
          'Power Point'
        ]
      },
      experiences: [
        {
          title: 'Sr. Technical Support Specialist',
          company: '@DomaiNesia',
          companyLink: 'https://domainesia.com',
          startDate: '2022/10',
          endDate: 'Present',
          description: 'Render technical advice, support, and assistance to various organizations and consumers for technical and software problems, also deal with end-users directly and effectively communicate answers in an understandable manner.'
        },
        {
          title: 'Technical Support Specialist',
          company: '@DomaiNesia',
          companyLink: 'https://domainesia.com',
          startDate: '2019/03',
          endDate: '2022/10',
          description: 'Render technical advice, support, and assistance to various organizations and consumers for technical and software problems, also deal with end-users directly and effectively communicate answers in an understandable manner.'
        },
        {
          title: 'System Administrator',
          company: '@Manage Server Indonesia',
          companyLink: '#',
          startDate: '2020/04',
          endDate: '2021/13',
          description: 'Manage and maintenance server infrastructure and our server client.'
        },
        {
          title: 'Linux System Administrator',
          company: '@Teras Code Digital',
          companyLink: 'https://terascode.com',
          startDate: '2018/07',
          endDate: '2019/06',
          description: 'Managed daily activities to include user support and system administration task, Managed the day to day IT troubleshooting for users both locally and remotely.'
        },
        {
          title: 'Training Development Staff',
          company: '@Teras Code Digital',
          companyLink: 'https://terascode.com',
          startDate: '2018/04',
          endDate: '2019/16',
          description: 'Identify training and development needs within an organisation through job analysis, appraisal schemes and regular consultation with business managers and human resources departments.'
        },
        {
          title: 'Assistant Lecture',
          company: '@Amikom University Of Yogyakarta',
          companyLink: 'https://amikom.ac.id',
          startDate: '2017/09',
          endDate: '2018/07',
          description: 'Supervise the work of students, provide advice on study skills and help them with learning pro, Teach as a member of a teaching team within an established programme of study.'
        },
        {
          title: 'Photographer',
          company: '@Albatros Photography',
          companyLink: '#',
          startDate: '2016/04',
          endDate: '2016/09',
          description: 'Take photos of clients or objects in studio environments.'
        },
        // Add other experiences as needed...
      ],
      certifications: [
        {
          title: 'cPanel Professional Certification (CPP)',
          validationLink: 'https://university.cpanel.net/certificate/290f-0d9e-c6ab-4dad',
          startDate: '2020',
          endDate: 'Now',
          description: 'From cPanel University'
        },
        {
          title: 'cPanel & WHM Sales Professional (CPSP)',
          validationLink: 'https://university.cpanel.net/certificate/c886-aa62-89f1-53e1',
          startDate: '2021',
          endDate: 'Now',
          description: 'From cPanel University'
        },
        {
          title: 'cPanel & WHM Administrator Certification (CWA)',
          validationLink: 'https://university.cpanel.net/certificate/dc80-bac7-81fa-28e9',
          startDate: '2020',
          endDate: 'Now',
          description: 'From cPanel University'
        },
        {
          title: 'cPanel & WHM System Administrator I (CWSA-1)',
          validationLink: 'https://university.cpanel.net/certificate/091d-3432-a27e-47c6',
          startDate: '2020',
          endDate: 'Now',
          description: 'From cPanel University'
        },
        {
          title: 'cPanel & WHM Sales Professional (CPSP)',
          validationLink: 'https://university.cpanel.net/certificate/c886-aa62-89f1-53e1',
          startDate: '2021',
          endDate: 'Now',
          description: 'From cPanel University'
        },
        {
          title: 'cPanel & WHM Sales Professional (CPSP)',
          validationLink: 'https://university.cpanel.net/certificate/c886-aa62-89f1-53e1',
          startDate: '2021',
          endDate: 'Now',
          description: 'From cPanel University'
        },
        {
          title: 'cPanel & WHM System Administrator II (CWSA-2)',
          validationLink: 'https://university.cpanel.net/certificate/ce77-1003-fc3c-f92c',
          startDate: '2020',
          endDate: 'Now',
          description: 'From cPanel University'
        },
        {
          title: 'LiteSpeed Certification',
          validationLink: 'https://university.cpanel.net/certificate/c552-b77a-6697-ddcd',
          startDate: '2021',
          endDate: 'Now',
          description: 'From cPanel University'
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
          description: 'From cPanel University'
        },
        {
          title: 'JetBackup 5 Certification',
          validationLink: 'https://university.cpanel.net/certificate/0e8c-2ac3-ae9b-a1ea',
          startDate: '2023',
          endDate: 'Now',
          description: 'From cPanel University'
        },
        {
          title: 'cPanel Certified Partner Accreditation (CPCP)',
          validationLink: 'https://university.cpanel.net/certificate/1ddf-2e94-4bdf-3673',
          startDate: '2023',
          endDate: 'Now',
          description: 'From cPanel University'
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
      }
    }
  });
  
  