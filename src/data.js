const items = [
    {
        id: 1,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item1.svg",
        avatar: "../assets/avatar1.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "marketing"
    },
    {
        id: 2,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item2.svg",
        avatar: "../assets/avatar2.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "design"
    },
    {
        id: 3,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item3.svg",
        avatar: "../assets/avatar3.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "marketing"
    },
    {
        id: 4,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item4.svg",
        avatar: "../assets/avatar4.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "design"
    },
    {
        id: 5,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item5.svg",
        avatar: "../assets/avatar5.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "marketing"
    },
    {
        id: 6,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item6.svg",
        avatar: "../assets/avatar6.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "self_development"
    },
    {
        id: 7,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item7.svg",
        avatar: "../assets/avata7.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "business"
    },
    {
        id: 8,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item8.svg",
        avatar: "../assets/avatar8.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "self_development"
    },
    {
        id: 9,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item9.svg",
        avatar: "../assets/avatar9.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "business"
    },
];

const tabs = [
    {
        key:"all",
        name:"Semua Kelas"
    },
    {
        key:"marketing",
        name:"Pemasaran"
    }, 
    {
        key:"design",
        name:"Desain"
    }, 
    {
        key:"self_development",
        name:"Pengembangan Diri"
    }, 
    {
        key:"business",
        name:"Bisnis"
    }
];

export const getItem = (params) => {
    if(params !== "all"){
        return items.filter(item => item.type === params);
    } else {
        return items;
    }
}

export const getTabs = () => {
    return tabs;
}