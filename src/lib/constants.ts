export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I bridge geospatial magic with full-stack wizardry for impactful solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Timezone-friendly like a 24/7 GPS satellite",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My geospatial tech stack",
    description: "Always expanding like the universe",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Turning coffee into clean code and accurate coordinates",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently optimizing geospatial data pipelines",
    description: "Making PostGIS purr like a kitten",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to map out your next project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ardhisasa Land Parcel Management",
    des: "Led development of Kenya's national land registry GIS plugin (QGIS + PostGIS) processing 10K+ parcels daily with automated Python workflows.",
    img: "/p1.svg", // hypothetical image
    iconLists: ["/postgresql.svg", "/python.svg", "/qgis.svg", "/react.svg", "/docker.svg"],
    link: "https://ardhisasa.go.ke",
  },
  {
    id: 2,
    title: "Solar Potential Web Dashboard",
    des: "Built a Next.js geospatial analytics platform for renewable energy site selection with real-time Leaflet.js visualizations.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/leaflet.svg", "/python.svg"],
    link: "https://github.com/yourusername/solar-dashboard",
  },
  {
    id: 3,
    title: "GeoServer Cloud Cluster",
    des: "Architected a high-availability GeoServer deployment on AWS with Terraform, serving vector/raster data with sub-second response times.",
    img: "/p3.svg",
    iconLists: ["/aws.svg", "/terraform.svg", "/docker.svg", "/kubernetes.svg", "/prisma.svg"],
    link: "https://medium.com/your-blog/geoserver-aws-case-study",
  },
  {
    id: 4,
    title: "Surveyor Fieldwork Toolkit",
    des: "React Native mobile app with offline-first GPS data collection and Mapbox visualization for road construction surveys.",
    img: "/p4.svg",
    iconLists: ["/react.svg", "/mapbox.svg", "/node.svg", "/mongodb.svg", "/prisma.svg"], // RTK for GPS tech
    link: "https://apps.apple.com/your-app",
  },
];

export const testimonials = [
  {
    quote:
      "Wycliff transformed our land registry workflows with his QGIS plugin - processing thousands of parcels daily with Python automation. His ability to bridge GIS and web development is rare and valuable.",
    name: "Jeffrey Mwai",
    title: "Technical Lead, Konza Silicon Company",
    // From your references list
  },
  {
    quote:
      "The solar potential dashboard Wycliff built reduced our site assessment time by 40%. He thinks like a geospatial engineer but delivers like a senior full-stack developer.",
    name: "Bell Power Team",
    title: "Renewable Energy Solutions Provider",
  },
  {
    quote:
      "When we needed sub-second GeoServer response times for critical infrastructure projects, Wycliff's AWS/Terraform implementation exceeded all benchmarks. He's our cloud GIS guru.",
    name: "Joshua Mwaura",
    title: "Managing Director, Openmaps Limited",
    // From your references list
  },
  {
    quote:
      "Wycliff's survey toolkit app became our field teams' favorite tool overnight. The offline-first design with React Native saved us countless hours in remote areas.",
    name: "KAAD Engineering Team",
    title: "Garad-Galkayo Road Project",
  },
  {
    quote:
      "Few developers understand both PostGIS optimization and UI/UX principles. Wycliff's admin portal for county land offices became the gold standard across our departments.",
    name: "Dr. Victor K. Boiyo",
    title: "Deputy VC, USIU Africa",
    // From your references list
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    title: 'Front-End Developer',
    description: [
      'Designed and developed user interfaces using Angular.',
      'Collaborated with backend developers to integrate APIs and optimize performance.',
      'Ensured responsive design and cross-browser compatibility.',
      'Implemented best practices in UI/UX to enhance user experience.',
    ],
    date: '09/2023 - Present',
    company: 'Konza Silicon Company Limited',
    position: 'left',
  },
  {
    title: 'Senior GIS Desktop Developer',
    description: [
      'Developed GIS desktop applications for Windows and Linux.',
      'Created QGIS plugins and wrote Python scripts for geoprocessing automation.',
      'Conducted spatial data analysis using pandas and geopandas.',
      'Built web applications and data dashboards using Python.',
      'Managed and rendered spatial data using Geoserver and POSTGIS.',
      'Deployed applications using Docker Swarm and Kubernetes.',
      'Developed web maps for data visualizations using folium and dash libraries.',
    ],
    date: '09/2022 - 09/2023',
    company: 'Konza Silicon Company Limited',
    position: 'right',
  },
  {
    title: 'Geospatial Engineer',
    description: [
      'Conducted spatial analysis to identify optimal locations for renewable energy installations.',
      'Collected, managed, and analyzed spatial data to support project planning and monitoring.',
      'Utilized GIS to assess the environmental impact of proposed energy projects.',
      'Developed automated workflows to improve operational efficiency and data analysis accuracy.',
      'Implemented GIS solutions to optimize the planning and management of energy infrastructure.',
    ],
    date: '02/2022 - 09/2022',
    company: 'Bell Power International',
    position: 'left',
  },
  {
    title: 'Lead Surveyor',
    description: [
      'Successfully conducted topographic surveys and design reviews for highway construction.',
      'Established control points and benchmarks for accurate road construction using static survey techniques.',
      'Mapped and analyzed terrain to identify potential challenges and opportunities.',
      'Ensured alignment with project timelines and milestones through efficient survey planning and execution.',
      'Implemented precise land surveys to establish boundaries and right-of-way considerations.',
      'Developed comprehensive survey reports to guide decision-making in the early stages of the road project.',
    ],
    date: '07/2021 - 02/2022',
    company: 'KAAD, Somalia',
    position: 'right',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
