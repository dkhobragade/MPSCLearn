import { CollapseProps } from "antd";

export const journeySteps = [
    {
      id: 1,
      title: "Initial Assessment",
      description:
        "Begin with a comprehensive evaluation of your current preparation level, strengths, and areas for improvement.",
      icon: "faClipboardCheck",
      color: "bg-blue-500",
      point: "high",
    },
    {
      id: 2,
      title: "Strategy Development",
      description:
        "Create a personalized study plan tailored to your learning style, available time, and exam goals.",
      icon: "faChess",
      color: "bg-purple-500",
      point: "high",
    },
    {
      id: 3,
      title: "Resource Optimization",
      description:
        "Get guidance on the most effective study materials and resources to maximize your learning efficiency.",
      icon: "faBookOpen",
      color: "bg-green-500",
      point: "medium",
    },
    {
      id: 4,
      title: "Regular Progress Tracking",
      description:
        "Monitor your improvement with periodic assessments and adjust your strategy as needed.",
      icon: "faChartLine",
      color: "bg-amber-500",
      point: "low",
    },
    {
      id: 5,
      title: "Mock Tests & Analysis",
      description:
        "Practice with simulated exam conditions and receive detailed performance analysis.",
      icon: "faTasks",
      color: "bg-red-500",
      point: "high",
    },
    {
      id: 6,
      title: "Interview Preparation",
      description:
        "Comprehensive guidance for the personality test and interview stages with mock sessions.",
      icon: "faUserTie",
      color: "bg-indigo-500",
      point: "high",
    },
  ];



  export const packages=[
     {
            id: 1,
            title: "Basic Counselling",
            duration: "30 minutes",
            price: "₹999",
            features: [
                "One-on-one session with MPSC expert",
                "Personalized study plan",
                "Strategy discussion",
                "Basic doubt clearing",
            ],
            color: "bg-blue-50",
            accent: "bg-blue-500",
        },
        {
            id: 2,
            title: "Standard Counselling",
            duration: "60 minutes",
            price: "₹1,799",
            features: [
                "Extended one-on-one session",
                "Comprehensive study plan",
                "Mock interview preparation",
                "Previous year paper analysis",
                "Subject-specific guidance",
            ],
            color: "bg-purple-50",
            accent: "bg-purple-500",
            popular: true,
        },
        {
            id: 3,
            title: "Premium Counselling",
            duration: "90 minutes",
            price: "₹2,499",
            features: [
                "In-depth counselling session",
                "Advanced strategy planning",
                "Personalized resource recommendations",
                "Strength & weakness analysis",
                "Follow-up email support",
                "Priority booking for next session",
            ],
            color: "bg-amber-50",
            accent: "bg-amber-500",
        },
]



export const timeSlots = [
    "09:00 AM - 09:30 AM",
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "12:00 PM - 12:30 PM",
    "02:00 PM - 02:30 PM",
    "03:00 PM - 03:30 PM",
    "04:00 PM - 04:30 PM",
    "05:00 PM - 05:30 PM",
  ];

export const faqs:CollapseProps['items'] = [
    {
      key:'1',
      label: "How do I prepare for my counselling session?",
      children:
        "To make the most of your session, prepare a list of specific labels or topics you'd like to discuss. Have your current study materials and previous attempt details (if any) ready. Think about your strengths, weaknesses, and specific areas where you need guidance.",
    },
    {
       key:'2',
       label: "Can I reschedule my booked session?",
       children:
        "Yes, you can reschedule your session up to 24 hours before the scheduled time without any additional charges. Rescheduling requests made less than 24 hours before the session may incur a fee of 25% of the session cost.",
    },
    {
      key:'3',
      label: "How are the mentors selected?",
      children:
        "All our mentors are carefully selected based on their expertise in MPSC examination, teaching experience, and success record. They undergo a rigorous vetting process and are regularly evaluated based on student feedback.",
    },
    {
      key:'4',
      label: "Will I get a recording of my session?",
      children:
        "Yes, upon request, we can provide a recording of your counselling session for future reference. This must be requested at the time of booking.",
    },
    {
      key:'5',
      label: "What happens if I'm not satisfied with my session?",
      children:
        "We have a satisfaction guarantee policy. If you're not satisfied with your counselling session, you can provide detailed feedback, and we'll offer you another session with a different mentor at a 50% discount.",
    },
  ];


export const courseVideos = [
        {
            id: 1,
            title: "Introduction to Indian Polity",
            description:
                "Learn the fundamental concepts of Indian Constitution and Democracy",
            duration: "45:20",
            instructor: "Dr. Rajesh Kumar",
            thumbnail:
                "https://readdy.ai/api/search-image?query=Professional%20educational%20setup%20with%20modern%20digital%20screen%20showing%20Indian%20constitution%20and%20democracy%20concepts%2C%20clean%20minimal%20background%20with%20warm%20lighting&width=400&height=225&seq=v1&orientation=landscape",
            isLocked: false,
            progress: 100,
        },
        {
            id: 2,
            title: "Understanding Maharashtra Geography",
            description:
                "Comprehensive overview of Maharashtra's geographical features and divisions",
            duration: "52:15",
            instructor: "Prof. Priya Desai",
            thumbnail:
                "https://readdy.ai/api/search-image?query=Professional%20classroom%20setup%20with%20digital%20display%20showing%20Maharashtra%20map%20and%20geographical%20features%2C%20modern%20educational%20environment%20with%20clean%20background&width=400&height=225&seq=v2&orientation=landscape",
            isLocked: true,
            progress: 0,
        },
        {
            id: 3,
            title: "Economic Development & Planning",
            description: "Analysis of economic policies and development strategies",
            duration: "48:30",
            instructor: "Dr. Amit Sharma",
            thumbnail:
                "https://readdy.ai/api/search-image?query=Modern%20lecture%20hall%20with%20professional%20presentation%20of%20economic%20charts%20and%20graphs%2C%20clean%20educational%20environment%20with%20subtle%20lighting&width=400&height=225&seq=v3&orientation=landscape",
            isLocked: true,
            progress: 0,
        },
        {
            id: 4,
            title: "Environmental Studies",
            description: "Key concepts in environmental science and ecology",
            duration: "55:45",
            instructor: "Dr. Neha Patel",
            thumbnail:
                "https://readdy.ai/api/search-image?query=Professional%20educational%20setup%20showing%20environmental%20science%20concepts%20on%20digital%20display%2C%20modern%20classroom%20with%20clean%20minimal%20background&width=400&height=225&seq=v4&orientation=landscape",
            isLocked: true,
            progress: 0,
        },
    ];